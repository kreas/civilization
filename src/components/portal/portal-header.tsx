'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BrandButton } from '@/components/ui/brand-button';
import type { Member } from '@/components/portal/dashboard';

interface PortalHeaderProps {
  member: Member;
}

export function PortalHeader({ member }: PortalHeaderProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = useMutation({
    mutationFn: async () => {
      await fetch('/api/portal/logout', { method: 'POST' });
    },
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['portal'] });
      router.push('/portal');
    },
  });

  return (
    <header className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-xl border-b border-brand-outline-variant/30">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image src="/logo.webp" alt="Civilization Tech" width={100} height={32} />
          <div className="h-6 w-px bg-brand-outline-variant/40" />
          <span className="text-xs font-headline uppercase tracking-[0.15em] text-brand-primary">
            Client Portal
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-brand-on-background">
              {member.name}
            </p>
            <p className="text-xs text-brand-on-surface-variant">
              {member.company}
            </p>
          </div>
          <BrandButton
            variant="outline"
            size="md"
            onClick={() => logout.mutate()}
            disabled={logout.isPending}
          >
            {logout.isPending ? 'Signing out...' : 'Sign Out'}
          </BrandButton>
        </div>
      </div>
    </header>
  );
}
