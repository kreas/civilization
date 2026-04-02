import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PortalLogin } from './portal-login';

const pushMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
}));

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

function renderWithQuery(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: { mutations: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe('PortalLogin', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    pushMock.mockClear();
  });

  it('renders the login form', () => {
    renderWithQuery(<PortalLogin />);
    expect(screen.getByText('Client Portal')).toBeInTheDocument();
    expect(screen.getByLabelText('Access Code')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Access Dashboard' })
    ).toBeInTheDocument();
  });

  it('disables submit when input is empty', () => {
    renderWithQuery(<PortalLogin />);
    expect(
      screen.getByRole('button', { name: 'Access Dashboard' })
    ).toBeDisabled();
  });

  it('shows error message on invalid code', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'Invalid access code' }), {
        status: 401,
      })
    );

    renderWithQuery(<PortalLogin />);
    fireEvent.change(screen.getByLabelText('Access Code'), {
      target: { value: 'WRONG-CODE' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Access Dashboard' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Invalid access code'
      );
    });
  });

  it('redirects to dashboard on success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          member: { id: 1, name: 'Jane', email: 'jane@acme.co', company: 'Acme' },
        }),
        { status: 200 }
      )
    );

    renderWithQuery(<PortalLogin />);
    fireEvent.change(screen.getByLabelText('Access Code'), {
      target: { value: 'ACME-2026-PORTAL' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Access Dashboard' }));

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/portal/dashboard');
    });
  });
});
