import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Award, Layers } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { AGENCY_CASE_STUDIES } from '@/lib/agency-data';
import type { Metadata } from 'next';

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AGENCY_CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = AGENCY_CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) return { title: 'Case Study Not Found' };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = AGENCY_CASE_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          HEADER BAR & BREADCRUMB
         ═══════════════════════════════════════════════════════════ */}
      <section className="pt-10 pb-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#087CCB] hover:text-[#071B70] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="badge-tag">
              <span>{project.industry}</span>
            </span>
            <span className="badge-tag">
              <span>{project.category}</span>
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#071B70] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Client: <strong className="text-[#071B70]">{project.client}</strong>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HERO IMAGE SHOWCASE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[360px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Metrics Scoreboard Banner */}
          <div className="mt-8 card-skeuo-dark p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-3 gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00BCEB]/10 rounded-full blur-3xl pointer-events-none" />
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 last:border-0 last:pb-0 relative z-10">
                <div className="text-xs font-mono-tag uppercase tracking-wider text-[#00BCEB] font-semibold">{metric.label}</div>
                <div className="font-display font-black text-3xl sm:text-5xl text-white mt-1.5 tracking-tight">{metric.value}</div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#FFC400] font-bold mt-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DETAILED STORY: CHALLENGE, STRATEGY, EXECUTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Overview */}
          <div className="space-y-4">
            <div className="badge-tag">
              <Award className="w-3.5 h-3.5 text-[#087CCB]" />
              <span>Executive Briefing</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">Project Overview</h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">{project.summary}</p>
          </div>

          {/* The Challenge */}
          <div className="card-skeuomorphic p-8 sm:p-10 border-l-4 border-l-[#FF7900] bg-gradient-to-br from-amber-50/40 via-white to-white space-y-3">
            <div className="text-xs font-mono-tag font-bold uppercase tracking-wider text-[#FF7900]">The Core Challenge</div>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">{project.challenge}</p>
          </div>

          {/* The Strategy */}
          <div className="card-skeuomorphic p-8 sm:p-10 border-l-4 border-l-[#087CCB] bg-gradient-to-br from-blue-50/40 via-white to-white space-y-3">
            <div className="text-xs font-mono-tag font-bold uppercase tracking-wider text-[#087CCB]">Our Growth Strategy</div>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">{project.strategy}</p>
          </div>

          {/* The Execution */}
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="badge-tag">
                <Layers className="w-3.5 h-3.5 text-[#087CCB]" />
                <span>Tactical Implementation</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">Execution Roadmap</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.execution.map((step, i) => (
                <div key={i} className="card-skeuomorphic p-6 flex items-start gap-4 group hover:border-[#087CCB]/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#071B70] to-[#087CCB] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-display font-bold text-lg text-[#071B70]">Deliverables Handled by NovaSpark</h3>
            <div className="flex flex-wrap gap-2.5">
              {project.deliverables.map((deliv) => (
                <span
                  key={deliv}
                  className="px-4 py-2 rounded-xl text-xs font-mono-tag font-semibold bg-slate-100 text-slate-800 border border-slate-200/90 shadow-2xs hover:bg-slate-200/70 transition-colors"
                >
                  {deliv}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Showcase */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-slate-100">
              <h3 className="font-display font-bold text-xl text-[#071B70]">Project Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="card-skeuomorphic relative h-72 rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
                    <Image
                      src={img}
                      alt={`${project.title} visual ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM CTA
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#F7F9FC] to-slate-100 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="badge-tag mx-auto">
            <span>Ready for Similar Impact?</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#071B70] tracking-tight">
            Want to Discuss a Similar Strategy for {project.industry}?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Book a confidential discovery session with our founding team to discuss custom growth targets and audited whitespace for your brand.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(project.category)}&notes=${encodeURIComponent(`Inspired by ${project.client} case study`)}`}
              className="btn-skeuo-gold text-base px-8 py-4 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
            <Link
              href="/case-studies"
              className="btn-skeuo-pearl text-base px-8 py-4 w-full sm:w-auto text-center"
            >
              <span>Explore All Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
