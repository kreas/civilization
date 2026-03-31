import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AnimateIn } from './animate-in';

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(function (
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
    }),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('AnimateIn', () => {
  it('renders children', () => {
    render(
      <AnimateIn>
        <span>Hello world</span>
      </AnimateIn>,
    );
    expect(screen.getByText('Hello world')).toBeDefined();
  });

  it('starts with opacity-0 class when not in view', () => {
    const { container } = render(
      <AnimateIn>
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('opacity-0');
  });

  it('applies up direction translate class by default', () => {
    const { container } = render(
      <AnimateIn>
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('translate-y-6');
  });

  it('applies correct translate for left direction', () => {
    const { container } = render(
      <AnimateIn direction="left">
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('translate-x-6');
  });

  it('applies correct translate for right direction', () => {
    const { container } = render(
      <AnimateIn direction="right">
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('-translate-x-6');
  });

  it('applies correct translate for down direction', () => {
    const { container } = render(
      <AnimateIn direction="down">
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('-translate-y-6');
  });

  it('applies transition classes', () => {
    const { container } = render(
      <AnimateIn>
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('transition-all');
    expect(wrapper.className).toContain('duration-700');
    expect(wrapper.className).toContain('ease-out');
  });

  it('applies transitionDelay style when delay is provided', () => {
    const { container } = render(
      <AnimateIn delay={200}>
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.transitionDelay).toBe('200ms');
  });

  it('does not apply transitionDelay style when delay is 0', () => {
    const { container } = render(
      <AnimateIn delay={0}>
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.transitionDelay).toBe('');
  });

  it('applies custom className', () => {
    const { container } = render(
      <AnimateIn className="my-custom-class">
        <span>content</span>
      </AnimateIn>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('my-custom-class');
  });
});
