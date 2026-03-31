import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ProcessHero } from '@/components/process/process-hero';
import { ProcessTimeline } from '@/components/process/process-timeline';
import { ProcessCTA } from '@/components/process/process-cta';

export default function ProcessPage() {
  return (
    <div className="bg-brand-surface text-brand-on-background overflow-x-hidden">
      <Navbar />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-brand-primary-container focus:text-brand-on-primary focus:px-4 focus:py-2 focus:font-headline focus:text-sm"
      >
        Skip to main content
      </a>
      <main id="main-content" className="pt-32">
        <ProcessHero />
        <ProcessTimeline />
        <ProcessCTA />
      </main>
      <Footer />
    </div>
  );
}
