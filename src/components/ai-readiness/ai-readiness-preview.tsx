'use client';

import { AnimateIn } from '@/components/home/animate-in';

const categories = [
  {
    icon: '📊',
    title: 'Data & Infrastructure',
    description: 'Do you have the data pipelines, cloud infrastructure, and tooling to support AI workloads?',
  },
  {
    icon: '👥',
    title: 'Team & Capabilities',
    description: 'Does your team have the skills to build, deploy, and maintain AI systems — or do you need a partner?',
  },
  {
    icon: '🎯',
    title: 'Business Alignment',
    description: 'Are your AI initiatives tied to measurable outcomes, or are you chasing trends?',
  },
];

const cardDelays = [0, 100, 200];

export function AIReadinessPreview() {
  return (
    <section className="py-20 sm:py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-16 sm:mb-20">
        <AnimateIn delay={0}>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl tracking-brand-headline text-brand-on-background">
            What you'll assess
          </h2>
        </AnimateIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {categories.map((category, index) => (
          <AnimateIn key={category.title} delay={cardDelays[index]} direction="up">
            <div className="bg-brand-surface-container-low rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-6">{category.icon}</div>
              <h3 className="font-headline text-2xl text-brand-on-background mb-4">
                {category.title}
              </h3>
              <p className="text-brand-on-surface-variant leading-relaxed">
                {category.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
