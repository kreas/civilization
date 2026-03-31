'use client';

import { AnimateIn } from '@/components/home/animate-in';

const capabilities = [
  {
    title: 'AI agents for existing workflows',
    description:
      'Customer support, internal operations, data processing, quality control \u2014 wherever repetitive human work can be elevated by AI.',
  },
  {
    title: 'Intelligent automation',
    description:
      'Replacing manual processes with AI-driven pipelines that learn, adapt, and scale.',
  },
  {
    title: 'Predictive capabilities',
    description:
      'Adding forecasting, anomaly detection, and decision support to systems that currently just report historical data.',
  },
];

export function ServiceAI() {
  return (
    <section className="py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left column */}
          <div className="md:col-span-5">
            <AnimateIn delay={0}>
              <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
                AI Integration
              </span>
              <h2 className="font-headline text-4xl md:text-5xl tracking-brand-headline leading-[0.95] mb-6">
                Sometimes you need smarter software.
              </h2>
              <div className="h-1 w-20 bg-brand-primary-container mb-8" />
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-brand-on-surface-variant text-lg leading-relaxed">
                Not every project requires a ground-up rebuild. Sometimes the
                systems you have are solid &mdash; they just need AI capabilities
                woven in. We integrate AI agents, automation, and intelligence
                into your existing platforms and workflows. The goal is
                measurable impact with minimal disruption.
              </p>
            </AnimateIn>
          </div>

          {/* Right column */}
          <div className="md:col-span-7">
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
          </div>
        </div>
      </div>
    </section>
  );
}
