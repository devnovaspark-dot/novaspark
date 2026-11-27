'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Phone,
  Search,
  Zap,
  BarChart3,
  Globe,
  Share2,
  FileText,
  Sparkles,
  MapPin,
  TrendingUp,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// SIX FINALIZED CORE SERVICES FOR NOVASPARK
// 1. Performance Marketing (Google Ads, Meta Ads, LinkedIn Ads)
// 2. SEO, AEO & GEO (SEO, Answer Engine Optimization, Generative Engine)
// 3. Social Media Marketing
// 4. Content Marketing
// 5. Web Design & Development
// 6. Amazon Marketing & PPC
// ═══════════════════════════════════════════════════════════════
export const SIX_CORE_SERVICES = [
  {
    id: 'performance-marketing',
    name: 'Performance Marketing',
    shortName: 'Performance Marketing',
    subItems: ['Google Ads', 'Meta Ads', 'LinkedIn Ads'],
    badge: 'Google • Meta • LinkedIn Ads',
    desc: 'Algorithmic multi-channel advertising with first-party CAPI attribution.',
    metric: '4.8X Max ROAS',
    icon: Zap,
    href: '/services/performance-marketing',
  },
  {
    id: 'seo-aeo-geo',
    name: 'SEO, AEO & GEO',
    shortName: 'SEO, AEO & GEO',
    subItems: ['Search Engine Optimization', 'Answer Engine Optimization', 'Generative Engine Optimization'],
    badge: 'Search • Perplexity • ChatGPT',
    desc: 'Dominate traditional Google SERPs, AI Overviews, and generative answer engines.',
    metric: '+180% Organic',
    icon: Search,
    href: '/services/seo-aeo-geo',
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing',
    shortName: 'Social Media Marketing',
    subItems: ['Short-Form Video', 'Community Growth', 'Creator & UGC'],
    badge: 'Reels • Shorts • Community',
    desc: 'High-tempo vertical video production, editorial grids, and active buyer community nurture.',
    metric: '+410% Reach',
    icon: Share2,
    href: '/services/social-media-marketing',
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    shortName: 'Content Marketing',
    subItems: ['Thought Leadership', 'Buyer Enablement', 'Semantic Whitepapers'],
    badge: 'High-Intent ICP Content',
    desc: 'Authoritative bottom-of-funnel content and buyer enablement assets that shorten sales cycles.',
    metric: '3.2X Pipeline',
    icon: FileText,
    href: '/services/content-marketing',
  },
  {
    id: 'web-design-development',
    name: 'Web Design & Development',
    shortName: 'Web Design & Development',
    subItems: ['Next.js & React Apps', 'UI/UX & Brand Systems', 'CRO Landing Pages'],
    badge: 'Next.js • UI/UX • CRO',
    desc: 'High-speed custom websites, bespoke UI/UX systems, and conversion-engineered landing pages.',
    metric: '99+ Core Vitals',
    icon: Globe,
    href: '/services/web-design-development',
  },
  {
    id: 'amazon-marketing-ppc',
    name: 'Amazon Marketing & PPC',
    shortName: 'Amazon Marketing & PPC',
    subItems: ['Sponsored Ads & DSP', 'Buy Box Defense', 'A+ Storefront CRO'],
    badge: 'Sponsored Ads & DSP',
    desc: 'Marketplace dominance, aggressive ACoS compression, ASIN conquesting, and Buy Box scaling.',
    metric: '-32% ACoS',
    icon: BarChart3,
    href: '/services/amazon-marketing-ppc',
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-xs py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="NovaSpark Digital Marketing Agency"
                  fill
                  priority
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#071B70] leading-none group-hover:text-[#087CCB] transition-colors">
                  Nova<span className="text-[#087CCB]">Spark</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#64748B] font-semibold mt-0.5">
                  Digital Marketing Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Bar */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-2xs">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === '/'
                    ? 'bg-white text-[#071B70] font-bold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-[#071B70] hover:bg-white/60'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname.startsWith('/about')
                    ? 'bg-white text-[#071B70] font-bold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-[#071B70] hover:bg-white/60'
                }`}
              >
                About Us
              </Link>

              {/* Services Link with Animated Mega-Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1.5 transition-all duration-200 ${
                    pathname.startsWith('/services')
                      ? 'bg-white text-[#071B70] font-bold shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-[#071B70] hover:bg-white/60'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-[#087CCB]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {/* Animated Services Mega-Menu Dropdown */}
                {servicesDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[880px] lg:w-[940px] z-50 animate-in fade-in zoom-in-95 duration-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 p-7 overflow-hidden">
                      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#087CCB] animate-pulse" />
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB] block">
                              Our Growth Capabilities
                            </span>
                            <h4 className="font-display font-extrabold text-base text-[#071B70]">
                              Synchronized Performance &amp; Creative Ecosystem
                            </h4>
                          </div>
                        </div>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087CCB] hover:text-[#071B70] transition-colors bg-blue-50/70 hover:bg-blue-100/70 px-3 py-1.5 rounded-full"
                        >
                          <span>Explore All 6 Disciplines</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-12 gap-6 items-stretch">
                        {/* 6 Core Services Grid - Generous, un-truncated, editorial */}
                        <div className="col-span-8 grid grid-cols-2 gap-3">
                          {SIX_CORE_SERVICES.map((service) => {
                            const IconComp = service.icon;
                            return (
                              <Link
                                key={service.id}
                                href={service.href}
                                className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white hover:bg-slate-50 transition-all duration-200 border border-slate-100 hover:border-slate-300/80 shadow-2xs hover:shadow-xs"
                              >
                                <div className="w-10 h-10 rounded-xl bg-slate-100/80 text-[#071B70] flex items-center justify-center shrink-0 group-hover:bg-[#071B70] group-hover:text-[#FFC400] transition-colors">
                                  <IconComp className="w-5 h-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-baseline justify-between gap-1">
                                    <span className="font-display font-bold text-sm text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-tight">
                                      {service.name}
                                    </span>
                                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full font-bold shrink-0">
                                      {service.metric}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 font-normal mt-1 leading-snug">
                                    {service.subItems.join(' • ')}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Right Spotlight Promo Card - Editorial & Refined */}
                        <div className="col-span-4 rounded-2xl bg-gradient-to-br from-[#071B70] via-[#091C63] to-[#040D36] text-white p-6 flex flex-col justify-between shadow-xl relative overflow-hidden border border-white/10">
                          <div className="absolute top-0 right-0 w-36 h-36 bg-[#00BCEB]/15 rounded-full blur-2xl pointer-events-none" />
                          <div className="space-y-3 relative z-10">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#FFC400]/20 text-[#FFC400] border border-[#FFC400]/40">
                              Free Strategic Audit
                            </span>
                            <h5 className="font-display font-bold text-base text-white leading-tight">
                              Confidential Growth &amp; CAC Audit
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              Get an audited breakdown of your digital whitespace, CAPI attribution health, and CAC reduction opportunities.
                            </p>
                            <ul className="space-y-1.5 text-[11px] text-slate-200 pt-1 font-medium">
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCEB]" />
                                <span>48-Hour Forensic Turnaround</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCEB]" />
                                <span>Competitor Airspace Intelligence</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCEB]" />
                                <span>Direct Senior Strategist Sync</span>
                              </li>
                            </ul>
                          </div>
                          <Link
                            href="/contact"
                            className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#FFC400] to-[#FF9E00] hover:from-[#FFCD1A] hover:to-[#FFA81A] text-[#071B70] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] relative z-10"
                          >
                            <span>Claim Your Free Audit</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname.startsWith('/case-studies')
                    ? 'bg-white text-[#071B70] font-bold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-[#071B70] hover:bg-white/60'
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname.startsWith('/contact')
                    ? 'bg-white text-[#071B70] font-bold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-[#071B70] hover:bg-white/60'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+918280788689"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#071B70] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#087CCB]" />
                <span>+91 8280788689</span>
              </a>
              <Link
                href="/contact"
                className="btn-primary group text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:text-[#071B70] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/images/logo.png"
                      alt="NovaSpark"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-display font-extrabold text-lg text-[#071B70]">
                    Nova<span className="text-[#087CCB]">Spark</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-6 space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#087CCB]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#087CCB]"
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180 text-[#087CCB]' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-1 bg-slate-50 rounded-2xl mt-1">
                      {SIX_CORE_SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          href={s.href}
                          className="flex flex-col py-2 px-2.5 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-800">{s.name}</span>
                            <span className="text-[10px] font-bold text-emerald-600">{s.metric}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                            {s.subItems.join(' • ')}
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block px-3 py-2 text-xs font-bold text-[#087CCB] mt-1 border-t border-slate-200"
                      >
                        View Full Services Overview →
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#087CCB]"
                >
                  Case Studies
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#087CCB]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href="tel:+918280788689"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
              >
                <Phone className="w-4 h-4 text-[#087CCB]" />
                <span>+91 8280788689</span>
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full text-center text-sm py-3"
              >
                Let&apos;s Grow Together
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
