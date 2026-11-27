'use client';

import { useState } from 'react';
import Link from 'next/link';
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
} from 'lucide-react';
import { ServiceDetail } from '@/lib/services-detail-data';
import ServiceConsultationForm from '@/components/ServiceConsultationForm';

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

  return (
    <div className="min-h-screen bg-white text-[#111827] pt-24 pb-16 overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: BREADCRUMBS & EDITORIAL SERVICE HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-6 pb-16 lg:pb-24 bg-gradient-to-b from-[#F7F9FC] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-mono-tag text-slate-500 mb-8" aria-label="Breadcrumb">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-6 h-[2px] bg-[#087CCB]" />
                <span className="font-mono-tag text-xs font-semibold tracking-widest uppercase text-[#087CCB]">
                  {service.eyebrow}
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[3.25rem] tracking-tight text-[#071B70] leading-[1.08]">
                {service.heroHeadline}{' '}
                <span className="text-[#087CCB]">{service.heroHighlight}</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.heroSubline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a href="#consultation-form" className="btn-primary group">
                  <span>Request Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a href="tel:+918280788689" className="btn-secondary">
                  <Phone className="w-4 h-4 text-[#087CCB]" />
                  <span>+91 8280788689</span>
                </a>

                <a
                  href="https://wa.me/918280788689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 px-2 py-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-5 flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-slate-200">
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
                  <span>Senior Operator Oversight</span>
                </div>
              </div>
            </div>

            {/* Right: Deep Royal Blue Outcome & Benchmark Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#071B70] text-white p-7 sm:p-8 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_48px_-12px_rgba(7,27,112,0.38)] space-y-6">
                <div className="pb-5 border-b border-white/15">
                  <span className="font-mono-tag text-[11px] uppercase tracking-widest text-[#00BCEB]">
                    {service.primaryMetric.label}
                  </span>
                  <div className="font-display font-black text-4xl sm:text-5xl text-[#FFC400] tracking-tight mt-1">
                    {service.primaryMetric.value}
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5">
                    {service.primaryMetric.subtext}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {service.telemetryMetrics.map((tel, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.06] border border-white/10"
                    >
                      <span className="text-[11px] text-slate-300 block truncate">
                        {tel.label}
                      </span>
                      <div className="font-display font-extrabold text-lg text-white mt-1">
                        {tel.value}
                      </div>
                      <span className="text-[10px] font-mono-tag text-[#00BCEB] block mt-0.5 truncate">
                        {tel.change}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono-tag">
                  <span>Audited Delivery Model</span>
                  <span className="text-[#FFC400] font-bold">90-Day Sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: CHALLENGES & SOLUTIONS (EDITORIAL GRID)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            Friction Points Businesses Face — And How We Solve Them.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Most brands lose capital through misconfigured tracking, poor creative pacing, or fragmented execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.challenges.map((chal, idx) => (
            <div
              key={idx}
              className="pt-6 border-t-2 border-[#071B70] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono-tag text-xs">
                  <span className="text-[#087CCB] font-bold">0{idx + 1}</span>
                  <span className="text-slate-400 uppercase">Challenge</span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#071B70] leading-snug">
                  {chal.problem}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {chal.impact}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB] flex items-center gap-1.5 mb-1">
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
          SECTION 3: SUB-DISCIPLINES & CAPABILITIES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F7F9FC] border-y border-slate-200">
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

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#071B70] block">
                  Technical Deliverables
                </span>
                <ul className="space-y-2 text-sm text-slate-700">
                  {activeSub.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#087CCB] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl bg-[#071B70] text-white p-7 space-y-6 border border-white/10">
              <div>
                <span className="font-mono-tag text-[11px] uppercase tracking-widest text-[#00BCEB]">
                  Performance Benchmark
                </span>
                <div className="font-display font-black text-3xl sm:text-4xl text-[#FFC400] mt-1">
                  {activeSub.metrics}
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Continuous measurement and first-party attribution tied directly into your business revenue KPIs.
                </p>
              </div>

              <a href="#consultation-form" className="btn-gold w-full group">
                <span>Consult on {activeSub.name.split('(')[0].trim()}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: 5-STAGE METHODOLOGY (CLEAN TIMELINE)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#087CCB] font-semibold">
            Execution Process
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight">
            The 5-Stage High-Accountability Sprint.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {service.methodology.map((m, idx) => (
            <div
              key={idx}
              className="pt-5 border-t-2 border-slate-200 hover:border-[#087CCB] transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono-tag text-xs">
                  <span className="font-bold text-[#071B70]">{m.step}</span>
                  <span className="text-[#087CCB]">{m.timeframe}</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#071B70] leading-snug">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-semibold text-emerald-700">{m.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TANGIBLE DELIVERABLES & WHY NOVASPARK
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] tracking-tight mb-8">
              Tangible Scope &amp; Deliverables.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deliverables.map((group, idx) => (
                <div key={idx} className="card-tactile p-6 sm:p-7 space-y-4">
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
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] tracking-tight mb-8">
              Why Ambitious Brands Partner With Us.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.whyChoose.map((why, idx) => (
                <div key={idx} className="space-y-2.5">
                  <span className="font-mono-tag text-xs font-bold text-[#087CCB]">
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
          SECTION 6: RELEVANT CASE STUDIES
          ───────────────────────────────────────────────────────────── */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {service.caseStudies.map((cs, idx) => (
              <div key={idx} className="card-tactile p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
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

                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B70] hover:text-[#087CCB] pt-2 border-t border-slate-100"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: SERVICE FAQS (COLLAPSED BY DEFAULT)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC] border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#071B70] tracking-tight mb-8">
            Frequently Asked Questions.
          </h2>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-5">
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
                          : 'bg-white border border-slate-200 text-slate-500'
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
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="consultation-form">
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
          <a href="tel:+918280788689" className="card-tactile p-4 group">
            <Phone className="w-5 h-5 text-[#087CCB] mx-auto mb-1.5" />
            <span className="text-xs font-bold text-[#071B70] block">Call Directly</span>
            <span className="text-xs text-slate-500">+91 8280788689</span>
          </a>

          <a href="mailto:novasparkdmagency@gmail.com" className="card-tactile p-4 group">
            <Briefcase className="w-5 h-5 text-[#FF7900] mx-auto mb-1.5" />
            <span className="text-xs font-bold text-[#071B70] block">Email Leadership</span>
            <span className="text-xs text-slate-500 truncate block">novasparkdmagency@gmail.com</span>
          </a>

          <a
            href="https://wa.me/918280788689"
            target="_blank"
            rel="noopener noreferrer"
            className="card-tactile p-4 group"
          >
            <MessageSquare className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-[#071B70] block">Instant WhatsApp</span>
            <span className="text-xs text-slate-500">Start Chat in Seconds</span>
          </a>
        </div>
      </section>
    </div>
  );
}
