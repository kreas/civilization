'use client';

import { AnimateIn } from '@/components/home/animate-in';
import { BrandButton } from '@/components/ui/brand-button';

export function AIReadinessCTA() {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-surface-container-low overflow-hidden py-20 sm:py-40 px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimateIn delay={0} direction="left">
              <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl tracking-brand-headline leading-[1.1] text-brand-on-background mb-8">
                Get your score.{' '}
                <span className="text-brand-primary-container">Get a plan.</span>
              </h2>
              <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-lg mb-8 sm:mb-12">
                Download the AI Readiness Scorecard, assess your organization in 15 minutes, and book a free Discovery call to discuss your results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <BrandButton
                  onClick={handleScrollToForm}
                  size="lg"
                  className="text-center"
                >
                  Download the Scorecard
                </BrandButton>
                <BrandButton
                  href="/#contact"
                  variant="outline"
                  size="lg"
                  className="text-center border-brand-on-surface-variant text-brand-on-background hover:bg-brand-on-background/5"
                >
                  Book a Discovery Call
                </BrandButton>
              </div>
            </AnimateIn>
          </div>

          <div>
            <AnimateIn delay={150} direction="right">
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="font-headline text-lg text-brand-on-background mb-1">
                        Assess in 15 minutes
                      </h3>
                      <p className="text-sm text-brand-on-surface-variant">
                        10 targeted questions that cover the critical dimensions of AI readiness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="font-headline text-lg text-brand-on-background mb-1">
                        Get your roadmap
                      </h3>
                      <p className="text-sm text-brand-on-surface-variant">
                        See exactly where you stand and what to fix first.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">✓</div>
                    <div>
                      <h3 className="font-headline text-lg text-brand-on-background mb-1">
                        No credit card required
                      </h3>
                      <p className="text-sm text-brand-on-surface-variant">
                        Free assessment. No strings attached.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-brand-primary-container/10 via-brand-primary-container/5 to-transparent -skew-x-12 translate-x-1/3" />
    </section>
  );
}
