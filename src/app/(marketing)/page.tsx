'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Search,
  Layers,
  Zap,
  BarChart3,
  Shield,
  Award,
  Compass,
  RefreshCw,
  Star,
  Quote,
  ChevronDown,
  ShoppingBag,
  Building2,
  Utensils,
  Plane,
  HeartPulse,
  Globe,
  Clock,
  BookOpen,
  MessageSquare,
  Share2,
  FileText,
  MapPin,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  AGENCY_CASE_STUDIES,
  AGENCY_CLIENT_LOGOS,
  AGENCY_METRICS_HIGHLIGHTS,
  AGENCY_SERVICES,
  AGENCY_TEAM,
} from '@/lib/agency-data';

const INDUSTRIES = [
  {
    title: 'E-Commerce & D2C Brands',
    desc: 'Scale customer acquisition cost-effectively with high-converting catalog funnels, Google Performance Max, Meta CAPI, and automated cart abandonment recovery.',
    metric: '4.8X Avg ROAS',
    icon: ShoppingBag,
    image: '/images/work_ecommerce.jpg',
  },
  {
    title: 'Luxury Home & Lifestyle',
    desc: 'Position artisanal, high-ticket decor for national dominance with search-intent capture, editorial creative assets, and affluent buyer retargeting.',
    metric: '+240% Revenue',
    icon: Building2,
    image: '/images/Medallion house.jpg',
  },
  {
    title: 'Real Estate & Infrastructure',
    desc: 'Generate qualified commercial and residential buyer inquiries with geo-targeted search campaigns, luxury landing experiences, and CRM lead routing.',
    metric: '480+ Leads/mo',
    icon: Compass,
    image: '/images/work_realestate.jpg',
  },
  {
    title: 'Farm-to-Table & Retail Stores',
    desc: 'Capture nearby consumers at the moment of intent through hyper-local Google 3-Pack domination, review generation funnels, and local inventory ads.',
    metric: '+74% Footfall',
    icon: HeartPulse,
    image: '/images/Sri Pandurangan Divine Fresh.png',
  },
  {
    title: 'Fine Dining & Hospitality',
    desc: 'Drive consistent table reservations and weekday banquet bookings with cinematic culinary reels, influencer tasting events, and reservation countdowns.',
    metric: '96% Table Occupancy',
    icon: Utensils,
    image: '/images/work_restaurant.jpg',
  },
  {
    title: 'Experiential Tourism & Travel',
    desc: 'Turn high-season wanderlust into instant confirmed bookings using short-form vertical UGC videos and automated direct WhatsApp booking funnels.',
    metric: '3,200+ Bookings',
    icon: Plane,
    image: '/images/Weekend Bhraman Tour Planner.jpg',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'NovaSpark transformed our artisanal luxury decor brand from ₹5L/month ad spend into a multi-crore national business. Their strategic precision with Google PMax and unit economics is unmatched in the agency ecosystem.',
    author: 'Rohan Verma',
    role: 'Co-Founder & CEO',
    company: 'Medallion House',
    metric: '+240% Revenue Growth',
    rating: 5,
  },
  {
    quote:
      'Dominating 180+ commercial keywords on Google without burning millions on marketplace ads changed our entire profit margin. Organic search now generates 54% of our total revenue predictably every month.',
    author: 'Ananya Mohapatra',
    role: 'Founder',
    company: 'Ekatraa Organics',
    metric: '180+ #1 Rankings',
    rating: 5,
  },
  {
    quote:
      'Our retail stores experienced an immediate 74% increase in verified walk-in footfall across Bhubaneswar. Their Google Maps 3-Pack engine and review funnels gave us undisputed local market leadership.',
    author: 'Dr. Debabrata Sen',
    role: 'Managing Director',
    company: 'Sri Pandurangan Divine Fresh',
    metric: '+310% Local Impressions',
    rating: 5,
  },
  {
    quote:
      'NovaSpark’s video creative testing matrix cut our booking acquisition cost in half. We generated over 3,200 tour bookings in our highest season ever with direct WhatsApp lead routing.',
    author: 'Priyanka Das',
    role: 'Growth Director',
    company: 'Weekend Bhraman',
    metric: '-48% Cost Per Booking',
    rating: 5,
  },
];

