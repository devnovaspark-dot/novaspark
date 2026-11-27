import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DETAIL_MAP } from '@/lib/services-detail-data';
import ServiceLandingLayout from '@/components/ServiceLandingLayout';

const SERVICE_KEY = 'performance-marketing';

export const metadata: Metadata = {
  title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
  description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
  keywords: [
    'Performance Marketing Agency',
    'Google Ads Management',
    'Meta Ads Agency',
    'LinkedIn Ads ABM',
    'ROAS Optimization',
    'CAPI Tracking',
    'NovaSpark Digital Marketing Agency',
  ],
  openGraph: {
    title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
    description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
    url: 'https://novasparkdmagency.com/services/performance-marketing',
    siteName: 'NovaSpark Digital Marketing Agency',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PerformanceMarketingPage() {
  const service = SERVICES_DETAIL_MAP[SERVICE_KEY];
  if (!service) notFound();

  return <ServiceLandingLayout service={service} />;
}
