import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Providers } from '@/components/providers';
import './globals.css';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Civilization Tech',
  description: 'AI software development studio. Our AI builds. Our humans think. Production-grade software for companies that make things in the real world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://use.typekit.net/ohv2pqo.js" strategy="beforeInteractive" />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
