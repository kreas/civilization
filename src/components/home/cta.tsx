'use client';

import { AnimateIn } from './animate-in';

export function CTA() {
  return (
    <section id="contact" className="relative bg-brand-on-background text-white overflow-hidden py-40">
      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <AnimateIn delay={0} direction="left">
              <h2 className="font-headline text-5xl md:text-7xl tracking-tighter leading-none mb-8">
                Ready to build something{' '}
                <span className="text-brand-primary-fixed">meaningful?</span>
              </h2>
              <p className="text-brand-surface-variant text-xl mb-12 max-w-lg">
                We are currently accepting new commissions. Let&apos;s discuss your
                architectural vision for the web.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#"
                  className="bg-brand-primary text-white px-10 py-5 font-headline text-sm uppercase tracking-tight hover:bg-brand-primary-container transition-colors text-center"
                >
                  Start a Project
                </a>
                <a
                  href="#"
                  className="border border-brand-outline-variant px-10 py-5 font-headline text-sm uppercase tracking-tight hover:bg-white/10 transition-colors text-center"
                >
                  View Our Process
                </a>
              </div>
            </AnimateIn>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:translate-x-20">
            <AnimateIn delay={150} direction="right">
              <div className="aspect-square bg-brand-surface-container-low/10 backdrop-blur-3xl p-12 border border-white/10">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="text-brand-primary-fixed text-6xl mb-6" aria-hidden="true">&#9670;</div>
                    <h4 className="font-headline text-3xl mb-4">Precision Engineering</h4>
                    <p className="text-brand-surface-variant/70 leading-relaxed">
                      Our studio operates with a 1:4 engineer-to-project ratio, ensuring
                      unprecedented attention to detail and code quality.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-t border-white/20 pt-4">
                      <span className="block text-2xl font-headline">99.9%</span>
                      <span className="text-xs uppercase tracking-widest text-brand-surface-variant/50">
                        Uptime SLA
                      </span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <span className="block text-2xl font-headline">24/7</span>
                      <span className="text-xs uppercase tracking-widest text-brand-surface-variant/50">
                        Core Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary-container/10 -skew-x-12 translate-x-1/2" />
    </section>
  );
}
