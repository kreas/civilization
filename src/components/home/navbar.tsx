const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#works' },
  { label: 'Process', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf8ff]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="font-headline text-2xl tracking-tighter text-brand-on-background">
          CIVILIZATION
        </div>
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline text-sm uppercase tracking-tight text-brand-on-background opacity-70 hover:opacity-100 hover:text-brand-primary-container transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-brand-primary-container text-brand-on-primary px-6 py-2.5 font-headline text-sm uppercase tracking-tight active:scale-90 transition-transform"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
