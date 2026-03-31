'use client';

import Image from 'next/image';
import { AnimateIn } from '@/components/home/animate-in';

export function ProcessHero() {
  return (
    <section className="px-8 mb-16 sm:mb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:pt-8">
        <div className="lg:pt-8">
          <AnimateIn delay={0}>
            <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
              How We Work
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-brand-display text-brand-on-background mb-8">
              Humans think. <br />
              Agents build. <br />
              <span className="text-brand-primary-container">You ship.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-md">
              Every Civilization project follows the same three-phase process:
              we start by understanding your problem deeply, then our AI agents
              build while our strategists oversee, and we hand you
              production-grade software you can actually run.
            </p>
          </AnimateIn>
        </div>
        <AnimateIn delay={300}>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/images/process/hero.webp"
              alt="Modern minimalist architectural skyscraper"
              width={1280}
              height={1000}
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute bottom-0 left-0 p-8 bg-brand-surface/90 backdrop-blur-md max-w-sm">
              <p className="text-xs font-bold text-brand-primary mb-2">
                AVERAGE TIMELINE
              </p>
              <p className="text-2xl font-headline font-semibold tracking-tight">
                12 Weeks — Discovery to Production
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
