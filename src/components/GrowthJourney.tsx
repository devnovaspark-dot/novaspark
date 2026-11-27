'use client';

import { useEffect, useRef, useState } from 'react';

interface JourneyStage {
  step: string;
  name: string;
  desc: string;
  focus: string;
  deliverable: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    name: 'Discover',
    desc: 'Understand the business, audience, market and existing challenges.',
    focus: 'Market & Unit Economics Audit',
    deliverable: 'Forensic Growth Diagnostic',
  },
  {
    step: '02',
    name: 'Strategize',
    desc: 'Define objectives, positioning, channels and a clear growth roadmap.',
    focus: 'Positioning & Channel Architecture',
    deliverable: '90-Day Strategic Blueprint',
  },
  {
    step: '03',
    name: 'Create',
    desc: 'Develop the creative direction, content, campaigns and digital experiences.',
    focus: 'Brand Storytelling & UX Craft',
    deliverable: 'Campaign & Web Creative System',
  },
  {
    step: '04',
    name: 'Execute',
    desc: 'Launch marketing initiatives across relevant digital channels.',
    focus: 'Full-Funnel Deployment & Tracking',
    deliverable: 'Live Omnichannel Launch',
  },
  {
    step: '05',
    name: 'Optimize',
    desc: 'Analyze performance, identify opportunities and continuously improve.',
    focus: 'Data-Driven Iteration & CRO',
    deliverable: 'Weekly CAC & ROAS Tuning',
  },
  {
    step: '06',
    name: 'Scale',
    desc: 'Expand successful strategies and build sustainable growth.',
    focus: 'Compounding Market Leadership',
    deliverable: 'Sustainable Revenue Expansion',
  },
];

