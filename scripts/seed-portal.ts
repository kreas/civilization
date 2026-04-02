import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { members, projects, documents, milestones } from '../src/db/schema';

const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});

async function seed() {
  console.log('Seeding portal data...');

  // Insert member
  const [member] = await db
    .insert(members)
    .values({
      name: 'Jane Torres',
      email: 'jane@acme.co',
      company: 'Acme Corp',
      accessCode: 'ACME-2026-PORTAL',
    })
    .returning();

  console.log(`Created member: ${member.name} (${member.accessCode})`);

  // Insert project
  const [project] = await db
    .insert(projects)
    .values({
      memberId: member.id,
      name: 'Warehouse Management System',
      status: 'build',
      startDate: '2026-02-15',
      estimatedEndDate: '2026-06-30',
    })
    .returning();

  console.log(`Created project: ${project.name}`);

  // Insert documents
  await db.insert(documents).values([
    {
      projectId: project.id,
      type: 'prd',
      name: 'Product Requirements Document v2.1',
      url: '/docs/acme-prd-v2.1.pdf',
    },
    {
      projectId: project.id,
      type: 'srd',
      name: 'System Requirements Document v1.0',
      url: '/docs/acme-srd-v1.0.pdf',
    },
    {
      projectId: project.id,
      type: 'contract',
      name: 'Master Services Agreement',
      url: '/docs/acme-msa-2026.pdf',
    },
  ]);

  console.log('Created 3 documents');

  // Insert milestones
  await db.insert(milestones).values([
    {
      projectId: project.id,
      title: 'Discovery kickoff',
      description:
        'Initial stakeholder interviews, system audit, and workflow mapping.',
      status: 'complete',
      githubIssueUrl: 'https://github.com/civtech/acme-wms/issues/1',
      branchName: 'discovery/kickoff',
      date: '2026-02-15',
    },
    {
      projectId: project.id,
      title: 'Technical audit complete',
      description:
        'Full review of legacy warehouse system, API surface, and data model.',
      status: 'complete',
      githubIssueUrl: 'https://github.com/civtech/acme-wms/issues/5',
      branchName: 'discovery/audit',
      date: '2026-03-01',
    },
    {
      projectId: project.id,
      title: 'Architecture approved',
      description:
        'System architecture signed off - event-driven microservices with AI routing layer.',
      status: 'complete',
      githubIssueUrl: 'https://github.com/civtech/acme-wms/issues/12',
      branchName: 'main',
      date: '2026-03-15',
    },
    {
      projectId: project.id,
      title: 'Core API and data layer',
      description:
        'Building the foundational API endpoints, database schema, and integration connectors.',
      status: 'in-progress',
      githubIssueUrl: 'https://github.com/civtech/acme-wms/issues/18',
      branchName: 'feat/core-api',
      vercelPreviewUrl: 'https://acme-wms-core-api.vercel.app',
      date: '2026-04-01',
    },
    {
      projectId: project.id,
      title: 'AI routing engine',
      description:
        'Intelligent order routing and inventory optimization using ML models.',
      status: 'pending',
      githubIssueUrl: 'https://github.com/civtech/acme-wms/issues/25',
      branchName: 'feat/ai-routing',
      date: '2026-05-01',
    },
    {
      projectId: project.id,
      title: 'UAT and production deploy',
      description:
        'User acceptance testing, performance benchmarks, and production rollout.',
      status: 'pending',
      date: '2026-06-15',
    },
  ]);

  console.log('Created 6 milestones');
  console.log('\nSeed complete! Access code: ACME-2026-PORTAL');
}

seed().catch(console.error);
