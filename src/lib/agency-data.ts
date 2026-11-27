export interface AgencyCaseStudy {
  slug: string;
  title: string;
  client: string;
  category: 'SEO' | 'Google Ads' | 'Meta Ads' | 'Social Media' | 'Website Development' | 'Local SEO';
  industry: string;
  image: string;
  logo: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string[];
  metrics: { label: string; value: string; change: string }[];
  deliverables: string[];
  gallery: string[];
  featured: boolean;
}

export interface AgencyService {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  deliverables: string[];
  businessValue: string;
  metricsHighlight: string;
  image: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  dept: string;
  image: string;
  bio: string;
  quote: string;
  linkedin: string;
}

export const AGENCY_SERVICES: AgencyService[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Organic Inbound Dominance',
    tagline: 'Improve rankings, qualified organic traffic, and recurring inbound revenue.',
    problem: 'Paid ads get more expensive every quarter, while competitors outrank your business for high-value commercial search keywords.',
    solution: 'We engineer full-funnel technical, on-page, and authority SEO architectures designed for sustainable search visibility and consistent qualified organic conversions.',
    deliverables: [
      'Comprehensive Technical SEO Architecture Audits',
      'High-Intent Keyword Intelligence & Gap Analysis',
      'Semantic Topic Clusters & Content Engineering',
      'Enterprise Link Equity & Authority Building',
      'Core Web Vitals & Mobile Indexation Optimization'
    ],
    businessValue: 'Zero-cost compound traffic acquisition, compounding domain authority, and reliable recurring pipeline independent of ad budgets.',
    metricsHighlight: '+180% Organic Search Lift & #1 Keyword Rankings',
    image: '/images/reference/SEO-Services-1024x576.webp',
    iconName: 'Search',
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Performance Marketing',
    category: 'High-Intent Paid Search',
    tagline: 'Generate real leads and qualified sales with disciplined algorithmic ad management.',
    problem: 'Wasted ad spend on low-intent queries, poor account structure, and rising cost-per-click eating away profitability.',
    solution: 'Algorithmic bid management, high-converting copy angles, laser-targeted negative keyword filters, and precision landing page alignment that lower CPA.',
    deliverables: [
      'High-Intent Search & Performance Max Setup',
      'Deep Keyword Negative Filtering & Match-Type Engineering',
      'First-Party Conversion Tracking & Enhanced Conversions',
      'Continuous Bid & Audience Tier Optimization',
      'Multi-Variant Ad Copy & Landing Page Split Testing'
    ],
    businessValue: 'Predictable lead generation, verified positive return on ad spend (ROAS), and scalable customer acquisition.',
    metricsHighlight: '3.8X - 4.8X Verified ROAS Across Client Portfolios',
    image: '/images/reference/Google-Ads-Services-1024x576.webp',
    iconName: 'TrendingUp',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads & Paid Social',
    category: 'Targeted Demand Generation',
    tagline: 'High-converting social campaigns on Instagram and Facebook that turn attention into transactions.',
    problem: 'Audience fatigue, declining creative performance post-iOS tracking changes, and poor creative-to-checkout conversion rates.',
    solution: 'Creative-led paid social strategies leveraging emotional hooks, UGC, high-velocity creative testing, and deep funnel retargeting.',
    deliverables: [
      'Full-Funnel Meta Ads Campaign Architecture (TOF, MOF, BOF)',
      'High-Velocity Creative Concepting & Testing Matrix',
      'Conversions API (CAPI) & Server-Side Tracking Integration',
      'Dynamic Product Ads (DPA) & Catalog Sales Funnels',
      'Audience Persona Segmentation & LAL Modeling'
    ],
    businessValue: 'Rapid market reach, predictable customer acquisition at scale, and high lifetime-value customer onboarding.',
    metricsHighlight: '+380% Increase in Qualified Lead Volume',
    image: '/images/reference/Meta-Ads-Services-1024x576.webp',
    iconName: 'Share2',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    category: 'Brand Advocacy & Community',
    tagline: 'Build an engaged, loyal community that amplifies brand credibility and organic word-of-mouth.',
    problem: 'Posting generic content with zero engagement, lack of brand voice consistency, and inability to convert followers into customers.',
    solution: 'Strategic content production, editorial calendars, short-form video scripts (Reels/Shorts), community management, and active audience nurture.',
    deliverables: [
      'Brand Voice, Visual Identity & Aesthetic Guidelines',
      'Monthly Content Calendars with Short-Form Video Concepts',
      'High-Engagement Carousel & Visual Post Design',
      'Active Community Management & Direct Message Funnels',
      'Influencer & Micro-Creator Partnership Management'
    ],
    businessValue: 'Strengthened brand equity, loyal customer community, and elevated organic share of voice in your vertical.',
    metricsHighlight: '+320% Average Increase in Monthly Social Engagement',
    image: '/images/reference/Social-Media-Marketing-Services-1024x576.webp',
    iconName: 'MessageSquare',
  },
  {
    id: 'web-development',
    title: 'Website Design & Development',
    category: 'Digital Infrastructure',
    tagline: 'Build fast, responsive, and scalable websites that turn visitors into paying customers.',
    problem: 'Slow, outdated, template-based websites that repel qualified prospects and fail to convert mobile visitors.',
    solution: 'Bespoke design systems, lightning-fast Next.js architectures, modern micro-interactions, and conversion-centered UX designed to close deals.',
    deliverables: [
      'Custom UI/UX Design System in Figma',
      'Modern High-Performance Next.js & React Engineering',
      'Mobile-First Responsive & Accessible UI',
      'Headless CMS, Analytics & Lead CRM Integration',
      '99+ Google Lighthouse & Core Web Vitals Performance'
    ],
    businessValue: 'Elevated corporate stature, immediate brand trust, lower bounce rates, and 2X-3X higher lead conversion rates.',
    metricsHighlight: '< 0.8s Average First Contentful Paint Across Devices',
    image: '/images/reference/Website-Development-Services-1024x576.webp',
    iconName: 'Globe',
  },
  {
    id: 'branding-creative',
    title: 'Branding & Creative Design',
    category: 'Identity & Art Direction',
    tagline: 'Distinctive brand identities and visual assets that command premium positioning in your market.',
    problem: 'Looking identical to competitors, disjointed visual assets, and failing to justify premium pricing.',
    solution: 'Comprehensive brand identity systems, typography guidelines, vector logo architecture, marketing collateral, and high-impact art direction.',
    deliverables: [
      'Brand Positioning, Core Values & Tone-of-Voice Guidelines',
      'Visual Identity System: Logo, Typography, Color Hierarchy',
      'Marketing Collateral, Pitch Decks & Sales Enablement Design',
      'Packaging & Product Presentation Art Direction',
      'Social Media & Digital Advertising Creative Master Kits'
    ],
    businessValue: 'Premium market perception, increased brand recall, and higher price realization per transaction.',
    metricsHighlight: '100% Bespoke Identity Systems with Complete Guidelines',
    image: '/images/reference/360-degree-DM-1024x576.webp',
    iconName: 'Sparkles',
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing & Strategy',
    category: 'Brand Authority',
    tagline: 'Authoritative storytelling that educates buyers and drives organic pipeline.',
    problem: 'Superficial AI-generated fluff that damages brand authority and fails to rank or resonate with sophisticated B2B or D2C buyers.',
    solution: 'Data-driven editorial content, original thought leadership, actionable case studies, and lead magnets that solve real customer problems.',
    deliverables: [
      'Comprehensive Inbound Content Strategy & Editorial Roadmap',
      'Deep Thought Leadership & Industry Whitepapers',
      'Case Study Storytelling & Customer Proof Narratives',
      'Email Marketing Automation & Newsletter Sequences',
      'Search-Engine Optimized Pillar Pages & Hub Architectures'
    ],
    businessValue: 'Builds unshakeable category authority, shortens the sales cycle, and produces evergreen marketing assets.',
    metricsHighlight: '+142% Increase in Inbound Organic Lead Velocity',
    image: '/images/work_edtech.jpg',
    iconName: 'FileText',
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Business Profile Optimization',
    category: 'Hyper-Local Domination',
    tagline: 'Own the Google Local 3-Pack and capture nearby high-intent buyers in real time.',
    problem: 'Local competitors capturing map pack clicks, inconsistent NAP citations, and unmanaged review profiles.',
    solution: 'Exhaustive Google Business Profile optimization, local citation syndication, geo-targeted landing pages, and reputation management funnels.',
    deliverables: [
      'Google Business Profile Full Audit & Category Optimization',
      'Local Geo-Tagged Photo & Post Strategy Implementation',
      'Local Citation Cleanup & Aggregator Distribution',
      'Customer Review Generation & Sentiment Funnel Strategy',
      'Hyper-Local Schema Markup & Neighborhood Landing Pages'
    ],
    businessValue: 'Exponential phone calls, direct direction requests, and walk-in store footfall with high immediate transaction rates.',
    metricsHighlight: '+340% Boost in Direct Local Calls & Navigation Clicks',
    image: '/images/Sri Pandurangan Divine Fresh.png',
    iconName: 'MapPin',
  },
];

