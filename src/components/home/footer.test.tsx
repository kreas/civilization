import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);
    expect(screen.getByText('CIVILIZATION')).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/Civilization Tech/i)).toBeInTheDocument();
  });
});
