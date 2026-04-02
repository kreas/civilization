'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AnimateIn } from '@/components/home/animate-in';
import { BrandButton } from '@/components/ui/brand-button';

export function PortalLogin() {
  const [accessCode, setAccessCode] = useState('');
  const router = useRouter();

  const login = useMutation({
    mutationFn: async (code: string) => {
      const res = await fetch('/api/portal/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode: code }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Invalid access code');
      }
      return res.json();
    },
    onSuccess: () => {
      router.push('/portal/dashboard');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim()) {
      login.mutate(accessCode.trim());
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <AnimateIn delay={0}>
          <div className="flex justify-center mb-10">
            <Image src="/logo.webp" alt="Civilization Tech" width={120} height={40} />
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1 className="font-headline text-3xl tracking-brand-headline text-center mb-3">
            Client Portal
          </h1>
          <p className="text-brand-on-surface-variant text-center mb-10">
            Enter your access code to view your project dashboard.
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="accessCode"
                className="block text-xs font-headline uppercase tracking-[0.2em] text-brand-primary mb-2"
              >
                Access Code
              </label>
              <input
                id="accessCode"
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="e.g. ACME-2026-PORTAL"
                className="w-full px-4 py-3 bg-white border border-brand-outline-variant rounded-md text-brand-on-background placeholder:text-brand-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-brand-primary-container/40 focus:border-brand-primary-container transition-colors"
                disabled={login.isPending}
                autoFocus
              />
            </div>

            {login.isError && (
              <p className="text-brand-error text-sm" role="alert">
                {login.error.message}
              </p>
            )}

            <BrandButton
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              disabled={login.isPending || !accessCode.trim()}
            >
              {login.isPending ? 'Verifying...' : 'Access Dashboard'}
            </BrandButton>
          </form>
        </AnimateIn>

        <AnimateIn delay={300}>
          <p className="text-brand-on-surface-variant/60 text-xs text-center mt-8">
            Access codes are provided by your project team.
          </p>
        </AnimateIn>
      </div>
    </div>
  );
}
