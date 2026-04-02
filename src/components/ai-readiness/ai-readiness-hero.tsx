'use client';

import { useState } from 'react';
import { AnimateIn } from '@/components/home/animate-in';
import { BrandButton } from '@/components/ui/brand-button';

export function AIReadinessHero() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (formData.name && formData.email && formData.company && formData.challenge) {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', challenge: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="px-8 mb-20 sm:mb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left column: headline and copy */}
        <div className="col-span-12 lg:col-span-6">
          <AnimateIn delay={0}>
            <span className="text-brand-primary font-headline tracking-[0.2em] uppercase text-xs mb-6 block">
              Free Assessment
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-brand-headline text-brand-on-background mb-6">
              Is your company{' '}
              <span className="text-brand-primary-container">ready for AI?</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-brand-on-surface-variant text-lg leading-relaxed max-w-md">
              The 10-question diagnostic that helps CTOs and VPs of Engineering assess their organization's AI readiness — and identify the fastest path to production AI.
            </p>
          </AnimateIn>
        </div>

        {/* Right column: form card */}
        <div className="col-span-12 lg:col-span-6">
          <AnimateIn delay={300}>
            <div className="bg-white rounded-2xl shadow-lg lg:shadow-xl overflow-hidden">
              <div className="p-8 sm:p-10">
                {!submitted ? (
                  <>
                    <h2 className="font-headline text-2xl mb-2 text-brand-on-background">
                      Get the scorecard
                    </h2>
                    <p className="text-sm text-brand-on-surface-variant mb-8">
                      Complete the 10-question assessment in minutes.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-brand-surface-container-low border border-brand-surface-container-low rounded-md px-4 py-3 text-sm text-brand-on-background placeholder:text-brand-on-surface-variant focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-brand-surface-container-low border border-brand-surface-container-low rounded-md px-4 py-3 text-sm text-brand-on-background placeholder:text-brand-on-surface-variant focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-brand-surface-container-low border border-brand-surface-container-low rounded-md px-4 py-3 text-sm text-brand-on-background placeholder:text-brand-on-surface-variant focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors"
                        />
                      </div>
                      <div>
                        <select
                          name="challenge"
                          value={formData.challenge}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-brand-surface-container-low border border-brand-surface-container-low rounded-md px-4 py-3 text-sm text-brand-on-background placeholder:text-brand-on-surface-variant focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">What's your biggest AI challenge?</option>
                          <option value="talent">We can't find AI talent</option>
                          <option value="start">We don't know where to start</option>
                          <option value="legacy">Our legacy systems aren't ready</option>
                          <option value="speed">We need to move faster</option>
                        </select>
                      </div>
                      <BrandButton type="submit" size="md" className="w-full py-3.5 mt-2">
                        Get the Free Scorecard
                      </BrandButton>
                    </form>
                    <p className="text-xs text-brand-on-surface-variant mt-6 text-center">
                      No spam. Just the scorecard and a curated follow-up.
                    </p>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-headline text-xl text-brand-on-background mb-2">
                      Thank you!
                    </h3>
                    <p className="text-sm text-brand-on-surface-variant">
                      Check your email for the scorecard. We'll be in touch soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
