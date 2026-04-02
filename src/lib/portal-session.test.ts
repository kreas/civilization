import { describe, it, expect } from 'vitest';
import {
  setPortalSession,
  getPortalSession,
  clearPortalSession,
} from './portal-session';

describe('portal-session', () => {
  describe('setPortalSession', () => {
    it('returns a Set-Cookie string with the member ID', () => {
      const cookie = setPortalSession(42);
      expect(cookie).toContain('portal_session=42');
      expect(cookie).toContain('HttpOnly');
      expect(cookie).toContain('SameSite=Lax');
      expect(cookie).toContain('Path=/');
      expect(cookie).toContain('Max-Age=604800');
    });
  });

  describe('getPortalSession', () => {
    it('returns null for null cookie header', () => {
      expect(getPortalSession(null)).toBeNull();
    });

    it('returns null when cookie is not present', () => {
      expect(getPortalSession('other_cookie=abc')).toBeNull();
    });

    it('extracts the member ID from the cookie header', () => {
      expect(
        getPortalSession('portal_session=42; other=value')
      ).toBe(42);
    });

    it('returns null for non-numeric values', () => {
      expect(getPortalSession('portal_session=abc')).toBeNull();
    });
  });

  describe('clearPortalSession', () => {
    it('returns a Set-Cookie string that expires the cookie', () => {
      const cookie = clearPortalSession();
      expect(cookie).toContain('portal_session=');
      expect(cookie).toContain('Max-Age=0');
    });
  });
});
