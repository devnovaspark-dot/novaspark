import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'NovaSpark — Digital Marketing Agency | Turn Attention Into Business Growth',
    template: '%s | NovaSpark Growth Agency',
  },
  description: 'NovaSpark combines creative thinking, intelligent marketing systems and performance-driven execution to help ambitious brands scale predictably.',
  keywords: [
    'Digital Marketing Agency',
    'Performance Marketing',
    'Search Engine Optimization',
    'SEO Agency',
    'Google Ads',
    'Meta Ads',
    'Social Media Marketing',
    'Web Development',
    'Growth Marketing',
    'Bhubaneswar Marketing Agency',
  ],
  authors: [{ name: 'NovaSpark Digital Agency', url: 'https://novaspark.in' }],
  creator: 'NovaSpark',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://novaspark.in',
    title: 'NovaSpark — Digital Marketing Agency',
    description: 'We combine creative thinking, intelligent marketing and performance-driven strategies to help businesses build stronger brands and achieve measurable growth.',
    siteName: 'NovaSpark Digital Agency',
    images: [
      {
        url: '/images/hero_growth_mastery.jpg',
        width: 1200,
        height: 630,
        alt: 'NovaSpark Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaSpark — Digital Marketing Agency',
    description: 'Turn digital attention into predictable business growth with NovaSpark.',
    images: ['/images/hero_growth_mastery.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-[#111827]">
        {children}
      </body>
    </html>
  );
}
