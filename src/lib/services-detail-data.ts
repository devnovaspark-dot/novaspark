export interface SubDiscipline {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  capabilities: string[];
  metrics: string;
}

export interface ServiceChallenge {
  problem: string;
  impact: string;
  ourSolution: string;
}

export interface ServiceMethodologyStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  timeframe: string;
  deliverable: string;
}

export interface ServiceDeliverableGroup {
  category: string;
  items: string[];
}

export interface ServiceWhyChoose {
  title: string;
  description: string;
  stat: string;
}

export interface ServiceCaseStudyReference {
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  summary: string;
  slug: string;
  tags: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  eyebrow: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubline: string;
  primaryMetric: {
    value: string;
    label: string;
    subtext: string;
  };
  telemetryMetrics: Array<{
    label: string;
    value: string;
    change: string;
  }>;
  brandAccent: {
    badgeBg: string;
    badgeText: string;
    gradient: string;
    border: string;
  };
  subDisciplines: SubDiscipline[];
  challenges: ServiceChallenge[];
  methodology: ServiceMethodologyStep[];
  deliverables: ServiceDeliverableGroup[];
  whyChoose: ServiceWhyChoose[];
  caseStudies: ServiceCaseStudyReference[];
  faqs: ServiceFAQ[];
  formServiceOption: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES_DETAIL_MAP: Record<string, ServiceDetail> = {
  'performance-marketing': {
    slug: 'performance-marketing',
    id: 'performance-marketing',
    title: 'Performance Marketing',
    eyebrow: 'Algorithmic Paid Media & CAC Compression',
    heroHeadline: 'Turn Ad Spend Into Predictable, Compounding',
    heroHighlight: 'Revenue Engines',
    heroSubline:
      'We orchestrate high-precision Google Ads, Meta Ads, and LinkedIn Ads unified through first-party Conversion API (CAPI) tracking, algorithmic bidding, and real-time CAC reduction.',
    primaryMetric: {
      value: '4.8X',
      label: 'Portfolio Peak ROAS',
      subtext: 'Audited across ₹12Cr+ in annual managed ad spend',
    },
    telemetryMetrics: [
      { label: 'Blended ROAS', value: '4.8X', change: '+140% vs benchmark' },
      { label: 'Customer Acq Cost (CAC)', value: '-38%', change: 'Compressed over 90 days' },
      { label: 'Attributed Revenue', value: '₹28 Cr+', change: 'Directly verified pipeline' },
      { label: 'Ad Signal Accuracy', value: '98.4%', change: 'Via server-side CAPI' },
    ],
    brandAccent: {
      badgeBg: 'bg-[#087CCB]/10',
      badgeText: 'text-[#087CCB]',
      gradient: 'from-[#071B70] via-[#087CCB] to-[#00BCEB]',
      border: 'border-[#087CCB]/30',
    },
    subDisciplines: [
      {
        id: 'google-ads',
        name: 'Google Ads (Search, PMax & Shopping)',
        tagline: 'Intercept High-Intent Commercial Demand When Buyers Are Ready to Purchase',
        badge: 'Search • Performance Max • YouTube',
        description:
          'We engineer Google Ads structures that capture users at the exact moment of commercial intent. Using granular negative keyword trees, single-theme ad groups, and first-party value-based bidding, we eliminate wasted spend and maximize impression share on bottom-of-funnel queries.',
        capabilities: [
          'Performance Max asset group optimization with clean audience signals',
          'Exact and phrase match intent architectures with negative sculpting',
          'First-party Enhanced Conversions setup via Google Tag Manager',
          'High-converting responsive search ad (RSA) copy testing matrix',
          'Competitor brand conquesting and defensive brand airspace protection',
        ],
        metrics: '4.8X Target ROAS',
      },
      {
        id: 'meta-ads',
        name: 'Meta Ads (Facebook & Instagram)',
        tagline: 'Create Visual Demand & Convert Cold Audiences at Scale',
        badge: 'Instagram Reels • Advantage+ Shopping • Stories',
        description:
          'Meta is an intent-generation machine when fueled by compelling creative. We combine high-velocity creative testing (video hooks, UGC, and static carousels) with Advantage+ Shopping Campaigns and custom server-side CAPI tracking to ensure algorithms find your highest-LTV buyers.',
        capabilities: [
          'Meta Conversion API (CAPI) server-side integration for cookieless resilience',
          'Advantage+ Shopping Campaign (ASC) restructuring and creative iteration',
          'Weekly 20+ creative hook split testing across formats and value props',
          'Dynamic product catalog ads with personalized urgency overlays',
          'Post-purchase cohort retargeting for repeat purchase velocity',
        ],
        metrics: '+240% Paid Reach',
      },
      {
        id: 'linkedin-ads',
        name: 'LinkedIn Ads (B2B Account-Based Marketing)',
        tagline: 'Target C-Suite Decision-Makers & Enterprise Buying Committees',
        badge: 'ABM • Lead Gen Forms • Thought Leader Ads',
        description:
          'For high-ACV B2B services, LinkedIn provides unmatched demographic precision. We deploy Account-Based Marketing (ABM) matched audience lists, executive Thought Leader Ads, and native friction-free Lead Gen Forms that generate qualified sales calls rather than vanity clicks.',
        capabilities: [
          'Account-Based Marketing (ABM) list matching against ICP target accounts',
          'Job function, seniority level, and company headcount precise gating',
          'Native LinkedIn Lead Gen Forms with automated CRM webhook syncing',
          'Founder & Executive Thought Leader Ad sponsorship for heightened trust',
          'Multi-stage retargeting based on document downloads and video completion',
        ],
        metrics: '62% Form Fill Rate',
      },
    ],
    challenges: [
      {
        problem: 'Skyrocketing CAC & Ad Fatigue',
        impact: 'Rising CPMs across Meta and Google erode margins, turning previously profitable campaigns into cash drains.',
        ourSolution: 'We deploy high-tempo creative sprints testing 20+ fresh visual hooks weekly, keeping ad frequency low and click-through rates elevated.',
      },
      {
        problem: 'Signal Loss & Cookieless Blind Spots',
        impact: 'iOS 14.5 and browser cookie deprecation break standard pixel tracking, causing ad algorithms to optimize for the wrong users.',
        ourSolution: 'We implement direct server-side Conversion API (CAPI) and Google Enhanced Conversions, restoring 98%+ signal fidelity to the ad algorithms.',
      },
      {
        problem: 'Vanity Metrics vs Bottom-Line Revenue',
        impact: 'Agencies report clicks, impressions, and cheap CTR while the client’s CRM shows zero qualified pipeline or closed revenue.',
        ourSolution: 'We optimize directly for closed revenue and offline sales through bi-directional CRM integration (HubSpot, Salesforce, Zoho).',
      },
    ],
    methodology: [
      {
        step: '01',
        phase: 'Sprint Phase 1',
        title: 'Full Tag, Pixel & CAPI Forensics',
        description: 'Deep audit of existing ad accounts, conversion tracking veracity, negative keyword lists, and server-side tracking health.',
        timeframe: 'Days 1 – 7',
        deliverable: 'Tracking Forensics Report & Measurement Architecture Plan',
      },
      {
        step: '02',
        phase: 'Sprint Phase 2',
        title: 'Unit Economics & CAC Threshold Modeling',
        description: 'Mathematical modeling of your allowable CAC, average order value (AOV), and customer lifetime value (LTV) to establish target ROAS.',
        timeframe: 'Days 8 – 14',
        deliverable: 'Unit Economics Dashboard & Channel Budget Allocation',
      },
      {
        step: '03',
        phase: 'Sprint Phase 3',
        title: 'Creative Velocity & Copy Matrix Build',
        description: 'Production of 20+ ad creative variants including static carousels, short-form video hooks, and enterprise copy angles.',
        timeframe: 'Days 15 – 21',
        deliverable: 'Creative Asset Matrix & Approved Campaign Blueprints',
      },
      {
        step: '04',
        phase: 'Sprint Phase 4',
        title: 'Campaign Launch & Algorithmic Calibration',
        description: 'Staged deployment of Search, PMax, Advantage+, and ABM campaigns with automated bid caps to prevent budget spillage.',
        timeframe: 'Days 22 – 45',
        deliverable: 'Live Campaigns with Real-Time Telemetry Dashboards',
      },
      {
        step: '05',
        phase: 'Sprint Phase 5',
        title: 'Aggressive CAC Compression & Cohort Scaling',
        description: 'Pruning underperforming segments, shifting budget to winning creative hooks, and expanding into lookalike and intent expansion.',
        timeframe: 'Days 46 – 90',
        deliverable: 'Audited 90-Day Performance Sprint Report & Scale Roadmap',
      },
    ],
    deliverables: [
      {
        category: 'Ad Account & Tracking Infrastructure',
        items: [
          'Meta CAPI & Google Enhanced Conversions server-side implementation',
          'Clean account structure with zero overlapping ad sets',
          'Bi-directional CRM revenue synchronization',
          'Custom Looker Studio real-time performance dashboard',
        ],
      },
      {
        category: 'Creative & Copy Assets',
        items: [
          '20+ custom ad creatives delivered per sprint (video + static)',
          'High-converting direct-response copywriting & headlines',
          'Dedicated landing page alignment recommendations',
          'Creative hook retention analytics & teardown reports',
        ],
      },
      {
        category: 'Optimization & Management',
        items: [
          'Daily bid adjustments and algorithmic pacing reviews',
          'Weekly negative keyword sculpting & search term pruning',
          'Bi-weekly live video strategy sync with senior media buyers',
          'Transparent 100% client account ownership guarantee',
        ],
      },
    ],
    whyChoose: [
      {
        title: 'Senior Practitioner Model',
        description: 'Your campaigns are managed directly by senior growth strategists with 5+ years of verified ad spend experience, never outsourced to junior interns.',
        stat: 'Zero Junior Handoffs',
      },
      {
        title: 'You Own 100% of Your Assets',
        description: 'All campaigns, pixels, custom audiences, and creative files are built directly inside your brand-owned ad accounts. You retain permanent ownership.',
        stat: '100% Asset Ownership',
      },
      {
        title: 'Strict Category Exclusivity',
        description: 'We do not run campaigns for your direct local or regional competitors. When you partner with NovaSpark, we lock down your market airspace.',
        stat: 'Guaranteed Exclusivity',
      },
    ],
    caseStudies: [
      {
        client: 'Medallion House',
        industry: 'Luxury Retail & Fine Jewelry',
        metric: '4.8X ROAS',
        metricLabel: 'Blended Paid Return',
        summary: 'Rebuilt Meta CAPI and Google Performance Max architecture, achieving +240% verified revenue lift with a 38% reduction in CAC.',
        slug: 'medallion-house',
        tags: ['Google Ads', 'Meta Ads', 'CAPI'],
      },
      {
        client: 'Ekatraa',
        industry: 'D2C Lifestyle & Home Decor',
        metric: '3.6X ROAS',
        metricLabel: 'From Cold Audiences',
        summary: 'Scaled Advantage+ Shopping Campaigns and creative hook testing, driving a 310% surge in monthly recurring order volume.',
        slug: 'ekatraa',
        tags: ['Meta Ads', 'Reels', 'Advantage+'],
      },
    ],
    faqs: [
      {
        question: 'How do you handle Google Ads vs Meta Ads vs LinkedIn Ads budget allocation?',
        answer:
          'We model budget allocation based on where your buyers exhibit existing commercial intent versus where demand must be generated. For high-search-intent categories, Google Search and PMax capture immediate demand, while Meta Ads build top-of-funnel consideration and retargeting velocity. For B2B enterprise deals, LinkedIn Ads isolate key decision-makers.',
      },
      {
        question: 'Who owns our ad accounts and creative assets?',
        answer:
          'You do—100%. We configure and manage everything directly inside your brand-owned Google, Meta, and LinkedIn business managers. If you ever pause our engagement, you retain all campaign structures, historical pixel data, and creative files.',
      },
      {
        question: 'What is your minimum recommended monthly ad budget?',
        answer:
          'To ensure statistical significance and provide ad algorithms with sufficient data points to optimize, we typically recommend a minimum paid media spend of ₹1,00,000 / month across channels.',
      },
      {
        question: 'How do you combat iOS 14.5 and cookieless tracking signal loss?',
        answer:
          'We implement direct server-side tracking using Meta Conversion API (CAPI), Google Enhanced Conversions, and first-party domain subdomains. This bypasses client-side ad blockers and cookie deprecation, ensuring 98%+ conversion event accuracy.',
      },
    ],
    formServiceOption: 'Performance Marketing (Google, Meta, LinkedIn Ads)',
    metaTitle: 'Performance Marketing Services | Google, Meta & LinkedIn Ads | NovaSpark',
    metaDescription:
      'Scale your business with high-precision Google Ads, Meta Ads, and LinkedIn Ads. NovaSpark delivers 4.8X peak ROAS with first-party CAPI attribution and CAC reduction.',
  },

  'seo-aeo-geo': {
    slug: 'seo-aeo-geo',
    id: 'seo-aeo-geo',
    title: 'SEO, AEO & GEO',
    eyebrow: 'Unified Organic Search & Generative AI Discovery',
    heroHeadline: 'Dominate Google SERPs, AI Overviews &',
    heroHighlight: 'Generative Answer Engines',
    heroSubline:
      'Search has evolved beyond ten blue links. We optimize your brand across the entire modern discovery spectrum: traditional Google rankings, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) across ChatGPT, Perplexity, and Claude.',
    primaryMetric: {
      value: '+180%',
      label: 'Organic Traffic Surge',
      subtext: 'Compounding non-brand commercial search growth',
    },
    telemetryMetrics: [
      { label: 'Organic Traffic Lift', value: '+180%', change: 'Compounding month-over-month' },
      { label: 'AI Overview Citations', value: '#1 Rank', change: 'Cited across Perplexity & Gemini' },
      { label: 'Core Web Vitals', value: '99/100', change: 'Sub-800ms LCP benchmark' },
      { label: 'Top 3 Commercial Keywords', value: '140+', change: 'High intent purchasing queries' },
    ],
    brandAccent: {
      badgeBg: 'bg-[#FFC400]/10',
      badgeText: 'text-[#FFC400]',
      gradient: 'from-[#071B70] via-[#0F172A] to-[#087CCB]',
      border: 'border-[#FFC400]/30',
    },
    subDisciplines: [
      {
        id: 'traditional-seo',
        name: 'Search Engine Optimization (SEO)',
        tagline: 'Technical Perfection & Topical Authority on Traditional Google SERPs',
        badge: 'Core Web Vitals • Technical SEO • Link Equity',
        description:
          'We engineer deep semantic topic clusters, flawless technical crawlability, and high-authority link graphs that withstand Google algorithmic updates. We optimize your information architecture to transform your domain into an undisputed topical authority.',
        capabilities: [
          'Full technical crawl audit fixing index bloat, canonical loops, and 404s',
          'Core Web Vitals speed optimization achieving sub-1s LCP on modern stacks',
          'High-intent commercial keyword mapping targeting bottom-of-funnel queries',
          'Digital PR link acquisition from high-DR industry and national publications',
          'Entity-based internal linking architecture for maximum link equity flow',
        ],
        metrics: '+180% Organic Clicks',
      },
      {
        id: 'aeo',
        name: 'Answer Engine Optimization (AEO)',
        tagline: 'Own the Direct Answer Snippets & Zero-Click Voice Queries',
        badge: 'Featured Snippets • Schema Markup • Voice Search',
        description:
          'When users ask specific questions, search engines want to provide instant, structured answers. We engineer precise JSON-LD schema markup, direct-answer definitions, and tabular data structures that claim Google Featured Snippets, Knowledge Panels, and "People Also Ask" cards.',
        capabilities: [
          'Comprehensive JSON-LD structured data (Product, Organization, FAQ, How-To)',
          '40-word concise definition blocks tailored for Featured Snippet takeover',
          'Google Knowledge Graph entity reconciliation and Wikidata alignment',
          'Voice query optimization for conversational mobile assistants (Siri, Google Assistant)',
          'Rich snippet result enhancements (star ratings, pricing, and availability)',
        ],
        metrics: '64% Snippet Win Rate',
      },
      {
        id: 'geo',
        name: 'Generative Engine Optimization (GEO)',
        tagline: 'Get Recommended & Cited in ChatGPT, Perplexity & Claude',
        badge: 'LLM Training Citations • Perplexity Citations • Brand Authority',
        description:
          'Generative AI models synthesize information from authoritative consensus sources. We structure your brand’s digital footprint so that when users ask ChatGPT, Perplexity, Claude, or Google Gemini for vendor recommendations, your brand is explicitly cited as the category leader.',
        capabilities: [
          'Digital consensus seeding across LLM crawling sources (Reddit, Quora, Medium, Press)',
          'Information gain content engineering designed to feed AI synthesis models',
          'Perplexity Source Citation optimization with verified statistical data points',
          'Brand entity token frequency amplification in authoritative trade publications',
          'LLM hallucination auditing and algorithmic brand sentiment defense',
        ],
        metrics: '#1 AI Recommendation',
      },
    ],
    challenges: [
      {
        problem: 'The Zero-Click Search Revolution',
        impact: 'Over 60% of searches now conclude on the search results page or in AI chatbots without users ever clicking to a website.',
        ourSolution: 'We optimize for Answer Engine and Generative Engine formats, ensuring your brand is prominently credited as the source and cited directly in AI summaries.',
      },
      {
        problem: 'Google Helpful Content & Core Algorithm Volatility',
        impact: 'Shallow AI-generated blog posts get decimated by Google core updates, wiping out organic traffic overnight.',
        ourSolution: 'We produce original, research-backed content with proprietary data, expert quotes, and first-party case studies that Google’s quality raters reward.',
      },
      {
        problem: 'Competitors Being Recommended by ChatGPT & Perplexity',
        impact: 'Prospects ask AI for the best solution in your category and your competitor is named while your brand remains completely invisible.',
        ourSolution: 'Our GEO framework establishes verified brand citations across high-authority knowledge hubs that modern LLMs use as grounding data.',
      },
    ],
    methodology: [
      {
        step: '01',
        phase: 'Sprint Phase 1',
        title: 'Technical & Entity Graph Forensics',
        description: 'Comprehensive audit of server speed, schema validation, indexation status, and existing brand entity footprint.',
        timeframe: 'Days 1 – 10',
        deliverable: 'Technical Health Audit & Schema Architecture Blueprint',
      },
      {
        step: '02',
        phase: 'Sprint Phase 2',
        title: 'Semantic Topic Cluster & AI Prompt Gap Analysis',
        description: 'Reverse-engineering high-intent commercial keywords alongside Perplexity and ChatGPT prompts where your brand is currently absent.',
        timeframe: 'Days 11 – 20',
        deliverable: 'Semantic Keyword Matrix & Generative Opportunity Map',
      },
      {
        step: '03',
        phase: 'Sprint Phase 3',
        title: 'High-Information-Gain Content Architecture',
        description: 'Authoring and publishing authoritative, data-rich pillar pages and direct-answer definition blocks formatted for snippet extraction.',
        timeframe: 'Days 21 – 50',
        deliverable: 'Topical Content Pillars & JSON-LD Structured Schema Live',
      },
      {
        step: '04',
        phase: 'Sprint Phase 4',
        title: 'Authority Link Equity & Digital PR Consensus',
        description: 'Securing authoritative backlinks and brand entity citations in top-tier industry publications and digital consensus sources.',
        timeframe: 'Days 51 – 75',
        deliverable: 'High-DR Backlink Placements & Press Citation Proof',
      },
      {
        step: '05',
        phase: 'Sprint Phase 5',
        title: 'Generative Tracking & Continuous Indexation',
        description: 'Auditing LLM mention frequency across ChatGPT, Perplexity, and Google AI Overviews with ongoing technical defense.',
        timeframe: 'Days 76 – 90',
        deliverable: 'Organic & Generative Share-of-Voice Audit Report',
      },
    ],
    deliverables: [
      {
        category: 'Technical & Speed Excellence',
        items: [
          'Full site Core Web Vitals remediation to 95+ score',
          'Mobile indexation and dynamic rendering audit',
          'XML sitemap, robots.txt, and canonical hierarchy cleanup',
          'Server-side caching and image WebP/AVIF compression',
        ],
      },
      {
        category: 'AEO & GEO Structured Assets',
        items: [
          'Custom nested JSON-LD schema markup across all templates',
          'Direct-answer FAQ schemas claiming Google SERP real estate',
          'Wikidata and Knowledge Graph brand entity reconciliation',
          'Perplexity & AI Overview citation verification reports',
        ],
      },
      {
        category: 'Content & Authority Equity',
        items: [
          'Comprehensive high-intent semantic topic cluster execution',
          'Proprietary data reports and comparison tables for AI ingestion',
          'White-hat editorial outreach to high-domain-authority publications',
          'Monthly ranking and generative citation trajectory reporting',
        ],
      },
    ],
    whyChoose: [
      {
        title: 'Built for the Future of Search',
        description: 'While other agencies still obsess only over 2018 keyword counts, NovaSpark optimizes for the AI algorithms and LLMs that dictate future discovery.',
        stat: 'Full-Spectrum Search',
      },
      {
        title: 'Zero Black-Hat or PBN Shortcuts',
        description: 'We adhere strictly to white-hat editorial standards and technical precision. Your domain authority compounds safely and permanently.',
        stat: '100% White-Hat Security',
      },
      {
        title: 'Commercial Intent Focus',
        description: 'We do not chase hollow high-volume informational queries. We rank pages that drive qualified phone calls, demo bookings, and transactions.',
        stat: 'Pipeline Over Vanity Traffic',
      },
    ],
    caseStudies: [
      {
        client: 'Bhubaneswar Premier Healthcare',
        industry: 'Super-Specialty Medical Practice',
        metric: '+180% Organic',
        metricLabel: 'Patient Appointments',
        summary: 'Engineered local schema, Core Web Vitals 99 score, and medical topical clusters, capturing #1 rankings for 65+ commercial healthcare queries.',
        slug: 'premier-healthcare',
        tags: ['Technical SEO', 'Schema Markup', 'Local SEO'],
      },
      {
        client: 'Enterprise SaaS Solutions',
        industry: 'B2B Cloud Software',
        metric: '#1 AI Cited',
        metricLabel: 'Across Perplexity & ChatGPT',
        summary: 'Deployed GEO consensus seeding and authoritative comparison guides, resulting in 3.4X more qualified inbound demo requests from AI search.',
        slug: 'saas-solutions',
        tags: ['GEO', 'AEO', 'Semantic SEO'],
      },
    ],
    faqs: [
      {
        question: 'What is the real difference between traditional SEO, AEO, and GEO?',
        answer:
          'Traditional SEO focuses on ranking your web pages within Google’s 10 blue organic search results. AEO (Answer Engine Optimization) structures your content with schema and concise answers so search engines can pull your content directly into Featured Snippets and voice answers. GEO (Generative Engine Optimization) optimizes your brand footprint across external authoritative datasets so that generative LLMs (ChatGPT, Claude, Perplexity) cite and recommend your brand when users ask conversational questions.',
      },
      {
        question: 'How quickly can we see measurable organic growth?',
        answer:
          'Technical crawl fixes and schema markup often produce noticeable indexation improvements within 3 to 4 weeks. Meaningful movement in competitive commercial keyword rankings and AI Overview citations typically compounds significantly between months 3 and 6 of our 90-day sprints.',
      },
      {
        question: 'Will our website get penalized by Google algorithm updates?',
        answer:
          'No. NovaSpark adheres exclusively to white-hat technical standards, human-edited subject matter expertise, and high-information-gain content. We avoid programmatic AI content spam and artificial link schemes that trigger algorithmic penalties.',
      },
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer:
          'No honest agency can guarantee a specific #1 rank because Google algorithms are proprietary and dynamic. However, we guarantee rigorous technical compliance, verified topical authority engineering, and transparent monthly performance reporting that consistently outpaces competitors.',
      },
    ],
    formServiceOption: 'SEO, AEO & GEO (Organic Search & AI Discovery)',
    metaTitle: 'SEO, AEO & GEO Services | Google & Generative AI Optimization | NovaSpark',
    metaDescription:
      'Dominate Google rankings, Google AI Overviews, and LLM citations in ChatGPT & Perplexity. NovaSpark engineers next-generation SEO, AEO, and GEO strategies.',
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    eyebrow: 'Vertical Video, Organic Reach & Community Funnels',
    heroHeadline: 'Command Cultural Attention & Convert Followers Into',
    heroHighlight: 'Brand Advocates',
    heroSubline:
      'We combine high-tempo vertical video production (Reels & Shorts), editorial visual storytelling, and automated direct message (DM) sales funnels to transform passive social scrollers into active, paying customers.',
    primaryMetric: {
      value: '+410%',
      label: 'Audience Reach Growth',
      subtext: 'Average organic reach expansion in the first 90 days',
    },
    telemetryMetrics: [
      { label: 'Organic Video Views', value: '4.2M+', change: 'Across Instagram Reels & Shorts' },
      { label: 'Hook Retention Rate', value: '68%', change: '3-second video completion benchmark' },
      { label: 'Direct DM Inquiries', value: '3,500+', change: 'Captured via automated chat funnels' },
      { label: 'Engagement Velocity', value: '5.2X', change: 'Versus sector industry averages' },
    ],
    brandAccent: {
      badgeBg: 'bg-[#FF7900]/10',
      badgeText: 'text-[#FF7900]',
      gradient: 'from-[#071B70] via-[#FF7900] to-[#FFC400]',
      border: 'border-[#FF7900]/30',
    },
    subDisciplines: [
      {
        id: 'short-form-video',
        name: 'High-Tempo Short-Form Video (Reels & Shorts)',
        tagline: 'Hook-Driven Narrative Frameworks That Stop the Endless Scroll',
        badge: 'Instagram Reels • YouTube Shorts • TikTok',
        description:
          'Vertical video is the lifeblood of modern algorithmic distribution. We produce concept-to-final-cut video content featuring irresistible 3-second visual hooks, dynamic pacing, custom sound design, and contextual on-screen typography that maximize watch time and shares.',
        capabilities: [
          'Full-service creative ideation, scriptwriting, and visual storyboarding',
          'Proprietary 3-second hook testing framework engineered for high retention',
          'Professional color grading, sound design, and kinetic typography animations',
          'Batch production sprints delivering 15–30 finished vertical videos monthly',
          'Multi-platform reformatting optimized for Instagram, YouTube, and LinkedIn',
        ],
        metrics: '68% Hook Retention',
      },
      {
        id: 'brand-curation',
        name: 'Editorial Brand Curation & Visual Grids',
        tagline: 'Establish Impeccable Aesthetic Credibility & Visual Distinction',
        badge: 'Visual Identity • Carousel Stories • Premium Design',
        description:
          'Your social feed is your modern storefront. We curate polished, editorial-grade static graphics, multi-slide educational carousels, and cohesive grid aesthetics that instantly signal luxury, authority, and professional sophistication to incoming visitors.',
        capabilities: [
          'Bespoke social design systems adhering to brand color and typography rules',
          'High-save educational carousels breaking down complex industry insights',
          'Behind-the-scenes founder storytelling and brand culture highlights',
          'Curated highlight reel covers, story templates, and link-in-bio hubs',
          'High-engagement poll and question story sequences driving daily interactions',
        ],
        metrics: '8.4% Save Rate',
      },
      {
        id: 'community-dm-funnels',
        name: 'Community Management & Inbound DM Funnels',
        tagline: 'Turn Comments and Story Replies Into Qualified Sales Conversations',
        badge: 'ManyChat Funnels • Lead Capture • Comment-to-DM',
        description:
          'Engagement without conversion is a missed opportunity. We deploy automated, compliant Comment-to-DM funnels. When users comment on a video, an intelligent workflow instantly delivers lead magnets, pricing guides, or consultation links directly to their inbox.',
        capabilities: [
          'Compliant Meta-approved Comment-to-DM automation workflows',
          'Lead magnet delivery and instant email/phone capture in the chat stream',
          'Dedicated community management responding to comments within 15 minutes',
          'Direct integration syncing qualified social leads straight into your CRM',
          'VIP client direct messaging sequences for high-ticket service inquiries',
        ],
        metrics: '3,500+ Qualified Leads',
      },
    ],
    challenges: [
      {
        problem: 'Stagnant Algorithmic Reach & Low Watch Time',
        impact: 'Platforms punish boring or slow-starting content, leaving your brand shouting into an empty void.',
        ourSolution: 'We structure every video with psychological retention hooks, fast visual pacing, and pattern interrupts that trigger viral distribution algorithms.',
      },
      {
        problem: 'Likes and Followers That Never Convert to Revenue',
        impact: 'A large following that doesn’t buy creates a false sense of success while marketing budgets are drained.',
        ourSolution: 'We install automated DM conversion pathways that turn casual viewers into segmented, qualified email leads and booked sales calls.',
      },
      {
        problem: 'Inconsistent Content Delivery & Creative Burnout',
        impact: 'Posting sporadically kills algorithmic momentum and makes brands look abandoned or unprofessional.',
        ourSolution: 'Our streamlined production sprints batch-create an entire month of high-quality content in single focused filming sessions.',
      },
    ],
    methodology: [
      {
        step: '01',
        phase: 'Sprint Phase 1',
        title: 'Audience Persona & Viral Pattern Forensics',
        description: 'Analyzing high-performing content trends in your vertical, competitor gaps, and top visual hooks.',
        timeframe: 'Days 1 – 7',
        deliverable: 'Social Content Strategy & Content Pillar Roadmap',
      },
      {
        step: '02',
        phase: 'Sprint Phase 2',
        title: 'Scriptwriting & Storyboard Architecture',
        description: 'Crafting 20+ viral script concepts with strong hook variations, educational meat, and conversion CTAs.',
        timeframe: 'Days 8 – 14',
        deliverable: 'Approved Monthly Production Scriptbook',
      },
      {
        step: '03',
        phase: 'Sprint Phase 3',
        title: 'Filming, Motion Graphics & Sound Design',
        description: 'Executing high-definition capture, kinetic typography animations, color grading, and audio mastering.',
        timeframe: 'Days 15 – 30',
        deliverable: 'Full Suite of Edited Vertical Video & Carousel Assets',
      },
      {
        step: '04',
        phase: 'Sprint Phase 4',
        title: 'DM Automation & Publishing Deployment',
        description: 'Setting up automated comment-to-DM conversational funnels and scheduling content at peak algorithmic engagement hours.',
        timeframe: 'Days 31 – 60',
        deliverable: 'Active Automated Lead Funnels & Consistent Publishing',
      },
      {
        step: '05',
        phase: 'Sprint Phase 5',
        title: 'Audience Analytics & Conversion Iteration',
        description: 'Measuring retention drop-off graphs, save rates, and DM lead conversion ratios to optimize subsequent sprints.',
        timeframe: 'Days 61 – 90',
        deliverable: 'Quarterly Growth Performance Audit & Scale Blueprint',
      },
    ],
    deliverables: [
      {
        category: 'Content Assets',
        items: [
          '16–24 professionally edited vertical videos (Reels/Shorts) monthly',
          '8–12 premium educational carousel posts and infographic slides',
          'Daily interactive Instagram Story sequences with engagement polls',
          'Custom brand-aligned link-in-bio page with conversion tracking',
        ],
      },
      {
        category: 'Growth & Automation Tech',
        items: [
          'Automated Comment-to-DM lead generation workflows (ManyChat)',
          'Direct webhook integration routing leads to your CRM',
          'Sound design and commercial audio licensing clearance',
          'Real-time content calendar with collaborative preview approvals',
        ],
      },
      {
        category: 'Management & Reporting',
        items: [
          'Active comment monitoring and spam filtering',
          'Influencer collaboration identification and outreach management',
          'Monthly retention analytics teardown and creative review',
          'Dedicated creative director and motion graphic specialist',
        ],
      },
    ],
    whyChoose: [
      {
        title: 'Turnkey Video Production',
        description: 'We handle everything from scripting and storyboards to motion graphics and sound design. You never have to worry about creative block.',
        stat: 'Turnkey Execution',
      },
      {
        title: 'Direct Focus on Inbound Revenue',
        description: 'We measure success in inbound sales inquiries and booked consultations, not just vanity follower counts.',
        stat: 'Revenue-Driven Social',
      },
      {
        title: 'Elite Motion Graphics Quality',
        description: 'Our in-house design team produces broadcast-quality motion graphics and typography that elevate your brand far above competitors.',
        stat: 'Broadcast Standards',
      },
    ],
    caseStudies: [
      {
        client: 'Ekatraa Artisanal Decor',
        industry: 'D2C Lifestyle & Home Aesthetics',
        metric: '+410% Reach',
        metricLabel: 'Organic Reel Views',
        summary: 'Produced 45 vertical craft storytelling reels, generating 2.8M views and over 1,200 direct customer DM order inquiries in 60 days.',
        slug: 'ekatraa',
        tags: ['Instagram Reels', 'DM Funnels', 'Visual Curation'],
      },
      {
        client: 'Bhubaneswar Premier Fitness',
        industry: 'Premium Fitness & Wellness',
        metric: '320+ Leads',
        metricLabel: 'From Automated DMs',
        summary: 'Installed Comment-to-DM automation on workout transformation reels, turning 4,000+ comments into qualified personal training trials.',
        slug: 'premier-fitness',
        tags: ['ManyChat', 'Shorts', 'Lead Gen'],
      },
    ],
    faqs: [
      {
        question: 'Do we need to be on camera ourselves for short-form video?',
        answer:
          'Not necessarily. While founder-led and practitioner-led videos build exceptional trust, we produce a wide variety of faceless formats, including motion graphic animations, product cinematography, voiceover breakdowns, and curated b-roll that perform equally well.',
      },
      {
        question: 'How do Comment-to-DM funnels work without getting our account flagged?',
        answer:
          'We use official Meta-approved API integrations (such as ManyChat) that adhere strictly to Meta Platform Policies. Users explicitly opt in by commenting a trigger keyword (e.g., "BLUEPRINT"), prompting an instantaneous, personalized message containing their requested resource.',
      },
      {
        question: 'Which social platforms do you specialize in?',
        answer:
          'Our core focus is Instagram, YouTube Shorts, and LinkedIn for B2B brands. Because vertical video formats are universal, we syndicate winning video assets seamlessly across Instagram, Shorts, and LinkedIn to maximize your ROI per asset.',
      },
      {
        question: 'Who writes the scripts and determines the creative concepts?',
        answer:
          'Our dedicated creative directors and copywriters write all scripts, hooks, and storyboards. We review them with your team in batch approval cycles before production begins, ensuring 100% brand tone accuracy.',
      },
    ],
    formServiceOption: 'Social Media Marketing (Vertical Video & Community)',
    metaTitle: 'Social Media Marketing Services | Instagram Reels & Video | NovaSpark',
    metaDescription:
      'Scale your audience with high-tempo vertical video production, editorial brand curation, and automated DM lead funnels with NovaSpark.',
  },

