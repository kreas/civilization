const services = [
  {
    number: '01',
    title: 'Web Systems',
    description:
      'Scalable, resilient web architectures designed for massive throughput and zero-latency user experiences.',
  },
  {
    number: '02',
    title: 'Mobile Interfaces',
    description:
      'Native experiences that prioritize ergonomic flow and visual precision across all device ecosystems.',
  },
  {
    number: '03',
    title: 'Enterprise Strategy',
    description:
      'Consulting on digital transformation, legacy modernization, and long-term technical debt mitigation.',
  },
  {
    number: '04',
    title: 'Cloud Orchestration',
    description:
      'Automated infrastructure deployment and multi-cloud management focused on security and cost-efficiency.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-brand-surface-container-low py-32">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-headline text-4xl tracking-tight mb-6">Core Services</h2>
            <div className="h-1 w-20 bg-brand-primary-container" />
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {services.map((service) => (
              <div key={service.number} className="group">
                <span className="text-brand-primary-container font-headline text-5xl font-light block mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  {service.number}
                </span>
                <h3 className="font-headline text-2xl mb-4">{service.title}</h3>
                <p className="text-brand-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-brand-primary-container font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Explore
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
