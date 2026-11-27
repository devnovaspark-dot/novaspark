'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Sparkles,
  BarChart3,
  Shield,
  RefreshCw,
  Award,
  Quote,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GrowthJourney from '@/components/GrowthJourney';
import {
  AGENCY_CASE_STUDIES,
  AGENCY_CLIENT_LOGOS,
  AGENCY_METRICS_HIGHLIGHTS,
  AGENCY_TEAM,
} from '@/lib/agency-data';

const CORE_SERVICES_ECOSYSTEM = [
  {
    num: '01',
    id: 'performance-marketing',
    title: 'Performance Marketing',
    subtitle: 'Google Ads • Meta Ads • LinkedIn Ads',
    description:
      'Algorithmic multi-channel acquisition engineered with first-party CAPI attribution to lower CPA and scale profitable revenue.',
    metric: '3.8X – 4.8X ROAS',
    image: '/images/reference/Google-Ads-Services-1024x576.webp',
    highlights: [
      'High-Intent Search & Performance Max',
      'Meta Conversions API & Creative Testing',
      'B2B LinkedIn Account-Based Targeting',
    ],
    href: '/services/performance-marketing',
  },
  {
    num: '02',
    id: 'seo-aeo-geo',
    title: 'SEO, AEO & GEO',
    subtitle: 'Search Engine Optimization • Answer Engine • Generative Engine',
    description:
      'Capture compounding organic demand across Google Search, AI Overviews, ChatGPT, and Perplexity with technical authority.',
    metric: '+180% Organic Lift',
    image: '/images/reference/SEO-Services-1024x576.webp',
    highlights: [
      'Search Engine Optimization & Technical Audits',
      'Answer Engine Optimization for Featured Snippets',
      'Generative Engine Optimization for AI Citations',
    ],
    href: '/services/seo-aeo-geo',
  },
  {
    num: '03',
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    subtitle: 'Short-Form Video • Community • Creator UGC',
    description:
      'Build cultural relevance and active buyer communities through high-tempo Reels, editorial grids, and direct DM conversion funnels.',
    metric: '+410% Organic Reach',
    image: '/images/reference/Social-Media-Marketing-Services-1024x576.webp',
    highlights: [
      'Short-Form Vertical Video & Reels Production',
      'Brand Voice & Editorial Content Calendars',
      'Creator Partnerships & Community Nurture',
    ],
    href: '/services/social-media-marketing',
  },
  {
    num: '04',
    id: 'content-marketing',
    title: 'Content Marketing',
    subtitle: 'Thought Leadership • Buyer Enablement • BOFU Assets',
    description:
      'Shorten enterprise and D2C sales cycles with authoritative bottom-of-funnel playbooks, comparison guides, and semantic whitepapers.',
    metric: '3.2X Pipeline Velocity',
    image: '/images/reference/Meta-Ads-Services-1024x576.webp',
    highlights: [
      'Bottom-of-Funnel Commercial Comparison Guides',
      'Executive Thought Leadership & Ghostwriting',
      'Semantic Whitepapers & Case Study Storytelling',
    ],
    href: '/services/content-marketing',
  },
  {
    num: '05',
    id: 'web-design-development',
    title: 'Web Design & Development',
    subtitle: 'Next.js Architecture • UI/UX Systems • CRO',
    description:
      'Sub-800ms custom Next.js websites, bespoke Figma design systems, and conversion-engineered landing pages built to close deals.',
    metric: '99+ Core Web Vitals',
    image: '/images/reference/Website-Development-Services-1024x576.webp',
    highlights: [
      'Bespoke UI/UX & Brand Design Systems',
      'Custom Next.js & Headless CMS Engineering',
      'High-Converting Campaign Landing Pages',
    ],
    href: '/services/web-design-development',
  },
  {
    num: '06',
    id: 'amazon-marketing-ppc',
    title: 'Amazon Marketing & PPC',
    subtitle: 'Sponsored Ads • Amazon DSP • Buy Box Defense',
    description:
      'Dominate marketplace categories with algorithmic bid harvesting, programmatic DSP retargeting, and A+ Brand Storefront CRO.',
    metric: '-32% ACoS Reduction',
    image: '/images/work_ecommerce.jpg',
    highlights: [
      'Sponsored Products, Brands & Video Management',
      'Amazon DSP Off-Site Shopper Retargeting',
      'A+ Premium Storefront & Buy Box Defense',
    ],
    href: '/services/amazon-marketing-ppc',
  },
];

