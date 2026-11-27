import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DETAIL_MAP } from '@/lib/services-detail-data';
import ServiceLandingLayout from '@/components/ServiceLandingLayout';

const SERVICE_KEY = 'social-media-marketing';

export const metadata: Metadata = {
  title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
  description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
  keywords: [
    'Social Media Marketing Agency',
    'Instagram Reels Production',
    'Short-Form Video Agency',
    'Community Management',
    'DM Sales Funnels',
    'NovaSpark Digital Marketing Agency',
  ],
  openGraph: {
    title: SERVICES_DETAIL_MAP[SERVICE_KEY].metaTitle,
    description: SERVICES_DETAIL_MAP[SERVICE_KEY].metaDescription,
    url: 'https://novasparkdmagency.com/services/social-media-marketing',
    siteName: 'NovaSpark Digital Marketing Agency',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SocialMediaMarketingPage() {
  const service = SERVICES_DETAIL_MAP[SERVICE_KEY];
  if (!service) notFound();

  return <ServiceLandingLayout service={service} />;
}
