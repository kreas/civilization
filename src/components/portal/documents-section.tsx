'use client';

import { FileText, FileCode, FileSignature, File } from 'lucide-react';
import { AnimateIn } from '@/components/home/animate-in';
import type { Document } from '@/components/portal/dashboard';

interface DocumentsSectionProps {
  documents: Document[];
}

const typeConfig = {
  prd: { icon: FileText, label: 'Product Requirements' },
  srd: { icon: FileCode, label: 'System Requirements' },
  contract: { icon: FileSignature, label: 'Contract' },
  other: { icon: File, label: 'Document' },
} as const;

export function DocumentsSection({ documents }: DocumentsSectionProps) {
  if (documents.length === 0) return null;

  return (
    <div>
      <AnimateIn delay={0}>
        <span className="text-xs font-headline uppercase tracking-[0.2em] text-brand-primary mb-6 block">
          Documents
        </span>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, i) => {
          const config = typeConfig[doc.type];
          const Icon = config.icon;

          return (
            <AnimateIn key={doc.id} delay={i * 80}>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white rounded-xl border border-brand-outline-variant/30 p-6 hover:border-brand-primary-container/50 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 w-10 h-10 bg-brand-surface-container-low rounded-lg flex items-center justify-center group-hover:bg-brand-primary-fixed transition-colors">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm text-brand-on-background truncate">
                    {doc.name}
                  </p>
                  <p className="text-xs text-brand-on-surface-variant mt-0.5">
                    {config.label}
                  </p>
                </div>
              </a>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
