import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DocumentsSection } from './documents-section';
import type { Document } from './dashboard';

const documents: Document[] = [
  { id: 1, type: 'prd', name: 'Product Requirements v2.1', url: '/docs/prd.pdf' },
  { id: 2, type: 'srd', name: 'System Requirements v1.0', url: '/docs/srd.pdf' },
  { id: 3, type: 'contract', name: 'Master Services Agreement', url: '/docs/msa.pdf' },
];

describe('DocumentsSection', () => {
  it('renders all documents', () => {
    render(<DocumentsSection documents={documents} />);
    expect(screen.getByText('Product Requirements v2.1')).toBeInTheDocument();
    expect(screen.getByText('System Requirements v1.0')).toBeInTheDocument();
    expect(screen.getByText('Master Services Agreement')).toBeInTheDocument();
  });

  it('renders document type labels', () => {
    render(<DocumentsSection documents={documents} />);
    expect(screen.getByText('Product Requirements')).toBeInTheDocument();
    expect(screen.getByText('System Requirements')).toBeInTheDocument();
    expect(screen.getByText('Contract')).toBeInTheDocument();
  });

  it('renders links with correct hrefs', () => {
    render(<DocumentsSection documents={documents} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/docs/prd.pdf');
    expect(links[1]).toHaveAttribute('href', '/docs/srd.pdf');
    expect(links[2]).toHaveAttribute('href', '/docs/msa.pdf');
  });

  it('returns null for empty documents', () => {
    const { container } = render(<DocumentsSection documents={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
