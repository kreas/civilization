'use client';

import { AnimateIn } from './animate-in';

export function SelectedWorks() {
  return (
    <section id="works" aria-labelledby="works-heading" className="py-32 max-w-screen-2xl mx-auto px-8">
      <AnimateIn delay={0}>
        <h2 id="works-heading" className="font-headline text-5xl tracking-tight mb-6">Selected Works</h2>
        <div className="h-1 w-20 bg-brand-primary-container mb-16" aria-hidden="true" />
      </AnimateIn>
      <div className="flex flex-col lg:flex-row gap-8 lg:h-[900px]">
        {/* Case Study 1 — Large */}
        <AnimateIn delay={100} className="lg:w-7/12">
          <div className="h-[400px] lg:h-full bg-brand-surface-container relative group overflow-hidden rounded-2xl">
            <img
              alt=""
              role="presentation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="/images/home/case-study-1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26]/80 to-transparent p-6 sm:p-12 flex flex-col justify-end">
              <span className="text-brand-primary-fixed font-semibold uppercase tracking-widest text-xs mb-2">
                Fintech Infrastructure
              </span>
              <h3 className="font-headline text-3xl text-white mb-4">Aura Global Banking</h3>
              <p className="text-white/70 max-w-md">
                Redefining high-frequency transaction security for a global multi-currency platform.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Case Studies 2 & 3 — Stacked */}
        <div className="lg:w-5/12 flex flex-col gap-8">
          <AnimateIn delay={200} className="h-[300px] lg:flex-1">
            <div className="h-full bg-brand-surface-container-high relative group overflow-hidden rounded-2xl">
              <img
                alt=""
                role="presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="/images/home/case-study-2.jpg"
              />
              <div className="absolute inset-0 bg-[#1a1b26]/40 p-8 flex flex-col justify-end">
                <h3 className="font-headline text-2xl text-white">Vortex Data Engine</h3>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={300} className="h-[300px] lg:flex-1">
            <div className="h-full bg-brand-surface-container-highest relative group overflow-hidden rounded-2xl">
              <img
                alt=""
                role="presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="/images/home/case-study-3.jpg"
              />
              <div className="absolute inset-0 bg-[#1a1b26]/40 p-8 flex flex-col justify-end">
                <h3 className="font-headline text-2xl text-white">Prism Design System</h3>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
