import { Navbar } from '@/components/home/navbar';
import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { SelectedWorks } from '@/components/home/selected-works';
import { CTA } from '@/components/home/cta';
import { Footer } from '@/components/home/footer';

export default function Home() {
  return (
    <div className="bg-brand-surface text-brand-on-background">
      <Navbar />
      <main className="pt-32">
        <Hero />
        <Services />
        <SelectedWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