  'content-marketing': {
    slug: 'content-marketing',
    id: 'content-marketing',
    title: 'Content Marketing',
    eyebrow: 'High-Intent ICP Content & Buyer Enablement',
    heroHeadline: 'Authoritative Content Engineered to Educate, Convince &',
    heroHighlight: 'Close High-Value Deals',
    heroSubline:
      'We author bottom-of-funnel conversion assets, founder thought leadership, and semantic whitepapers that shorten sales cycles, overcome buyer skepticism, and establish category authority.',
    primaryMetric: {
      value: '3.2X',
      label: 'Pipeline Velocity Lift',
      subtext: 'Shortened B2B sales cycles via high-intent buyer content',
    },
    telemetryMetrics: [
      { label: 'Pipeline Acceleration', value: '3.2X', change: 'Faster enterprise deal velocity' },
      { label: 'Sales Cycle Reduction', value: '-42%', change: 'Time saved from demo to close' },
      { label: 'BOFU Guide Engagement', value: '74%', change: 'Average read-through completion' },
      { label: 'Earned Press Citations', value: '35+', change: 'From original research studies' },
    ],
    brandAccent: {
      badgeBg: 'bg-[#00BCEB]/10',
      badgeText: 'text-[#00BCEB]',
      gradient: 'from-[#071B70] via-[#087CCB] to-[#00BCEB]',
      border: 'border-[#00BCEB]/30',
    },
    subDisciplines: [
      {
        id: 'bofu-content',
        name: 'Bottom-of-Funnel (BOFU) Comparison Guides',
        tagline: 'Capture Prospects When They Are Actively Deciding Between Vendors',
        badge: 'Competitor Comparisons • Alternative Guides • Teardowns',
        description:
          'Buyers near the finish line search for comparison teardowns and alternative analyses. We produce objective, highly detailed comparison guides, pricing transparency teardowns, and ROI calculators that position your solution as the definitive choice.',
        capabilities: [
          'Direct competitor comparison tables highlighting unique differentiators',
          '"Best Alternatives to [Competitor]" commercial ranking guides',
          'Interactive ROI and cost-savings calculators embedded on page',
          'Unbiased technical feature breakdowns addressing common buyer objections',
          'High-converting landing page formatting with embedded booking widgets',
        ],
        metrics: '74% BOFU Read Rate',
      },
      {
        id: 'thought-leadership',
        name: 'Founder & Executive Thought Leadership',
        tagline: 'Turn C-Suite Knowledge Into Magnetic Industry Influence',
        badge: 'LinkedIn Ghostwriting • Keynotes • Op-Eds',
        description:
          'People buy from trusted leaders, not faceless corporations. We ghostwrite provocative, insight-rich LinkedIn essays, industry keynote presentations, and national press op-eds for founders and executives that command respect and spark inbound investor and client inquiries.',
        capabilities: [
          'Bi-weekly executive audio interview sessions extracting raw tactical insights',
          'Ghostwritten LinkedIn long-form essays and high-engagement carousel breakdowns',
          'Bespoke keynote slide decks for industry conferences and panels',
          'B2B podcast preparation and post-interview snippet syndication',
          'Thought Leader Ad sponsorship optimization amplifying top executive posts',
        ],
        metrics: '4.5X Profile Views',
      },
      {
        id: 'research-reports',
        name: 'Original Research Reports & Semantic Whitepapers',
        tagline: 'Create Benchmark Data That the Entire Industry Cites',
        badge: 'State of the Industry • Benchmark Studies • Surveys',
        description:
          'Original proprietary research is the gold standard of B2B content marketing. We design, survey, and analyze industry benchmark reports that earn natural high-authority media mentions, generate thousands of MQL downloads, and cement your status as the definitive authority.',
        capabilities: [
          'Proprietary survey design and statistical analysis across verified ICP cohorts',
          'Editorial whitepaper design with custom data visualizations and charts',
          'Gated PDF distribution funnels with instant lead enrichment',
          'Digital PR outreach pitching report discoveries to tier-1 business journalists',
          'Repurposing report findings into 20+ social snippets and webinar presentations',
        ],
        metrics: '35+ Press Mentions',
      },
    ],
    challenges: [
      {
        problem: 'Fluffy Informational Content That Never Converts',
        impact: 'Thousands of blog visits from students or job seekers that generate zero qualified sales pipeline.',
        ourSolution: 'We focus obsessively on Pain-Point SEO and Bottom-of-Funnel content addressing the exact friction points experienced by real buyers.',
      },
      {
        problem: 'Sales Reps Handcuffed by Weak Marketing Collateral',
        impact: 'Sales teams spend hours answering repetitive prospect objections over email without authoritative assets to send.',
        ourSolution: 'We build comprehensive Buyer Enablement Toolkits (teardowns, one-pagers, case studies) that sales reps use to shorten deal cycles.',
      },
      {
        problem: 'Generic AI-Generated Spam Damaging Brand Prestige',
        impact: 'Cheap AI-written articles make your company look amateurish and trigger Google algorithmic search penalties.',
        ourSolution: 'Every piece is researched, written, and fact-checked by veteran subject-matter editors with deep industry domain knowledge.',
      },
    ],
    methodology: [
      {
        step: '01',
        phase: 'Sprint Phase 1',
        title: 'Customer Interview & Objection Forensics',
        description: 'Listening to sales call recordings and interviewing recent buyers to unearth exact buying triggers and hesitations.',
        timeframe: 'Days 1 – 10',
        deliverable: 'Buyer ICP Objection Matrix & Content Charter',
      },
      {
        step: '02',
        phase: 'Sprint Phase 2',
        title: 'Bottom-of-Funnel Editorial Architecture',
        description: 'Mapping high-intent competitor comparison keywords and outlining high-impact whitepaper themes.',
        timeframe: 'Days 11 – 20',
        deliverable: 'Editorial Roadmap & Technical Outline Dossiers',
      },
      {
        step: '03',
        phase: 'Sprint Phase 3',
        title: 'Authoring & Custom Data Visualization',
        description: 'Drafting authoritative long-form content, conducting data surveys, and designing bespoke diagrams and charts.',
        timeframe: 'Days 21 – 50',
        deliverable: 'Finished Whitepapers, Guides & Comparison Assets',
      },
      {
        step: '04',
        phase: 'Sprint Phase 4',
        title: 'Sales Enablement & Distribution Syndication',
        description: 'Arming your sales team with PDF one-pagers while syndicating snippets across LinkedIn and executive profiles.',
        timeframe: 'Days 51 – 70',
        deliverable: 'Sales Collateral Toolkit & Syndicated Press Distribution',
      },
      {
        step: '05',
        phase: 'Sprint Phase 5',
        title: 'Pipeline Attribution & Deal Velocity Analysis',
        description: 'Tracking how many closed-won enterprise deals touched these content assets during their evaluation cycles.',
        timeframe: 'Days 71 – 90',
        deliverable: 'Content Influence Revenue Report & Next-Quarter Sprints',
      },
    ],
    deliverables: [
      {
        category: 'High-Intent Written Assets',
        items: [
          '4–6 in-depth Bottom-of-Funnel comparison and teardown guides',
          '8–12 ghostwritten LinkedIn executive thought leadership essays',
          '1 comprehensive original industry research whitepaper or benchmark report',
          'Interactive ROI and savings calculators for on-site conversion',
        ],
      },
      {
        category: 'Visual & Sales Collateral',
        items: [
          'Custom infographic diagrams, charts, and data visualizations',
          'Print-ready and interactive digital PDF versions for sales reps',
          'Slide decks tailored for keynote speeches and prospective webinars',
          'Email follow-up templates referencing key content sections',
        ],
      },
      {
        category: 'Strategy & Tracking',
        items: [
          'Full-funnel content attribution tracking inside your CRM',
          'Quarterly customer objection audits and sales team interviews',
          'Whitepaper gate optimization and lead capture sequence workflows',
          'SEO optimization ensuring content ranks for high-intent queries',
        ],
      },
    ],
    whyChoose: [
      {
        title: 'Written by Domain Practitioners',
        description: 'We do not hire generic freelance generalists. Our content is written by seasoned copywriters with real expertise in your sector.',
        stat: 'Domain Expertise',
      },
      {
        title: 'Directly Aligned With Sales Pipeline',
        description: 'We judge content success by whether it helped your sales reps close a $50k deal, not how many passive impressions it generated.',
        stat: 'Deal Acceleration',
      },
      {
        title: 'Complete Executive Ghostwriting Support',
        description: 'We require only 45 minutes of founder time per month to produce a steady stream of authoritative LinkedIn thought leadership.',
        stat: '45 Mins / Month Founder Time',
      },
    ],
    caseStudies: [
      {
        client: 'Industrial B2B Manufacturing',
        industry: 'Precision Engineering & Export',
        metric: '3.2X Pipeline',
        metricLabel: 'From Comparison Guides',
        summary: 'Created comprehensive international specification comparison guides, reducing customer sales hesitation and generating ₹4.2 Cr in qualified enterprise tenders.',
        slug: 'industrial-manufacturing',
        tags: ['Whitepapers', 'BOFU Content', 'B2B'],
      },
      {
        client: 'FinTech Wealth Platform',
        industry: 'Financial Technology & Asset Mgmt',
        metric: '-42% Sales Cycle',
        metricLabel: 'Faster HNI Onboarding',
        summary: 'Penned executive thought leadership pieces and tax optimization whitepapers, shortening enterprise client onboarding cycles from 9 weeks to 5 weeks.',
        slug: 'fintech-wealth',
        tags: ['Thought Leadership', 'Ghostwriting', 'FinTech'],
      },
    ],
    faqs: [
      {
        question: 'How do you ensure the content reflects our executive voice and technical nuance?',
        answer:
          'We begin every engagement with an executive voice calibration session. We record 30-to-45-minute audio interviews with your subject-matter experts, capturing your authentic vocabulary, industry perspectives, and real-world anecdotes before writing a single sentence.',
      },
      {
        question: 'Does this content also rank on search engines like Google?',
        answer:
          'Yes. Every piece is architected with semantic topic clustering, entity schema markup, and high-intent keyword optimization so that it ranks on Google while simultaneously providing immense value to human readers.',
      },
      {
        question: 'What is "Bottom-of-Funnel" (BOFU) content and why does it convert better?',
        answer:
          'Top-of-funnel content targets broad questions like "What is performance marketing?". Bottom-of-funnel content targets prospects on the verge of purchase, searching for queries like "NovaSpark vs Competitor X", "Best alternatives for enterprise healthcare", or "Pricing breakdowns". BOFU content converts at up to 10X higher rates because buyer intent is already established.',
      },
      {
        question: 'Can our sales team use these assets in outreach and follow-ups?',
        answer:
          'Absolutely. We design every asset in both web format and downloadable, beautifully branded PDF one-pagers specifically formatted for sales reps to send during active deals to disarm buyer objections.',
      },
    ],
    formServiceOption: 'Content Marketing (Thought Leadership & Buyer Assets)',
    metaTitle: 'Content Marketing Services | Thought Leadership & BOFU Content | NovaSpark',
    metaDescription:
      'Shorten sales cycles with authoritative Bottom-of-Funnel content, executive thought leadership, and semantic whitepapers from NovaSpark.',
  },

