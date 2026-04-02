import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AIReadinessHero } from '@/components/ai-readiness/ai-readiness-hero';
import { AIReadinessPreview } from '@/components/ai-readiness/ai-readiness-preview';
import { AIReadinessStats } from '@/components/ai-readiness/ai-readiness-stats';
import { AIReadinessCTA } from '@/components/ai-readiness/ai-readiness-cta';

export default function AIReadinessPage() {
  return (
    <div className="bg-brand-surface text-brand-on-background overflow-x-hidden">
      <Navbar />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-brand-primary-container focus:text-brand-on-primary focus:px-4 focus:py-2 focus:font-headline focus:text-sm">
        Skip to main content
      </a>
      <main id="main-content" className="pt-32">
        <AIReadinessHero />
        <AIReadinessPreview />
        <AIReadinessStats />
        <AIReadinessCTA />
      </main>
      <Footer />
    </div>
  );
}
