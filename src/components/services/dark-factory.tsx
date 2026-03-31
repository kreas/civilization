'use client';

import { AnimateIn } from '@/components/home/animate-in';

const stats = [
  {
    value: '50\u201370%',
    label: 'Faster Delivery',
    description: 'compared to traditional dev shops',
  },
  {
    value: '30\u201350%',
    label: 'Lower Cost',
    description: 'by replacing headcount with AI agent capacity',
  },
  {
    value: '100%',
    label: 'Production-Grade',
    description: 'enforced by automated testing and human oversight',
  },
];

export function DarkFactory() {
  return (
    <section className="relative bg-brand-on-background text-white overflow-hidden py-16 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-5">
            <AnimateIn delay={0}>
              <span className="text-brand-primary-fixed font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
                How We Build
              </span>
              <h2 className="font-headline text-4xl md:text-5xl tracking-brand-headline leading-[0.95] mb-6">
                Why we&apos;re faster.
              </h2>
              <div className="h-1 w-20 bg-brand-primary-container mb-8" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-brand-surface-variant text-lg leading-relaxed">
                Traditional software development is slow because humans do
                everything. We separated the work. Our humans handle Discovery,
                architecture, and strategic oversight. Our AI agents handle
                implementation &mdash; writing code, running tests, iterating on
                builds around the clock. We call it the Dark Factory.
              </p>
            </AnimateIn>
          </div>

          {/* Right column — stats */}
          <div className="md:col-span-7 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {stats.map((stat, i) => (
                <AnimateIn key={stat.label} delay={i * 100}>
                  <div className="border-t border-white/20 pt-6">
                    <span className="block text-4xl font-headline mb-2">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-brand-primary-fixed block mb-2">
                      {stat.label}
                    </span>
                    <p className="text-sm text-brand-surface-variant/60">
                      {stat.description}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary-container/10 -skew-x-12 translate-x-1/2" />
    </section>
  );
}
