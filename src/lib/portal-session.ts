const COOKIE_NAME = 'portal_session';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function setPortalSession(memberId: number): string {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return `${COOKIE_NAME}=${memberId}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${MAX_AGE}${secure}`;
}

export function getPortalSession(cookieHeader: string | null): number | null {
  if (!cookieHeader) return null;
  const match = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const value = parseInt(match.split('=')[1], 10);
  return isNaN(value) ? null : value;
}

export function clearPortalSession(): string {
  return `${COOKIE_NAME}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`;
}
