'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  Phone,
  MessageSquare,
  Lock,
  Layers,
  Sparkles,
  Compass,
  FileCheck,
  BarChart3,
  HelpCircle,
  Clock,
  Briefcase,
} from 'lucide-react';
import { ServiceDetail } from '@/lib/services-detail-data';
import ServiceConsultationForm from '@/components/ServiceConsultationForm';

interface Props {
  service: ServiceDetail;
}

export default function ServiceLandingLayout({ service }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSubDiscipline, setActiveSubDiscipline] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-800 pt-28 pb-20 overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: BREADCRUMBS & SERVICE HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-4 pb-20 border-b border-slate-200/80">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#087CCB]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#071B70] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/services" className="hover:text-[#071B70] transition-colors">
              Services
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#071B70] font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#087CCB] animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#071B70]">
                  {service.eyebrow}
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight text-[#071B70] leading-[1.12]">
                {service.heroHeadline}{' '}
                <span className="bg-gradient-to-r from-[#087CCB] via-[#00BCEB] to-[#FF7900] bg-clip-text text-transparent">
                  {service.heroHighlight}
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {service.heroSubline}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#consultation-form"
                  className="btn-skeuo-gold px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Request Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+918280788689"
                  className="btn-skeuo-pearl px-5 py-3.5 rounded-full text-xs font-bold text-[#071B70] inline-flex items-center gap-2 hover:bg-white transition-all shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#087CCB]" />
                  <span>+91 8280788689</span>
                </a>

                <a
                  href="https://wa.me/918280788689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:text-[#20ba59] transition-colors px-3 py-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#087CCB]" />
                  <span>Strict Category Exclusivity</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#087CCB]" />
                  <span>100% Client Asset Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FF7900]" />
                  <span>Senior Practitioner Oversight</span>
                </div>
              </div>
            </div>

            {/* Right Telemetry Dial Card */}
            <div className="lg:col-span-5">
              <div className="card-skeuo-dark rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00BCEB]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Primary Metric Banner */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6 relative z-10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#00BCEB]">
                        {service.primaryMetric.label}
                      </span>
                      <div className="font-display font-black text-4xl sm:text-5xl text-[#FFC400] tracking-tight mt-1">
                        {service.primaryMetric.value}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FFC400] skeuo-well">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    {service.primaryMetric.subtext}
                  </p>
                </div>

                {/* Live Telemetry Quad Matrix */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {service.telemetryMetrics.map((tel, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#00BCEB]/40 transition-colors"
                    >
                      <span className="text-[10px] font-semibold text-slate-400 block truncate">
                        {tel.label}
                      </span>
                      <div className="font-display font-black text-lg text-white mt-1">
                        {tel.value}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 block mt-0.5 truncate">
                        {tel.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Telemetry Status Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Real-Time Campaign Engine Active</span>
                  </div>
                  <span className="text-[#FFC400] font-bold">90-Day Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: BUSINESS CHALLENGES & OUR SOLUTIONS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
            The Reality of Modern Growth
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            Friction Points Businesses Face — And How We Solve Them
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Most brands leak tens of thousands in capital through misconfigured tracking, poor creative pacing, or shallow strategies. Here is how we eliminate the friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.challenges.map((chal, idx) => (
            <div
              key={idx}
              className="card-skeuomorphic p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-400">0{idx + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-50 text-red-700 border border-red-200">
                    The Problem
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#071B70] leading-snug">
                  {chal.problem}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-slate-700">Financial Impact:</strong> {chal.impact}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 bg-slate-50/60 -mx-6 -mb-6 p-6 rounded-b-3xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB] block mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  NovaSpark Solution
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {chal.ourSolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: DETAILED SUB-DISCIPLINES & CAPABILITIES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">
              Integrated Capability Breakdown
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
              Deep-Dive Architectural Specializations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We do not treat disciplines as isolated checklists. Every sub-component is engineered into a unified growth engine.
            </p>
          </div>

          {/* Sub-Discipline Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {service.subDisciplines.map((sub, idx) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubDiscipline(idx)}
                className={`px-5 py-3 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeSubDiscipline === idx
                    ? 'btn-skeuo-gold text-[#071B70] shadow-md scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-[#071B70]'
                }`}
              >
                <span>{sub.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-black/10">
                  {sub.metrics}
                </span>
              </button>
            ))}
          </div>

          {/* Active Sub-Discipline Featured View */}
          {(() => {
            const activeSub = service.subDisciplines[activeSubDiscipline] || service.subDisciplines[0];
            return (
              <div className="card-skeuomorphic p-8 sm:p-12 rounded-3xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#087CCB]/10 text-[#087CCB] border border-[#087CCB]/20">
                    {activeSub.badge}
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">
                    {activeSub.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#FF7900] leading-snug">
                    {activeSub.tagline}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activeSub.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Core Technical Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {activeSub.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 card-skeuo-dark p-6 sm:p-8 rounded-2xl text-white">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#00BCEB]">
                      Proven Performance Benchmark
                    </span>
                    <div className="font-display font-black text-4xl text-[#FFC400]">
                      {activeSub.metrics}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Continuous measurement and first-party attribution tied directly into your business revenue KPIs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-bold text-white block">
                      Why This Matters For Your Business:
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Instead of paying multiple fragmented agencies who point fingers, our synchronized architecture ensures your spend compounds efficiently across channels.
                    </p>
                  </div>

                  <a
                    href="#consultation-form"
                    className="btn-skeuo-gold w-full py-3 rounded-full text-xs font-bold text-center uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <span>Consult on {activeSub.name.split('(')[0].trim()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: 5-STAGE WORKING METHODOLOGY
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">
            Our Engineering Process
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            The 5-Stage High-Accountability Sprint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate in disciplined 90-day performance sprints. Every stage produces tangible, audited deliverables with clear mathematical objectives.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {service.methodology.map((m, idx) => (
              <div
                key={idx}
                className="card-skeuomorphic p-5 sm:p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#087CCB]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-[#0F172A] text-[#FFC400] font-black text-xs flex items-center justify-center skeuo-well">
                      {m.step}
                    </span>
                    <span className="text-[10px] font-bold text-[#087CCB] uppercase">
                      {m.timeframe}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    {m.phase}
                  </span>

                  <h4 className="font-display font-bold text-sm text-[#071B70] leading-snug">
                    {m.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-500">
                  <strong className="text-slate-700 block mb-0.5">Key Deliverable:</strong>
                  <span className="font-semibold text-emerald-700">{m.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TANGIBLE DELIVERABLES CHECKLIST
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
              Complete Scope of Work
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
              Tangible Assets & Systematic Deliverables
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              No vague buzzwords or hidden scopes. Here is the verified suite of assets and systems engineered directly into your brand accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.deliverables.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#071B70] flex items-center justify-center font-bold skeuo-well">
                    <FileCheck className="w-5 h-5 text-[#087CCB]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#071B70]">
                    {group.category}
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-600">
                    {group.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
                  <span>Included in 90-Day Sprint Scope</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: WHY AMBITIOUS BRANDS CHOOSE NOVASPARK
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">
            The NovaSpark Difference
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            Why Ambitious Brands Partner With Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We reject the typical agency status quo. We built NovaSpark around radical accountability, asset ownership, and category exclusivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.whyChoose.map((why, idx) => (
            <div
              key={idx}
              className="card-skeuomorphic p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-[#087CCB]/10 text-[#087CCB]">
                  {why.stat}
                </span>
                <h3 className="font-display font-bold text-lg text-[#071B70]">
                  {why.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {why.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-[#071B70]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Legally Guaranteed In Contract</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: RELEVANT CASE STUDIES & AUDITED RESULTS
          ───────────────────────────────────────────────────────────── */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
                  Audited Performance Proof
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
                  Real Client Results in {service.title}
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087CCB] hover:text-[#071B70] transition-colors"
              >
                <span>View All Portfolio Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="card-skeuomorphic p-6 sm:p-8 rounded-3xl border border-slate-200/90 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {cs.industry}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {cs.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-[#071B70]">
                      {cs.client}
                    </h3>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">
                          {cs.metricLabel}
                        </span>
                        <div className="font-display font-black text-3xl text-[#087CCB]">
                          {cs.metric}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#FFC400] skeuo-well shadow-2xs">
                        <TrendingUp className="w-5 h-5 text-[#071B70]" />
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {cs.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <Link
                      href={`/case-studies`}
                      className="text-xs font-bold text-[#087CCB] hover:text-[#071B70] inline-flex items-center gap-1"
                    >
                      <span>Explore Case Study Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] text-emerald-600 font-bold">Verified ROI</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: SERVICE FAQS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">
            Client Intelligence & FAQs
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Everything you need to know about partnering with NovaSpark on {service.title}.
          </p>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="card-skeuomorphic rounded-2xl overflow-hidden border border-slate-200/80 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#071B70] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#087CCB]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: LEAD CONSULTATION FORM & FINAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF7900]">
            Let&apos;s Build Your Strategy
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071B70] tracking-tight">
            Request Your {service.title} Consultation
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Fill out the confidential form below to receive a preliminary whitespace audit and schedule a 1-on-1 strategy session with our senior growth directors.
          </p>
        </div>

        {/* Embedded Interactive Consultation Form */}
        <ServiceConsultationForm
          defaultService={service.formServiceOption}
          serviceTitle={service.title}
        />

        {/* Direct Contact Alternative Callouts */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <a
            href="tel:+918280788689"
            className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#087CCB] transition-colors shadow-2xs group"
          >
            <Phone className="w-5 h-5 text-[#087CCB] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 block">Call Directly</span>
            <span className="text-xs text-slate-500 font-semibold">+91 8280788689</span>
          </a>

          <a
            href="mailto:novasparkdmagency@gmail.com"
            className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#087CCB] transition-colors shadow-2xs group"
          >
            <Briefcase className="w-5 h-5 text-[#FF7900] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 block">Email Our Leadership</span>
            <span className="text-xs text-slate-500 font-semibold truncate block">novasparkdmagency@gmail.com</span>
          </a>

          <a
            href="https://wa.me/918280788689"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#25D366] transition-colors shadow-2xs group"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800 block">Instant WhatsApp</span>
            <span className="text-xs text-slate-500 font-semibold">Start Chat in Seconds</span>
          </a>
        </div>
      </section>
    </div>
  );
}