const FAQS = [
  {
    q: 'What makes NovaSpark different from other digital marketing agencies?',
    a: 'Most agencies operate in silos where designers don’t know CAC and media buyers don’t understand brand equity. At NovaSpark, "Your Business, Our Strategy" means we take full-funnel ownership. We connect strategy, creative production, Next.js engineering, and first-party attribution to optimize for net revenue rather than vanity impressions.',
  },
  {
    q: 'What is your typical engagement model and monthly budget?',
    a: 'We work primarily on monthly retainers tailored to your stage of growth. Typical ad spend managed ranges from ₹1,00,000 to ₹10,00,000+ per month, with full campaign execution, continuous creative testing, and weekly strategy syncs. We also offer project-based web platform engineering and technical SEO audits.',
  },
  {
    q: 'How quickly can we expect to see measurable results from our campaigns?',
    a: 'Paid media channels (Google Search, PMax, Meta Ads) begin generating qualified leads and sales within the first 7 to 14 days post tracking calibration. Organic SEO and authority content assets build momentum across 60 to 90 days, delivering compounding, zero-marginal-cost customer acquisition for years.',
  },
  {
    q: 'How do you handle attribution post-iOS tracking changes and cookie deprecation?',
    a: 'We implement server-side tracking via Meta Conversions API (CAPI), Google Enhanced Conversions, and first-party server analytics. This ensures 100% data fidelity without relying on fragile third-party browser cookies, feeding accurate revenue data back into bidding algorithms.',
  },
  {
    q: 'Do you require long-term lock-in contracts?',
    a: 'No. While marketing systems compound over 3 to 6 months, we believe client retention should be earned every 30 days through audited performance. Our 98% long-term client retention rate reflects the measurable commercial value we consistently produce.',
  },
  {
    q: 'Who will actually manage my marketing campaigns day-to-day?',
    a: 'Your account is directed by senior growth operators with over a decade of hands-on experience, supported by specialized technical SEO architects, UI/UX engineers, and conversion copywriters. We do not pass off client accounts to inexperienced interns.',
  },
];

const ARTICLES = [
  {
    title: 'First-Party Tracking in 2026: Why Meta CAPI & Server-Side Attribution Are Mandatory',
    category: 'Performance Marketing',
    readTime: '5 min read',
    date: 'July 2026',
    desc: 'How third-party cookie phase-outs impacted ad costs and why first-party server-side tracking pipelines restore 30%+ attribution accuracy.',
    image: '/images/hero_performance_scale.jpg',
  },
  {
    title: 'Next.js vs WordPress: How Sub-Second Load Speeds Multiply E-Commerce Conversion Rates',
    category: 'Digital Engineering',
    readTime: '6 min read',
    date: 'June 2026',
    desc: 'A technical analysis of why modern headless Next.js architectures achieve 99+ Lighthouse scores and lower Google Ads cost-per-click.',
    image: '/images/work_realestate.jpg',
  },
  {
    title: 'The Local 3-Pack Playbook: How Multi-Store Retailers Own Google Maps Traffic',
    category: 'Local SEO Strategy',
    readTime: '4 min read',
    date: 'May 2026',
    desc: 'The exact framework used to generate 18,400+ monthly direction requests and calls for retail chains across Eastern India.',
    image: '/images/Sri Pandurangan Divine Fresh.png',
  },
];

