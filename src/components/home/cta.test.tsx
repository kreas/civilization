import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CTA } from './cta';

describe('CTA', () => {
  it('renders the headline', () => {
    render(<CTA />);
    expect(screen.getByText(/Ready to build something/i)).toBeInTheDocument();
    expect(screen.getByText(/meaningful\?/i)).toBeInTheDocument();
  });

  it('renders both action buttons', () => {
    render(<CTA />);
    expect(screen.getByText('Start a Project')).toBeInTheDocument();
    expect(screen.getByText('View Our Process')).toBeInTheDocument();
  });

  it('renders stats', () => {
    render(<CTA />);
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
  });

  it('renders the precision engineering card', () => {
    render(<CTA />);
    expect(screen.getByText('Precision Engineering')).toBeInTheDocument();
  });
});
