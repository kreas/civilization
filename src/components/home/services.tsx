'use client';

import { AnimateIn } from './animate-in';

const services = [
  {
    number: '01',
    title: 'AI-Powered Software',
    description:
      'Custom AI agents, intelligent workflows, and machine learning systems built for your specific business problems - not off-the-shelf SaaS.',
  },
  {
    number: '02',
    title: 'Legacy Modernization',
    description:
      'We take aging systems and rebuild them for the AI era. Your operations keep running while we replace the engine underneath.',
  },
  {
    number: '03',
    title: 'Discovery & Strategy',
    description:
      'Before we write a line of code, we map your workflows, identify risks, and define exactly what success looks like. Discovery is where we earn trust.',
  },
  {
    number: '04',
    title: 'The Dark Factory',
    description:
      'Our methodology: AI agents handle implementation while our humans focus on strategy and oversight. The result is production-grade software at unprecedented speed.',
  },
];

const cardDelays = [0, 100, 200, 300];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-brand-surface-container-low py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-3">
            <AnimateIn delay={0}>
              <h2 id="services-heading" className="font-headline text-4xl tracking-tight mb-6">What We Do</h2>
              <div className="h-1 w-20 bg-brand-primary-container" />
            </AnimateIn>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20">
            {services.map((service, index) => (
              <AnimateIn key={service.number} delay={cardDelays[index]}>
                <div className="group">
                  <span aria-hidden="true" className="text-brand-primary-container font-headline text-5xl font-light block mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                    {service.number}
                  </span>
                  <h3 className="font-headline text-2xl mb-4">{service.title}</h3>
                  <p className="text-brand-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    aria-label={`Explore ${service.title}`}
                    className="text-brand-primary-container font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Explore
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
