import { NextResponse } from 'next/server';
import { clearPortalSession } from '@/lib/portal-session';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.headers.set('Set-Cookie', clearPortalSession());
  return response;
}
