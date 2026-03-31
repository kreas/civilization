'use client';

import { AnimateIn } from '@/components/home/animate-in';

const sidebarLinks = [
  { id: 'step-1', number: '01', label: 'DISCOVERY' },
  { id: 'step-2', number: '02', label: 'CONSTRUCTION' },
  { id: 'step-3', number: '03', label: 'OPERATION' },
];

export function ProcessTimeline() {
  return (
    <section className="bg-brand-surface-container-low py-16 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sticky Sidebar Navigation */}
          <div className="hidden md:block md:col-span-3 sticky top-40 h-fit space-y-6">
            <AnimateIn delay={0}>
              <h2 className="font-headline text-4xl tracking-tight mb-4">Our Process</h2>
              <div className="h-1 w-20 bg-brand-primary-container mb-8" />
            </AnimateIn>
            <nav aria-label="Process steps" className="flex flex-col gap-6">
              {sidebarLinks.map((link, i) => (
                <AnimateIn key={link.id} delay={100 + i * 100}>
                  <a
                    href={`#${link.id}`}
                    className={`text-sm font-bold flex items-center gap-4 transition-opacity ${
                      i === 0
                        ? 'text-brand-primary'
                        : 'text-brand-on-surface-variant opacity-40 hover:opacity-100'
                    }`}
                  >
                    <span className="text-xs opacity-40">{link.number}</span>{' '}
                    {link.label}
                  </a>
                </AnimateIn>
              ))}
            </nav>
          </div>

          {/* Main Process Content */}
          <div className="md:col-span-9 space-y-32">
            {/* Step 1: Discovery & Blueprinting */}
            <AnimateIn delay={100}>
              <div className="relative" id="step-1">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="bg-brand-surface-container-lowest p-6 rounded-lg shadow-sm shrink-0">
                    <svg
                      className="w-9 h-9 text-brand-primary-container"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-headline font-semibold tracking-tight">
                      1. Discovery &amp; Blueprinting
                    </h2>
                    <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                      Before a single line of code is committed, we map the
                      entire technical landscape. This is the definition of the
                      &ldquo;blueprint&rdquo; phase where we analyze
                      requirements, identify bottlenecks, and architect for
                      scale.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <div className="p-6 border-l-2 border-brand-primary bg-brand-surface/40">
                        <h4 className="font-bold text-sm mb-2">
                          Technical Mapping
                        </h4>
                        <p className="text-sm text-brand-on-surface-variant">
                          Comprehensive audit of existing stacks and legacy
                          integration points.
                        </p>
                      </div>
                      <div className="p-6 border-l-2 border-brand-primary bg-brand-surface/40">
                        <h4 className="font-bold text-sm mb-2">
                          Requirement Synthesis
                        </h4>
                        <p className="text-sm text-brand-on-surface-variant">
                          Transforming business goals into immutable technical
                          specifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Step 2: Iterative Construction */}
            <AnimateIn delay={150}>
              <div className="relative" id="step-2">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="bg-brand-surface-container-lowest p-6 rounded-lg shadow-sm shrink-0">
                    <svg
                      className="w-9 h-9 text-brand-primary-container"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-headline font-semibold tracking-tight">
                      2. Iterative Construction
                    </h2>
                    <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                      Execution is managed through high-velocity Agile sprints.
                      We utilize advanced CI/CD pipelines to ensure every push is
                      tested, validated, and structurally sound.
                    </p>
                    <div className="bg-brand-surface-container-highest p-8 rounded-lg overflow-hidden relative">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="space-y-3">
                          <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary">
                            SPRINT CYCLE
                          </span>
                          <p className="font-bold">2-Week Intervals</p>
                          <p className="text-xs text-brand-on-surface-variant">
                            Fast feedback loops with tangible outcomes.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary">
                            PIPELINE
                          </span>
                          <p className="font-bold">Automated CI/CD</p>
                          <p className="text-xs text-brand-on-surface-variant">
                            Zero-downtime deployment architecture.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary">
                            QUALITY
                          </span>
                          <p className="font-bold">Unit &amp; E2E Testing</p>
                          <p className="text-xs text-brand-on-surface-variant">
                            85%+ coverage mandates for all modules.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Step 3: Launch & Operation */}
            <AnimateIn delay={200}>
              <div className="relative" id="step-3">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="bg-brand-surface-container-lowest p-6 rounded-lg shadow-sm shrink-0">
                    <svg
                      className="w-9 h-9 text-brand-primary-container"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-headline font-semibold tracking-tight">
                      3. Launch &amp; Operation
                    </h2>
                    <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                      A project doesn&apos;t end at deployment. We enter a phase
                      of operational excellence, monitoring performance metrics
                      and scaling infrastructure as user demand grows.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="group">
                        <div className="h-1 w-full bg-brand-outline-variant group-hover:bg-brand-primary transition-colors duration-500 mb-4" />
                        <h4 className="font-bold text-sm mb-2">
                          Live Monitoring
                        </h4>
                        <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                          24/7 observability into system health and user
                          interaction patterns.
                        </p>
                      </div>
                      <div className="group">
                        <div className="h-1 w-full bg-brand-outline-variant group-hover:bg-brand-primary transition-colors duration-500 mb-4" />
                        <h4 className="font-bold text-sm mb-2">
                          Scale Orchestration
                        </h4>
                        <p className="text-sm text-brand-on-surface-variant leading-relaxed">
                          Automated horizontal scaling to manage traffic
                          volatility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
