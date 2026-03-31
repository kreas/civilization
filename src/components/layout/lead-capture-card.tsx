'use client';

import { BrandButton } from '@/components/ui/brand-button';

export function LeadCaptureCard() {
  return (
    <div className="border-t border-white/10 pt-10 lg:pt-12 lg:border-t-0 lg:bg-brand-surface-container-low/10 lg:backdrop-blur-3xl lg:p-12 lg:border lg:border-white/10 lg:rounded-2xl">
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="font-headline text-2xl mb-2">Start a conversation</h4>
          <p className="text-sm text-white/50">
            Tell us what you&apos;re working on. We&apos;ll take it from there.
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary-fixed transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary-fixed transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary-fixed transition-colors"
          />
          <textarea
            placeholder="What are you looking to build?"
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary-fixed transition-colors resize-none"
          />
          <BrandButton type="submit" size="md" className="w-full py-3.5">
            Book a Discovery Call
          </BrandButton>
        </form>
      </div>
    </div>
  );
}