const SERVICE_REPRESENTATIONS: Record<string, {
  icon: any;
  accent: string;
  badge: string;
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  highlights: string[];
}> = {
  seo: {
    icon: Search,
    accent: '#059669',
    badge: 'Organic Search Engine',
    metricLabel: 'Compounding Inbound Traffic',
    metricValue: '+180% Organic Lift',
    metricSub: '180+ Commercial #1 Positions',
    highlights: ['Core Web Vitals & Technical Speed Architecture', 'Semantic Topic Clusters & Keyword Gap Mapping', 'Authority Backlink Equity & Natural Press']
  },
  'google-ads': {
    icon: Zap,
    accent: '#D97706',
    badge: 'High-Intent Search Ads',
    metricLabel: 'Commercial Intent Conversion',
    metricValue: '3.8X – 4.8X Target ROAS',
    metricSub: 'PMax & Negative Keyword Sculpting',
    highlights: ['Algorithmic Bid Strategy & Smart Bidding', 'First-Party Server-Side Conversion API', 'Multi-Angle Ad Copy & Landing Page Split Testing']
  },
  'meta-ads': {
    icon: Layers,
    accent: '#6366F1',
    badge: 'Paid Social Performance',
    metricLabel: 'Full-Funnel Demand Generation',
    metricValue: '+380% Lead Volume',
    metricSub: '99.8% CAPI Match Rate',
    highlights: ['High-Velocity Creative Concepting & Iteration', 'Deep Funnel Retargeting & Dynamic Catalog Ads', 'Audience Lookalike & Custom Persona Modeling']
  },
  'social-media': {
    icon: Share2,
    accent: '#EC4899',
    badge: 'Organic & Social Engine',
    metricLabel: 'Community Reach & Trust',
    metricValue: '+410% Engagement',
    metricSub: 'Omnichannel Video & Reel Strategy',
    highlights: ['High-Production Short-Form Video & Reels', 'Brand Voice Guidelines & Aesthetic Cohesion', 'Community Nurture & Active Buyer Conversations']
  },
  'web-development': {
    icon: Globe,
    accent: '#00BCEB',
    badge: 'Next.js 16 Digital Experience',
    metricLabel: 'Conversion Rate Architecture',
    metricValue: '99+ Core Web Vitals',
    metricSub: '< 0.8s Global Load Time',
    highlights: ['Custom High-Speed Headless Next.js 16', 'Frictionless Mobile-First Checkout & Form UX', 'Integrated Analytics, GTM & CRM Webhooks']
  },
  'content-marketing': {
    icon: FileText,
    accent: '#E11D48',
    badge: 'Authority & Inbound Content',
    metricLabel: 'Educational ICP Acquisition',
    metricValue: '3.2X Pipeline Value',
    metricSub: 'High-Intent Commercial Topics',
    highlights: ['Thought Leadership & Bottom-of-Funnel Whitepapers', 'Technical Product Walkthroughs & Comparison Guides', 'SEO-Optimized Editorial Production Schedule']
  },
  branding: {
    icon: Sparkles,
    accent: '#FF7900',
    badge: 'Creative & Visual Identity',
    metricLabel: 'Premium Market Perception',
    metricValue: '100% Brand Equity',
    metricSub: 'Complete Design System (CIP)',
    highlights: ['Corporate Identity Programs & Vector Guidelines', 'Design Token Architecture & Editorial Typography', 'Consistent Omnichannel Visual Brand Systems']
  },
  'local-seo': {
    icon: MapPin,
    accent: '#0284C7',
    badge: 'Local Map Pack Dominance',
    metricLabel: 'Local Intent Footfall & Calls',
    metricValue: 'Top 3 Map Pack',
    metricSub: 'Google Business Profile Engine',
    highlights: ['Google Business Profile Optimization & Audit', 'Local Citation Alignment & NAP Consistency', 'Automated Customer Review Generation Velocity']
  }
};

