import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ServicesHero } from '@/components/services/services-hero';
import { ServiceDiscovery } from '@/components/services/service-discovery';
import { ServiceProducts } from '@/components/services/service-products';
import { ServiceLegacy } from '@/components/services/service-legacy';
import { ServiceAI } from '@/components/services/service-ai';
import { DarkFactory } from '@/components/services/dark-factory';
export default function ServicesPage() {
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
        <ServicesHero />
        <ServiceDiscovery />
        <ServiceProducts />
        <ServiceLegacy />
        <ServiceAI />
        <DarkFactory />
      </main>
      <Footer />
    </div>
  );
}
