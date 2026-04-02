import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { members, projects, documents, milestones } from '@/db/schema';
import { getPortalSession } from '@/lib/portal-session';

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie');
  const memberId = getPortalSession(cookieHeader);

  if (!memberId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const member = await db
    .select()
    .from(members)
    .where(eq(members.id, memberId))
    .get();

  if (!member) {
    return NextResponse.json({ error: 'Member not found' }, { status: 404 });
  }

  const memberProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.memberId, memberId))
    .all();

  const projectsWithDetails = await Promise.all(
    memberProjects.map(async (project) => {
      const projectDocuments = await db
        .select()
        .from(documents)
        .where(eq(documents.projectId, project.id))
        .all();

      const projectMilestones = await db
        .select()
        .from(milestones)
        .where(eq(milestones.projectId, project.id))
        .all();

      return {
        ...project,
        documents: projectDocuments,
        milestones: projectMilestones,
      };
    })
  );

  return NextResponse.json({
    member: {
      id: member.id,
      name: member.name,
      email: member.email,
      company: member.company,
    },
    projects: projectsWithDetails,
  });
}
