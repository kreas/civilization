import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Portal - Civilization Tech',
  description: 'Access your project dashboard',
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
