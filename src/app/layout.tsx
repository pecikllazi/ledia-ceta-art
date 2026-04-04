import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Analytics from '@/components/shared/Analytics';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ledia-ceta-art.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ledia Ceta - Albanian Visual Artist',
    template: '%s | Ledia Ceta',
  },
  description:
    'Albanian visual artist Ledia Ceta specializes in painting and mixed media. Featured at the 10th Beijing International Art Biennale. Explore original artworks, exhibitions, and commissions.',
  keywords: ['Ledia Ceta', 'Albanian artist', 'visual artist', 'painting', 'mixed media', 'Beijing Biennale', 'contemporary art'],
  authors: [{ name: 'Ledia Ceta' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ledia Ceta - Visual Artist',
    title: 'Ledia Ceta - Albanian Visual Artist',
    description: 'Explore original paintings and mixed media works by Albanian visual artist Ledia Ceta.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ledia Ceta - Albanian Visual Artist',
    description: 'Explore original paintings and mixed media works by Albanian visual artist Ledia Ceta.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
