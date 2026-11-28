'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
  Lock,
  Plus,
  Minus,
  Briefcase,
  FileCheck,
  Layers,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { ServiceDetail } from '@/lib/services-detail-data';
import ServiceConsultationForm from '@/components/ServiceConsultationForm';

const SERVICE_HERO_IMAGES: Record<string, string> = {
  'performance-marketing': '/images/work_ecommerce.jpg',
  'seo-aeo-geo': '/images/team_office.jpg',
  'social-media-marketing': '/images/work_fashion.jpg',
  'content-marketing': '/images/hero_studio.jpg',
  'web-design-development': '/images/work_realestate.jpg',
  'amazon-marketing-ppc': '/images/work_restaurant.jpg',
};

const CASE_STUDY_IMAGES: Record<string, string> = {
  'medallion-house': '/images/Medallion house.jpg',
  'ekatraa-retail': '/images/Ekatraa.jpg',
  'divine-fresh-organics': '/images/Sri Pandurangan Divine Fresh.png',
  'weekend-bhraman': '/images/Weekend Bhraman Tour Planner.jpg',
  'praveen-electronics': '/images/work_realestate.jpg',
};

function DisciplineGraphic({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 260 110" className="w-full h-28" fill="none">
        <path d="M16 92 Q78 86, 130 52 T244 16" stroke="#FFC400" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 92 Q78 86, 130 52 T244 16 L244 98 L16 98 Z" fill="rgba(0,188,235,0.16)" />
        <circle cx="130" cy="52" r="5" fill="#00BCEB" />
        <circle cx="244" cy="16" r="6" fill="#FFC400" />
        <line x1="16" y1="98" x2="244" y2="98" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 260 110" className="w-full h-28" fill="none">
        <rect x="20" y="38" width="54" height="34" rx="6" stroke="#00BCEB" strokeWidth="1.5" fill="rgba(0,188,235,0.12)" />
        <rect x="103" y="20" width="54" height="34" rx="6" stroke="#FFC400" strokeWidth="1.5" fill="rgba(255,196,0,0.14)" />
        <rect x="103" y="64" width="54" height="34" rx="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="186" y="38" width="54" height="34" rx="6" stroke="#00BCEB" strokeWidth="1.5" fill="rgba(0,188,235,0.18)" />
        <path d="M74 55 H88 V37 H103" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <path d="M88 55 V81 H103" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <path d="M157 37 H172 V55 H186" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <path d="M157 81 H172 V55" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 260 110" className="w-full h-28" fill="none">
      <circle cx="130" cy="55" r="42" stroke="rgba(0,188,235,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="130" cy="55" r="26" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <circle cx="130" cy="55" r="10" fill="#FFC400" />
      <circle cx="164" cy="30" r="5" fill="#00BCEB" />
      <circle cx="94" cy="78" r="4" fill="#FF7900" />
    </svg>
  );
}

interface Props {
  service: ServiceDetail;
}