const DIFFERENTIATORS = [
  {
    step: '01',
    icon: Compass,
    title: 'Strategy Before Execution',
    desc: 'We never spend a rupee on media or publish content without first validating customer intent, unit economics, and competitive whitespace.',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'Creativity With Purpose',
    desc: 'Design is never decorative indulgence. Every visual asset is engineered to communicate authority, build trust, and convert buyers.',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    desc: 'We replace subjective opinions with statistical rigor—structured experimentation, cohort tracking, and revenue attribution.',
  },
  {
    step: '04',
    icon: Shield,
    title: 'Transparent Performance',
    desc: 'Direct dashboard access, zero hidden media markups, and unvarnished reporting on exactly what was invested and returned.',
  },
  {
    step: '05',
    icon: RefreshCw,
    title: 'Continuous Optimization',
    desc: 'Campaigns are never set and forgotten. We iterate creative hooks, landing UX, and bidding models every single week.',
  },
  {
    step: '06',
    icon: Award,
    title: 'Senior Operator Led',
    desc: 'Your growth strategy is directed by seasoned practitioners with over a decade of hands-on experience, never junior coordinators.',
  },
];

const INDUSTRIES = [
  {
    title: 'E-Commerce & D2C Brands',
    challenge: 'Rising CAC & cart abandonment',
    desc: 'High-converting catalog funnels, Performance Max, Meta CAPI, and retention loops built for profitable scale.',
    metric: '4.8X Avg ROAS',
    image: '/images/work_ecommerce.jpg',
  },
  {
    title: 'Luxury Home & Lifestyle',
    challenge: 'Positioning high-ticket craft nationally',
    desc: 'Search-intent capture, editorial creative direction, and affluent buyer retargeting for artisanal brands.',
    metric: '+240% Revenue',
    image: '/images/Medallion house.jpg',
  },
  {
    title: 'Real Estate & Infrastructure',
    challenge: 'Unqualified lead volume',
    desc: 'Geo-targeted commercial search campaigns, luxury landing experiences, and instant CRM lead routing.',
    metric: '480+ Leads/mo',
    image: '/images/work_realestate.jpg',
  },
  {
    title: 'Retail & Farm-to-Table',
    challenge: 'Driving consistent store footfall',
    desc: 'Hyper-local Google 3-Pack domination, review velocity systems, and nearby intent capture.',
    metric: '+74% Footfall',
    image: '/images/Sri Pandurangan Divine Fresh.png',
  },
  {
    title: 'Fine Dining & Hospitality',
    challenge: 'Weekday occupancy & banquet bookings',
    desc: 'Cinematic culinary reels, creator tasting campaigns, and direct reservation funnels.',
    metric: '96% Occupancy',
    image: '/images/work_restaurant.jpg',
  },
  {
    title: 'Experiential Travel & Tourism',
    challenge: 'High-season booking acquisition cost',
    desc: 'Short-form UGC video funnels paired with instant WhatsApp inquiry automation.',
    metric: '3,200+ Bookings',
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
  },
  {
    quote:
      'Dominating 180+ commercial keywords on Google without burning millions on marketplace ads changed our entire profit margin. Organic search now generates 54% of our total revenue predictably every month.',
    author: 'Ananya Mohapatra',
    role: 'Founder',
    company: 'Ekatraa Organics',
    metric: '180+ #1 Rankings',
  },
  {
    quote:
      'Our retail stores experienced an immediate 74% increase in verified walk-in footfall across Bhubaneswar. Their Google Maps 3-Pack engine and review funnels gave us undisputed local market leadership.',
    author: 'Dr. Debabrata Sen',
    role: 'Managing Director',
    company: 'Sri Pandurangan Divine Fresh',
    metric: '+310% Local Impressions',
  },
  {
    quote:
      'NovaSpark’s video creative testing matrix cut our booking acquisition cost in half. We generated over 3,200 tour bookings in our highest season ever with direct WhatsApp lead routing.',
    author: 'Priyanka Das',
    role: 'Growth Director',
    company: 'Weekend Bhraman',
    metric: '-48% Cost Per Booking',
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
    category: 'Web Engineering',
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

const FAQS = [
  {
    q: 'What makes NovaSpark different from other digital marketing agencies?',
    a: 'Most agencies operate in silos where designers don’t know CAC and media buyers don’t understand brand equity. At NovaSpark, "Your Business, Our Strategy" means we take full-funnel ownership—connecting strategy, creative production, Next.js engineering, and first-party attribution to optimize for net revenue rather than vanity impressions.',
  },
  {
    q: 'What is your typical engagement model and monthly budget?',
    a: 'We work primarily on monthly retainers tailored to your stage of growth. Typical ad spend managed ranges from ₹1,00,000 to ₹10,00,000+ per month, with full campaign execution, continuous creative testing, and weekly strategy syncs. We also offer project-based web design and technical SEO audits.',
  },
  {
    q: 'How quickly can we expect to see measurable results from our campaigns?',
    a: 'Paid media channels (Google Search, PMax, Meta Ads) begin generating qualified leads and sales within the first 7 to 14 days post tracking calibration. Organic SEO and authority content assets build momentum across 60 to 90 days, delivering compounding customer acquisition for years.',
  },
  {
    q: 'How do you handle attribution post-iOS tracking changes and cookie deprecation?',
    a: 'We implement server-side tracking via Meta Conversions API (CAPI), Google Enhanced Conversions, and first-party server analytics. This ensures high data fidelity without relying on fragile third-party browser cookies, feeding accurate revenue data back into bidding algorithms.',
  },
  {
    q: 'Do you require long-term lock-in contracts?',
    a: 'No. While marketing systems compound over 3 to 6 months, we believe client retention should be earned every 30 days through audited performance.',
  },
  {
    q: 'Who will actually manage my marketing campaigns day-to-day?',
    a: 'Your account is directed by senior growth operators with over a decade of hands-on experience, supported by specialized technical SEO architects, UI/UX engineers, and conversion copywriters.',
  },
];

export default function HomePage() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredStudy = AGENCY_CASE_STUDIES.find((p) => p.featured) || AGENCY_CASE_STUDIES[0];
  const supportingStudies = AGENCY_CASE_STUDIES.filter((p) => p.slug !== featuredStudy.slug).slice(0, 2);
  const activeService = CORE_SERVICES_ECOSYSTEM[activeServiceIdx];
  const activeTestimonial = TESTIMONIALS[activeTestimonialIdx];

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white text-[#111827]">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (EDITORIAL ASYMMETRIC COMPOSITION)
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-28 bg-gradient-to-b from-[#F7F9FC] to-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Editorial Column */}
            <div className="lg:col-span-7 space-y-7">
              <ScrollReveal delay={40}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#087CCB]" />
                  <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#071B70]">
                    Your Business, Our Strategy
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[4.25rem] text-[#071B70] tracking-tight leading-[1.04]">
                  Turn Digital Attention <br />
                  <span className="text-[#087CCB]">Into Business Growth.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                  We combine creative thinking, intelligent marketing and performance-driven strategies to help businesses build stronger brands and achieve measurable growth.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={280}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-primary group">
                    <span>Let&apos;s Grow Together</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link href="/case-studies" className="btn-secondary group">
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Editorial Proof Strip */}
              <ScrollReveal delay={360}>
                <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-xl">
                  <div>
                    <div className="font-display font-black text-2xl lg:text-3xl text-[#071B70] tracking-tight">
                      100%
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">Audited Real Data</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl lg:text-3xl text-[#087CCB] tracking-tight">
                      3.8X
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">Average Client ROAS</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl lg:text-3xl text-[#071B70] tracking-tight">
                      +240%
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">Average Revenue Lift</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Clean Brand Visual — Single Picture, Zero Text Overlays */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <ScrollReveal delay={180} direction="left" className="w-full flex justify-center">
                <div className="relative w-full max-w-[520px] aspect-square sm:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                  <Image
                    src="/images/homepage_3d.webp"
                    alt="NovaSpark Digital Marketing Agency"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — PERFORMANCE SCOREBOARD & CLIENT TRUST
         ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#071B70] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 lg:divide-x divide-white/15">
            {AGENCY_METRICS_HIGHLIGHTS.map((metric, idx) => (
              <div key={metric.label} className={`${idx > 0 ? 'lg:pl-8' : ''}`}>
                <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 tracking-wide mt-1.5 uppercase">
                  {metric.label}
                </div>
                <div className="text-xs text-[#00BCEB] mt-0.5 font-mono-tag">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-slate-400 shrink-0">
            Trusted by Leading Brands
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center w-full max-w-4xl">
            {AGENCY_CLIENT_LOGOS.slice(0, 5).map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="relative h-9 w-28">
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
          SECTION 3 — AGENCY THESIS (ASYMMETRIC EDITORIAL SPREAD)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F7F9FC] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#087CCB]" />
                  <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                    Agency Philosophy
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight leading-[1.08] mt-4">
                  More Than Marketing.{' '}
                  <span className="text-[#087CCB]">A Smarter Way to Grow.</span>
                </h2>
                <blockquote className="mt-6 pl-5 border-l-2 border-[#FFC400] text-slate-700">
                  <p className="font-display font-bold text-base text-[#071B70]">
                    &ldquo;Your Business, Our Strategy&rdquo;
                  </p>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Replacing fragmented multi-vendor silos with one accountable senior growth team.
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal delay={120}>
                <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Most agencies operate in disconnected silos: creative teams design visuals without understanding unit economics, while media buyers run ads without understanding brand positioning. The result is wasted spend and vanity metrics that never impact revenue.
                  </p>
                  <p>
                    At <strong className="text-[#071B70] font-semibold">NovaSpark</strong>, we unify <strong className="text-[#071B70] font-semibold">strategy</strong>, <strong className="text-[#071B70] font-semibold">creativity</strong>, <strong className="text-[#071B70] font-semibold">technology</strong>, and <strong className="text-[#071B70] font-semibold">performance</strong> into one connected system engineered for compounding returns.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={220}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B70]">
                      <CheckCircle2 className="w-4 h-4 text-[#087CCB]" />
                      <span>Full-Funnel Ownership</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      From high-intent search capture and brand storytelling to landing UX and customer retention.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B70]">
                      <CheckCircle2 className="w-4 h-4 text-[#087CCB]" />
                      <span>Audited Performance</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Zero vanity reporting. Real revenue, verified CAC compression, and first-party attribution.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CONNECTED ECOSYSTEM & INTERACTIVE SERVICES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Connected Ecosystem Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 pb-12 border-b border-slate-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#087CCB]" />
                <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                  Connected Ecosystem • Capabilities
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight leading-tight">
                Six Disciplines. One Integrated Growth Engine.
              </h2>
            </div>
            <div className="lg:col-span-6">
              {/* Horizontal 3-Stage Connected Flow */}
              <div className="grid grid-cols-3 gap-4 items-center text-left">
                <div className="pl-3 border-l-2 border-[#071B70]">
                  <div className="font-mono-tag text-[11px] text-[#087CCB] font-bold">01 ATTRACT</div>
                  <div className="font-display font-bold text-sm text-[#071B70] mt-0.5">Demand Capture</div>
                </div>
                <div className="pl-3 border-l-2 border-[#087CCB]">
                  <div className="font-mono-tag text-[11px] text-[#087CCB] font-bold">02 CONVERT</div>
                  <div className="font-display font-bold text-sm text-[#071B70] mt-0.5">Web &amp; Brand UX</div>
                </div>
                <div className="pl-3 border-l-2 border-[#FFC400]">
                  <div className="font-mono-tag text-[11px] text-[#FF7900] font-bold">03 COMPOUND</div>
                  <div className="font-display font-bold text-sm text-[#071B70] mt-0.5">Retention Loops</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Asymmetric Capabilities Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Interactive Typographic Service Directory */}
            <div className="lg:col-span-6 divide-y divide-slate-200 border-b border-slate-200">
              {CORE_SERVICES_ECOSYSTEM.map((service, idx) => {
                const isActive = idx === activeServiceIdx;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveServiceIdx(idx)}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`group py-5 sm:py-6 cursor-pointer transition-all duration-200 ${
                      isActive ? 'pl-4 border-l-4 border-l-[#087CCB] bg-[#F7F9FC]/70' : 'hover:pl-2'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span
                          className={`font-mono-tag text-xs font-bold ${
                            isActive ? 'text-[#087CCB]' : 'text-slate-400'
                          }`}
                        >
                          {service.num}
                        </span>
                        <div className="min-w-0">
                          <h3
                            className={`font-display font-bold text-xl sm:text-2xl tracking-tight transition-colors ${
                              isActive ? 'text-[#071B70]' : 'text-slate-700 group-hover:text-[#071B70]'
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1 truncate">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={service.href}
                        aria-label={`Explore ${service.title}`}
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          isActive
                            ? 'bg-[#071B70] text-white'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-[#087CCB] group-hover:text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Live Dynamic Service Preview Panel */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="card-minimal overflow-hidden bg-[#F7F9FC]">
                <div className="relative aspect-16/10 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 580px"
                  />
                </div>
                <div className="p-7 sm:p-8 space-y-5 bg-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono-tag text-xs font-semibold uppercase tracking-wider text-[#087CCB]">
                      {activeService.num} — Capability Spotlight
                    </span>
                    <span className="text-xs font-bold text-[#071B70] bg-[#FFC400]/20 px-3 py-1 rounded-md">
                      {activeService.metric}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-extrabold text-2xl text-[#071B70]">
                      {activeService.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2">
                      {activeService.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {activeService.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#087CCB] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link href={activeService.href} className="btn-primary group w-full sm:w-auto">
                      <span>Explore {activeService.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hidden semantic text for SEO/accessibility ensuring all service sub-disciplines remain indexed */}
              <span className="sr-only">Search Engine Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — THE NOVASPARK GROWTH JOURNEY (INTERACTIVE TIMELINE)
         ═══════════════════════════════════════════════════════════ */}
      <GrowthJourney />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — WHY NOVASPARK (MINIMALIST EDITORIAL GRID)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#087CCB]" />
                <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                  The NovaSpark Difference
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
                Why Ambitious Brands Choose Us.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We reject junior staffing, bloated retainers, and passive maintenance. Every engagement is led by senior operators focused on commercial impact.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {DIFFERENTIATORS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="pt-6 border-t border-slate-300/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <IconComp className="w-5 h-5 text-[#087CCB]" />
                      <span className="font-mono-tag text-xs text-slate-400">/{item.step}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#071B70]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — CASE STUDIES (ASYMMETRIC EDITORIAL PORTFOLIO)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#087CCB]" />
                <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                  Selected Case Studies
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
                Growth Stories. Real Impact.
              </h2>
            </div>

            <Link href="/case-studies" className="btn-secondary group self-start md:self-auto">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured Large Editorial Case Study */}
          <div className="card-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 mb-16 border-b border-slate-200">
            <Link
              href={`/case-studies/${featuredStudy.slug}`}
              className="lg:col-span-7 relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-slate-100 group block"
            >
              <Image
                src={featuredStudy.image}
                alt={featuredStudy.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </Link>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono-tag uppercase tracking-wider">
                <span className="text-[#087CCB] font-bold">{featuredStudy.industry}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{featuredStudy.category}</span>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {featuredStudy.client}
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] leading-snug">
                  {featuredStudy.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  {featuredStudy.summary}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200">
                {featuredStudy.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display font-black text-xl text-[#071B70]">{m.value}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${featuredStudy.slug}`}
                className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#071B70] hover:text-[#087CCB] group transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Supporting Case Studies — Clean 2-Column Editorial Spread */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supportingStudies.map((project) => (
              <div key={project.slug} className="card-editorial space-y-5 group">
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-slate-100 block"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                </Link>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono-tag uppercase tracking-wider">
                    <span className="text-[#087CCB] font-bold">{project.industry}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">{project.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                    <Link href={`/case-studies/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-6">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <span className="font-display font-extrabold text-base text-[#071B70]">{m.value}</span>
                          <span className="text-xs text-slate-500 ml-1.5">{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] hover:text-[#087CCB]"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — INDUSTRIES WE SPECIALIZE IN (VARIED BENTO DIRECTORY)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F7F9FC] border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#087CCB]" />
              <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                Sector Expertise
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              Industries We Specialize In.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Category-specific growth architectures built around the real purchase cycles of each vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {INDUSTRIES.map((ind, i) => {
              const isLead = i === 0 || i === 3;
              return (
                <div
                  key={ind.title}
                  className={`relative rounded-2xl overflow-hidden group min-h-[300px] ${
                    isLead ? 'md:col-span-7 min-h-[340px]' : 'md:col-span-5 min-h-[340px]'
                  }`}
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B70]/95 via-[#071B70]/55 to-transparent" />

                  <div className="relative z-10 h-full p-7 sm:p-8 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tag text-[11px] uppercase tracking-wider bg-white/15 backdrop-blur-sm px-3 py-1 rounded-md border border-white/15">
                        {ind.challenge}
                      </span>
                      <span className="font-display font-bold text-xs text-[#071B70] bg-[#FFC400] px-3 py-1 rounded-md">
                        {ind.metric}
                      </span>
                    </div>

                    <div className="space-y-2.5 max-w-lg">
                      <h3 className="font-display font-extrabold text-2xl text-white">
                        {ind.title}
                      </h3>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {ind.desc}
                      </p>
                      <Link
                        href={`/contact?service=${encodeURIComponent(ind.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00BCEB] hover:text-[#FFC400] pt-1 transition-colors"
                      >
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — LEADERSHIP TEAM (HUMAN & AUTHENTIC)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200/70" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#087CCB]" />
              <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                Leadership
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              Meet the Minds Powering Your Growth.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Dedicated operators and strategists leading every engagement from thesis to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {AGENCY_TEAM.map((member) => (
              <div key={member.name} className="group space-y-5">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#071B70]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#087CCB] mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono-tag text-slate-400 hover:text-[#071B70] transition-colors"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — TESTIMONIALS (EDITORIAL SPOTLIGHT)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F7F9FC] border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#087CCB]" />
              <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                Client Testimonials
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrevTestimonial}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-[#071B70] hover:border-[#071B70] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono-tag text-xs text-slate-500">
                0{activeTestimonialIdx + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-[#071B70] hover:border-[#071B70] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <Quote className="w-10 h-10 text-[#087CCB]/30" />

            <blockquote className="font-display font-bold text-2xl sm:text-4xl text-[#071B70] leading-snug tracking-tight">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-lg text-[#071B70]">
                  {activeTestimonial.author}
                </div>
                <div className="text-sm text-slate-600">
                  {activeTestimonial.role},{' '}
                  <span className="font-semibold text-[#087CCB]">{activeTestimonial.company}</span>
                </div>
              </div>

              <span className="font-mono-tag text-xs font-bold text-[#071B70] bg-[#FFC400]/25 px-3.5 py-1.5 rounded-md">
                {activeTestimonial.metric}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11 — INSIGHTS & PERSPECTIVES (EDITORIAL PUBLICATION)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#087CCB]" />
                <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                  Growth Intelligence &amp; Playbooks
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
                Insights &amp; Perspectives.
              </h2>
            </div>

            <Link href="/services" className="btn-secondary group self-start md:self-auto">
              <span>Explore Playbooks</span>
              <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Featured Lead Article */}
            <article className="lg:col-span-7 group space-y-5">
              <Link
                href="/contact"
                className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-slate-100 block"
              >
                <Image
                  src={ARTICLES[0].image}
                  alt={ARTICLES[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
              </Link>
              <div className="flex items-center gap-3 text-xs font-mono-tag text-slate-500">
                <span className="text-[#087CCB] font-bold uppercase">{ARTICLES[0].category}</span>
                <span>•</span>
                <span>{ARTICLES[0].date}</span>
                <span>•</span>
                <span>{ARTICLES[0].readTime}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                <Link href="/contact">{ARTICLES[0].title}</Link>
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {ARTICLES[0].desc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#071B70] hover:text-[#087CCB]"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            {/* Supporting Articles Stack */}
            <div className="lg:col-span-5 divide-y divide-slate-200 border-t lg:border-t-0 border-slate-200">
              {ARTICLES.slice(1).map((art, idx) => (
                <article
                  key={art.title}
                  className={`group space-y-3 ${idx === 0 ? 'pb-8 pt-8 lg:pt-0' : 'pt-8'}`}
                >
                  <Link
                    href="/contact"
                    className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-slate-100 block"
                  >
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 440px"
                    />
                  </Link>
                  <div className="flex items-center gap-3 text-xs font-mono-tag text-slate-500 pt-1">
                    <span className="text-[#087CCB] font-bold uppercase">{art.category}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                    <Link href="/contact">{art.title}</Link>
                  </h3>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] hover:text-[#087CCB]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12 — FAQ (MINIMALIST ACCORDION)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-28 bg-[#F7F9FC] border-t border-slate-200/70">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-14">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#087CCB]" />
              <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                Clarity &amp; Transparency
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-6 focus:outline-none cursor-pointer group"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#071B70] group-hover:text-[#087CCB] transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#087CCB]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-3 pr-8 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 13 — FINAL CONVERSION CTA (DEEP ROYAL BLUE)
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-[#071B70] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-[#00BCEB]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          <div className="inline-flex items-center gap-2 font-mono-tag text-xs uppercase tracking-widest text-[#00BCEB]">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span>Ready to grow your business online?</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
            Ready to Turn Your Ambition Into Growth?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build a smarter digital strategy that moves your business forward.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold group">
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 min-h-12 px-7 py-3 rounded-xl font-display text-sm font-semibold border border-white/25 text-white hover:bg-white/10 transition-colors"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
