import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusTimeline } from './status-timeline';
import type { Milestone } from './dashboard';

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'Discovery kickoff',
    description: 'Initial stakeholder interviews',
    status: 'complete',
    githubIssueUrl: 'https://github.com/org/repo/issues/1',
    branchName: 'discovery/kickoff',
    vercelPreviewUrl: null,
    date: '2026-02-15',
  },
  {
    id: 2,
    title: 'Core API',
    description: 'Building the API layer',
    status: 'in-progress',
    githubIssueUrl: 'https://github.com/org/repo/issues/18',
    branchName: 'feat/core-api',
    vercelPreviewUrl: 'https://preview.vercel.app',
    date: '2026-04-01',
  },
  {
    id: 3,
    title: 'Production deploy',
    description: null,
    status: 'pending',
    githubIssueUrl: null,
    branchName: null,
    vercelPreviewUrl: null,
    date: '2026-06-15',
  },
];

describe('StatusTimeline', () => {
  it('renders all milestone titles', () => {
    render(<StatusTimeline milestones={milestones} />);
    expect(screen.getByText('Discovery kickoff')).toBeInTheDocument();
    expect(screen.getByText('Core API')).toBeInTheDocument();
    expect(screen.getByText('Production deploy')).toBeInTheDocument();
  });

  it('renders descriptions when present', () => {
    render(<StatusTimeline milestones={milestones} />);
    expect(
      screen.getByText('Initial stakeholder interviews')
    ).toBeInTheDocument();
    expect(screen.getByText('Building the API layer')).toBeInTheDocument();
  });

  it('renders GitHub issue links', () => {
    render(<StatusTimeline milestones={milestones} />);
    const githubLinks = screen.getAllByText('GitHub Issue');
    expect(githubLinks).toHaveLength(2);
    expect(githubLinks[0].closest('a')).toHaveAttribute(
      'href',
      'https://github.com/org/repo/issues/1'
    );
  });

  it('renders branch names', () => {
    render(<StatusTimeline milestones={milestones} />);
    expect(screen.getByText('discovery/kickoff')).toBeInTheDocument();
    expect(screen.getByText('feat/core-api')).toBeInTheDocument();
  });

  it('renders preview links when available', () => {
    render(<StatusTimeline milestones={milestones} />);
    const previewLinks = screen.getAllByText('Preview');
    expect(previewLinks).toHaveLength(1);
    expect(previewLinks[0].closest('a')).toHaveAttribute(
      'href',
      'https://preview.vercel.app'
    );
  });

  it('returns null for empty milestones', () => {
    const { container } = render(<StatusTimeline milestones={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
