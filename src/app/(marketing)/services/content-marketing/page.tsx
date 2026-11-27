import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DETAIL_MAP } from '@/lib/services-detail-data';
import ServiceLandingLayout from '@/components/ServiceLandingLayout';

const SERVICE_KEY = 'content-marketing';

export const metadata: Metadata = {
  title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
  description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
  keywords: [
    'Content Marketing Agency',
    'B2B Thought Leadership',
    'Buyer Enablement Content',
    'Bottom of Funnel Content',
    'Executive Ghostwriting',
    'Semantic Whitepapers',
    'NovaSpark Digital Marketing Agency',
  ],
  openGraph: {
    title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
    description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
    url: 'https://novasparkdmagency.com/services/content-marketing',
    siteName: 'NovaSpark Digital Marketing Agency',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContentMarketingPage() {
  const service = SERVICES_DETAIL_MAP[SERVICE_KEY];
  if (!service) notFound();

  return <ServiceLandingLayout service={service} />;
}