function StageVisual({ activeIndex }: { activeIndex: number }) {
  const stage = JOURNEY_STAGES[activeIndex];

  return (
    <div className="relative rounded-2xl bg-[#071B70] text-white p-8 sm:p-10 overflow-hidden border border-white/10 shadow-xl">
      {/* Subtle Architectural Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00BCEB]/20 rounded-full blur-3xl pointer-events-none transition-all duration-700" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between min-h-[340px] sm:min-h-[380px]">
        {/* Top Stage Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-[#00BCEB]">
            Stage {stage.step} / 06
          </span>
          <span className="text-xs font-medium text-slate-300">
            {stage.focus}
          </span>
        </div>

        {/* Custom Architectural Vector Visual per Stage */}
        <div className="my-8 flex items-center justify-center">
          {activeIndex === 0 && (
            <svg viewBox="0 0 260 140" className="w-full max-w-[260px] h-32 text-white" fill="none">
              <circle cx="130" cy="70" r="54" stroke="rgba(0,188,235,0.28)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="130" cy="70" r="36" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
              <circle cx="130" cy="70" r="14" fill="#FFC400" />
              <line x1="130" y1="10" x2="130" y2="130" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
              <line x1="40" y1="70" x2="220" y2="70" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
              <circle cx="166" cy="46" r="5" fill="#00BCEB" />
              <circle cx="98" cy="92" r="4" fill="#FF7900" />
            </svg>
          )}
          {activeIndex === 1 && (
            <svg viewBox="0 0 260 140" className="w-full max-w-[260px] h-32" fill="none">
              <rect x="24" y="24" width="52" height="34" rx="6" stroke="#00BCEB" strokeWidth="1.5" fill="rgba(0,188,235,0.1)" />
              <rect x="104" y="53" width="52" height="34" rx="6" stroke="#FFC400" strokeWidth="1.5" fill="rgba(255,196,0,0.12)" />
              <rect x="184" y="24" width="52" height="34" rx="6" stroke="#FFFFFF" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
              <rect x="184" y="82" width="52" height="34" rx="6" stroke="#00BCEB" strokeWidth="1.5" fill="rgba(0,188,235,0.08)" />
              <path d="M76 41 H92 V70 H104" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
              <path d="M156 70 H170 V41 H184" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
              <path d="M170 70 V99 H184" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
            </svg>
          )}
          {activeIndex === 2 && (
            <svg viewBox="0 0 260 140" className="w-full max-w-[260px] h-32" fill="none">
              <rect x="34" y="20" width="120" height="96" rx="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
              <rect x="48" y="34" width="92" height="42" rx="4" fill="rgba(0,188,235,0.22)" stroke="#00BCEB" strokeWidth="1" />
              <line x1="48" y1="90" x2="112" y2="90" stroke="#FFC400" strokeWidth="3" strokeLinecap="round" />
              <line x1="48" y1="102" x2="90" y2="102" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
              <rect x="142" y="42" width="84" height="74" rx="8" fill="#087CCB" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <circle cx="184" cy="79" r="14" fill="#FFC400" />
            </svg>
          )}
          {activeIndex === 3 && (
            <svg viewBox="0 0 260 140" className="w-full max-w-[260px] h-32" fill="none">
              <path d="M30 105 C70 105, 85 35, 130 35 C175 35, 190 105, 230 105" stroke="#00BCEB" strokeWidth="2" />
              <path d="M30 85 C75 85, 95 55, 130 55 C165 55, 185 85, 230 85" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="130" cy="35" r="7" fill="#FFC400" />
              <circle cx="72" cy="74" r="5" fill="#FFFFFF" />
              <circle cx="188" cy="74" r="5" fill="#FFFFFF" />
            </svg>
          )}
          {activeIndex === 4 && (
            <svg viewBox="0 0 260 140" className="w-full max-w-[260px] h-32" fill="none">
              <line x1="32" y1="114" x2="228" y2="114" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              <rect x="46" y="78" width="22" height="36" rx="3" fill="rgba(255,255,255,0.2)" />
              <rect x="84" y="60" width="22" height="54" rx="3" fill="rgba(0,188,235,0.45)" />
              <rect x="122" y="44" width="22" height="70" rx="3" fill="#00BCEB" />
              <rect x="160" y="30" width="22" height="84" rx="3" fill="#FFC400" />
              <rect x="198" y="18" width="22" height="96" rx="3" fill="#FF7900" />
            </svg>
          )}
          {activeIndex === 5 && (
            <svg viewBox="0 0 260 140" className="w-full max-w-[260px] h-32" fill="none">
              <path d="M26 112 Q100 106, 146 68 T232 22" stroke="#FFC400" strokeWidth="3" strokeLinecap="round" />
              <path d="M26 112 Q100 106, 146 68 T232 22 L232 118 L26 118 Z" fill="rgba(0,188,235,0.14)" />
              <circle cx="232" cy="22" r="7" fill="#FFC400" />
              <circle cx="146" cy="68" r="5" fill="#00BCEB" />
            </svg>
          )}
        </div>

        {/* Bottom Stage Narrative */}
        <div className="space-y-3 border-t border-white/10 pt-5">
          <div className="flex items-baseline gap-3">
            <span className="font-display font-black text-4xl text-[#FFC400] tracking-tight">
              {stage.step}
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              {stage.name}
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {stage.desc}
          </p>
          <div className="pt-1 text-xs font-mono-tag text-[#00BCEB]">
            Output: {stage.deliverable}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GrowthJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(idx);
            }
          });
        },
        {
          rootMargin: '-35% 0px -45% 0px',
          threshold: 0.1,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const progressPercent = ((activeIndex + 1) / JOURNEY_STAGES.length) * 100;

  return (
    <section className="py-24 lg:py-32 bg-white border-y border-slate-200/80 relative" id="growth-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 lg:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#087CCB]" />
            <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-[#087CCB]">
              The Growth Framework • How We Engineer Predictable Outcomes
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight leading-tight">
            The NovaSpark Growth Journey.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            Six disciplined stages that transform market intelligence into measurable, compounding revenue.
          </p>
        </div>

        {/* Desktop & Mobile Split Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Interactive Visual Canvas (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <StageVisual activeIndex={activeIndex} />

            {/* Interactive Stage Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-tag text-slate-500">
                <span>Journey Progress</span>
                <span className="font-bold text-[#071B70]">{activeIndex + 1} of 6</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#071B70] via-[#087CCB] to-[#00BCEB] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Vertical Editorial Timeline (Desktop + Mobile) */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12">
            {/* Continuous Vertical Connecting Line */}
            <div className="absolute left-3 sm:left-4 top-3 bottom-3 w-[2px] bg-slate-200">
              <div
                className="w-full bg-[#087CCB] transition-all duration-500 ease-out"
                style={{ height: `${progressPercent}%` }}
              />
            </div>

            <div className="space-y-12 lg:space-y-16">
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={stage.step}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div
                      className={`absolute -left-8 sm:-left-12 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#071B70] border-[#00BCEB] text-white scale-110 shadow-md'
                          : 'bg-white border-slate-300 text-slate-400'
                      }`}
                    >
                      <span className="font-mono-tag text-[10px] font-bold">{stage.step}</span>
                    </div>

                    {/* Stage Content (Alternating subtle editorial alignment) */}
                    <div
                      className={`pb-8 border-b border-slate-100 ${
                        idx % 2 === 1 ? 'lg:pl-8' : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline gap-4 mb-2">
                        <span
                          className={`font-display font-black text-4xl sm:text-5xl tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-[#087CCB]' : 'text-slate-200'
                          }`}
                        >
                          {stage.step}
                        </span>
                        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">
                          {stage.name}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                        {stage.desc}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono-tag">
                        <span className="text-[#071B70] font-semibold">
                          {stage.focus}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">
                          {stage.deliverable}
                        </span>
                      </div>

                      {/* Mobile Inline Visual for Active Stage */}
                      {isActive && (
                        <div className="mt-6 lg:hidden">
                          <StageVisual activeIndex={idx} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
