'use client';

import { AnimateIn } from './animate-in';

export function Hero() {
  return (
    <section className="px-8 mb-32 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-8">
          <AnimateIn delay={0}>
            <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
              Civilization Tech | Boutique Engineering
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter text-brand-on-background mb-8">
              We build software that{' '}
              <span className="text-brand-primary-container">contributes.</span>
            </h1>
          </AnimateIn>
        </div>
        <div className="col-span-12 lg:col-span-4 pb-4">
          <AnimateIn delay={200}>
            <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-sm">
              An architectural approach to digital infrastructure. We engineer
              high-performance systems for the next generation of industry leaders.
            </p>
          </AnimateIn>
        </div>
      </div>
      <AnimateIn delay={300}>
        <div className="mt-16 w-full h-[300px] sm:h-[400px] md:h-[614px] overflow-hidden rounded-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover"
            src="/videos/home/hero-video.webm"
          />
        </div>
      </AnimateIn>
    </section>
  );
}
