import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

describe('Navbar', () => {
  it('renders the logo link', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /civilization/i })).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the mobile menu button with aria-expanded', () => {
    render(<Navbar />);
    const button = screen.getByRole('button', { name: /open menu/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders the desktop CTA link', () => {
    render(<Navbar />);
    const ctaLinks = screen.getAllByText(/get a quote/i);
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('uses semantic list for nav links', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation', { name: /main/i });
    expect(nav).toBeInTheDocument();
    expect(nav.querySelectorAll('li')).toHaveLength(5);
  });
});
