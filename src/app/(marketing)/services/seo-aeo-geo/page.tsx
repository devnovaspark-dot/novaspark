import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DETAIL_MAP } from '@/lib/services-detail-data';
import ServiceLandingLayout from '@/components/ServiceLandingLayout';

const SERVICE_KEY = 'seo-aeo-geo';

export const metadata: Metadata = {
  title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
  description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
  keywords: [
    'SEO Agency',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'AEO SEO GEO',
    'ChatGPT Optimization',
    'Perplexity Citations',
    'Core Web Vitals',
    'NovaSpark Digital Marketing Agency',
  ],
  openGraph: {
    title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
    description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
    url: 'https://novasparkdmagency.com/services/seo-aeo-geo',
    siteName: 'NovaSpark Digital Marketing Agency',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SeoAeoGeoPage() {
  const service = SERVICES_DETAIL_MAP[SERVICE_KEY];
  if (!service) notFound();

  return <ServiceLandingLayout service={service} />;
}
