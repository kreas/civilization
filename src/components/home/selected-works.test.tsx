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

  it('renders case study images', () => {
    render(<SelectedWorks />);
    expect(screen.getByAltText('Cybersecurity interface')).toHaveAttribute(
      'src',
      '/images/home/case-study-1.jpg'
    );
    expect(screen.getByAltText('Data visualization')).toHaveAttribute(
      'src',
      '/images/home/case-study-2.jpg'
    );
    expect(screen.getByAltText('Abstract art')).toHaveAttribute(
      'src',
      '/images/home/case-study-3.jpg'
    );
  });
});
