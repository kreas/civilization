'use client';

import { AnimateIn } from '@/components/home/animate-in';
import type { Project } from '@/components/portal/dashboard';

interface ProjectOverviewProps {
  project: Project;
}

const statusConfig = {
  discovery: {
    label: 'Discovery',
    bg: 'bg-brand-primary-fixed',
    text: 'text-brand-on-primary-fixed',
  },
  build: {
    label: 'Build',
    bg: 'bg-brand-secondary-container',
    text: 'text-white',
  },
  launch: {
    label: 'Launch',
    bg: 'bg-brand-primary-container',
    text: 'text-white',
  },
  complete: {
    label: 'Complete',
    bg: 'bg-green-100',
    text: 'text-green-800',
  },
} as const;

function formatDate(date: string | null): string {
  if (!date) return '-';
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const status = statusConfig[project.status];

  return (
    <AnimateIn delay={0}>
      <div className="bg-white rounded-2xl border border-brand-outline-variant/30 p-8 md:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-headline uppercase tracking-[0.2em] text-brand-primary mb-2 block">
              Project
            </span>
            <h2 className="font-headline text-2xl md:text-3xl tracking-brand-headline">
              {project.name}
            </h2>
          </div>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-headline uppercase tracking-wider ${status.bg} ${status.text}`}
          >
            {status.label}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <span className="text-[0.65rem] tracking-[0.2em] font-bold text-brand-on-surface-variant/60 uppercase block mb-1">
              Start Date
            </span>
            <p className="font-medium text-brand-on-background">
              {formatDate(project.startDate)}
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] tracking-[0.2em] font-bold text-brand-on-surface-variant/60 uppercase block mb-1">
              Estimated Completion
            </span>
            <p className="font-medium text-brand-on-background">
              {formatDate(project.estimatedEndDate)}
            </p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
