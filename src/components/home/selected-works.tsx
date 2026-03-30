export function SelectedWorks() {
  return (
    <section id="works" className="py-32 max-w-screen-2xl mx-auto px-8">
      <h2 className="font-headline text-5xl tracking-tight mb-16">Selected Works</h2>
      <div className="grid grid-cols-12 gap-8 h-auto lg:h-[900px]">
        {/* Case Study 1 — Large */}
        <div className="col-span-12 lg:col-span-7 bg-brand-surface-container h-full relative group overflow-hidden">
          <img
            alt="Cybersecurity interface"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            src="/images/home/case-study-1.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26]/80 to-transparent p-12 flex flex-col justify-end">
            <span className="text-brand-primary-fixed font-semibold uppercase tracking-widest text-xs mb-2">
              Fintech Infrastructure
            </span>
            <h3 className="font-headline text-3xl text-white mb-4">Aura Global Banking</h3>
            <p className="text-white/70 max-w-md">
              Redefining high-frequency transaction security for a global multi-currency platform.
            </p>
          </div>
        </div>

        {/* Case Studies 2 & 3 — Stacked */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          <div className="h-1/2 bg-brand-surface-container-high relative group overflow-hidden">
            <img
              alt="Data visualization"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="/images/home/case-study-2.jpg"
            />
            <div className="absolute inset-0 bg-[#1a1b26]/40 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="font-headline text-2xl text-white">Vortex Data Engine</h3>
            </div>
          </div>
          <div className="h-1/2 bg-brand-surface-container-highest relative group overflow-hidden">
            <img
              alt="Abstract art"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="/images/home/case-study-3.jpg"
            />
            <div className="absolute inset-0 bg-[#1a1b26]/40 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="font-headline text-2xl text-white">Prism Design System</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
