import { NextResponse } from 'next/server';
import { z } from 'zod/v4';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { members } from '@/db/schema';
import { setPortalSession } from '@/lib/portal-session';

const schema = z.object({
  accessCode: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const member = await db
    .select()
    .from(members)
    .where(eq(members.accessCode, parsed.data.accessCode))
    .get();

  if (!member) {
    return NextResponse.json({ error: 'Invalid access code' }, { status: 401 });
  }

  const response = NextResponse.json({
    member: {
      id: member.id,
      name: member.name,
      email: member.email,
      company: member.company,
    },
  });

  response.headers.set('Set-Cookie', setPortalSession(member.id));
  return response;
}
