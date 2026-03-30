export function Hero() {
  return (
    <section className="px-8 mb-32 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-8">
          <span className="text-brand-primary-container font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
            Civilization Tech | Boutique Engineering
          </span>
          <h1 className="font-headline text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter text-brand-on-background mb-8">
            We build software that{' '}
            <span className="text-brand-primary-container">contributes.</span>
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-4 pb-4">
          <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-sm">
            An architectural approach to digital infrastructure. We engineer
            high-performance systems for the next generation of industry leaders.
          </p>
        </div>
      </div>
      <div className="mt-16 w-full h-[614px] overflow-hidden">
        <img
          alt="Architectural structure"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          src="/images/home/hero.jpg"
        />
      </div>
    </section>
  );
}
