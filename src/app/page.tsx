import { Navbar } from '@/components/home/navbar';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { SelectedWorks } from '@/components/home/selected-works';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/home/footer';

export default function Home() {
  return (
    <div className="bg-brand-surface text-brand-on-background overflow-x-hidden">
      <Navbar />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-brand-primary-container focus:text-brand-on-primary focus:px-4 focus:py-2 focus:font-headline focus:text-sm">
        Skip to main content
      </a>
      <main id="main-content" className="pt-32">
        <Hero />
        <Services />
        <SelectedWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