  'web-design-development': {
    slug: 'web-design-development',
    id: 'web-design-development',
    title: 'Web Design & Development',
    eyebrow: 'Custom Next.js Engineering, UI/UX & CRO Architecture',
    heroHeadline: 'High-Speed Websites & Digital Experiences Engineered for',
    heroHighlight: 'Maximum Conversion',
    heroSubline:
      'Stop losing paid and organic traffic to slow, template-based websites. We design and build bespoke Next.js web applications, interactive brand experiences, and high-converting landing pages that load in under 800ms and turn visitors into qualified revenue.',
    primaryMetric: {
      value: '99/100',
      label: 'Core Web Vitals Score',
      subtext: 'Sub-800ms LCP across production deployments',
    },
    telemetryMetrics: [
      { label: 'Page Load Speed', value: '< 0.8s', change: 'Edge-cached Next.js rendering' },
      { label: 'Conversion Lift', value: '+64%', change: 'CRO-engineered user journeys' },
      { label: 'Lighthouse Score', value: '99/100', change: 'Performance, SEO & Accessibility' },
      { label: 'Uptime & Security', value: '99.99%', change: 'Enterprise SSL & CI/CD pipelines' },
    ],
    brandAccent: {
      badgeBg: 'bg-[#071B70]/10',
      badgeText: 'text-[#071B70]',
      gradient: 'from-[#071B70] via-[#0F172A] to-[#087CCB]',
      border: 'border-[#071B70]/30',
    },
    subDisciplines: [
      {
        id: 'ui-ux-design',
        name: 'Bespoke UI/UX & Brand Design Systems',
        tagline: 'Distinctive Editorial Interfaces Built Around Buyer Psychology',
        badge: 'Figma Systems • Interactive Prototypes • Brand UI',
        description:
          'Generic templates erode brand authority before a prospect reads a single word. Our senior UI/UX designers craft bespoke design systems, typography hierarchies, and interactive user flows tailored to your category—building immediate trust and guiding visitors effortlessly toward action.',
        capabilities: [
          'Comprehensive Figma design systems with reusable tokens and components',
          'User journey mapping and friction-elimination wireframing',
          'Mobile-first responsive layouts engineered for thumb-friendly navigation',
          'Subtle motion design and micro-interactions that elevate brand perception',
          'WCAG AA accessibility compliance and high-contrast visual clarity',
        ],
        metrics: '+64% UX Engagement',
      },
      {
        id: 'nextjs-engineering',
        name: 'Custom Next.js & Full-Stack Web Engineering',
        tagline: 'Blazing-Fast Modern Web Infrastructure Built for Scale',
        badge: 'Next.js App Router • TypeScript • Sub-800ms LCP',
        description:
          'Marketing cannot succeed on bloated, slow legacy CMS themes. Our senior software engineers build custom Next.js and React web applications achieving sub-800ms load times, clean semantic HTML for SEO/AEO, and reliable bi-directional CRM and payment integrations.',
        capabilities: [
          'Custom Next.js, React, and Tailwind CSS architecture with 99+ Core Web Vitals',
          'Server-side rendering (SSR) and static generation for instant page loads',
          'Seamless headless CMS integration (Sanity, Strapi, WordPress API) for easy edits',
          'Bi-directional CRM & MarTech pipelines (HubSpot, Salesforce, Zoho, GA4)',
          'Enterprise security hardening, automated SSL, and zero-downtime deployments',
        ],
        metrics: 'Sub-800ms Speed',
      },
      {
        id: 'cro-landing-pages',
        name: 'CRO Landing Pages & Interactive Funnels',
        tagline: 'Turn Ad Clicks Into Qualified Leads & Checkout Revenue',
        badge: 'Landing Pages • Interactive Calculators • A/B Testing',
        description:
          'Sending expensive Google or Meta ad traffic to a generic homepage wastes budget. We engineer dedicated, message-matched landing pages, multi-step lead qualification forms, and interactive ROI calculators designed specifically to maximize conversion rates and lower CPA.',
        capabilities: [
          'Message-matched campaign landing pages aligned to ad creative and intent',
          'Multi-step interactive lead forms, booking engines, and ROI calculators',
          'Heatmap, scroll-depth, and session recording diagnostics to fix drop-offs',
          'Server-side CAPI & conversion event tracking wired into every CTA',
          'Rapid A/B headline, offer, and layout experimentation',
        ],
        metrics: '3.2X Lead Rate',
      },
    ],
    challenges: [
      {
        problem: 'Slow, Bloated Template Websites Killing Ad ROI',
        impact: 'Every additional second of mobile load time slashes conversion rates by up to 20%, inflating your cost per acquisition.',
        ourSolution: 'We engineer custom Next.js web applications that load in under 800 milliseconds and pass Core Web Vitals out of the box.',
      },
      {
        problem: 'Generic Layouts That Look Like Every Competitor',
        impact: 'Buyers equate cookie-cutter templates with low-tier service providers, forcing you to compete on price alone.',
        ourSolution: 'Bespoke UI/UX design systems and editorial storytelling that position your brand as the clear category leader.',
      },
      {
        problem: 'Disconnected Forms, Broken Tracking & Leaking Leads',
        impact: 'Prospects drop off on clunky mobile forms, and your ad platforms never receive accurate conversion feedback.',
        ourSolution: 'Frictionless multi-step intake flows integrated directly with your CRM, WhatsApp alerts, and first-party server-side tracking.',
      },
    ],
    methodology: [
      {
        step: '01',
        phase: 'Sprint Phase 1',
        title: 'UX Audit, Information Architecture & Funnel Mapping',
        description: 'Auditing current site speed, analytics drop-off points, competitor positioning, and mapping the optimal buyer journey.',
        timeframe: 'Week 1',
        deliverable: 'UX Architecture Blueprint & Conversion Wireframes',
      },
      {
        step: '02',
        phase: 'Sprint Phase 2',
        title: 'Bespoke UI Design & Interactive Prototyping',
        description: 'Crafting high-fidelity desktop and mobile UI designs, brand typography, custom graphics, and interactive component states.',
        timeframe: 'Weeks 2 – 3',
        deliverable: 'Approved Figma Design System & Interactive Prototype',
      },
      {
        step: '03',
        phase: 'Sprint Phase 3',
        title: 'Full-Stack Next.js Development & CMS Setup',
        description: 'Clean, modular TypeScript and Next.js engineering with responsive layouts, smooth animations, and easy content management.',
        timeframe: 'Weeks 4 – 5',
        deliverable: 'Staging Environment With Live Interactive Features',
      },
      {
        step: '04',
        phase: 'Sprint Phase 4',
        title: 'MarTech, CRM & Technical SEO Wiring',
        description: 'Configuring GA4, Meta/Google CAPI tracking, CRM webhooks, Schema markup, XML sitemaps, and Core Web Vitals optimization.',
        timeframe: 'Week 6',
        deliverable: '99+ Lighthouse Audit & Verified Lead Attribution',
      },
      {
        step: '05',
        phase: 'Sprint Phase 5',
        title: 'QA Testing, Launch & Post-Launch CRO',
        description: 'Cross-browser and mobile device testing, zero-downtime DNS cutover, and ongoing heatmap-driven conversion optimization.',
        timeframe: 'Launch & Ongoing',
        deliverable: 'Production Website & Continuous CRO Iteration',
      },
    ],
    deliverables: [
      {
        category: 'UI/UX & Brand Design Systems',
        items: [
          'Complete Figma design system (colors, typography, components)',
          'Custom desktop, tablet, and mobile responsive page designs',
          'Conversion copywriting and clear value-proposition hierarchy',
          'Custom iconography, 3D/editorial visuals, and motion specs',
        ],
      },
      {
        category: 'Full-Stack Web Engineering',
        items: [
          'Custom Next.js / React codebase with TypeScript & Tailwind CSS',
          'Sub-800ms page load speeds and 99+ Core Web Vitals optimization',
          'Headless CMS or admin dashboard for effortless content updates',
          'Technical SEO architecture (Schema.org, metadata, sitemaps)',
        ],
      },
      {
        category: 'Conversion & MarTech Integrations',
        items: [
          'Bi-directional CRM integration (HubSpot, Salesforce, Zoho)',
          'Custom interactive booking engines, quizzes, and calculators',
          'GA4, GTM, and server-side conversion tracking setup',
          'Automated lead routing and instant email/WhatsApp notifications',
        ],
      },
    ],
    whyChoose: [
      {
        title: 'Built for Revenue, Not Just Aesthetics',
        description: 'Every headline, layout, and button placement is informed by direct-response conversion principles and real user behavior data.',
        stat: '+64% Avg. CRO Lift',
      },
      {
        title: 'Modern Software Engineering Standards',
        description: 'We don’t assemble fragile plugin-heavy WordPress themes. We write clean, maintainable Next.js code that scales securely.',
        stat: '99+ Core Vitals',
      },
      {
        title: 'Seamless Alignment With Your Marketing Stack',
        description: 'Because we also run SEO and paid acquisition, your new site launches natively ready to rank on Google and convert paid clicks.',
        stat: '100% Marketing-Ready',
      },
    ],
    caseStudies: [
      {
        client: 'Eastern India Premier Conglomerate',
        industry: 'Multi-Unit Retail & Real Estate',
        metric: '3.8X Growth',
        metricLabel: 'Conversion & Lead Surge',
        summary: 'Modernized legacy web architecture onto Next.js with custom property inquiry funnels and sub-800ms speed, unlocking ₹18 Cr in new asset sales.',
        slug: 'premier-conglomerate',
        tags: ['Next.js', 'UI/UX', 'CRO Funnels'],
      },
      {
        client: 'Medallion House Fine Jewelry',
        industry: 'Luxury Retail',
        metric: '+240% Revenue',
        metricLabel: 'With -38% Lower CAC',
        summary: 'Redesigned luxury digital storefront and showroom appointment booking flow, dramatically lifting mobile conversion rates.',
        slug: 'medallion-house',
        tags: ['Luxury UI/UX', 'Booking CRO', 'Speed'],
      },
    ],
    faqs: [
      {
        question: 'Why do you build websites with Next.js instead of standard WordPress templates?',
        answer:
          'Standard template websites rely on heavy plugins that slow down page speeds, create security vulnerabilities, and hurt Google rankings. Next.js delivers near-instant page loads (<800ms), 99+ Core Web Vitals scores, superior security, and complete design freedom—while still connecting cleanly to a CMS if your team wants to edit content easily.',
      },
      {
        question: 'How long does it take to design and launch a custom website?',
        answer:
          'Most bespoke marketing websites and high-converting landing page systems launch within 4 to 6 weeks from kickoff, following our structured 5-sprint process covering UX wireframes, visual design, engineering, tracking, and QA.',
      },
      {
        question: 'Will we be able to update text, images, and case studies ourselves?',
        answer:
          'Yes. We can pair your Next.js frontend with a clean, intuitive headless CMS or custom admin panel so your marketing team can publish blog posts, update case studies, and edit copy without touching code.',
      },
      {
        question: 'Do you handle SEO, analytics tracking, and CRM integration during the build?',
        answer:
          'Absolutely. Every website we launch includes technical SEO fundamentals (semantic HTML, structured Schema markup, dynamic sitemaps, meta tags), GA4/CAPI event tracking, and direct lead routing to your CRM or email.',
      },
    ],
    formServiceOption: 'Web Design & Development (Next.js & UI/UX)',
    metaTitle: 'Web Design & Development Services | Custom Next.js & UI/UX | NovaSpark',
    metaDescription:
      'High-speed custom websites, bespoke UI/UX design systems, and conversion-engineered landing pages built with Next.js by NovaSpark.',
  },

