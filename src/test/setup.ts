import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
});

// jsdom does not implement IntersectionObserver — provide a no-op stub so that
// components using useInView can render without throwing.
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  const IntersectionObserverStub = vi.fn(function (
    this: IntersectionObserver,
    _callback: IntersectionObserverCallback,
  ) {
    this.observe = vi.fn();
    this.unobserve = vi.fn();
    this.disconnect = vi.fn();
    this.takeRecords = vi.fn(() => []);
    this.root = null;
    this.rootMargin = '';
    this.thresholds = [];
  }) as unknown as typeof IntersectionObserver;
  vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);
}
