'use client';

import { ExternalLink, GitBranch, Globe } from 'lucide-react';
import { AnimateIn } from '@/components/home/animate-in';
import type { Milestone } from '@/components/portal/dashboard';

interface StatusTimelineProps {
  milestones: Milestone[];
}

const statusDot = {
  complete: 'bg-green-500',
  'in-progress': 'bg-brand-primary-container animate-pulse',
  pending: 'bg-brand-outline-variant',
} as const;

function formatDate(date: string | null): string {
  if (!date) return '';
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function StatusTimeline({ milestones }: StatusTimelineProps) {
  if (milestones.length === 0) return null;

  return (
    <div>
      <AnimateIn delay={0}>
        <span className="text-xs font-headline uppercase tracking-[0.2em] text-brand-primary mb-8 block">
          Project Timeline
        </span>
      </AnimateIn>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brand-outline-variant/40" />

        <div className="space-y-8">
          {milestones.map((milestone, i) => (
            <AnimateIn key={milestone.id} delay={i * 60}>
              <div className="relative pl-10">
                {/* Status dot */}
                <div
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-white ${statusDot[milestone.status]}`}
                />

                <div
                  className={`bg-white rounded-xl border p-6 ${
                    milestone.status === 'in-progress'
                      ? 'border-brand-primary-container/40 shadow-sm'
                      : 'border-brand-outline-variant/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-headline text-base">
                      {milestone.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {milestone.date && (
                        <span className="text-xs text-brand-on-surface-variant">
                          {formatDate(milestone.date)}
                        </span>
                      )}
                      <span
                        className={`text-[0.6rem] font-headline uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          milestone.status === 'complete'
                            ? 'bg-green-50 text-green-700'
                            : milestone.status === 'in-progress'
                              ? 'bg-brand-primary-fixed text-brand-primary'
                              : 'bg-brand-surface-container text-brand-on-surface-variant'
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>
                  </div>

                  {milestone.description && (
                    <p className="text-sm text-brand-on-surface-variant mb-3">
                      {milestone.description}
                    </p>
                  )}

                  {(milestone.githubIssueUrl ||
                    milestone.branchName ||
                    milestone.vercelPreviewUrl) && (
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-brand-outline-variant/20">
                      {milestone.githubIssueUrl && (
                        <a
                          href={milestone.githubIssueUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-primary-container transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          GitHub Issue
                        </a>
                      )}
                      {milestone.branchName && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-brand-on-surface-variant font-mono bg-brand-surface-container-low px-2 py-0.5 rounded">
                          <GitBranch className="w-3 h-3" />
                          {milestone.branchName}
                        </span>
                      )}
                      {milestone.vercelPreviewUrl && (
                        <a
                          href={milestone.vercelPreviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-primary-container transition-colors"
                        >
                          <Globe className="w-3 h-3" />
                          Preview
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
