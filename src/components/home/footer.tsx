const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-brand-surface-container-low flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full">
      <div className="mb-6 md:mb-0">
        <div className="font-headline text-lg text-brand-on-background">CIVILIZATION</div>
        <p className="text-xs tracking-wide text-brand-on-background/60 mt-2">
          &copy; {new Date().getFullYear()} Civilization Tech. All rights reserved.
        </p>
      </div>
      <div className="flex gap-8">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs tracking-wide text-brand-on-background/60 hover:text-brand-primary-container hover:opacity-100 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
