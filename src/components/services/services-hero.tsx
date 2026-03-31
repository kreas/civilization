'use client';

import Image from 'next/image';
import { AnimateIn } from '@/components/home/animate-in';

export function ServicesHero() {
  return (
    <section className="px-8 mb-16 sm:mb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:pt-8">
        <div className="lg:pt-8">
          <AnimateIn delay={0}>
            <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
              What We Do
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] tracking-brand-display text-brand-on-background mb-8">
              Three ways we ship.{' '}
              <span className="text-brand-primary-container">One way we start.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-md">
              Every Civilization engagement begins with Discovery — a deep,
              strategic investigation of your systems, workflows, and goals.
              What comes next depends on what we find.
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
                PRECISION METRIC
              </p>
              <p className="text-2xl font-headline font-semibold tracking-tight">
                99.9% Uptime Architecture
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
