'use client';

import { AnimateIn } from '@/components/home/animate-in';

const deliverables = [
  {
    number: '01',
    title: 'Technical Audit',
    description:
      'A thorough review of your current systems, architecture, and data. We identify what\u2019s working, what\u2019s fragile, and what\u2019s holding you back.',
  },
  {
    number: '02',
    title: 'Workflow Mapping',
    description:
      'We document how your business actually operates \u2014 not how the org chart says it should. This is where the real opportunities surface.',
  },
  {
    number: '03',
    title: 'Risk Assessment',
    description:
      'Integration complexity, data migration challenges, team capacity constraints. We surface the risks upfront so there are no surprises later.',
  },
  {
    number: '04',
    title: 'Strategic Roadmap',
    description:
      'A detailed plan with prioritized phases, timelines, cost estimates, and success criteria. This becomes the blueprint for everything that follows.',
  },
];

export function ServiceDiscovery() {
  return (
    <section className="bg-brand-surface-container-low py-16 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-5">
            <AnimateIn delay={0}>
              <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
                The Starting Point
              </span>
              <h2 className="font-headline text-4xl md:text-5xl tracking-brand-headline leading-[0.95] mb-6">
                Discovery first. Always.
              </h2>
              <div className="h-1 w-20 bg-brand-primary-container mb-8" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-brand-on-surface-variant text-lg leading-relaxed mb-8">
                We don&apos;t start with code. We start with questions.
                What&apos;s broken? What&apos;s manual? Where does AI actually
                create value &mdash; and where is it just hype? Discovery is a
                4&ndash;6 week engagement where our strategists audit your
                systems, map your workflows, identify risks, and define what
                success looks like.
              </p>
              <div className="p-6 border-l-2 border-brand-primary bg-brand-surface/40">
                <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                  Discovery is included in every build engagement. It&apos;s
                  also available as a standalone service for teams that need
                  strategic clarity before committing to a full project.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Right column — deliverables */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {deliverables.map((item, i) => (
              <AnimateIn key={item.number} delay={i * 100}>
                <div className="group">
                  <span
                    aria-hidden="true"
                    className="text-brand-primary-container font-headline text-5xl font-light block mb-6 opacity-30 group-hover:opacity-100 transition-opacity"
                  >
                    {item.number}
                  </span>
                  <h3 className="font-headline text-xl mb-3">{item.title}</h3>
                  <p className="text-brand-on-surface-variant leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Standalone Discovery stats */}
        <AnimateIn delay={200}>
          <div className="mt-20 bg-brand-surface-container-highest p-8 md:p-12 rounded-lg">
            <h3 className="font-headline text-xl mb-8">Standalone Discovery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary">
                  DURATION
                </span>
                <p className="font-bold">4&ndash;6 weeks</p>
              </div>
              <div className="space-y-2">
                <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary">
                  DELIVERABLE
                </span>
                <p className="font-bold text-sm leading-relaxed">
                  Technical roadmap, business case, risk assessment, and
                  implementation plan
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary">
                  IDEAL FOR
                </span>
                <p className="font-bold text-sm leading-relaxed">
                  Companies that need strategic clarity before committing to a
                  full build
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
