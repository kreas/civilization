'use client';

import { AnimateIn } from '@/components/home/animate-in';

const capabilities = [
  {
    title: 'Platform migrations',
    description:
      'Moving from legacy stacks (COBOL, VB.NET, on-prem monoliths) to modern cloud-native architectures.',
  },
  {
    title: 'AI-readiness',
    description:
      'Restructuring your data, APIs, and infrastructure so AI can actually plug in and create value.',
  },
  {
    title: 'Incremental modernization',
    description:
      'We don\u2019t rip and replace everything at once. We modernize in phases, so you\u2019re never without a working system.',
  },
];

export function ServiceLegacy() {
  return (
    <section className="bg-brand-surface-container-low py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-5">
            <AnimateIn delay={0}>
              <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
                Legacy Modernization
              </span>
              <h2 className="font-headline text-4xl md:text-5xl tracking-brand-headline leading-[0.95] mb-6">
                Your systems aren&apos;t dead. They&apos;re waiting.
              </h2>
              <div className="h-1 w-20 bg-brand-primary-container mb-8" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                62% of US companies still run on outdated software. The problem
                isn&apos;t that your systems don&apos;t work - it&apos;s
                that they can&apos;t evolve. They can&apos;t integrate AI. They
                can&apos;t scale with your business. We modernize legacy systems
                without shutting down your operations. Your business keeps
                running while we replace the engine underneath.
              </p>
            </AnimateIn>
          </div>

          {/* Right column */}
          <div className="md:col-span-7 space-y-12">
            <div className="space-y-8">
              {capabilities.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 100}>
                  <div className="group flex gap-6 items-start">
                    <div className="h-1 w-8 bg-brand-outline-variant group-hover:bg-brand-primary group-hover:w-12 transition-all duration-500 mt-3 shrink-0" />
                    <div>
                      <h3 className="font-headline text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-brand-on-surface-variant text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={300}>
              <div className="p-8 bg-brand-surface/40 rounded-lg border-l-2 border-brand-primary-container">
                <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary block mb-3">
                  PROOF POINT
                </span>
                <h4 className="font-headline text-xl mb-3">
                  Industrial Software Modernization
                </h4>
                <p className="text-brand-on-surface-variant text-sm leading-relaxed">
                  We took the software that runs an aluminum smelting plant
                  - decades-old, brittle, undocumented - and rebuilt
                  it for AI-driven operational efficiency. The plant never
                  stopped running.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
