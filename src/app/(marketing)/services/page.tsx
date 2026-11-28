'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Search,
  Zap,
  BarChart3,
  Globe,
  Share2,
  FileText,
  MapPin,
  ShieldCheck,
  Calculator,
  Layers,
  Clock,
  Award,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { AGENCY_SERVICES } from '@/lib/agency-data';

const SERVICE_ICONS: Record<string, any> = {
  seo: Search,
  'google-ads': Zap,
  'meta-ads': BarChart3,
  'web-dev': Globe,
  'social-media': Share2,
  content: FileText,
  branding: Sparkles,
  'local-seo': MapPin,
};

const ROI_TIERS: Record<string, { leads: string; roas: string; time: string; boost: string }> = {
  'Search Engine Optimization (SEO)': {
    leads: '180–350+ / mo',
    roas: '4.2X Organic LTV',
    time: '60–90 Days',
    boost: '+180% Organic Demand',
  },
  'Google Ads & Performance Marketing': {
    leads: '240–480+ / mo',
    roas: '3.8X Verified ROAS',
    time: '7–14 Days',
    boost: '+380% Qualified Clicks',
  },
  'Meta Ads & Paid Social': {
    leads: '320–600+ / mo',
    roas: '4.1X Blended ROAS',
    time: '10–18 Days',
    boost: '+240% Direct Sales Lift',
  },
  'Website Design & Development': {
    leads: '2.4X Conversion Rate',
    roas: '99+ PageSpeed Score',
    time: '3–5 Weeks',
    boost: '0.4s Sub-Second Speeds',
  },
  'Local SEO & Google Business Profile': {
    leads: '450+ Direction Requests',
    roas: '5.2X Footfall ROI',
    time: '14–30 Days',
    boost: '+74% Store Walk-Ins',
  },
};

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(AGENCY_SERVICES[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeChannelForSim, setActiveChannelForSim] = useState('Google Ads & Performance Marketing');
  const [spendTier, setSpendTier] = useState('₹1,00,000 – ₹2,50,000 / mo');

  const activeService = AGENCY_SERVICES.find((s) => s.id === selectedServiceId) || AGENCY_SERVICES[0];
  const ActiveIcon = SERVICE_ICONS[activeService.id] || Sparkles;
  const simData = ROI_TIERS[activeChannelForSim] || ROI_TIERS['Google Ads & Performance Marketing'];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION (ASYMMETRIC EDITORIAL + STUDIO IMAGE)
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#F7F9FC] via-white to-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#087CCB]" />
                  <span className="font-mono-tag text-[11px] font-semibold uppercase tracking-widest text-[#071B70]">
                    Our Capabilities • Your Business, Our Strategy
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-[#071B70] tracking-tight leading-[1.06]">
                  Everything Your Brand <br />
                  <span className="text-[#087CCB]">Needs to Grow Digitally.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  We combine specialized digital disciplines into one synchronized growth strategy. No fragmented agency silos — just compounding business results engineered by senior practitioners.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link href="/contact" className="btn-primary group">
                    <span>Request Strategy Audit</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a href="#capability-console" className="btn-secondary">
                    <span>Explore Capabilities</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Studio Hero Image */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal delay={150} direction="left" className="w-full">
                <div className="relative w-full aspect-4/3 card-tactile p-2 bg-white overflow-hidden">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/team_office.jpg"
                      alt="NovaSpark Digital Marketing Capabilities Team"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 620px"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Direct Links to All 6 Dedicated Service Landing Pages */}
          <ScrollReveal delay={300}>
            <div className="mt-14 pt-8 border-t border-slate-200/80">
              <span className="font-mono-tag text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-4">
                Dedicated Growth Service Landing Pages
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <Link
                  href="/services/performance-marketing"
                  className="card-tactile p-3.5 text-left group"
                >
                  <span className="font-mono-tag text-[10px] font-bold text-[#087CCB] block">01</span>
                  <span className="text-xs font-bold text-[#071B70] group-hover:text-[#087CCB] block leading-tight mt-0.5">
                    Performance Marketing
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-1">Google • Meta</span>
                </Link>
                <Link
                  href="/services/seo-aeo-geo"
                  className="card-tactile p-3.5 text-left group"
                >
                  <span className="font-mono-tag text-[10px] font-bold text-[#087CCB] block">02</span>
                  <span className="text-xs font-bold text-[#071B70] group-hover:text-[#087CCB] block leading-tight mt-0.5">
                    SEO, AEO &amp; GEO
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-1">Google + Perplexity</span>
                </Link>
                <Link
                  href="/services/social-media-marketing"
                  className="card-tactile p-3.5 text-left group"
                >
                  <span className="font-mono-tag text-[10px] font-bold text-[#087CCB] block">03</span>
                  <span className="text-xs font-bold text-[#071B70] group-hover:text-[#087CCB] block leading-tight mt-0.5">
                    Social Media
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-1">Vertical Video</span>
                </Link>
                <Link
                  href="/services/content-marketing"
                  className="card-tactile p-3.5 text-left group"
                >
                  <span className="font-mono-tag text-[10px] font-bold text-[#087CCB] block">04</span>
                  <span className="text-xs font-bold text-[#071B70] group-hover:text-[#087CCB] block leading-tight mt-0.5">
                    Content Marketing
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-1">BOFU Assets</span>
                </Link>
                <Link
                  href="/services/web-design-development"
                  className="card-tactile p-3.5 text-left group"
                >
                  <span className="font-mono-tag text-[10px] font-bold text-[#087CCB] block">05</span>
                  <span className="text-xs font-bold text-[#071B70] group-hover:text-[#087CCB] block leading-tight mt-0.5">
                    Web Design &amp; Dev
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-1">Next.js &amp; UI/UX</span>
                </Link>
                <Link
                  href="/services/amazon-marketing-ppc"
                  className="card-tactile p-3.5 text-left group"
                >
                  <span className="font-mono-tag text-[10px] font-bold text-[#087CCB] block">06</span>
                  <span className="text-xs font-bold text-[#071B70] group-hover:text-[#087CCB] block leading-tight mt-0.5">
                    Amazon PPC
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate mt-1">Sponsored Ads</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTERACTIVE ANIMATED CAPABILITY EXPLORER CONSOLE
          Features the animated dropdown selector requested by user
         ═══════════════════════════════════════════════════════════ */}
      <section id="capability-console" className="py-20 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="badge-tag">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>Interactive Service Explorer</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
              Explore How We Engineer Category Dominance.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Use the animated selector below to switch between our core disciplines and inspect deliverables, pain points solved, and expected business value.
            </p>
          </div>

          {/* Animated Custom Dropdown Trigger */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 text-center">
              Select a Marketing Capability to Inspect:
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#087CCB] shadow-lg hover:border-[#071B70] transition-all duration-200 text-left focus:outline-none cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#071B70] flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] group-hover:text-[#FFC400] transition-colors skeuo-well">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB]">
                      {activeService.category}
                    </div>
                    <div className="font-display font-extrabold text-base sm:text-lg text-[#071B70] truncate">
                      {activeService.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pl-2">
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {activeService.metricsHighlight}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 bg-[#0F172A] text-[#FFC400]' : 'text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Animated Dropdown Menu Body */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-white rounded-3xl shadow-2xl border border-slate-200 p-3 space-y-1 animate-in fade-in zoom-in-95 duration-200 max-h-[460px] overflow-y-auto">
                  <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    All 8 Disciplines
                  </div>
                  {AGENCY_SERVICES.map((s) => {
                    const SIcon = SERVICE_ICONS[s.id] || Sparkles;
                    const isSelected = s.id === selectedServiceId;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedServiceId(s.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-150 text-left cursor-pointer ${
                          isSelected
                            ? 'bg-[#0F172A] text-[#FFC400]'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-white/10 text-[#FFC400]' : 'bg-slate-100 text-[#071B70]'}`}>
                            <SIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-xs sm:text-sm truncate">
                              {s.title}
                            </div>
                            <div className={`text-[10px] truncate ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                              {s.category}
                            </div>
                          </div>
                        </div>

                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 ${isSelected ? 'bg-[#FFC400] text-[#071B70]' : 'bg-slate-100 text-slate-700'}`}>
                          {s.metricsHighlight}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Console Display Card */}
          <div className="card-luxury p-6 sm:p-10 lg:p-12 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge-tag">
                    <ActiveIcon className="w-3.5 h-3.5" />
                    <span>{activeService.category}</span>
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFC400]/20 text-[#071B70] border border-[#FFC400]/40 font-mono-tag">
                    {activeService.metricsHighlight}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight leading-tight">
                  {activeService.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {activeService.tagline}
                </p>

                {/* Pain Point Solved */}
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Business Challenge Solved</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeService.problem}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#071B70]">
                    What NovaSpark Engineers &amp; Delivers:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#087CCB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Business Value */}
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/70 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#071B70] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#087CCB]" />
                    <span>Expected Business Value &amp; Compounding Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {activeService.businessValue}
                  </p>
                </div>

                {/* Direct Action */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                    className="btn-primary"
                  >
                    <span>Discuss {activeService.title.split(' ')[0]} Strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`#${activeService.id}`}
                    className="text-xs font-bold text-[#087CCB] hover:text-[#071B70] transition-colors"
                  >
                    View In-Depth Technical Breakdown ↓
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Simulated Scorecard */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040D36]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFC400] text-[#071B70] px-2.5 py-0.5 rounded-full font-mono-tag">
                      Audited Methodology
                    </span>
                    <div className="font-display font-bold text-base mt-1">
                      {activeService.title}
                    </div>
                  </div>
                </div>

                {/* Live Console Micro-Dashboard Card */}
                <div className="card-dark-glass p-6 text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-bold text-[#00BCEB] uppercase tracking-wider font-mono-tag">
                        Live Calibration Signal
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-tag text-slate-300">
                      NovaSpark Growth Intelligence v4.2
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono-tag">Attribution Window</div>
                      <div className="font-display font-extrabold text-xl text-white mt-0.5">7–14 Days</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5 font-semibold">First-party CAPI</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono-tag">Senior Execution</div>
                      <div className="font-display font-extrabold text-xl text-[#FFC400] mt-0.5">100% Leads</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Zero Intern Staffing</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <span>98.4% Client Retention</span>
                    <span className="font-bold text-[#FFC400]">100% Attributed ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE CONNECTED GROWTH ECOSYSTEM
          Explains how all capabilities feed one another
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span>The Multiplier Effect</span>
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
          INTERACTIVE GROWTH ROI CALCULATOR WIDGET
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-[#071B70] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#087CCB]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="badge-tag-dark">
                    <Calculator className="w-3.5 h-3.5 text-[#FFC400]" />
                    <span>Audited Forecast Simulator</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2">
                    Estimate Your Digital Growth Trajectory.
                  </h3>
                </div>
                <div className="text-xs text-slate-300 sm:text-right">
                  Based on 100+ Live Client Campaigns Across India
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#00BCEB] mb-2">
                      Target Growth Channel:
                    </label>
                    <select
                      value={activeChannelForSim}
                      onChange={(e) => setActiveChannelForSim(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold focus:outline-none focus:border-[#00BCEB]"
                    >
                      <option value="Google Ads & Performance Marketing" className="text-slate-900">Google Ads & Performance Marketing</option>
                      <option value="Search Engine Optimization (SEO)" className="text-slate-900">Search Engine Optimization (SEO)</option>
                      <option value="Meta Ads & Paid Social" className="text-slate-900">Meta Ads & Paid Social</option>
                      <option value="Website Design & Development" className="text-slate-900">Website Design & Development</option>
                      <option value="Local SEO & Google Business Profile" className="text-slate-900">Local SEO & Google Business Profile</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#00BCEB] mb-2">
                      Monthly Marketing Budget Tier:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        '₹1,00,000 – ₹2,50,000 / mo',
                        '₹2,50,000 – ₹5,00,000 / mo',
                        '₹5,00,000 – ₹10,00,000 / mo',
                        '₹10,00,000+ Enterprise',
                      ].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setSpendTier(tier)}
                          className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                            spendTier === tier
                              ? 'bg-[#FFC400] text-[#071B70] border-[#FFC400] font-bold shadow-xs'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {tier.split(' ')[0]} {tier.split(' ')[1] || ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated Results Scorecard */}
                <div className="p-6 rounded-2xl bg-white/10 border border-white/20 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FFC400]">
                    Projected 90-Day Compounding Outcomes
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase">Estimated Monthly Volume</div>
                      <div className="font-display font-extrabold text-2xl text-white mt-1">{simData.leads}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase">Target Efficiency / ROAS</div>
                      <div className="font-display font-extrabold text-2xl text-[#00BCEB] mt-1">{simData.roas}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase">Attribution Calibration</div>
                      <div className="font-display font-bold text-base text-white mt-1">{simData.time}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 uppercase">Channel Velocity</div>
                      <div className="font-display font-bold text-base text-[#FFC400] mt-1">{simData.boost}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <Link
                      href={`/contact?service=${encodeURIComponent(activeChannelForSim)}`}
                      className="btn-primary w-full text-center text-xs py-3"
                    >
                      <span>Unlock Custom Strategy Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE 8 INDIVIDUAL SERVICE DEEP-DIVES (ALTERNATING EDITORIAL LAYOUTS)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {AGENCY_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Column */}
                <div className={`space-y-6 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                  <ScrollReveal>
                    <div className="flex items-center gap-3">
                      <span className="badge-tag">
                        <span>Chapter 0{index + 1} // {service.category}</span>
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-mono-tag">
                        {service.metricsHighlight}
                      </span>
                    </div>

                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight mt-3">
                      {service.title}
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mt-2">
                      {service.tagline}
                    </p>
                  </ScrollReveal>

                  {/* The Problem We Solve */}
                  <ScrollReveal delay={100}>
                    <div className="card-luxury p-6 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B70]">
                        The Problem It Solves
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Deliverables Checklist */}
                  <ScrollReveal delay={200}>
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B70]">
                        What We Deliver
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="card-luxury p-3.5 flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#087CCB] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Business Value */}
                  <ScrollReveal delay={300}>
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 to-cyan-50/40 border border-blue-200/80 space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#071B70]">
                        Expected Business Value
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {service.businessValue}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* CTA */}
                  <ScrollReveal delay={350}>
                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="btn-primary group"
                      >
                        <span>Discuss {service.title.split(' ')[0]} With an Expert</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Visual Column */}
                <div className={`relative ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                  <ScrollReveal delay={150}>
                    <div className="relative mx-auto max-w-md lg:max-w-none">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-[440px] bg-slate-100 group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 500px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040D36]/80 via-transparent to-transparent" />

                        {/* Floating Metric Callout */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-between text-[#071B70]">
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B]">Audited KPI Metric</span>
                            <div className="font-display font-extrabold text-lg sm:text-xl text-[#071B70]">
                              {service.metricsHighlight}
                            </div>
                          </div>
                          <span className="badge-tag bg-[#FFC400]/20 text-[#071B70] border-[#FFC400]/40">
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          COMPARISON TABLE: WHY NOVASPARK VS OLD WAYS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F9FC] border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="badge-tag">
              <span>Operational Standards</span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
              Why High-Growth Brands Switch to NovaSpark.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              How our full-funnel engineering model compares against traditional agency retainers and fragmented contractors.
            </p>
          </div>

          <div className="card-skeuomorphic overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0F172A] text-white border-b border-white/10">
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs">Standard / Feature</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-[#FFC400]">NovaSpark Growth</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-slate-300">Legacy Agency</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-slate-300">Freelancers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feature: 'Attribution Tracking', nova: 'First-party server CAPI + Offline sync', old: 'Standard browser cookie pixel', free: 'Basic Google Analytics setup' },
                    { feature: 'Campaign Operators', nova: 'Senior practitioners (10+ yrs exp)', old: 'Junior interns / trainees', free: 'Single individual' },
                    { feature: 'Creative Velocity', nova: 'Weekly iterative hooks & video testing', old: 'Static monthly template batches', free: 'Ad-hoc per asset fee' },
                    { feature: 'Tech & Speed Optimization', nova: 'Headless Next.js (99+ Lighthouse)', old: 'Slow WordPress bloated plugins', free: 'Not included' },
                    { feature: 'Reporting Metrics', nova: 'Net Revenue, ROAS, Audited CAC', old: 'Vanity impressions & reach', free: 'Basic clicks count' },
                    { feature: 'Contractual Lock-In', nova: 'Zero long-term lock-ins (Earned monthly)', old: '6–12 month rigid contracts', free: 'Hourly / gig-based' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#071B70]">{row.feature}</td>
                      <td className="p-4 sm:p-5 font-semibold text-[#087CCB] bg-blue-50/40">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#087CCB] shrink-0" />
                          <span>{row.nova}</span>
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500">{row.old}</td>
                      <td className="p-4 sm:p-5 text-slate-500">{row.free}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CONSULTATION CTA (SKEUOMORPHIC TITANIUM DECK)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#040711] text-white relative overflow-hidden border-t border-white/10 shadow-2xl">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00BCEB]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <ScrollReveal>
            <div className="badge-tag mx-auto bg-white/10 text-white border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#00BCEB] animate-ping" />
              <span>Ready for Measurable Growth?</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mt-4 leading-tight">
              Let&apos;s Build Your Marketing Engine.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mt-4">
              Book a confidential 30-minute growth consultation with our leadership team. We will review your current ad performance, SEO whitespace, and growth bottlenecks.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact" className="btn-skeuo-gold text-base px-8 py-4 group">
                <span>Request Growth Consultation</span>
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/918280788689"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4 text-[#071B70] hover:text-[#071B70]"
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