  'amazon-marketing-ppc': {
    slug: 'amazon-marketing-ppc',
    id: 'amazon-marketing-ppc',
    title: 'Amazon Marketing & PPC',
    eyebrow: 'Marketplace Dominance, Buy Box Defense & ACoS Compression',
    heroHeadline: 'Conquer Competitor ASINs, Slash ACoS & Dominate',
    heroHighlight: 'Amazon Marketplaces',
    heroSubline:
      'We orchestrate high-precision Amazon PPC (Sponsored Products, Brands & Video), programmatic Amazon DSP, aggressive Buy Box defense, and conversion-optimized A+ Brand Storefronts to turn Amazon into your most profitable revenue channel.',
    primaryMetric: {
      value: '-32%',
      label: 'Average ACoS Reduction',
      subtext: 'Across scaled marketplace brand catalogs',
    },
    telemetryMetrics: [
      { label: 'ACoS Reduction', value: '-32%', change: 'Compressed over 90-day sprints' },
      { label: 'Best Seller Rank (BSR)', value: '+145%', change: 'Organic sales velocity boost' },
      { label: 'Storefront Conversion', value: '4.2X', change: 'Via interactive A+ Premium modules' },
      { label: 'Ad Sales Attributed', value: '₹9.4 Cr+', change: 'Amazon marketplace revenue' },
    ],
    brandAccent: {
      badgeBg: 'bg-[#FF7900]/10',
      badgeText: 'text-[#FF7900]',
      gradient: 'from-[#071B70] via-[#FF7900] to-[#FFC400]',
      border: 'border-[#FF7900]/30',
    },
    subDisciplines: [
      {
        id: 'amazon-ppc',
        name: 'Amazon PPC (Sponsored Products, Brands & Video)',
        tagline: 'Algorithmic Bid Management & Laser-Focused Keyword Harvesting',
        badge: 'Sponsored Products • Sponsored Brands • Video Ads',
        description:
          'We engineer granular Amazon ad account architectures separated by intent, match type, and product tier. Using daily dayparting, bid adjustments, and automated search term harvesting, we continuously move high-converting customer search terms into exact match campaigns while isolating wasted spend.',
        capabilities: [
          'Granular exact, phrase, and broad match isolation with automated negative harvesting',
          'Sponsored Brands video creative production delivering 40%+ CTR improvements',
          'Custom dayparting bid schedules boosting bids during peak shopping hours',
          'Target ACoS and Total ACoS (TACoS) monitoring preserving gross product margins',
          'Top-of-Search placement bid modifier optimization for highest-converting keywords',
        ],
        metrics: '-32% ACoS Reduction',
      },
      {
        id: 'amazon-dsp',
        name: 'Amazon DSP (Demand-Side Platform)',
        tagline: 'Programmatic Retargeting On & Off Amazon Ecosystems',
        badge: 'Programmatic DSP • Audience Retargeting • Twitch & Prime',
        description:
          'Amazon DSP unlocks programmatic access to shoppers across the web, mobile apps, Twitch, and Prime Video. We retarget shoppers who viewed your product or competitor ASINs but didn’t purchase, as well as driving cross-sell opportunities to past brand purchasers.',
        capabilities: [
          'Shopper retargeting targeting cart abandoners and product detail page viewers',
          'Competitor conquesting targeting shoppers who viewed rival ASINs in the last 30 days',
          'Cross-sell and upsell audience modeling targeting existing brand customers',
          'High-impact video and responsive display ad creatives tailored for Amazon DSP',
          'Frequency capping preventing ad fatigue across programmatic web placements',
        ],
        metrics: '3.6X DSP Return',
      },
      {
        id: 'listing-cro-storefront',
        name: 'Listing Optimization, A+ Content & Buy Box Defense',
        tagline: 'Transform Product Detail Pages Into Irresistible Conversion Engines',
        badge: 'A+ Premium Content • Brand Store • Buy Box Defense',
        description:
          'Traffic without conversion is wasted capital. We redesign your Amazon product detail pages with 3D product renders, benefit-focused infographics, keyword-dense backend search terms, and luxury A+ Brand Story modules that elevate perceived value and lift conversions.',
        capabilities: [
          'A+ Content and Brand Story design featuring immersive lifestyle graphics',
          'Backend search term and indexing optimization maximizing organic keyword visibility',
          'Multi-page Amazon Brand Store design enhancing organic average order value',
          'Automated Buy Box monitoring and unauthorized reseller suppression alerts',
          'Review velocity strategies compliant with Amazon Customer Review policies',
        ],
        metrics: '4.2X Storefront CRO',
      },
    ],
    challenges: [
      {
        problem: 'Runaway ACoS Eating Product Margins',
        impact: 'High bids on broad keywords generate clicks that drain profits without resulting in profitable unit sales.',
        ourSolution: 'We implement strict single-keyword ad groups (SKAGs), automated negative keyword harvesting, and dayparting to compress ACoS by 30%+.',
      },
      {
        problem: 'Rogue Sellers Hijacking Your Buy Box',
        impact: 'Unauthorized third-party sellers undercut prices or ship counterfeits, stealing sales and damaging brand trust.',
        ourSolution: 'We deploy 24/7 Buy Box defense telemetry, Brand Registry protections, and Cease-and-Desist enforcement to reclaim buy box ownership.',
      },
      {
        problem: 'Low-Converting Product Listings',
        impact: 'Poor imagery, sparse bullet points, and missing A+ Content cause paid shoppers to bounce straight to competitor listings.',
        ourSolution: 'Our in-house 3D designers and direct-response copywriters rebuild your listings into conversion-optimized digital retail assets.',
      },
    ],
    methodology: [
      {
        step: '01',
        phase: 'Sprint Phase 1',
        title: 'ASIN Profitability & Listing Health Forensics',
        description: 'Auditing current listing indexation, backend keywords, conversion rates, Buy Box stability, and historical ad spend efficiency.',
        timeframe: 'Days 1 – 10',
        deliverable: 'Amazon Account Forensics Audit & ASIN Priority Matrix',
      },
      {
        step: '02',
        phase: 'Sprint Phase 2',
        title: 'Listing Redesign & A+ Brand Content Overhaul',
        description: 'Producing 3D render graphics, benefit infographics, keyword-optimized bullet points, and premium A+ Brand Story modules.',
        timeframe: 'Days 11 – 30',
        deliverable: 'Published A+ Content, Storefront & Optimized Listings Live',
      },
      {
        step: '03',
        phase: 'Sprint Phase 3',
        title: 'PPC Architecture Restructure & Harvest Engine',
        description: 'Rebuilding ad campaigns into isolated match-type groups with automated negative keyword harvesting rules.',
        timeframe: 'Days 31 – 50',
        deliverable: 'New Sponsored Products, Brands & Video Campaigns Active',
      },
      {
        step: '04',
        phase: 'Sprint Phase 4',
        title: 'Amazon DSP Deployment & Competitor Conquesting',
        description: 'Launching programmatic DSP campaigns retargeting competitor ASIN viewers and lapsed past purchasers.',
        timeframe: 'Days 51 – 70',
        deliverable: 'Active Amazon DSP Programmatic Audience Retargeting',
      },
      {
        step: '05',
        phase: 'Sprint Phase 5',
        title: 'TACoS Compression & Organic BSR Acceleration',
        description: 'Scaling total ad spend while reducing blended TACoS to ensure organic Best Seller Rank compounds sustainably.',
        timeframe: 'Days 71 – 90',
        deliverable: '90-Day Amazon Marketplace Audit & Profitability Blueprint',
      },
    ],
    deliverables: [
      {
        category: 'PPC & DSP Campaign Management',
        items: [
          'Full Sponsored Products, Brands, and Video campaign architecture',
          'Daily bid optimization, dayparting, and placement adjustments',
          'Automated negative keyword harvesting scripts running weekly',
          'Amazon DSP programmatic display and video campaign execution',
        ],
      },
      {
        category: 'Listing Optimization & Creative',
        items: [
          'Complete A+ Premium Content modules and Brand Story design',
          'Multi-page Amazon Brand Storefront design with navigation',
          '3D render product imagery, infographics, and packaging callouts',
          'Backend search term indexing and bullet point copywriting',
        ],
      },
      {
        category: 'Monitoring & Buy Box Protection',
        items: [
          '24/7 Buy Box suppression and hijacker alert monitoring',
          'Weekly ACoS vs TACoS profitability dashboards',
          'Inventory restock velocity forecasting and FBA recommendations',
          'Dedicated senior Amazon marketplace strategist',
        ],
      },
    ],
    whyChoose: [
      {
        title: 'TACoS-First Profitability Focus',
        description: 'We do not just chase ad clicks. We monitor your Total Advertising Cost of Sales (TACoS) to ensure your organic Best Seller Rank rises while overall margins expand.',
        stat: 'TACoS Margin Defense',
      },
      {
        title: 'In-House 3D & Creative Studio',
        description: 'We create breathtaking 3D product renders, unboxing videos, and infographic modules that make your brand look like a premier global category leader.',
        stat: 'In-House 3D Studio',
      },
      {
        title: 'Deep DSP & Programmatic Expertise',
        description: 'We leverage Amazon DSP to retarget shoppers off-Amazon, giving your brand an unfair advantage over competitors who rely solely on basic search ads.',
        stat: 'Full DSP Capability',
      },
    ],
    caseStudies: [
      {
        client: 'D2C Kitchenware & Appliances',
        industry: 'Home & Kitchen Marketplace',
        metric: '-32% ACoS',
        metricLabel: 'From 44% down to 29.8%',
        summary: 'Rebuilt Sponsored Products and Video ad groups while redesigning A+ storefront modules, unlocking a 145% boost in Best Seller Rank (BSR).',
        slug: 'd2c-kitchenware',
        tags: ['Amazon PPC', 'A+ Content', 'BSR Boost'],
      },
      {
        client: 'Nutraceuticals & Health Supplements',
        industry: 'Health & Wellness',
        metric: '4.2X Storefront CRO',
        metricLabel: 'With Amazon DSP',
        summary: 'Deployed Amazon DSP competitor conquesting alongside Buy Box defense, generating ₹3.2 Cr in incremental marketplace sales.',
        slug: 'nutraceutical-supplements',
        tags: ['Amazon DSP', 'Conquesting', 'Buy Box'],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between ACoS and TACoS, and why does TACoS matter more?',
        answer:
          'ACoS (Advertising Cost of Sales) measures ad spend divided by direct ad sales. TACoS (Total Advertising Cost of Sales) measures ad spend divided by your brand’s total Amazon sales (both organic and paid). While ACoS tells you if ads are efficient, TACoS reveals whether paid ads are successfully elevating your organic search rank and overall business profitability. Our goal is always a declining TACoS trajectory.',
      },
      {
        question: 'How do you handle rogue sellers who hijack the Amazon Buy Box?',
        answer:
          'We implement real-time Buy Box monitoring that alerts our team immediately when an unauthorized third-party seller enters your listing. We utilize Amazon Brand Registry tools, Transparency barcodes, Project Zero, and formal brand legal notifications to suppress hijackers and reclaim 100% Buy Box share.',
      },
      {
        question: 'What is Amazon DSP and when should a brand start using it?',
        answer:
          'Amazon DSP (Demand-Side Platform) allows brands to programmatically reach shoppers both on Amazon and across the web (including major publisher sites, mobile apps, and Prime Video). While Amazon PPC captures shoppers actively searching right now, Amazon DSP retargets past visitors, conquers competitor listing traffic, and nurtures repeat purchases. We typically recommend DSP once a brand generates at least ₹10 Lakhs/month on Amazon.',
      },
      {
        question: 'Do you create the A+ Content and product graphics in-house?',
        answer:
          'Yes. Our team includes specialized Amazon direct-response designers and 3D visual artists. We create all lifestyle infographics, 3D product renders, comparison charts, and Brand Storefront assets completely in-house.',
      },
    ],
    formServiceOption: 'Amazon Marketing & PPC (Marketplace Dominance)',
    metaTitle: 'Amazon Marketing & PPC Services | ACoS Reduction & Amazon DSP | NovaSpark',
    metaDescription:
      'Conquer Amazon with algorithmic Sponsored Ads, Amazon DSP retargeting, Buy Box defense, and conversion-optimized A+ Content from NovaSpark.',
  },
};

export const ALL_SERVICE_SLUGS = Object.keys(SERVICES_DETAIL_MAP);
