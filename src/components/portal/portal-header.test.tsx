import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PortalHeader } from './portal-header';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

const member = { id: 1, name: 'Jane Torres', email: 'jane@acme.co', company: 'Acme Corp' };

function renderWithQuery(ui: React.ReactElement) {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe('PortalHeader', () => {
  it('displays member name and company', () => {
    renderWithQuery(<PortalHeader member={member} />);
    expect(screen.getByText('Jane Torres')).toBeInTheDocument();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
  });

  it('renders the sign out button', () => {
    renderWithQuery(<PortalHeader member={member} />);
    expect(screen.getByRole('button', { name: 'Sign Out' })).toBeInTheDocument();
  });

  it('renders the logo', () => {
    renderWithQuery(<PortalHeader member={member} />);
    expect(screen.getByAltText('Civilization Tech')).toBeInTheDocument();
  });
});
