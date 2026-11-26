'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Filter,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Award,
  Zap,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { AGENCY_CASE_STUDIES } from '@/lib/agency-data';

const CATEGORIES = [
  'All Projects',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Social Media',
  'Website Development',
  'Local SEO',
];

const SPOTLIGHT_STORIES = [
  {
    client: 'Medallion House',
    industry: 'Luxury Home Decor & Lifestyle',
    heroMetric: '+240% Revenue',
    roas: '4.2X Blended ROAS',
    before: {
      budget: '₹5,00,000 / mo ad spend',
      friction: 'Fragmented Meta campaigns burning budget with 1.8X ROAS and severe creative fatigue. High cart abandonment on legacy storefront.',
    },
    after: {
      growth: '₹35,00,000+ monthly revenue',
      outcome: 'Full-funnel Google PMax + Meta CAPI retargeting scaled revenue by 240% with automated high-AOV product bundling.',
    },
    quote: 'NovaSpark transformed our artisanal luxury decor brand from ₹5L/month ad spend into a multi-crore national business.',
    author: 'Rohan Verma, Co-Founder',
    image: '/images/Medallion house.jpg',
    slug: 'medallion-house',
  },
  {
    client: 'Ekatraa Organics',
    industry: 'Sustainable Personal Care',
    heroMetric: '180+ #1 Rankings',
    roas: '54% Organic Revenue',
    before: {
      budget: 'Zero commercial keyword visibility',
      friction: 'Relying 100% on expensive marketplace ads with shrinking gross margins. Zero first-page Google rankings for core high-intent searches.',
    },
    after: {
      growth: '380% organic organic traffic lift',
      outcome: 'Dominated 180+ commercial keywords on Google, making organic search generate 54% of total predictable monthly company sales.',
    },
    quote: 'Dominating 180+ commercial keywords on Google changed our entire profit margin. Organic search now generates 54% of our total revenue.',
    author: 'Ananya Mohapatra, Founder',
    image: '/images/Ekatraa.png',
    slug: 'ekatraa-retail',
  },
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);

  const filteredProjects = activeCategory === 'All Projects'
    ? AGENCY_CASE_STUDIES
    : AGENCY_CASE_STUDIES.filter((p) => p.category === activeCategory);

  const currentSpotlight = SPOTLIGHT_STORIES[activeSpotlightIdx];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#087CCB] animate-ping" />
                <span>Chapter 04 // The Evidence of Impact</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#071B70] tracking-tight leading-[1.1]">
                Real Work. <br />
                <span className="text-[#087CCB]">Meaningful Growth.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                Explore how strategy, creativity and performance come together to create measurable digital impact across Indian and international brands. Zero vanity metrics — only audited commercial growth.
              </p>
            </ScrollReveal>

            {/* Audited Scoreboard Ribbon */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 text-center">
                <div className="card-luxury p-5 text-center group hover:scale-105">
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#071B70]">+240%</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Average Revenue Lift</div>
                </div>
                <div className="card-luxury p-5 text-center group hover:scale-105">
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#087CCB]">3.8X</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Average Client ROAS</div>
                </div>
                <div className="card-luxury p-5 text-center group hover:scale-105">
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#071B70]">180+</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">#1 Google Rankings</div>
                </div>
                <div className="card-luxury p-5 text-center group hover:scale-105">
                  <div className="font-display font-black text-2xl sm:text-3xl text-emerald-600 font-mono-tag">100%</div>
                  <div className="text-xs text-slate-500 font-bold mt-1">Verified Real Data</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Filter Pills with Counts */}
            <ScrollReveal delay={350} className="pt-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count = cat === 'All Projects'
                    ? AGENCY_CASE_STUDIES.length
                    : AGENCY_CASE_STUDIES.filter((p) => p.category === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#071B70] text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BEFORE VS AFTER CLIENT TRANSFORMATION SPOTLIGHT
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="badge-tag">
                <TrendingUp className="w-3.5 h-3.5 text-[#087CCB]" />
                <span>Transformation Dossier // Before vs After</span>
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#071B70] tracking-tight mt-2">
                Transformation Spotlight: The Mechanics of Scale
              </h2>
            </div>

            {/* Switcher Buttons */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
              {SPOTLIGHT_STORIES.map((s, idx) => (
                <button
                  key={s.client}
                  onClick={() => setActiveSpotlightIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeSpotlightIdx === idx
                      ? 'bg-[#071B70] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#071B70]'
                  }`}
                >
                  {s.client}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Card */}
          <div className="card-luxury p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Side-by-side Before & After */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#087CCB] uppercase tracking-wider">{currentSpotlight.industry}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] mt-1">
                    {currentSpotlight.client}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800">
                      Before NovaSpark (The Friction)
                    </div>
                    <div className="text-xs font-semibold text-rose-950">{currentSpotlight.before.budget}</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentSpotlight.before.friction}
                    </p>
                  </div>

                  {/* After */}
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      After NovaSpark (The Outcome)
                    </div>
                    <div className="text-xs font-semibold text-emerald-950">{currentSpotlight.after.growth}</div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentSpotlight.after.outcome}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#087CCB] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm text-slate-700 italic">
                      &ldquo;{currentSpotlight.quote}&rdquo;
                    </p>
                    <div className="text-[11px] font-bold text-[#071B70] mt-1">
                      — {currentSpotlight.author}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/case-studies/${currentSpotlight.slug}`}
                    className="btn-primary"
                  >
                    <span>Read Complete Strategy Deep-Dive</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual & Metric Hero */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src={currentSpotlight.image}
                    alt={currentSpotlight.client}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040D36]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-300">Audited Result</div>
                      <div className="font-display font-black text-2xl text-[#FFC400]">{currentSpotlight.heroMetric}</div>
                    </div>
                    <span className="badge-tag bg-[#00BCEB]/20 text-[#00BCEB] border-[#00BCEB]/30">
                      {currentSpotlight.roas}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROJECTS DIRECTORY GRID
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">Verified Client Results</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">
                All Case Studies ({filteredProjects.length})
              </h3>
            </div>
            <div className="text-xs text-slate-500 hidden sm:block">
              Showing active client growth audits
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.slug} delay={idx * 80}>
                <div className="card-luxury overflow-hidden flex flex-col justify-between h-full group">
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#071B70] shadow-xs">
                        {project.industry}
                      </div>
                      <div className="absolute top-3 right-3 bg-[#071B70] text-[#00BCEB] px-3 py-1 rounded-full text-[11px] font-bold shadow-xs">
                        {project.category}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#087CCB]">
                          {project.client}
                        </div>
                        <h4 className="font-display font-bold text-lg sm:text-xl text-[#071B70] group-hover:text-[#087CCB] transition-colors leading-snug mt-1">
                          {project.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mt-2 font-normal">
                          {project.summary}
                        </p>
                      </div>

                      {/* Deliverables tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.deliverables.slice(0, 3).map((d) => (
                          <span key={d} className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600">
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Performance metrics row */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-2 rounded-xl bg-white border border-slate-200/70 text-center">
                            <div className="font-display font-extrabold text-sm sm:text-base text-[#071B70]">{m.value}</div>
                            <div className="text-[9px] text-slate-500 font-medium truncate mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/case-studies/${project.slug}`}
                      className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-white hover:bg-[#071B70] text-[#071B70] hover:text-white border border-slate-200 text-xs font-bold transition-all duration-200"
                    >
                      <span>Read Complete Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No case studies found for this category.
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM CTA
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#071B70] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#087CCB]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <ScrollReveal>
            <div className="badge-tag-dark mx-auto">
              <span>Your Turn to Scale</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mt-2 font-normal">
              Tell us your current bottlenecks. We will conduct an audit of your marketing channels and share a custom roadmap with zero obligations.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                <span>Start a Conversation</span>
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
