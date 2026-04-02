import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectOverview } from './project-overview';
import type { Project } from './dashboard';

const project: Project = {
  id: 1,
  name: 'Warehouse Management System',
  status: 'build',
  startDate: '2026-02-15',
  estimatedEndDate: '2026-06-30',
  documents: [],
  milestones: [],
};

describe('ProjectOverview', () => {
  it('displays the project name', () => {
    render(<ProjectOverview project={project} />);
    expect(
      screen.getByText('Warehouse Management System')
    ).toBeInTheDocument();
  });

  it('displays the status badge', () => {
    render(<ProjectOverview project={project} />);
    expect(screen.getByText('Build')).toBeInTheDocument();
  });

  it('displays formatted dates', () => {
    render(<ProjectOverview project={project} />);
    expect(screen.getByText('Feb 15, 2026')).toBeInTheDocument();
    expect(screen.getByText('Jun 30, 2026')).toBeInTheDocument();
  });
});
