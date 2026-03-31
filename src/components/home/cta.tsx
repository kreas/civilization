'use client';

import { AnimateIn } from './animate-in';
import { LeadCaptureCard } from '@/components/layout/lead-capture-card';
import { BrandButton } from '@/components/ui/brand-button';

export function CTA() {
  return (
    <section id="contact" className="relative bg-brand-on-background text-white overflow-hidden py-40">
      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <AnimateIn delay={0} direction="left">
              <h2 className="font-headline text-5xl md:text-7xl tracking-brand-headline leading-none mb-8">
                Ready to
                <br />
                <span className="text-brand-primary-fixed">modernize?</span>
              </h2>
              <p className="text-brand-surface-variant text-xl mb-12 max-w-lg">
                Every engagement starts with Discovery. We&apos;ll map your systems,
                identify opportunities, and show you exactly what&apos;s possible —
                before a single line of code is written.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <BrandButton href="#">Start Discovery</BrandButton>
                <BrandButton href="#" variant="outline">See How We Work</BrandButton>
              </div>
            </AnimateIn>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <AnimateIn delay={150} direction="right">
              <LeadCaptureCard />
            </AnimateIn>
          </div>
        </div>
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary-container/10 -skew-x-12 translate-x-1/2" />
    </section>
  );
}
