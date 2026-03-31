'use client';

import { useInView } from '@/hooks/use-in-view';

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const directionMap: Record<NonNullable<AnimateInProps['direction']>, string> = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
};

export function AnimateIn({ children, delay = 0, direction = 'up', className }: AnimateInProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionMap[direction]}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
