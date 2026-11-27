import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DETAIL_MAP } from '@/lib/services-detail-data';
import ServiceLandingLayout from '@/components/ServiceLandingLayout';

const SERVICE_KEY = 'digital-growth-partner';

export const metadata: Metadata = {
  title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
  description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
  keywords: [
    'Digital Growth Partner',
    'Fractional CMO Agency',
    'Headless Next.js Development',
    'Category Exclusivity Marketing',
    'Full-Stack Growth Engineering',
    'NovaSpark Digital Marketing Agency',
  ],
  openGraph: {
    title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
    description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
    url: 'https://novasparkdmagency.com/services/digital-growth-partner',
    siteName: 'NovaSpark Digital Marketing Agency',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DigitalGrowthPartnerPage() {
  const service = SERVICES_DETAIL_MAP[SERVICE_KEY];
  if (!service) notFound();

  return <ServiceLandingLayout service={service} />;
}