export const AGENCY_CASE_STUDIES: AgencyCaseStudy[] = [
  {
    slug: 'medallion-house',
    title: 'Scaling Luxury Home Decor Nationally with Performance Marketing',
    client: 'Medallion House',
    category: 'Google Ads',
    industry: 'Luxury Home & Lifestyle',
    image: '/images/Medallion house.jpg',
    logo: '/images/clients/medallion-house.png',
    summary: 'How NovaSpark scaled an artisanal luxury home furnishing brand into a multi-crore national direct-to-consumer powerhouse through precision Performance Max and Google Ads search funnels.',
    challenge: 'Medallion House offered world-class handcrafted decor but struggled with high acquisition costs and inconsistent purchase orders on fragmented social ads.',
    strategy: 'We transitioned their digital acquisition architecture to high-intent Google Search and Performance Max campaigns, paired with automated high-AOV product bundling landing experiences.',
    execution: [
      'Rebuilt Google Ads structure with tight SKAG-inspired ad groups for high-ticket handcrafted decor',
      'Implemented enhanced conversion tracking to feed revenue and cart value data directly back to Google AI bidding',
      'Created high-converting catalog product creative and landing pages emphasizing handcrafted heritage',
      'Deployed dynamic remarketing across YouTube and Display for high-intent abandoned carts'
    ],
    metrics: [
      { label: 'Revenue Growth', value: '+240%', change: 'in 6 months' },
      { label: 'Verified ROAS', value: '4.85X', change: 'scaled spend' },
      { label: 'Conversion Lift', value: '+180%', change: 'sustained' },
    ],
    deliverables: ['Google Ads Search & PMax', 'High-Converting Landing Pages', 'First-Party Tracking Setup', 'Creative Asset Refresh'],
    gallery: ['/images/Medallion house.jpg', '/images/work_ecommerce.jpg', '/images/dashboard_hero.jpg'],
    featured: true,
  },
  {
    slug: 'ekatraa-retail',
    title: 'Organic Search Domination for Sustainable Organic Retail',
    client: 'Ekatraa',
    category: 'SEO',
    industry: 'Sustainable Living & Organic D2C',
    image: '/images/Ekatraa.jpg',
    logo: '/images/clients/ekatraa.png',
    summary: 'Engineering an organic search pipeline that took Ekatraa from unranked to #1 Google rankings for 180+ commercial sustainable product keywords across India.',
    challenge: 'Despite high product quality, organic traffic was negligible, forcing the brand to depend entirely on expensive marketplace commissions.',
    strategy: 'Executed an aggressive semantic topic-cluster strategy combined with technical Core Web Vitals optimization and digital PR link acquisition.',
    execution: [
      'Comprehensive site architecture overhaul removing crawl bloat and fixing orphaned category pages',
      'Created 45+ comprehensive buyer guides targeting non-branded high-intent queries',
      'Acquired authoritative backlinks from tier-1 sustainability publications and lifestyle portals',
      'Integrated rich product snippet schema for in-SERP star ratings and stock indicators'
    ],
    metrics: [
      { label: 'Organic Search Traffic', value: '+380%', change: 'Page 1 keywords' },
      { label: 'Qualified Leads', value: '+410%', change: 'inbound funnel' },
      { label: 'Organic Revenue Share', value: '54%', change: 'from 8%' },
    ],
    deliverables: ['Technical SEO Architecture', 'Content Pillar System', 'Digital PR & Link Equity', 'Schema Automation'],
    gallery: ['/images/Ekatraa.jpg', '/images/hero_performance_scale.jpg'],
    featured: true,
  },
  {
    slug: 'divine-fresh-organics',
    title: 'Hyper-Local Map Domination & Multi-Store Footfall Multiplication',
    client: 'Sri Pandurangan Divine Fresh',
    category: 'Local SEO',
    industry: 'Farm-to-Table Retail & Organics',
    image: '/images/Sri Pandurangan Divine Fresh.png',
    logo: '/images/clients/sri-pandurangan-divine-fresh.png',
    summary: 'Dominating local Google Map 3-Packs and driving unprecedented in-store footfall across multiple flagship retail superstores.',
    challenge: 'Local consumers were searching for organic groceries and fresh produce near them, but competitors with older listings were capturing all map interactions.',
    strategy: 'Structured multi-location Google Business Profile optimization combined with hyper-local geo-pages and automated review gathering funnels.',
    execution: [
      'Standardized NAP (Name, Address, Phone) citations across 60+ local directories',
      'Implemented QR-based post-purchase review collection, jumping from 3.8★ to 4.9★ with 1,200+ authentic reviews',
      'Published weekly geo-tagged updates and seasonal crop harvest announcements on Google Maps',
      'Configured local inventory ads to show real-time stock directly inside Google Search results'
    ],
    metrics: [
      { label: 'Local Search Impressions', value: '450K+', change: '+310%' },
      { label: 'Direction Requests & Calls', value: '18.4K/mo', change: '+290%' },
      { label: 'Verified In-Store Footfall', value: '+74%', change: 'sustained' },
    ],
    deliverables: ['Google Business Profile Strategy', 'Local Citation Clean-up', 'Review Generation Engine', 'Local Inventory Feeds'],
    gallery: ['/images/Sri Pandurangan Divine Fresh.png', '/images/work_restaurant.jpg'],
    featured: true,
  },
  {
    slug: 'weekend-bhraman',
    title: 'Turnaround Paid Social Campaign for Experiential Travel',
    client: 'Weekend Bhraman',
    category: 'Meta Ads',
    industry: 'Experiential Tourism & Hospitality',
    image: '/images/Weekend Bhraman Tour Planner.jpg',
    logo: '/images/clients/weekend-bhraman.png',
    summary: 'Transforming high-season tour bookings with dynamic video creative testing and full-funnel Meta Ads remarketing funnels.',
    challenge: 'Previous agency ran generic static photo ads yielding empty leads and high cancellation rates prior to payment.',
    strategy: 'We transitioned to experiential video storytelling, UGC itinerary walkthroughs, and instant WhatsApp booking qualification funnels.',
    execution: [
      'Produced 18 high-energy short-form vertical video ad variations featuring real travelers',
      'Segmented audiences by weekend getaway intent vs. extended expedition seekers',
      'Integrated direct WhatsApp click-to-chat conversion flows with automated qualification prompts',
      'Targeted corporate professionals in Bhubaneswar, Kolkata, and Hyderabad with weekend trip packages'
    ],
    metrics: [
      { label: 'Tour Bookings', value: '3,200+', change: '+215%' },
      { label: 'Cost Per Booking', value: '-48%', change: 'efficient' },
      { label: 'Social Engagement', value: '420K+', change: '+340%' },
    ],
    deliverables: ['Short-Form Video Ad Production', 'Meta Conversions API Setup', 'WhatsApp Lead Routing', 'Retargeting Funnels'],
    gallery: ['/images/Weekend Bhraman Tour Planner.jpg', '/images/work_fashion.jpg'],
    featured: true,
  },
  {
    slug: 'praveen-electronics',
    title: 'High-Converting Next.js Web Platform & Omnichannel Lead Generation',
    client: 'Praveen Electronics',
    category: 'Website Development',
    industry: 'Consumer Tech & Commercial Retail',
    image: '/images/work_realestate.jpg',
    logo: '/images/clients/praveen-electronics.png',
    summary: 'Designing and engineering an ultra-fast custom web platform that unified multi-branch product catalogs with automated WhatsApp quotation funnels.',
    challenge: 'Slow legacy WordPress site took 6.2 seconds to load on mobile and had a bounce rate above 68%, losing high-ticket commercial inquiries.',
    strategy: 'Engineered a modern bespoke Next.js web application with instant search, headless catalog management, and direct sales team routing.',
    execution: [
      'Designed a sleek editorial tech interface prioritizing product discovery and clear price inquiry CTAs',
      'Achieved a 99/100 Google Lighthouse performance score with sub-second page loads',
      'Built a custom quotation cart allowing bulk corporate buyers to request instant GST invoices',
      'Integrated real-time branch availability checkers and click-to-navigate map integrations'
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100', change: 'up from 32' },
      { label: 'Commercial Inquiries', value: '480+/mo', change: '+310%' },
      { label: 'Mobile Bounce Rate', value: '22%', change: 'down from 68%' },
    ],
    deliverables: ['Custom Next.js Frontend', 'Headless Product Catalog', 'Quotation Engine', 'Branch Locator & WhatsApp Integration'],
    gallery: ['/images/work_realestate.jpg', '/images/dashboard_hero.jpg'],
    featured: false,
  },
];

