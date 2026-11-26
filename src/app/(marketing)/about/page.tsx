'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Target,
  Eye,
  Sparkles,
  CheckCircle,
  Compass,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Award,
  Zap,
  Clock,
  Layers,
  Users,
  Quote,
  Check,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { AGENCY_TEAM } from '@/lib/agency-data';

const TIMELINE = [
  {
    year: '2021',
    chapter: 'The Genesis',
    title: 'A Rejection of Traditional Agency Bloat',
    desc: 'Founded in Bhubaneswar by senior digital practitioners who refused to accept the broken agency model: massive retainer fees, junior account managers, and vanity metrics that never reflected in client bank deposits.',
    stat: 'First 10 D2C Brands',
    takeaway: 'Principle 01: Zero junior handoffs. Every campaign managed by senior founders.',
  },
  {
    year: '2022',
    chapter: 'The Testing Lab',
    title: 'The Algorithmic Creative Matrix',
    desc: 'Pioneered custom high-velocity creative testing matrices across Google Ads and Meta Ads, scaling regional retail and e-commerce clients to multi-crore annual runs with disciplined unit economics.',
    stat: '₹5Cr+ Revenue Generated',
    takeaway: 'Principle 02: Creativity without financial purpose is just expensive art.',
  },
  {
    year: '2023',
    chapter: 'Technical Hegemony',
    title: 'Next.js & Digital Engineering Mastery',
    desc: 'Expanded into modern headless web development and technical SEO, replacing slow WordPress stacks with sub-second Next.js e-commerce architectures to multiply ad conversion rates.',
    stat: '99+ Lighthouse Speeds',
    takeaway: 'Principle 03: Speed is the ultimate conversion multiplier.',
  },
  {
    year: '2024',
    chapter: 'National Expansion',
    title: '75+ Category Leaders Nationwide',
    desc: 'Crossed 75+ active brand partnerships across Eastern, Northern, and Western India, expanding across luxury lifestyle, healthcare, hospitality, and residential infrastructure.',
    stat: '3.8X Average ROAS',
    takeaway: 'Principle 04: Category exclusivity. We never represent direct local rivals.',
  },
  {
    year: '2026',
    chapter: 'The New Standard',
    title: 'Enterprise Growth & First-Party Attribution',
    desc: 'Leading the post-cookie revolution with proprietary server-side Meta CAPI setups and Google Enhanced Conversions, delivering audited compounding growth for market leaders.',
    stat: 'Audited Real Growth',
    takeaway: 'Principle 05: Complete client ownership of all data, pixels, and accounts.',
  },
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Strategy Before Execution',
    desc: 'We never spend a single rupee on ads or launch a campaign without first auditing unit economics, buyer psychology, and competitive whitespace.',
    icon: Compass,
    accent: '#087CCB',
  },
  {
    num: '02',
    title: 'Creativity With Commercial Purpose',
    desc: 'Design is not cosmetic decoration. Every graphic, hook, and layout is engineered to command attention, overcome objections, and drive action.',
    icon: Sparkles,
    accent: '#FF7900',
  },
  {
    num: '03',
    title: 'Radical Attribution Transparency',
    desc: 'No vanity metrics or disguised reporting. We measure success on actual bank deposits, qualified sales leads, and audited customer acquisition costs.',
    icon: ShieldCheck,
    accent: '#00BCEB',
  },
  {
    num: '04',
    title: 'Senior Practitioners Only',
    desc: 'Your account is directed and executed by senior growth strategists with over a decade of domain expertise. We never hand off work to junior interns.',
    icon: Users,
    accent: '#071B70',
  },
  {
    num: '05',
    title: 'First-Party Tracking Fidelity',
    desc: 'We implement server-side tracking pipelines that bypass third-party cookie restrictions, providing clean data signals back to bidding algorithms.',
    icon: Cpu,
    accent: '#FFC400',
  },
  {
    num: '06',
    title: 'Skin in the Game Retainers',
    desc: 'We reject 12-month lock-in contracts. Our 98.4% client retention rate is earned every 30 days through audited performance and continuous optimization.',
    icon: Award,
    accent: '#087CCB',
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'creativity' | 'technology' | 'strategy' | 'performance'>('creativity');

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — ABOUT HERO NARRATIVE
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#087CCB] animate-ping" />
                <span>The NovaSpark Manifesto // Inside the Agency</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#071B70] tracking-tight leading-[1.08]">
                Built on Ideas. <br />
                <span className="bg-gradient-to-r from-[#087CCB] via-[#00BCEB] to-[#FF7900] bg-clip-text text-transparent">
                  Driven by Growth.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                NovaSpark was born out of profound frustration with the traditional agency model. We replaced vanity metrics, junior account handoffs, and disconnected tactics with an integrated revenue engine trusted by 100+ businesses nationwide.
              </p>
            </ScrollReveal>

            {/* Quick Metrics Ribbon */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
                <div className="card-luxury p-5 text-center group hover:scale-105 transition-transform">
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#071B70]">100+</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Brands Scaled</div>
                </div>
                <div className="card-luxury p-5 text-center group hover:scale-105 transition-transform">
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#087CCB]">3.8X</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Average Client ROAS</div>
                </div>
                <div className="card-luxury p-5 text-center group hover:scale-105 transition-transform">
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#071B70]">₹25Cr+</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Client Revenue Lift</div>
                </div>
                <div className="card-luxury p-5 text-center group hover:scale-105 transition-transform">
                  <div className="font-display font-black text-2xl sm:text-3xl text-emerald-600 font-mono-tag">98.4%</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Client Retention</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Showcase: Agency Headquarters / Collaboration */}
          <ScrollReveal delay={350} className="mt-14">
            <div className="relative h-80 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/about_hero.jpg"
                alt="NovaSpark Growth Hub and Innovation Space"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040D36]/85 via-[#040D36]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00BCEB]/20 text-[#00BCEB] border border-[#00BCEB]/30 mb-2 font-mono-tag">
                    Headquarters &amp; Growth Lab • Bhubaneswar, Odisha
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight">
                    Where Strategy, Creative &amp; Engineering Collide
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-slate-100">Senior Practitioners On Duty</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — THE ORIGIN STORY & EDITORIAL PULL-QUOTE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <div className="badge-tag">
                  <BookOpen className="w-3.5 h-3.5 text-[#071B70]" />
                  <span>Chapter 01 // The Origin Story</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight leading-tight mt-3">
                  Why We Rejected The Traditional Agency Model.
                </h2>
                <div className="w-16 h-1.5 bg-[#FFC400] rounded-full mt-4" />
              </ScrollReveal>

              <ScrollReveal delay={150}>
                {/* Pull-quote card */}
                <div className="card-luxury p-6 bg-gradient-to-br from-amber-50/40 via-white to-white border-l-4 border-l-[#FF7900] space-y-3">
                  <Quote className="w-8 h-8 text-[#FF7900]/40" />
                  <p className="text-base font-serif italic text-slate-800 leading-relaxed">
                    &ldquo;Most agencies treat client ad budgets like play money, hiding behind impressions and click-through rates. We treat every rupee of client capital as if our own firm&apos;s survival depended on the return.&rdquo;
                  </p>
                  <div className="text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-500">
                    — Founding Thesis, NovaSpark 2021
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Narrative Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              <ScrollReveal delay={100}>
                <p>
                  <strong>&ldquo;Your Business, Our Strategy&rdquo;</strong> is not a hollow marketing slogan. It is the operating philosophy that governs every campaign we run. Traditional digital marketing agencies are broken: creative designers design in isolation without understanding customer acquisition costs, while media buyers run ads without understanding brand positioning or conversion architecture.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p>
                  At NovaSpark, we united these disparate disciplines into a singular, high-performance ecosystem. When we partner with a brand, we don&apos;t just ask for an ad budget. We audit unit economics, customer lifetime value, historical churn, and competitor whitespace before a single ad dollar is deployed.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p>
                  From scaling regional luxury lifestyle brands like <em>Medallion House</em> into nationwide multi-crore enterprises, to helping local multi-store retailers capture undisputed Google 3-Pack monopoly, our mission is simple: transform marketing from an unpredictable cost center into your most dependable growth asset.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — MISSION & VISION DUALITY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="badge-tag mx-auto">
              <span>Chapter 02 // Agency North Star</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
              Our Mission &amp; Strategic Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="card-luxury p-8 sm:p-12 h-full flex flex-col justify-between bg-white">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#087CCB]/10 flex items-center justify-center text-[#071B70] shadow-xs">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono-tag font-bold uppercase tracking-wider text-[#087CCB]">Our Core Mission</span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] leading-snug">
                    To transform latent brand potential into measurable, compounding market dominance.
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    We demystify digital marketing through technical engineering precision, transparent first-party attribution, and bold creative storytelling that consistently drives net top-line revenue for our client partners.
                  </p>
                </div>
                <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#071B70]">
                  <CheckCircle className="w-4 h-4 text-[#00BCEB]" />
                  <span>Disciplined Execution Across Every Campaign</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-dark-glass p-8 sm:p-12 h-full flex flex-col justify-between text-white">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFC400] shadow-xs">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono-tag font-bold uppercase tracking-wider text-[#00BCEB]">Our Strategic Vision</span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                    To be the gold standard in intelligent, creative performance marketing across India.
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    Where engineering, human psychology, and artistic excellence merge into future-proof growth systems that thrive through algorithm changes, rising ad costs, and market volatility.
                  </p>
                </div>
                <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FFC400]">
                  <CheckCircle className="w-4 h-4 text-[#FFC400]" />
                  <span>Future-Proof Marketing Intelligence Systems</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — OUR PHILOSOPHY & THE CORE EQUATION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>Chapter 03 // The Growth Equation</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight mt-3">
                Creativity + Technology + Strategy = Performance.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal">
                Sustainable business growth cannot rely on a single silo. Here is how our four interconnected forces operate as one compounding engine.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'creativity',
                title: 'Creativity',
                tag: 'The Hook',
                desc: 'Captivating visual storytelling, emotional resonance, and bold messaging that breaks through ad fatigue.',
                color: 'text-[#FF7900]',
                bg: 'bg-[#FF7900]/10',
                details: 'High-velocity video hooks, scroll-stopping UGC assets, and editorial brand design that commands buyer reverence.',
              },
              {
                id: 'technology',
                title: 'Technology',
                tag: 'The Engine',
                desc: 'Ultra-fast Next.js web platforms, server-side tracking, and automated CRM funnels that never leak leads.',
                color: 'text-[#00BCEB]',
                bg: 'bg-[#00BCEB]/10',
                details: 'Sub-second page speeds (99+ PageSpeed), Meta CAPI server-side tracking pipelines, and automated lead routing.',
              },
              {
                id: 'strategy',
                title: 'Strategy',
                tag: 'The Blueprint',
                desc: 'In-depth market research, customer journey mapping, and conversion optimization backed by real unit economics.',
                color: 'text-[#087CCB]',
                bg: 'bg-[#087CCB]/10',
                details: 'Competitor whitespace teardowns, unit economics audits, and customer acquisition cost reduction roadmaps.',
              },
              {
                id: 'performance',
                title: 'Performance',
                tag: 'The Proof',
                desc: 'Relentless experimentation, data-driven decisions, and measurable revenue growth tracked to the rupee.',
                color: 'text-emerald-600',
                bg: 'bg-emerald-500/10',
                details: '3.8X average client ROAS, ₹25Cr+ revenue lift, and 24/7 unedited Looker Studio attribution dashboards.',
              },
            ].map((pillar) => (
              <div
                key={pillar.id}
                className="card-luxury p-7 space-y-4 hover:border-[#087CCB]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-400">
                      {pillar.tag}
                    </span>
                    <span className={`w-3 h-3 rounded-full ${pillar.bg}`} />
                  </div>
                  <h3 className={`font-display font-black text-2xl ${pillar.color}`}>{pillar.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{pillar.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed font-normal">
                  {pillar.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — THE 5-YEAR EVOLUTION CHRONICLE (SKEUOMORPHIC OBSIDIAN DECK)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#040711] text-white relative overflow-hidden border-y border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="badge-tag mx-auto bg-white/10 text-white border-white/20">
              <span>Chapter 04 // The Evolution Timeline</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Five Years of Compounding Growth
            </h2>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              From our first 10 boutique client partnerships to managing multi-crore national campaigns, explore the milestones that defined our growth.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {TIMELINE.map((step, idx) => (
              <div
                key={step.year}
                className="card-skeuo-dark p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6 group hover:border-[#00BCEB]/50 transition-all"
              >
                <div className="shrink-0 flex flex-col items-center sm:items-start">
                  <div className="skeuo-well-dark px-4 py-2 mb-2 text-center">
                    <span className="font-display font-black text-4xl sm:text-5xl text-[#FFC400] tracking-tight drop-shadow-md">
                      {step.year}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono-tag uppercase tracking-wider text-[#00BCEB] font-semibold mt-1">
                    {step.chapter}
                  </span>
                  <div className="mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white font-mono-tag">
                    {step.stat}
                  </div>
                </div>

                <div className="space-y-3 flex-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-8">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#00BCEB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-[#00BCEB] font-medium font-mono-tag">
                    <Check className="w-3.5 h-3.5 text-[#00BCEB]" />
                    <span>{step.takeaway}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — HOW WE THINK DIFFERENTLY (THE CHARTER)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="badge-tag mx-auto">
              <span>Chapter 05 // Working Principles</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              Six Principles That Guide Every Decision
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal">
              These six core tenets ensure every client campaign operates with uncompromising precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="card-luxury p-8 space-y-4 hover:border-[#087CCB]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono-tag font-bold text-slate-300 text-lg">{p.num}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#071B70]">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#087CCB] font-semibold">
                    <span>Non-Negotiable Agency Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — LEADERSHIP & TEAM
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="badge-tag mx-auto">
              <span>Chapter 06 // The Growth Architects</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              Meet The Leadership Team
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal">
              Senior practitioners with verified domain experience. No junior delegates. No outsourced work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AGENCY_TEAM.map((member) => (
              <div key={member.name} className="card-luxury p-8 space-y-6 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#071B70]">{member.name}</h3>
                    <div className="text-xs font-mono-tag font-semibold text-[#087CCB] uppercase tracking-wider mt-0.5">
                      {member.role}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{member.bio}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{member.dept}</span>
                  <span className="text-[#087CCB] font-mono-tag font-bold">Senior Practice Lead</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — FINAL NARRATIVE CTA (TITANIUM SKEUOMORPHIC DECK)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#040711] text-white text-center relative overflow-hidden border-t border-white/10 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="badge-tag mx-auto bg-white/10 text-white border-white/20">
            <span>Epilogue // Your Growth Journey</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Let&apos;s Create Something <br />
            <span className="text-[#FFC400]">Enduring Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto font-normal leading-relaxed">
            Ready to partner with an agency that treats your revenue with the same urgency and strategic rigor as you do?
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-skeuo-gold text-base px-9 py-4 group w-full sm:w-auto"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-studies"
              className="btn-secondary text-base px-8 py-4 w-full sm:w-auto text-[#071B70] hover:text-[#071B70]"
            >
              <span>Explore Verified Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
