import Image from 'next/image';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-brand-surface-container-low w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 sm:px-8 py-10 max-w-screen-2xl mx-auto">
      <div className="mb-6 md:mb-0">
        <Image
          src="/logo.webp"
          alt="Civilization"
          width={206}
          height={24}
          style={{ width: 'auto' }}
          className="h-5"
        />
        <p className="text-xs tracking-wide text-brand-on-background/60 mt-2">
          &copy; {new Date().getFullYear()} Civilization Tech. All rights reserved.
        </p>
      </div>
      <nav aria-label="Footer">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-8 list-none">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs tracking-wide text-brand-on-background/60 hover:text-brand-primary-container hover:opacity-100 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </footer>
  );
}
