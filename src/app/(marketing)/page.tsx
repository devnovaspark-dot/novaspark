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
  Plus,
  Minus,
  Zap,
  Search,
  Share2,
  FileText,
  Globe,
  TrendingUp,
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
    icon: Zap,
    accent: '#087CCB',
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
    icon: Search,
    accent: '#071B70',
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
    icon: Share2,
    accent: '#FF7900',
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
    icon: FileText,
    accent: '#087CCB',
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
    icon: Globe,
    accent: '#00BCEB',
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
    icon: TrendingUp,
    accent: '#FFC400',
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
    image: '/images/work_fashion.jpg',
  },
  {
    title: 'Real Estate & Infrastructure',
    challenge: 'Unqualified lead volume',
    desc: 'Geo-targeted commercial search campaigns, luxury landing experiences, and instant CRM lead routing.',
    metric: '480+ Leads/mo',
    image: '/images/work_realestate.jpg',
  },
  {
    title: 'Healthcare & Retail Clinics',
    challenge: 'Driving consistent local bookings',
    desc: 'Hyper-local Google 3-Pack domination, review velocity systems, and nearby intent capture.',
    metric: '+74% Footfall',
    image: '/images/work_healthcare.jpg',
  },
  {
    title: 'Fine Dining & Hospitality',
    challenge: 'Weekday occupancy & banquet bookings',
    desc: 'Cinematic culinary reels, creator tasting campaigns, and direct reservation funnels.',
    metric: '96% Occupancy',
    image: '/images/work_restaurant.jpg',
  },
  {
    title: 'EdTech & Professional Services',
    challenge: 'High-intent enrollment pipelines',
    desc: 'Full-funnel search capture, webinar lead funnels, and automated WhatsApp nurture.',
    metric: '3.4X Pipeline',
    image: '/images/work_edtech.jpg',
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
    image: '/images/Medallion house.jpg',
    logo: '/images/clients/medallion-house.png',
  },
  {
    quote:
      'Dominating 180+ commercial keywords on Google without burning millions on marketplace ads changed our entire profit margin. Organic search now generates 54% of our total revenue predictably every month.',
    author: 'Ananya Mohapatra',
    role: 'Founder',
    company: 'Ekatraa Organics',
    metric: '180+ #1 Rankings',
    image: '/images/Ekatraa.jpg',
    logo: '/images/clients/ekatraa.png',
  },
  {
    quote:
      'Our retail stores experienced an immediate 74% increase in verified walk-in footfall across Bhubaneswar. Their Google Maps 3-Pack engine and review funnels gave us undisputed local market leadership.',
    author: 'Dr. Debabrata Sen',
    role: 'Managing Director',
    company: 'Sri Pandurangan Divine Fresh',
    metric: '+310% Local Impressions',
    image: '/images/Sri Pandurangan Divine Fresh.png',
    logo: '/images/clients/sri-pandurangan-divine-fresh.png',
  },
  {
    quote:
      'NovaSpark’s video creative testing matrix cut our booking acquisition cost in half. We generated over 3,200 tour bookings in our highest season ever with direct WhatsApp lead routing.',
    author: 'Priyanka Das',
    role: 'Growth Director',
    company: 'Weekend Bhraman',
    metric: '-48% Cost Per Booking',
    image: '/images/Weekend Bhraman Tour Planner.jpg',
    logo: '/images/clients/weekend-bhraman.png',
  },
];