const DIFFERENTIATORS = [
  {
    step: '01',
    icon: Compass,
    title: 'Strategy Before Execution',
    desc: 'We never spend a single rupee on ads or publish content without first validating customer intent, unit economics, and competitive whitespace.',
    tag: 'Pre-Flight Validation',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'Creativity With Purpose',
    desc: 'Visual design should never be decorative indulgence. Every visual asset is engineered to communicate value, build authority, and convert buyers.',
    tag: 'High-Converting Assets',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    desc: 'We replace subjective opinions with verified statistical significance. A/B testing, cohort tracking, and algorithmic optimization guide every sprint.',
    tag: 'Statistical Rigor',
  },
  {
    step: '04',
    icon: Shield,
    title: 'Transparent Performance',
    desc: 'Direct Looker Studio dashboard access, zero hidden media markups, and unvarnished reporting. You always know exactly what was invested and returned.',
    tag: 'Live Attributed Data',
  },
  {
    step: '05',
    icon: RefreshCw,
    title: 'Continuous Optimization',
    desc: 'Campaigns are never "set and forgotten." We iterate creative angles, landing page copy, and negative match keywords every single week.',
    tag: 'Weekly Growth Sprints',
  },
  {
    step: '06',
    icon: Award,
    title: 'Senior Operator Led',
    desc: 'Your growth strategy is directed by seasoned practitioners with 10+ years of hands-on experience, never delegated to junior coordinators.',
    tag: 'Practice Directors Only',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featuredProjects = AGENCY_CASE_STUDIES.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION
          "Turn Digital Attention Into Business Growth."
          "Your Business, Our Strategy"
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-b from-slate-50/60 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#087CCB]/15 via-[#00BCEB]/10 to-[#FFC400]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal delay={50}>
                <div className="badge-tag">
                  <span className="w-2 h-2 rounded-full bg-[#087CCB] animate-ping" />
                  <span>Your Business, Our Strategy • Full-Service Digital Growth Partner</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-6xl text-[#071B70] tracking-tight leading-[1.08]">
                  Turn Digital Attention <br />
                  <span className="bg-gradient-to-r from-[#071B70] via-[#087CCB] to-[#00BCEB] bg-clip-text text-transparent">
                    Into Business Growth.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <p className="text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl font-normal">
                  We combine creative thinking, intelligent marketing systems and performance-driven strategies to help 100+ businesses build stronger brands, generate qualified leads, and achieve measurable revenue growth.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal delay={350}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary group">
                    <span>Let&apos;s Grow Together</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn-secondary group">
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust badges */}
              <ScrollReveal delay={450}>
                <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-xl">
                  <div>
                    <div className="font-display font-extrabold text-2xl lg:text-3xl text-[#071B70]">100%</div>
                    <div className="text-xs text-[#64748B] font-medium mt-0.5">Audited Real Data</div>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-2xl lg:text-3xl text-[#087CCB]">3.8X</div>
                    <div className="text-xs text-[#64748B] font-medium mt-0.5">Average Client ROAS</div>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-2xl lg:text-3xl text-[#071B70]">+240%</div>
                    <div className="text-xs text-[#64748B] font-medium mt-0.5">Average Revenue Lift</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Bespoke Marketing Visual & Reference 3D Illustration */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={200} direction="left">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="card-skeuomorphic p-7 overflow-hidden relative">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-400 shadow-xs" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-xs" />
                        <span className="text-xs font-mono-tag font-semibold text-slate-500 ml-2">novaspark.telemetry/live</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-300/60 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active ROAS Engine
                      </span>
                    </div>

                    {/* Clean 3D Growth Graphic inside debossed well — completely unobstructed, zero text overlay */}
                    <div className="skeuo-well p-3 mb-5">
                      <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-inner bg-slate-950">
                        <Image
                          src="/images/homepage_3d.webp"
                          alt="NovaSpark Digital Growth Engine"
                          fill
                          priority
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                      </div>
                    </div>

                    {/* Skeuomorphic Performance Metrics Row */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="skeuo-well p-3.5">
                        <div className="text-[11px] font-mono-tag font-semibold text-slate-500 uppercase">Google Ads &amp; PMax</div>
                        <div className="font-display font-black text-base sm:text-lg text-[#071B70] mt-0.5">3.8X – 4.8X ROAS</div>
                        <div className="text-[10px] text-emerald-600 font-bold mt-0.5">High Intent Search</div>
                      </div>
                      <div className="skeuo-well p-3.5">
                        <div className="text-[11px] font-mono-tag font-semibold text-slate-500 uppercase">Organic Inbound SEO</div>
                        <div className="font-display font-black text-base sm:text-lg text-[#087CCB] mt-0.5">+380% Lift</div>
                        <div className="text-[10px] text-emerald-600 font-bold mt-0.5">Compound Traffic</div>
                      </div>
                    </div>
                  </div>

                  {/* Micro Badge 1 (Tactile Pill) */}
                  <div className="absolute -bottom-6 -left-6 card-skeuomorphic p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#FFC400] to-[#FF7900] flex items-center justify-center text-[#071B70] shadow-sm">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono-tag font-bold text-slate-400 uppercase tracking-wider">Creative Velocity</div>
                      <div className="font-display font-extrabold text-sm text-[#071B70]">Top 1% Ad Engagement</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — REAL RESULTS SCOREBOARD (TACTILE INSTRUMENT PANEL)
          +240% | +180% | 3.8X | +380% | +410%
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#060910] text-white border-y border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="badge-tag mx-auto bg-white/10 text-white border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real Results From Our Digital Marketing Campaigns</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 text-center">
            {AGENCY_METRICS_HIGHLIGHTS.map((metric) => (
              <div key={metric.label} className="card-skeuo-dark p-6 text-center group hover:scale-105 transition-all">
                <div className="skeuo-well-dark py-3 px-2 mb-3">
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#FFC400] tracking-tight drop-shadow-md">
                    {metric.value}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-100 tracking-wide">{metric.label}</div>
                <div className="text-[11px] text-[#00BCEB] font-semibold mt-1 font-mono-tag">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — CLIENT PARTNER LOGOS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#64748B] mb-8">
            Trusted by Leading Brands Across India
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
            {AGENCY_CLIENT_LOGOS.slice(0, 5).map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-3 rounded-xl grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <div className="relative h-10 w-32">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — BRAND INTRODUCTION
          "More Than Marketing. A Smarter Way to Grow."
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal>
                <div className="badge-tag">
                  <span>Chapter 01 // The Agency Thesis</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight leading-tight mt-4">
                  More Than Marketing. <br />
                  <span className="text-[#087CCB]">A Smarter Way to Grow.</span>
                </h2>
                <p className="text-sm font-semibold text-[#071B70] uppercase tracking-wider pt-2">
                  &ldquo;Your Business, Our Strategy&rdquo;
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              <ScrollReveal delay={150}>
                <p>
                  Most agencies operate in fragmented silos: creative teams design graphics without understanding conversion metrics, while media buyers run ads without understanding brand positioning. The result is wasted ad spend and vanity numbers that never impact revenue.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <p>
                  At <strong className="text-[#071B70] font-semibold">NovaSpark</strong>, we connect <strong>strategy</strong>, <strong>creativity</strong>, <strong>technology</strong>, and <strong>performance</strong> into one unified engine. Every campaign we architect is engineered to attract high-intent attention, educate buyers, and deliver profitable, compounding business returns.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="card-skeuomorphic p-5 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl skeuo-well flex items-center justify-center text-[#087CCB] shrink-0 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-[#087CCB]" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-[#071B70]">Full-Funnel Ownership</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">From initial impression to checkout, we optimize the complete customer journey.</p>
                    </div>
                  </div>
                  <div className="card-skeuomorphic p-5 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl skeuo-well flex items-center justify-center text-[#FF7900] shrink-0 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-[#FF7900]" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-[#071B70]">Audited Performance</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Zero vanity reporting. Real revenue, verified CAC, and transparent attribution.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — THE CONNECTED GROWTH ECOSYSTEM
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 02 // The Multiplier Ecosystem</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                How Our Services Work as One Connected Ecosystem.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                When channels communicate, customer acquisition cost drops and lifetime value multiplies.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="card-skeuomorphic p-8 space-y-5 h-full relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#087CCB] to-[#071B70] text-white flex items-center justify-center font-display font-black text-sm shadow-md border border-white/30">
                    01
                  </div>
                  <span className="text-[10px] font-mono-tag font-bold uppercase tracking-wider text-[#087CCB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 shadow-2xs">
                    Demand Capture
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#071B70]">Attract &amp; Inbound Demand</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  SEO and Google Ads capture existing high-intent commercial buyers actively searching for your solution today.
                </p>
                <div className="skeuo-well p-3.5 text-xs text-[#071B70] font-semibold font-mono-tag">
                  Channels: Search SEO • Google Ads • Local Map Pack
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-skeuomorphic p-8 space-y-5 h-full relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#FFC400] to-[#FF7900] text-[#071B70] flex items-center justify-center font-display font-black text-sm shadow-md border border-white/50">
                    02
                  </div>
                  <span className="text-[10px] font-mono-tag font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 shadow-2xs">
                    Conversion Engine
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#071B70]">Educate &amp; Convert</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Bespoke Next.js web experiences, compelling brand design, and authoritative content eliminate friction and maximize conversions.
                </p>
                <div className="skeuo-well p-3.5 text-xs text-[#071B70] font-semibold font-mono-tag">
                  Channels: Modern Next.js UI • Brand Identity • Content
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card-skeuomorphic p-8 space-y-5 h-full relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#00BCEB] to-[#087CCB] text-white flex items-center justify-center font-display font-black text-sm shadow-md border border-white/40">
                    03
                  </div>
                  <span className="text-[10px] font-mono-tag font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200/60 shadow-2xs">
                    Retention Loops
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-[#071B70]">Amplify &amp; Retain</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Meta paid social, retargeting funnels, and organic community nurture re-engage buyers, accelerating repeat orders and referral loops.
                </p>
                <div className="skeuo-well p-3.5 text-xs text-[#071B70] font-semibold font-mono-tag">
                  Channels: Meta Retargeting • Social Community • CRM Loops
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CORE CAPABILITIES (SERVICES MATRIX)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 03 // Eight Growth Disciplines</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Architecting Growth Across Every Touchpoint.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                We combine creative ambition with analytical rigor. Explore our core pillars engineered to build dominance in your category.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENCY_SERVICES.map((s, idx) => {
              const rep = SERVICE_REPRESENTATIONS[s.id] || {
                icon: Sparkles,
                accent: '#087CCB',
                badge: s.category,
                metricLabel: 'Audited Impact',
                metricValue: s.metricsHighlight,
                metricSub: 'Full-Funnel Alignment',
                highlights: s.deliverables.slice(0, 3),
              };
              const IconComp = rep.icon;

              return (
                <ScrollReveal key={s.id} delay={idx * 60}>
                  <div className="card-skeuomorphic p-7 flex flex-col justify-between h-full group hover:-translate-y-2 transition-all duration-300">
                    <div className="space-y-5">
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl skeuo-well flex items-center justify-center text-[#071B70] shadow-xs group-hover:scale-105 transition-transform">
                          <IconComp className="w-6 h-6" style={{ color: rep.accent }} />
                        </div>
                        <span className="text-[10px] font-mono-tag font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
                          Pillar 0{idx + 1}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB]">
                          {rep.badge}
                        </div>
                        <h3 className="font-display font-extrabold text-xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug mt-1">
                          {s.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-2 font-normal">
                          {s.tagline}
                        </p>
                      </div>

                      {/* Visual Representation Telemetry Well */}
                      <div className="skeuo-well p-4 space-y-1.5 border border-slate-200/90">
                        <div className="flex items-center justify-between text-[10px] font-mono-tag font-bold uppercase tracking-wider text-slate-500">
                          <span>{rep.metricLabel}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div className="font-display font-black text-lg sm:text-xl text-[#071B70]">
                          {rep.metricValue}
                        </div>
                        <div className="text-[11px] font-medium text-slate-500 truncate">
                          {rep.metricSub}
                        </div>
                      </div>

                      {/* Concrete Deliverables Checklist */}
                      <div className="space-y-2 pt-1">
                        <div className="text-[10px] font-mono-tag font-bold uppercase tracking-wider text-slate-400">
                          Core Deliverables:
                        </div>
                        <ul className="space-y-1.5">
                          {rep.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-600 font-mono-tag">{s.metricsHighlight}</span>
                      <Link
                        href={`/services#${s.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] group-hover:text-[#FF7900] transition-colors"
                      >
                        <span>Explore Discipline</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — WHY NOVASPARK (THE DIFFERENTIATORS)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <ScrollReveal>
                <div className="badge-tag">
                  <span>Chapter 04 // The Strategic Edge</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight mt-3">
                  Why Ambitious Brands Choose Us.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We reject the standard agency playbook of junior staffing, bloated retainers, and passive maintenance. Here is how we operate differently.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DIFFERENTIATORS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={index * 80}>
                    <div className="card-skeuomorphic p-7 flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl skeuo-well flex items-center justify-center text-[#071B70] group-hover:scale-105 transition-transform shadow-xs">
                            <IconComponent className="w-6 h-6 text-[#087CCB]" />
                          </div>
                          <span className="text-[10px] font-mono-tag font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                            Principle {item.step}
                          </span>
                        </div>
                        <h4 className="font-display font-extrabold text-lg text-[#071B70] mb-2">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono-tag font-bold text-[#087CCB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087CCB]" />
                        <span>{item.tag}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — OUR APPROACH (6-PHASE ROADMAP)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 05 // The 6-Phase Execution Engine</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                How We Engineer Predictable Outcomes.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                A disciplined six-phase methodology that turns business objectives into market leadership.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#071B70] via-[#087CCB] to-[#FFC400] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {[
                { step: '01', name: 'Discover', desc: 'Audit unit economics, audience intent & competitive whitespace.', output: 'Forensic Audit' },
                { step: '02', name: 'Strategize', desc: 'Define core messaging angles, media mix, and growth KPIs.', output: '90-Day Blueprint' },
                { step: '03', name: 'Create', desc: 'Produce high-converting creative assets, ad copy & landing UX.', output: 'Creative Batch' },
                { step: '04', name: 'Execute', desc: 'Deploy multi-channel campaigns with first-party tracking.', output: 'Live CAPI Launch' },
                { step: '05', name: 'Optimize', desc: 'Cut underperforming assets, scale winners & lower CPA.', output: 'CAC Compression' },
                { step: '06', name: 'Grow', desc: 'Expand into new markets, channels & compounding pipeline.', output: 'Scaled Pipeline' },
              ].map((phase, idx) => (
                <ScrollReveal key={phase.step} delay={idx * 100}>
                  <div className="card-skeuomorphic p-6 flex flex-col justify-between text-center items-center h-full group hover:-translate-y-2 transition-all">
                    <div>
                      <div className="w-12 h-12 rounded-2xl skeuo-well text-[#071B70] font-display font-black text-sm flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 transition-transform">
                        <span className="bg-gradient-to-r from-[#071B70] to-[#087CCB] bg-clip-text text-transparent font-black">{phase.step}</span>
                      </div>
                      <h3 className="font-display font-extrabold text-base text-[#071B70] mb-2">{phase.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">{phase.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 w-full text-[10px] font-mono-tag font-bold text-[#087CCB] truncate">
                      {phase.output}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — SELECTED WORK / CASE STUDIES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <ScrollReveal>
              <div className="badge-tag">
                <span>Chapter 06 // The Transformation Chronicles</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Selected Case Studies.
              </h2>
              <p className="text-slate-600 text-base max-w-xl mt-2">
                Real brands. Real campaigns. Real verified revenue growth.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Link href="/case-studies" className="btn-secondary group">
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 100}>
                <div className="card-skeuomorphic overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-all">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#071B70] shadow-sm">
                      {project.industry}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#0F172A] text-[#FFC400] border border-white/10 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">
                        {project.client}
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                        {project.summary}
                      </p>
                    </div>

                    <div className="skeuo-well p-4 grid grid-cols-3 gap-2 text-center border border-slate-200/90">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display font-black text-base sm:text-lg text-[#071B70]">{m.value}</div>
                          <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center justify-between w-full p-3 rounded-2xl btn-skeuo-pearl text-xs font-bold transition-all duration-200"
                      >
                        <span>View Detailed Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — INDUSTRIES WE SERVE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 07 // Category Specialization</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Industries We Specialize In.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                We engineer category-specific growth architectures tailored to the unique purchase cycles and customer behavior of each vertical.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <ScrollReveal key={ind.title} delay={i * 80}>
                  <div className="card-skeuomorphic overflow-hidden flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl skeuo-well flex items-center justify-center text-[#071B70] shadow-sm">
                        <IconComp className="w-5 h-5 text-[#071B70]" />
                      </div>
                      <div className="absolute bottom-3 right-4 bg-gradient-to-r from-[#FFC400] to-[#FF7900] text-[#071B70] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {ind.metric}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#071B70] group-hover:text-[#087CCB] transition-colors">
                          {ind.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                          {ind.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <Link
                          href={`/contact?service=${encodeURIComponent(ind.title)}`}
                          className="inline-flex items-center justify-between w-full p-2.5 rounded-xl btn-skeuo-pearl text-xs font-bold transition-all duration-200"
                        >
                          <span>Request {ind.title.split(' ')[0]} Audit</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11 — EXECUTIVE LEADERSHIP / TEAM
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 08 // The Growth Architects</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Meet the Minds Powering Your Growth.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Dedicated operators and growth architects leading every campaign from strategy to execution.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENCY_TEAM.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 100}>
                <div className="card-skeuomorphic overflow-hidden flex flex-col h-full group hover:-translate-y-1.5 transition-all">
                  <div className="relative h-72 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00BCEB] block">
                          {member.dept}
                        </span>
                        <h4 className="font-display font-bold text-lg text-white leading-tight">
                          {member.name}
                        </h4>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#087CCB] transition-colors"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0-.05-3.18 1.59 1.59 0 0 0 .05 3.18m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <div className="text-xs font-bold text-[#071B70] mb-2">{member.role}</div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{member.bio}</p>
                    </div>

                    <div className="p-3.5 rounded-xl skeuo-well text-[11px] text-slate-600 italic">
                      &ldquo;{member.quote}&rdquo;
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12 — CLIENT TESTIMONIALS (VERIFIED SOCIAL PROOF)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 09 // Verified Client Proof</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Direct Feedback From Ambitious Founders.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Hear directly from business leaders who partnered with NovaSpark to scale their revenue.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={t.author} delay={idx * 80}>
                <div className="card-skeuomorphic p-8 flex flex-col justify-between h-full space-y-6 group hover:-translate-y-1.5 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#FFC400]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-mono-tag">
                        {t.metric}
                      </span>
                    </div>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-normal">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#071B70]">{t.author}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{t.role}, <span className="font-semibold text-slate-700">{t.company}</span></p>
                    </div>
                    <Quote className="w-8 h-8 text-[#087CCB]/20" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 13 — LATEST INSIGHTS & PLAYBOOKS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <ScrollReveal>
              <div className="badge-tag">
                <span>Chapter 10 // Intelligence &amp; Playbooks</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Latest Insights &amp; Playbooks.
              </h2>
              <p className="text-slate-600 text-base max-w-xl mt-2">
                Actionable marketing playbooks, technical analyses, and algorithm breakdown guides.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Link href="/services" className="btn-secondary group">
                <span>View All Insights</span>
                <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((art, idx) => (
              <ScrollReveal key={art.title} delay={idx * 100}>
                <div className="card-skeuomorphic overflow-hidden flex flex-col justify-between h-full group hover:-translate-y-1.5 transition-all">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#071B70] shadow-xs">
                        {art.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono-tag">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                        {art.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {art.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between w-full p-2.5 rounded-xl btn-skeuo-pearl text-xs font-bold transition-all duration-200"
                    >
                      <span>Read Full Playbook</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 14 — FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 11 // Transparent Answers &amp; Integrity</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Frequently Asked Questions.
              </h2>
              <p className="text-slate-600 text-base">
                Everything you need to know about partnering with NovaSpark.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="card-skeuomorphic overflow-hidden transition-all duration-200">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-[#071B70]">
                        {faq.q}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#0F172A] text-[#FFC400]' : 'text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 15 — PRE-FOOTER CTA (FLOATING SKEUOMORPHIC CARD)
          "Ready to grow your business online?"
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC] relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-skeuo-dark p-8 sm:p-14 lg:p-20 relative overflow-hidden rounded-[2.5rem] shadow-2xl text-center border border-white/15">
            {/* Ambient specular mesh inside the floating card */}
            <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#00BCEB]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#FFC400]/12 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <ScrollReveal>
                <div className="badge-tag-dark mx-auto">
                  <span className="w-2 h-2 rounded-full bg-[#00BCEB] animate-ping" />
                  <span>Your Business, Our Strategy</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mt-4 leading-tight">
                  Ready to grow your business online?
                </h2>
                <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mt-4">
                  Let&apos;s build a marketing strategy that moves your business forward. Request a confidential growth audit with our senior leadership team.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link href="/contact" className="btn-skeuo-gold text-base px-9 py-4 group">
                    <span>Get a Free Audit</span>
                    <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="https://wa.me/918280788689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-skeuo-pearl text-base px-8 py-4"
                  >
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Recessed Trust Guarantee Ribbon */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 font-mono-tag">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Senior Director Response &lt; 2 hrs
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  100% Asset &amp; Ad Account Ownership
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00BCEB]" />
                  Category Exclusivity Protected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
