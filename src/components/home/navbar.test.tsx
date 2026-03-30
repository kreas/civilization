import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('CIVILIZATION')).toBeInTheDocument();
  });

  it('renders nav links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /get a quote/i })).toBeInTheDocument();
  });
});
