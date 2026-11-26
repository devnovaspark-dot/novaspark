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
                    <div className="font-display font-extrabold text-2xl lg:text-3xl text-[#071B70]">100+</div>
                    <div className="text-xs text-[#64748B] font-medium mt-0.5">Brands Scaled Across India</div>
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
                  <div className="relative rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 overflow-hidden">
                    {/* Header bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-400" />
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400" />
                        <span className="text-xs font-mono font-medium text-slate-400 ml-2">novaspark.intelligence/live</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active ROAS Engine
                      </span>
                    </div>

                    {/* Integrated 3D Growth Graphic */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-4">
                      <Image
                        src="/images/homepage_3d.webp"
                        alt="NovaSpark Digital Growth Engine"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-md">
                        Your Business, Our Strategy
                      </div>
                    </div>

                    {/* Performance Metrics Row */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[11px] font-medium text-slate-500">Google Ads & PMax</div>
                        <div className="font-display font-bold text-sm text-[#071B70] mt-0.5">3.8X - 4.8X ROAS</div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">High Intent Search</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[11px] font-medium text-slate-500">Organic Inbound SEO</div>
                        <div className="font-display font-bold text-sm text-[#087CCB] mt-0.5">+380% Lift</div>
                        <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Compound Traffic</div>
                      </div>
                    </div>
                  </div>

                  {/* Micro Badge 1 */}
                  <div className="absolute -bottom-6 -left-6 card-luxury p-4 shadow-xl flex items-center gap-3 bg-white/95 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl bg-[#FFC400]/20 flex items-center justify-center text-[#FF7900]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Creative Velocity</div>
                      <div className="font-display font-extrabold text-sm text-[#071B70]">Top 1% Ad Engagement</div>
                    </div>
                  </div>

                  {/* Micro Badge 2 */}
                  <div className="absolute -top-6 -right-4 bg-gradient-to-r from-[#071B70] to-[#040D36] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00BCEB] animate-ping" />
                    <span className="text-xs font-bold tracking-wide">100+ Brands Scaled</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — REAL RESULTS SCOREBOARD
          +240% | +180% | 3.8X | +380% | +410%
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#071B70] text-white border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="badge-tag-dark mx-auto">
              Real Results From Our Digital Marketing Campaigns
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {AGENCY_METRICS_HIGHLIGHTS.map((metric) => (
              <div key={metric.label} className="card-dark-glass p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-display font-black text-3xl sm:text-4xl text-[#FFC400] drop-shadow-sm">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-white mt-2 tracking-wide">{metric.label}</div>
                <div className="text-[10px] text-[#00BCEB] font-semibold mt-1 font-mono-tag">{metric.sub}</div>
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
                  <div className="card-luxury p-5 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#087CCB]/10 flex items-center justify-center text-[#087CCB] shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-[#071B70]">Full-Funnel Ownership</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">From initial impression to checkout, we optimize the complete customer journey.</p>
                    </div>
                  </div>
                  <div className="card-luxury p-5 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF7900]/10 flex items-center justify-center text-[#FF7900] shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
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
      <section className="py-20 bg-[#071B70] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag-dark mx-auto">
                <span>Chapter 02 // The Multiplier Ecosystem</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-3">
                How Our Services Work as One Connected Ecosystem.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When channels communicate, customer acquisition cost drops and lifetime value multiplies.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="card-dark-glass p-8 space-y-4 h-full relative overflow-hidden group hover:scale-[1.02]">
                <div className="w-11 h-11 rounded-2xl bg-[#00BCEB]/20 text-[#00BCEB] flex items-center justify-center font-bold text-sm border border-[#00BCEB]/30 shadow-xs">
                  01
                </div>
                <h3 className="font-display font-extrabold text-xl text-white">Attract &amp; Inbound Demand</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  SEO and Google Ads capture existing high-intent commercial buyers actively searching for your solution today.
                </p>
                <div className="text-xs text-[#00BCEB] font-semibold pt-2 font-mono-tag">
                  Channels: Search SEO • Google Ads • Local Map Pack
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-dark-glass p-8 space-y-4 h-full relative overflow-hidden group hover:scale-[1.02]">
                <div className="w-11 h-11 rounded-2xl bg-[#FFC400]/20 text-[#FFC400] flex items-center justify-center font-bold text-sm border border-[#FFC400]/30 shadow-xs">
                  02
                </div>
                <h3 className="font-display font-extrabold text-xl text-white">Educate &amp; Convert</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Bespoke Next.js web experiences, compelling brand design, and authoritative content eliminate friction and maximize conversions.
                </p>
                <div className="text-xs text-[#FFC400] font-semibold pt-2 font-mono-tag">
                  Channels: Modern Next.js UI • Brand Identity • Content
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card-dark-glass p-8 space-y-4 h-full relative overflow-hidden group hover:scale-[1.02]">
                <div className="w-11 h-11 rounded-2xl bg-[#087CCB]/20 text-[#087CCB] flex items-center justify-center font-bold text-sm border border-[#087CCB]/30 shadow-xs">
                  03
                </div>
                <h3 className="font-display font-extrabold text-xl text-white">Amplify &amp; Retain</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Meta paid social, retargeting funnels, and organic community nurture re-engage buyers, accelerating repeat orders and referral loops.
                </p>
                <div className="text-xs text-[#00BCEB] font-semibold pt-2 font-mono-tag">
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
            {AGENCY_SERVICES.map((s, idx) => (
              <ScrollReveal key={s.id} delay={idx * 60}>
                <div className="card-luxury p-7 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-200">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#071B70] shadow-xs">
                        {s.category}
                      </div>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-600 font-mono-tag">{s.metricsHighlight}</span>
                    <Link
                      href={`/services#${s.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] group-hover:text-[#FF7900] transition-colors"
                    >
                      <span>Explore</span>
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
              {[
                {
                  icon: Compass,
                  title: 'Strategy Before Execution',
                  desc: 'We never spend a single dollar on ads or publish a piece of content without first validating customer intent, unit economics, and competitive gaps.',
                },
                {
                  icon: Sparkles,
                  title: 'Creativity With Purpose',
                  desc: 'Visual design should never be decorative indulgence. Every design element is crafted to communicate value, build trust, and drive action.',
                },
                {
                  icon: BarChart3,
                  title: 'Data-Driven Decisions',
                  desc: 'We replace gut feelings with verified statistical significance. A/B testing, cohort tracking, and algorithmic optimization guide every pivot.',
                },
                {
                  icon: Shield,
                  title: 'Transparent Performance',
                  desc: 'Direct dashboard access, zero hidden markups, and unvarnished reporting. You always know exactly what was invested and what was returned.',
                },
                {
                  icon: RefreshCw,
                  title: 'Continuous Optimization',
                  desc: 'Campaigns are never "set and forgotten." We iterate creative angles, landing page copy, and negative match keywords every single week.',
                },
                {
                  icon: Award,
                  title: 'Senior Operator Led',
                  desc: 'Your account is directed by seasoned growth practitioners with over a decade of hands-on experience, not delegated to interns.',
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={index * 80}>
                    <div className="card-luxury p-7 flex flex-col justify-between h-full group">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#087CCB]/10 to-[#00BCEB]/10 border border-[#087CCB]/20 flex items-center justify-center text-[#071B70] mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-[#071B70] mb-2">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
                { step: '01', name: 'Discover', desc: 'Audit unit economics, audience intent & competitive whitespace.' },
                { step: '02', name: 'Strategize', desc: 'Define core messaging angles, media mix, and growth KPIs.' },
                { step: '03', name: 'Create', desc: 'Produce high-converting creative assets, ad copy & landing UX.' },
                { step: '04', name: 'Execute', desc: 'Deploy multi-channel campaigns with first-party tracking.' },
                { step: '05', name: 'Optimize', desc: 'Cut underperforming assets, scale winners & lower CPA.' },
                { step: '06', name: 'Grow', desc: 'Expand into new markets, channels & compounding pipeline.' },
              ].map((phase, idx) => (
                <ScrollReveal key={phase.step} delay={idx * 100}>
                  <div className="card-luxury p-6 flex flex-col text-center items-center h-full group hover:scale-[1.03]">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#071B70] to-[#040D36] text-[#FFC400] font-display font-black text-sm flex items-center justify-center mb-4 border border-white/20 shadow-md group-hover:scale-110 transition-transform">
                      {phase.step}
                    </div>
                    <h3 className="font-display font-extrabold text-base text-[#071B70] mb-2">{phase.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{phase.desc}</p>
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
                <div className="card-luxury overflow-hidden flex flex-col h-full group">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#071B70] shadow-sm">
                      {project.industry}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#071B70] text-[#00BCEB] px-3 py-1 rounded-full text-xs font-bold shadow-sm">
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
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display font-black text-lg text-[#071B70]">{m.value}</div>
                          <div className="text-[11px] text-slate-500 font-medium truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#071B70] group-hover:text-[#FF7900] transition-colors"
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
                  <div className="card-luxury overflow-hidden flex flex-col justify-between h-full group">
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#071B70] shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-3 right-4 bg-[#FFC400] text-[#071B70] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {ind.metric}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
                      <div>
                        <h4 className="font-display font-bold text-lg text-[#071B70] group-hover:text-[#087CCB] transition-colors">
                          {ind.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                          {ind.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-200">
                        <Link
                          href={`/contact?service=${encodeURIComponent(ind.title)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] group-hover:text-[#FF7900] transition-colors"
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
                <div className="card-luxury overflow-hidden flex flex-col h-full group">
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
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-[11px] text-slate-500 italic">
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
                Trusted by 100+ Ambitious Founders.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Hear directly from business leaders who partnered with NovaSpark to scale their revenue.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={t.author} delay={idx * 80}>
                <div className="card-luxury p-8 flex flex-col justify-between h-full space-y-6 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#FFC400]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        {t.metric}
                      </span>
                    </div>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
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
                <div className="card-luxury overflow-hidden flex flex-col justify-between h-full group">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#071B70]">
                        {art.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug">
                        {art.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {art.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] group-hover:text-[#FF7900] transition-colors"
                    >
                      <span>Read Playbook</span>
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
                  <div className="card-luxury overflow-hidden transition-all duration-200 bg-white">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-[#071B70]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#087CCB] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 mt-1">
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
          SECTION 15 — PRE-FOOTER CTA
          "Ready to grow your business online?"
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#071B70] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#087CCB]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <ScrollReveal>
            <div className="badge-tag-dark mx-auto">
              <span>Your Business, Our Strategy</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-6xl text-white tracking-tight mt-4">
              Ready to grow your business online?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mt-4">
              Let&apos;s build a marketing strategy that moves your business forward. Request a confidential growth audit with our senior leadership team.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                <span>Get a Free Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/918280788689"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white px-8 py-4"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
