import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SelectedWorks } from './selected-works';

describe('SelectedWorks', () => {
  it('renders the section heading', () => {
    render(<SelectedWorks />);
    expect(screen.getByText('Selected Works')).toBeInTheDocument();
  });

  it('renders all 3 case study titles', () => {
    render(<SelectedWorks />);
    expect(screen.getByText('Aura Global Banking')).toBeInTheDocument();
    expect(screen.getByText('Vortex Data Engine')).toBeInTheDocument();
    expect(screen.getByText('Prism Design System')).toBeInTheDocument();
  });

  it('renders case study images as decorative', () => {
    render(<SelectedWorks />);
    const images = screen.getAllByRole('presentation');
    expect(images).toHaveLength(3);
  });

  it('has aria-labelledby on the section', () => {
    render(<SelectedWorks />);
    const section = document.getElementById('works');
    expect(section).toHaveAttribute('aria-labelledby', 'works-heading');
  });
});