const ARTICLES = [
  {
    title: 'First-Party Tracking in 2026: Why Meta CAPI & Server-Side Attribution Are Mandatory',
    category: 'Performance Marketing',
    readTime: '5 min read',
    date: 'July 2026',
    desc: 'How third-party cookie phase-outs impacted ad costs and why first-party server-side tracking pipelines restore 30%+ attribution accuracy.',
    image: '/images/work_ecommerce.jpg',
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
    image: '/images/work_edtech.jpg',
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
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredStudy = AGENCY_CASE_STUDIES.find((p) => p.featured) || AGENCY_CASE_STUDIES[0];
  const supportingStudies = AGENCY_CASE_STUDIES.filter((p) => p.slug !== featuredStudy.slug).slice(0, 2);
  const activeTestimonial = TESTIMONIALS[activeTestimonialIdx];

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white text-[#111827]">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (STUDIO EDITORIAL + TACTILE FRAMING)
         ═══════════════════════════════════════════════════════════ */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#F7F9FC] to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal delay={40}>
                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="relative w-5 h-5 animate-logo-float">
                    <Image
                      src="/images/logo.png"
                      alt="NovaSpark Mark"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-mono-tag text-[11px] font-semibold uppercase tracking-widest text-[#071B70]">
                    Your Business, Our Strategy
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.85rem] text-[#071B70] tracking-tight leading-[1.04]">
                  Turn Digital Attention <br />
                  <span className="text-[#087CCB]">Into Business Growth.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  We combine creative thinking, intelligent marketing and performance-driven strategies to help businesses build stronger brands and achieve measurable growth.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220}>
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

              <ScrollReveal delay={280}>
                <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-lg">
                  <div>
                    <div className="font-display font-black text-2xl text-[#071B70]">100%</div>
                    <div className="text-xs text-slate-500 mt-0.5">Audited Real Data</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-[#087CCB]">3.8X</div>
                    <div className="text-xs text-slate-500 mt-0.5">Average Client ROAS</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-[#071B70]">+240%</div>
                    <div className="text-xs text-slate-500 mt-0.5">Average Revenue Lift</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#087CCB]/10 via-[#00BCEB]/5 to-[#FFC400]/10 rounded-3xl blur-2xl pointer-events-none" />
              <ScrollReveal delay={150} direction="left" className="w-full relative z-10">
                <div className="relative w-full aspect-4/3 card-tactile overflow-hidden p-2 bg-white">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/hero_studio.jpg"
                      alt="NovaSpark Digital Marketing Agency Studio"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 640px"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — PERFORMANCE BAR & SEAMLESS CLIENT MARQUEE
         ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#071B70] text-white py-11">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:divide-x divide-white/15">
            {AGENCY_METRICS_HIGHLIGHTS.map((metric, idx) => (
              <div key={metric.label} className={`${idx > 0 ? 'lg:pl-6' : ''}`}>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">{metric.label}</div>
                <div className="text-[11px] text-[#00BCEB] mt-0.5 font-mono-tag">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#F7F9FC] border-b border-slate-200 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F7F9FC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F7F9FC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee items-center">
            {[...AGENCY_CLIENT_LOGOS, ...AGENCY_CLIENT_LOGOS].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center justify-center mx-8 sm:mx-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                <div className="relative h-8 w-28 sm:w-32">
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
          SECTION 3 — AGENCY THESIS (EDITORIAL SPLIT)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#071B70] tracking-tight leading-[1.1]">
                More Than Marketing.{' '}
                <span className="text-[#087CCB]">A Smarter Way to Grow.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Most agencies operate in disconnected silos: creative teams design visuals without understanding unit economics, while media buyers run ads without understanding brand positioning. At <strong className="text-[#071B70] font-semibold">NovaSpark</strong>, we unify strategy, creativity, technology, and performance into one accountable system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="card-tactile p-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B70]">
                    <CheckCircle2 className="w-4 h-4 text-[#087CCB]" />
                    <span>Full-Funnel Ownership</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    From high-intent search capture and brand storytelling to landing UX and customer retention.
                  </p>
                </div>
                <div className="card-tactile p-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B70]">
                    <CheckCircle2 className="w-4 h-4 text-[#087CCB]" />
                    <span>Audited Performance</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zero vanity reporting. Real revenue, verified CAC compression, and first-party attribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CONNECTED ECOSYSTEM (2x3 TACTILE BENTO GRID)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC] border-b border-slate-200" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="space-y-2">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
                One Connected Ecosystem.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl">
                Six integrated disciplines engineered to capture demand, convert traffic, and compound revenue.
              </p>
            </div>

            <div className="inline-flex items-center gap-4 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-mono-tag">
              <span className="text-[#071B70] font-bold">01 Attract</span>
              <span className="text-slate-300">→</span>
              <span className="text-[#087CCB] font-bold">02 Convert</span>
              <span className="text-slate-300">→</span>
              <span className="text-[#FF7900] font-bold">03 Compound</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {CORE_SERVICES_ECOSYSTEM.map((service) => {
              const IconComp = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="card-tactile p-7 flex flex-col justify-between gap-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#F7F9FC] border border-slate-200/90 shadow-2xs flex items-center justify-center group-hover:bg-[#071B70] group-hover:border-[#071B70] transition-colors">
                        <IconComp
                          className="w-5 h-5 transition-colors group-hover:text-[#FFC400]"
                          style={{ color: service.accent }}
                        />
                      </div>
                      <span className="font-mono-tag text-xs font-bold text-[#071B70] bg-[#FFC400]/20 px-2.5 py-1 rounded-md">
                        {service.metric}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono-tag text-[11px] text-[#087CCB] font-semibold block">
                        {service.num} — {service.subtitle.split('•')[0].trim()}
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-[#071B70] group-hover:text-[#087CCB] transition-colors mt-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#071B70] group-hover:text-[#087CCB]">
                    <span>Explore {service.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          <span className="sr-only">Search Engine Optimization</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — THE NOVASPARK GROWTH JOURNEY
         ═══════════════════════════════════════════════════════════ */}
      <GrowthJourney />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — WHY NOVASPARK (TACTILE FEATURE CARDS)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28 lg:self-start">
              <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
                The NovaSpark Difference
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
                Why Ambitious Brands Choose Us.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Senior operators, transparent reporting, and systems engineered for commercial outcomes.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DIFFERENTIATORS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="card-tactile p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F9FC] border border-slate-200 flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-[#087CCB]" />
                      </div>
                      <span className="font-mono-tag text-xs text-slate-400">/{item.step}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#071B70]">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — CASE STUDIES (TACTILE EDITORIAL PORTFOLIO)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono-tag text-xs text-[#087CCB] uppercase tracking-widest font-semibold block mb-1">
                Selected Case Studies
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
                Growth Stories. Real Impact.
              </h2>
            </div>

            <Link href="/case-studies" className="btn-secondary group self-start md:self-auto">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="card-tactile p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
            <Link
              href={`/case-studies/${featuredStudy.slug}`}
              className="lg:col-span-7 relative aspect-16/10 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group block"
            >
              <Image
                src={featuredStudy.image}
                alt={featuredStudy.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </Link>

            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-mono-tag uppercase tracking-wider text-[#087CCB] font-semibold">
                {featuredStudy.industry} • {featuredStudy.category}
              </div>

              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
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
                className="btn-primary group"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Supporting Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportingStudies.map((project) => (
              <div key={project.slug} className="card-tactile p-6 sm:p-7 space-y-5 group flex flex-col justify-between">
                <div className="space-y-4">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 580px"
                    />
                  </Link>

                  <div className="space-y-2">
                    <div className="text-xs font-mono-tag uppercase tracking-wider text-[#087CCB] font-semibold">
                      {project.industry} • {project.category}
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                      <Link href={`/case-studies/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-5">
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
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — INDUSTRIES (TACTILE SECTOR DIRECTORY)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#F7F9FC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              Industries We Specialize In.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-md">
              Sector-specific growth architectures built around the purchase cycles of each vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {INDUSTRIES.map((ind) => (
              <div key={ind.title} className="card-tactile overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="relative aspect-16/10 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between gap-2 text-xs font-mono-tag">
                      <span className="text-slate-500">{ind.challenge}</span>
                      <span className="font-bold text-[#071B70] bg-[#FFC400]/25 px-2.5 py-0.5 rounded-md">
                        {ind.metric}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#071B70]">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100">
                  <Link
                    href={`/contact?service=${encodeURIComponent(ind.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] hover:text-[#087CCB]"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — LEADERSHIP (COHESIVE TACTILE PORTRAIT CARDS)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono-tag text-xs text-[#087CCB] uppercase tracking-widest font-semibold block mb-1">
                Leadership
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
                Meet the Minds Powering Your Growth.
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md">
              Dedicated operators leading every engagement from thesis to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENCY_TEAM.map((member) => (
              <div key={member.name} className="card-tactile overflow-hidden group flex flex-col h-full">
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B70]/25 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
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
                        className="text-xs font-mono-tag text-slate-500 hover:text-[#071B70] bg-slate-100 px-2.5 py-1 rounded-md transition-colors shrink-0"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        in ↗
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">{member.bio}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                    {member.dept}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — CLIENT TESTIMONIALS (COMPACT & VISUAL)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
              Verified Client Voices.
            </h2>
            <span className="font-mono-tag text-xs text-slate-500">
              Select a partner story below
            </span>
          </div>

          <div className="card-tactile overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[260px] bg-slate-100 overflow-hidden">
              <Image
                src={activeTestimonial.image}
                alt={activeTestimonial.company}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-slate-200">
                <div className="relative h-6 w-24">
                  <Image
                    src={activeTestimonial.logo}
                    alt={`${activeTestimonial.company} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Quote className="w-5 h-5 text-[#087CCB]/60" />
                  <span className="font-mono-tag text-xs font-bold text-[#071B70] bg-[#FFC400]/25 px-3 py-1 rounded-md">
                    {activeTestimonial.metric}
                  </span>
                </div>

                <blockquote className="font-display font-semibold text-lg sm:text-xl text-[#071B70] leading-relaxed">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-display font-bold text-base text-[#071B70]">
                  {activeTestimonial.author}
                </div>
                <div className="text-xs sm:text-sm text-slate-600">
                  {activeTestimonial.role},{' '}
                  <span className="font-semibold text-[#087CCB]">{activeTestimonial.company}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((t, idx) => {
              const isSelected = idx === activeTestimonialIdx;
              return (
                <button
                  key={t.company}
                  type="button"
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`text-left p-4 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-[#087CCB] shadow-sm'
                      : 'bg-white/70 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="relative h-5 w-20">
                      <Image
                        src={t.logo}
                        alt={t.company}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="font-mono-tag text-[10px] font-bold text-[#087CCB]">
                      {t.metric}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-2 text-[11px] font-bold text-[#071B70]">
                    {t.author} <span className="font-normal text-slate-400">• {t.company}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11 — INSIGHTS & PERSPECTIVES (TACTILE PUBLICATION)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono-tag text-xs text-[#087CCB] uppercase tracking-widest font-semibold block mb-1">
                Growth Intelligence &amp; Playbooks
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight">
                Insights &amp; Perspectives.
              </h2>
            </div>

            <Link href="/services" className="btn-secondary group self-start md:self-auto">
              <span>Explore Playbooks</span>
              <ArrowRight className="w-4 h-4 text-[#087CCB] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <article className="lg:col-span-7 card-tactile p-6 sm:p-7 group space-y-4">
              <Link
                href="/contact"
                className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-slate-100 block"
              >
                <Image
                  src={ARTICLES[0].image}
                  alt={ARTICLES[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
              <p className="text-slate-600 text-base leading-relaxed">{ARTICLES[0].desc}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#071B70] hover:text-[#087CCB]"
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>

            <div className="lg:col-span-5 flex flex-col gap-6">
              {ARTICLES.slice(1).map((art) => (
                <article
                  key={art.title}
                  className="card-tactile p-5 group space-y-3 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-slate-100 block"
                    >
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 440px"
                      />
                    </Link>
                    <div className="flex items-center gap-3 text-xs font-mono-tag text-slate-500">
                      <span className="text-[#087CCB] font-bold uppercase">{art.category}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                      <Link href="/contact">{art.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] hover:text-[#087CCB] pt-1"
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
          SECTION 12 — FAQ (TACTILE ACCORDION — COLLAPSED BY DEFAULT)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#F7F9FC] border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="card-tactile px-6 py-4">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087CCB] rounded-lg py-1 cursor-pointer group"
                  >
                    <span
                      className={`font-display font-bold text-base sm:text-lg transition-colors ${
                        isOpen ? 'text-[#087CCB]' : 'text-[#071B70] group-hover:text-[#087CCB]'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#071B70] text-white'
                          : 'bg-[#F7F9FC] border border-slate-200 text-slate-500 group-hover:border-[#071B70]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pr-8 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 13 — PRE-FOOTER PREMIUM FEATURE CTA CARD
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0B2285] via-[#071B70] to-[#041046] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_28px_60px_-15px_rgba(7,27,112,0.42)]">
            <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />
            <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-[#00BCEB]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-10 w-[320px] h-[320px] bg-[#087CCB]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle Decorative Brand Geometric Rings */}
            <div className="hidden lg:flex items-center justify-center absolute -right-12 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-35">
              <div className="w-72 h-72 rounded-full border border-[#00BCEB]/40 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full border border-white/25 flex items-center justify-center">
                  <div className="relative w-16 h-16 animate-logo-float">
                    <Image src="/images/logo.png" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:pr-44">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 font-mono-tag text-xs uppercase tracking-widest text-[#00BCEB]">
                  <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                  <span>Ready to grow your business online?</span>
                </div>

                <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.08]">
                  Ready to Turn Your Ambition Into Growth?
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Let&apos;s build a smarter digital strategy that moves your business forward.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link href="/contact" className="btn-gold group">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 rounded-xl font-display text-sm font-semibold border border-white/25 bg-white/5 text-white hover:bg-white/15 transition-all"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
