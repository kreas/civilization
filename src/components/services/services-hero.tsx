'use client';

import { AnimateIn } from '@/components/home/animate-in';

export function ServicesHero() {
  return (
    <section className="px-8 mb-16 sm:mb-32 max-w-screen-2xl mx-auto">
      <div className="max-w-3xl lg:pt-8">
        <AnimateIn delay={0}>
          <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
            What We Do
          </span>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-brand-display text-brand-on-background mb-8">
            Three ways we ship.{' '}
            <span className="text-brand-primary-container">One way we start.</span>
          </h1>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-2xl">
            Every Civilization engagement begins with Discovery — a deep,
            strategic investigation of your systems, workflows, and goals. What
            comes next depends on what we find. We build new products, modernize
            legacy systems, and integrate AI into existing operations. Our AI
            agents handle the implementation. Our humans handle the thinking.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
