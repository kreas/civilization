import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Services } from './services';

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />);
    expect(screen.getByText('Core Services')).toBeInTheDocument();
  });

  it('renders all 4 service titles', () => {
    render(<Services />);
    expect(screen.getByText('Web Systems')).toBeInTheDocument();
    expect(screen.getByText('Mobile Interfaces')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Strategy')).toBeInTheDocument();
    expect(screen.getByText('Cloud Orchestration')).toBeInTheDocument();
  });

  it('renders service numbers', () => {
    render(<Services />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders explore links for each service', () => {
    render(<Services />);
    const exploreLinks = screen.getAllByText('Explore');
    expect(exploreLinks).toHaveLength(4);
  });
});
