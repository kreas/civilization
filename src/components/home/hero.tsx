'use client';

import { AnimateIn } from './animate-in';

export function Hero() {
  return (
    <section className="px-8 mb-32 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-8">
          <AnimateIn delay={0}>
            <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
              AI Software Development Studio
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-brand-display text-brand-on-background mb-8">
              Your systems,{' '}
              <span className="text-brand-primary-container">reimagined.</span>
            </h1>
          </AnimateIn>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:pt-[3.5rem]">
          <AnimateIn delay={200}>
            <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-sm">
              We build production-grade AI-powered software for companies that make
              things in the real world. Faster, sharper, and at a fraction of the
              cost of traditional dev shops.
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