export default function ServiceLandingLayout({ service }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeSubDiscipline, setActiveSubDiscipline] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const activeSub = service.subDisciplines[activeSubDiscipline] || service.subDisciplines[0];
  const heroImage = SERVICE_HERO_IMAGES[service.slug] || '/images/hero_studio.jpg';

  return (
    <div className="min-h-screen bg-white text-[#111827] pb-16 overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: BREADCRUMBS & SERVICE HERO (CRISP TOP SPACING)
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-[#F7F9FC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono-tag text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#071B70] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/services" className="hover:text-[#071B70] transition-colors">
              Services
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#071B70] font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#087CCB]" />
                <span className="font-mono-tag text-[11px] font-semibold tracking-widest uppercase text-[#071B70]">
                  {service.eyebrow}
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[3.25rem] tracking-tight text-[#071B70] leading-[1.06]">
                {service.heroHeadline}{' '}
                <span className="text-[#087CCB]">{service.heroHighlight}</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                {service.heroSubline}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-4">
                <a href="#consultation-form" className="btn-primary group">
                  <span>Request Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="tel:+918280788689" className="btn-secondary">
                  <Phone className="w-4 h-4 text-[#087CCB]" />
                  <span>+91 8280788689</span>
                </a>
              </div>

              <div className="pt-5 flex flex-wrap items-center gap-5 text-xs text-slate-500 border-t border-slate-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#087CCB]" />
                  <span>Category Exclusivity</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#087CCB]" />
                  <span>100% Asset Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FF7900]" />
                  <span>Senior Operator Led</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#087CCB]/10 via-[#00BCEB]/5 to-[#FFC400]/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative z-10 w-full aspect-4/3 card-tactile p-2 bg-white overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={heroImage}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 620px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Royal Blue Outcome & Benchmark Bar */}
      <section className="bg-[#071B70] text-white py-10 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:divide-x divide-white/15 items-center">
            <div>
              <span className="font-mono-tag text-[10px] uppercase tracking-widest text-[#00BCEB] block">
                {service.primaryMetric.label}
              </span>
              <div className="font-display font-black text-3xl sm:text-4xl text-[#FFC400] mt-1">
                {service.primaryMetric.value}
              </div>
            </div>

            {service.telemetryMetrics.map((tel, idx) => (
              <div key={idx} className="lg:pl-6">
                <span className="text-xs text-slate-300 block">{tel.label}</span>
                <div className="font-display font-extrabold text-2xl text-white mt-0.5">
                  {tel.value}
                </div>
                <span className="font-mono-tag text-[11px] text-[#00BCEB] block mt-0.5">
                  {tel.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CHALLENGES & SOLUTIONS (TACTILE COMPARISON CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono-tag text-xs uppercase tracking-widest text-[#FF7900] font-semibold">
              Friction Diagnosis
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
              Friction Points Businesses Face — And How We Solve Them.
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Most brands leak capital through misconfigured tracking, poor creative pacing, or fragmented execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {service.challenges.map((chal, idx) => (
            <div
              key={idx}
              className="card-tactile p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-red-50 border border-red-200/70 text-red-600 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4" />
                  </span>
                  <span className="font-mono-tag text-xs font-bold text-slate-400">
                    0{idx + 1} / Challenge
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#071B70] leading-snug">
                  {chal.problem}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{chal.impact}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200/90 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  NovaSpark Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {chal.ourSolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: SUB-DISCIPLINES & ARCHITECTURAL SYSTEM GRAPHIC
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F7F9FC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono-tag text-xs uppercase tracking-widest text-[#087CCB] font-semibold">
                Core Capabilities
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
                Deep-Dive Architectural Specializations.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.subDisciplines.map((sub, idx) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setActiveSubDiscipline(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    activeSubDiscipline === idx
                      ? 'bg-[#071B70] text-white border-[#071B70] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-[#087CCB]'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>

          <div className="card-tactile p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono-tag text-xs font-semibold uppercase tracking-wider text-[#087CCB]">
                {activeSub.badge}
              </span>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">
                {activeSub.name}
              </h3>

              <p className="text-sm font-semibold text-[#FF7900]">{activeSub.tagline}</p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeSub.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#071B70] block">
                  Technical Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  {activeSub.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#F7F9FC] border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-[#087CCB] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#0B2285] via-[#071B70] to-[#041046] text-white p-7 space-y-6 border border-white/15 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono-tag text-[11px] uppercase tracking-widest text-[#00BCEB]">
                    System Architecture
                  </span>
                  <TrendingUp className="w-4 h-4 text-[#FFC400]" />
                </div>

                <DisciplineGraphic index={activeSubDiscipline} />

                <div>
                  <span className="font-mono-tag text-[11px] uppercase tracking-widest text-slate-300">
                    Performance Benchmark
                  </span>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#FFC400] mt-1">
                    {activeSub.metrics}
                  </div>
                </div>

                <a href="#consultation-form" className="btn-gold w-full group">
                  <span>Consult on {activeSub.name.split('(')[0].trim()}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: 5-STAGE CONNECTED SPRINT METHODOLOGY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#087CCB] font-semibold">
            Execution Process
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            The 5-Stage High-Accountability Sprint.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-11 left-8 right-8 h-[2px] bg-gradient-to-r from-[#071B70] via-[#087CCB] to-[#00BCEB] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {service.methodology.map((m, idx) => (
              <div
                key={idx}
                className="card-tactile p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-[#071B70] text-[#FFC400] font-display font-black text-xs flex items-center justify-center shadow-xs">
                      {m.step}
                    </span>
                    <span className="font-mono-tag text-[11px] font-bold text-[#087CCB] bg-sky-50 px-2.5 py-1 rounded-md">
                      {m.timeframe}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-[#071B70] leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
                  {m.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TANGIBLE DELIVERABLES & WHY NOVASPARK
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F7F9FC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="mb-8 space-y-1">
              <span className="font-mono-tag text-xs uppercase tracking-widest text-[#087CCB] font-semibold">
                Scope of Work
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
                Tangible Assets &amp; Deliverables.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deliverables.map((group, idx) => {
                const Icons = [FileCheck, Layers, Zap];
                const GroupIcon = Icons[idx % Icons.length];
                return (
                  <div key={idx} className="card-tactile p-6 sm:p-7 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F9FC] border border-slate-200 flex items-center justify-center">
                      <GroupIcon className="w-5 h-5 text-[#087CCB]" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#071B70]">
                      {group.category}
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#087CCB] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] tracking-tight mb-8">
              Why Ambitious Brands Partner With Us.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.whyChoose.map((why, idx) => (
                <div key={idx} className="card-tactile p-6 space-y-3">
                  <span className="inline-block font-mono-tag text-xs font-bold text-[#071B70] bg-[#FFC400]/25 px-3 py-1 rounded-md">
                    {why.stat}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#071B70]">{why.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{why.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: RELEVANT CASE STUDIES WITH VISUALS
          ───────────────────────────────────────────────────────────── */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono-tag text-xs uppercase tracking-widest text-[#087CCB] font-semibold">
                Audited Results
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight mt-1">
                Real Client Results in {service.title}.
              </h2>
            </div>
            <Link href="/case-studies" className="btn-secondary self-start md:self-auto">
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#087CCB]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((cs, idx) => {
              const csImg = CASE_STUDY_IMAGES[cs.slug] || heroImage;
              return (
                <div key={idx} className="card-tactile overflow-hidden flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={csImg}
                        alt={cs.client}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 580px"
                      />
                    </div>
                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono-tag text-slate-500">
                        <span>{cs.industry}</span>
                        <span className="text-[#087CCB] font-bold">{cs.tags[0]}</span>
                      </div>
                      <h3 className="font-display font-extrabold text-xl text-[#071B70]">
                        {cs.client}
                      </h3>
                      <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 flex items-baseline justify-between">
                        <span className="font-display font-black text-2xl sm:text-3xl text-[#071B70]">
                          {cs.metric}
                        </span>
                        <span className="text-xs text-slate-500">{cs.metricLabel}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.summary}</p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] hover:text-[#087CCB]"
                    >
                      <span>Explore Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: SERVICE FAQS (COLLAPSED BY DEFAULT)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F7F9FC] border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight mb-8">
            Frequently Asked Questions.
          </h2>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="card-tactile px-6 py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display font-bold text-base sm:text-lg transition-colors ${
                        isOpen ? 'text-[#087CCB]' : 'text-[#071B70] group-hover:text-[#087CCB]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#071B70] text-white'
                          : 'bg-[#F7F9FC] border border-slate-200 text-slate-500'
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
                    <div className="overflow-hidden pr-8 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: CONSULTATION FORM & DIRECT CONTACT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="consultation-form">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
            Request Your {service.title} Consultation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Receive a preliminary whitespace audit and schedule a strategy session with our senior growth directors.
          </p>
        </div>

        <ServiceConsultationForm
          defaultService={service.formServiceOption}
          serviceTitle={service.title}
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <a href="tel:+918280788689" className="card-tactile p-5 group">
            <Phone className="w-5 h-5 text-[#087CCB] mx-auto mb-2" />
            <span className="text-xs font-bold text-[#071B70] block">Call Directly</span>
            <span className="text-xs text-slate-500">+91 8280788689</span>
          </a>

          <a href="mailto:novasparkdmagency@gmail.com" className="card-tactile p-5 group">
            <Briefcase className="w-5 h-5 text-[#FF7900] mx-auto mb-2" />
            <span className="text-xs font-bold text-[#071B70] block">Email Leadership</span>
            <span className="text-xs text-slate-500 truncate block">novasparkdmagency@gmail.com</span>
          </a>

          <a
            href="https://wa.me/918280788689"
            target="_blank"
            rel="noopener noreferrer"
            className="card-tactile p-5 group"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <span className="text-xs font-bold text-[#071B70] block">Instant WhatsApp</span>
            <span className="text-xs text-slate-500">Start Chat in Seconds</span>
          </a>
        </div>
      </section>
    </div>
  );
}
