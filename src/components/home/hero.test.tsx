import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders the tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/Civilization Tech/i)).toBeInTheDocument();
  });

  it('renders the headline', () => {
    render(<Hero />);
    expect(screen.getByText(/We build software that/i)).toBeInTheDocument();
    expect(screen.getByText(/contributes./i)).toBeInTheDocument();
  });

  it('renders the hero video', () => {
    render(<Hero />);
    const video = document.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/videos/home/hero-video.webm');
    expect(video).toHaveAttribute('autoplay');
    expect(video).toHaveAttribute('loop');
    expect(video!.muted).toBe(true);
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(screen.getByText(/architectural approach to digital infrastructure/i)).toBeInTheDocument();
  });
});
