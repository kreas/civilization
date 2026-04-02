import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Dashboard } from './dashboard';

const pushMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
}));

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

const mockData = {
  member: { id: 1, name: 'Jane Torres', email: 'jane@acme.co', company: 'Acme Corp' },
  projects: [
    {
      id: 1,
      name: 'Warehouse Management System',
      status: 'build',
      startDate: '2026-02-15',
      estimatedEndDate: '2026-06-30',
      documents: [
        { id: 1, type: 'prd', name: 'PRD v2.1', url: '/docs/prd.pdf' },
      ],
      milestones: [
        {
          id: 1,
          title: 'Discovery kickoff',
          description: 'Initial interviews',
          status: 'complete',
          githubIssueUrl: null,
          branchName: null,
          vercelPreviewUrl: null,
          date: '2026-02-15',
        },
      ],
    },
  ],
};

function renderWithQuery(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe('Dashboard', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    pushMock.mockClear();
  });

  it('shows loading state initially', () => {
    vi.spyOn(globalThis, 'fetch').mockReturnValue(new Promise(() => {}));
    renderWithQuery(<Dashboard />);
    expect(document.querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('renders dashboard content after loading', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(mockData), { status: 200 })
    );

    renderWithQuery(<Dashboard />);

    await waitFor(() => {
      expect(
        screen.getByText('Warehouse Management System')
      ).toBeInTheDocument();
    });
  });

  it('redirects to portal on auth error', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
      })
    );

    renderWithQuery(<Dashboard />);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/portal');
    });
  });
});
