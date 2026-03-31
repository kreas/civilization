'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  // { label: 'Work', href: '/#works' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav aria-label="Main" className="fixed top-0 w-full z-50 bg-[#fbf8ff]/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 max-w-screen-2xl mx-auto">
          <a href="/" aria-label="Civilization — go to homepage">
            <Image
              src="/logo.webp"
              alt=""
              width={274}
              height={32}
              style={{ width: 'auto' }}
              className="h-4 sm:h-[1.4rem]"
              priority
            />
          </a>
          <ul className="hidden md:flex gap-10 items-center list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-headline text-sm uppercase tracking-wide text-brand-on-background opacity-70 hover:opacity-100 hover:text-brand-primary-container transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="hidden md:inline-block bg-brand-primary-container text-brand-on-primary px-6 py-2.5 font-headline text-sm uppercase tracking-wide active:scale-90 transition-transform rounded-md"
          >
            Start Discovery
          </a>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-brand-on-background"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-brand-surface pt-12">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-6 px-6 pt-4 list-none">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="font-headline text-lg uppercase tracking-tight text-brand-on-background hover:text-brand-primary-container transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/#contact"
                      onClick={() => setOpen(false)}
                      className="mt-4 block bg-brand-primary-container text-brand-on-primary px-6 py-3 font-headline text-sm uppercase tracking-wide text-center active:scale-95 transition-transform rounded-md"
                    >
                      Start Discovery
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