export const AGENCY_TEAM: TeamMember[] = [
  {
    name: 'Shankarsan Nayak',
    role: 'Founder & CEO',
    dept: 'Executive Leadership & Strategy',
    image: '/images/team/exec_1.png',
    bio: 'Founder of NovaSpark, driving digital innovation, scalable acquisition engines, and sustainable business growth through sharp strategy, bold creativity, and measurable performance.',
    quote: 'Your Business, Our Strategy. We turn brand ambition into predictable, compounding commercial returns.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Pranjal Sharma',
    role: 'Founding Team Member & COO',
    dept: 'Operations & Agency Scaling',
    image: '/images/team/exec_2.png',
    bio: 'Leading digital marketing operations with 12+ years of experience, focused on seamless multi-channel execution, operational excellence, and delivering consistent client success.',
    quote: 'Focused on seamless execution, operational excellence and delivering consistent client success across every single campaign.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Bikram Keshari Sahu',
    role: 'Operation Executive',
    dept: 'Delivery & Analytics Infrastructure',
    image: '/images/team/exec_4.jpg',
    bio: 'Orchestrating campaign delivery pipelines, cross-channel technical infrastructure, and strict SLA compliance for predictable client ROI.',
    quote: 'Operational rigor and precision delivery ensure every campaign produces audited, verifiable results.',
    linkedin: 'https://linkedin.com',
  },
];

