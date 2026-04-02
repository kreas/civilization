'use client';

import { AnimateIn } from '@/components/home/animate-in';

const stats = [
  {
    number: '87%',
    label: 'Of AI projects never make it to production',
  },
  {
    number: '12 weeks',
    label: 'Average Discovery-to-Production timeline with Civilization',
  },
  {
    number: '$2.4M',
    label: 'Average first-year savings from successful AI implementation',
  },
];

export function AIReadinessStats() {
  return (
    <section className="bg-brand-on-background text-white py-20 sm:py-40 px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateIn delay={0}>
          <p className="text-xl sm:text-2xl leading-relaxed max-w-2xl mb-16 sm:mb-24 text-white/90">
            Most companies waste 6-12 months on AI initiatives that never reach production. This scorecard helps you skip the false starts.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {stats.map((stat, index) => (
            <AnimateIn key={stat.number} delay={100 + index * 100} direction="up">
              <div>
                <div className="font-headline text-4xl sm:text-5xl text-brand-primary-fixed mb-3 sm:mb-4">
                  {stat.number}
                </div>
                <p className="font-headline text-xs uppercase tracking-[0.2em] text-white/70">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
