import { type ComponentPropsWithRef } from 'react';

const variants = {
  primary:
    'bg-brand-primary text-white hover:bg-brand-primary-container',
  outline:
    'border border-brand-outline-variant hover:bg-white/10',
} as const;

const sizes = {
  md: 'px-6 py-2.5',
  lg: 'px-10 py-5',
} as const;

type BrandButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & (
  | (ComponentPropsWithRef<'a'> & { href: string })
  | (ComponentPropsWithRef<'button'> & { href?: never })
);

export function BrandButton({
  variant = 'primary',
  size = 'lg',
  className = '',
  ...props
}: BrandButtonProps) {
  const base = `font-headline text-sm uppercase tracking-wide text-center rounded-md transition-colors ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in props && props.href) {
    return <a className={base} {...(props as ComponentPropsWithRef<'a'>)} />;
  }

  return <button className={base} {...(props as ComponentPropsWithRef<'button'>)} />;
}