export const AGENCY_CLIENT_LOGOS = [
  { name: 'Medallion House', src: '/images/clients/medallion-house.png' },
  { name: 'Ekatraa', src: '/images/clients/ekatraa.png' },
  { name: 'Sri Pandurangan Divine Fresh', src: '/images/clients/sri-pandurangan-divine-fresh.png' },
  { name: 'Weekend Bhraman', src: '/images/clients/weekend-bhraman.png' },
  { name: 'Praveen Electronics', src: '/images/clients/praveen-electronics.png' },
  { name: 'Heed', src: '/images/clients/heed.png' },
  { name: 'Travysys', src: '/images/clients/travysys.png' },
  { name: 'Sabour', src: '/images/clients/Sabour-logo.png' },
  { name: 'Zue Studio', src: '/images/clients/Zue-Studio-Logo-color (1).png' },
];

export const AGENCY_METRICS_HIGHLIGHTS = [
  { value: '+240%', label: 'Revenue Growth', sub: 'Across E-Commerce Clients' },
  { value: '+180%', label: 'Organic Search Lift', sub: 'SEO Top Keyword Rankings' },
  { value: '3.8X', label: 'Average ROAS', sub: 'Audited Paid Campaigns' },
  { value: '+380%', label: 'Qualified Inbound Leads', sub: 'High-Intent Pipeline' },
  { value: '+410%', label: 'Conversion Lift', sub: 'Post UX Optimization' },
];
