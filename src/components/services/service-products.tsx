'use client';

import { AnimateIn } from '@/components/home/animate-in';

const capabilities = [
  {
    title: 'AI-native applications',
    description:
      'Products designed from the ground up with AI at the core, not bolted on after the fact.',
  },
  {
    title: 'Intelligent workflows',
    description:
      'Software where AI agents handle tasks autonomously: research, analysis, classification, routing, decision support.',
  },
  {
    title: 'Custom platforms',
    description:
      'Purpose-built tools tailored to your specific industry, users, and business logic.',
  },
];

export function ServiceProducts() {
  return (
    <section className="py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-5">
            <AnimateIn delay={0}>
              <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
                Product Development
              </span>
              <h2 className="font-headline text-4xl md:text-5xl tracking-brand-headline leading-[0.95] mb-6">
                New products. Built by agents. Guided by humans.
              </h2>
              <div className="h-1 w-20 bg-brand-primary-container mb-8" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                You have a vision for something that doesn&apos;t exist yet
                - a product that uses AI to solve a real problem in a new
                way. We take it from concept through Discovery to
                production-grade software, using the Dark Factory methodology to
                move at a pace that would take a traditional dev shop two to
                three times as long.
              </p>
            </AnimateIn>
          </div>

          {/* Right column - capabilities + proof point */}
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
              <div className="p-8 bg-brand-surface-container-low rounded-lg border-l-2 border-brand-primary-container">
                <span className="text-[0.6rem] tracking-[0.2em] font-bold text-brand-primary block mb-3">
                  PROOF POINT
                </span>
                <h4 className="font-headline text-xl mb-3">
                  Round One Workspaces
                </h4>
                <p className="text-brand-on-surface-variant text-sm leading-relaxed">
                  We built an AI-powered project management platform where
                  agents preload research and complete tasks before the user even
                  opens the card. Designed to make marketing teams measurably
                  faster. From concept to production using the Dark Factory
                  methodology.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
