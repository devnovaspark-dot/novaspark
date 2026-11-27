import { MetadataRoute } from 'next';
import { AGENCY_CASE_STUDIES } from '@/lib/agency-data';
import { ALL_SERVICE_SLUGS } from '@/lib/services-detail-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novasparkdmagency.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceLandingPages = ALL_SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const caseStudyPages = AGENCY_CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...serviceLandingPages, ...caseStudyPages];
}
