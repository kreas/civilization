'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PortalHeader } from '@/components/portal/portal-header';
import { ProjectOverview } from '@/components/portal/project-overview';
import { DocumentsSection } from '@/components/portal/documents-section';
import { StatusTimeline } from '@/components/portal/status-timeline';

export interface Member {
  id: number;
  name: string;
  email: string;
  company: string;
}

export interface Document {
  id: number;
  type: 'prd' | 'srd' | 'contract' | 'other';
  name: string;
  url: string;
}

export interface Milestone {
  id: number;
  title: string;
  description: string | null;
  status: 'pending' | 'in-progress' | 'complete';
  githubIssueUrl: string | null;
  branchName: string | null;
  vercelPreviewUrl: string | null;
  date: string | null;
}

export interface Project {
  id: number;
  name: string;
  status: 'discovery' | 'build' | 'launch' | 'complete';
  startDate: string | null;
  estimatedEndDate: string | null;
  documents: Document[];
  milestones: Milestone[];
}

export interface PortalData {
  member: Member;
  projects: Project[];
}

export function Dashboard() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery<PortalData>({
    queryKey: ['portal', 'me'],
    queryFn: async () => {
      const res = await fetch('/api/portal/me');
      if (!res.ok) throw new Error('Unauthorized');
      return res.json();
    },
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      router.push('/portal');
    }
  }, [isError, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-surface flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-brand-primary-container border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!data) return null;

  const project = data.projects[0];

  return (
    <div className="min-h-screen bg-brand-surface">
      <PortalHeader member={data.member} />
      <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {project && (
          <>
            <ProjectOverview project={project} />
            <DocumentsSection documents={project.documents} />
            <StatusTimeline milestones={project.milestones} />
          </>
        )}
      </main>
    </div>
  );
}
