'use client';

import { AnimateIn } from './animate-in';
import { LeadCaptureCard } from '@/components/layout/lead-capture-card';
import { BrandButton } from '@/components/ui/brand-button';

export function CTA() {
  return (
    <section id="contact" className="relative bg-brand-on-background text-white overflow-hidden py-20 sm:py-40">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <AnimateIn delay={0} direction="left">
              <h2 className="font-headline text-5xl md:text-7xl tracking-brand-headline leading-none mb-8">
                Ready to
                <br />
                <span className="text-brand-primary-fixed">modernize?</span>
              </h2>
              <p className="text-brand-surface-variant text-xl mb-0 lg:mb-12 max-w-lg">
                Every engagement starts with Discovery. We&apos;ll map your systems,
                identify opportunities, and show you exactly what&apos;s possible -
                before a single line of code is written.
              </p>
              <div className="hidden lg:flex flex-col sm:flex-row gap-6">
                <BrandButton href="#">Start Discovery</BrandButton>
                <BrandButton href="/process" variant="outline">See Our Process</BrandButton>
              </div>
            </AnimateIn>
          </div>
          <div className="w-full lg:w-1/2">
            <AnimateIn delay={150} direction="right">
              <LeadCaptureCard />
            </AnimateIn>
          </div>
        </div>
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary-container/15 via-brand-primary-container/5 to-transparent -skew-x-12 translate-x-1/4" />
    </section>
  );
}
