'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Send,
  Zap,
  Calendar,
  Lock,
  ChevronDown,
  Check,
  Layers,
  Award,
  TrendingUp,
  Compass,
  HelpCircle,
  Activity,
  FileText,
  Sliders,
  DollarSign,
  Briefcase,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const SERVICES_OPTIONS = [
  'Search Engine Optimization (SEO)',
  'Google Ads & Performance Marketing',
  'Social Media Marketing',
  'Meta Ads & Paid Social',
  'Website Design & Development',
  'Content Marketing & Strategy',
  'Branding & Creative Design',
  'Local SEO & Google Business Profile Optimization',
  'Full-Funnel Growth Strategy',
];

const BUDGET_OPTIONS = [
  'Under ₹1,00,000 / month',
  '₹1,00,000 – ₹2,50,000 / month',
  '₹2,50,000 – ₹5,00,000 / month',
  '₹5,00,000 – ₹10,00,000 / month',
  '₹10,00,000+ / month (Enterprise)',
  'Project-Based / Undecided',
];

const TIMELINE_OPTIONS = [
  'Immediate (Within 7–14 Days)',
  'Next 30 Days',
  'Next Quarter (Q2/Q3)',
  'Exploring Possibilities',
];

const FAQ_ITEMS = [
  {
    question: 'How quickly can we launch after initiating contact?',
    answer:
      'Following your initial consultation, we complete your comprehensive competitor and account forensics within 48 hours. Once strategic roadmaps and asset access are approved, campaigns typically go live within 7 to 10 business days.',
  },
  {
    question: 'Do we own our ad accounts, creative assets, and analytics data?',
    answer:
      '100% yes. Unlike legacy agencies that lock your assets inside proprietary agency accounts, all campaigns, pixel data, creative designs, and tracking properties are built directly inside your brand-owned accounts. You retain full ownership at all times.',
  },
  {
    question: 'Do you require long-term 12-month lock-in contracts?',
    answer:
      'No. We operate in high-accountability 90-day performance sprints. We believe agency partnerships should be earned continuously through verified ROI and compounding growth, not legal handcuffs.',
  },
  {
    question: 'Who actually works on our account on a day-to-day basis?',
    answer:
      'NovaSpark operates on a strict Senior Practitioner model. Your account is directly engineered and managed by senior media buyers, SEO strategists, and creative directors with at least 5 years of verified experience. We never pass client work off to junior interns.',
  },
  {
    question: 'Do you work with competing brands in the same local market?',
    answer:
      'Never. We enforce a strict Category Exclusivity clause. When we partner with a brand in a specific geographic sector or niche (e.g. Luxury Jewelry in Eastern India or Super-Specialty Healthcare), we reject inquiries from direct local competitors.',
  },
];

export default function ContactPage() {
  // Active Consultation Tab
  const [activeTab, setActiveTab] = useState<'proposal' | 'audit' | 'fastcall'>('proposal');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'Full-Funnel Growth Strategy',
    budget: '₹1,00,000 – ₹2,50,000 / month',
    timeline: 'Immediate (Within 7–14 Days)',
    competitor: '',
    message: '',
    honeypot: '', // Spam bot protection
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; leadId?: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // Client validation
    if (!formData.name.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your full name.' });
      setLoading(false);
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid business email address.' });
      setLoading(false);
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatusMessage({ type: 'error', text: 'Please provide some details about your project or goals (min 10 characters).' });
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...formData,
        message: activeTab === 'audit' 
          ? `[FREE AUDIT REQUEST] Competitor: ${formData.competitor || 'None stated'}. Message: ${formData.message}`
          : activeTab === 'fastcall'
          ? `[FAST DISCOVERY CALL REQUEST] Preferred Timeline: ${formData.timeline}. Message: ${formData.message}`
          : formData.message,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatusMessage({
        type: 'success',
        text: data.message || 'Thank you! Your strategic briefing has been routed directly to our senior directors.',
        leadId: data.leadId,
      });

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        service: 'Full-Funnel Growth Strategy',
        budget: '₹1,00,000 – ₹2,50,000 / month',
        timeline: 'Immediate (Within 7–14 Days)',
        competitor: '',
        message: '',
        honeypot: '',
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Network error occurred. Please try again.';
      setStatusMessage({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi NovaSpark Team, I am interested in exploring a custom growth strategy for my business. Can we connect?`
  );

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* ═══════════════════════════════════════════════════════════
          HERO NARRATIVE: THE TURNING POINT
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#087CCB]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <div className="badge-tag mx-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Chapter 05 // Initiation &amp; Partnership</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#071B70] tracking-tight leading-[1.08]">
                Let&apos;s Talk About <br />
                <span className="bg-gradient-to-r from-[#087CCB] via-[#00BCEB] to-[#FF7900] bg-clip-text text-transparent">
                  Your Next Big Move.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                No junior account managers. No generic cookie-cutter pitch decks. Tell us your revenue ambitions, your operational hurdles, and where you want your brand to be in 90 days.
              </p>
            </ScrollReveal>

            {/* Live Studio Pulse Ribbon */}
            <ScrollReveal delay={300} className="pt-2">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <strong className="text-slate-900 font-semibold">Bhubaneswar Growth Lab (IST):</strong> 09:30 AM – 07:00 PM
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-[#087CCB] font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Average Response: &lt; 2 Hours
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-slate-600 font-medium">100% Mutual NDA</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MAIN INTERACTIVE CONSULTATION ENGINE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Consultation Mode Switcher */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="p-1.5 rounded-2xl skeuo-well border border-slate-200/90 flex items-center justify-between gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab('proposal')}
                className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'proposal'
                    ? 'bg-[#0F172A] text-[#FFC400] shadow-md border border-[#0F172A] scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Custom Proposal</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('audit')}
                className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'audit'
                    ? 'bg-[#0F172A] text-[#FFC400] shadow-md border border-[#0F172A] scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Competitor Audit</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fastcall')}
                className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'fastcall'
                    ? 'bg-[#0F172A] text-[#FFC400] shadow-md border border-[#0F172A] scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Fast Discovery Call</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Dynamic Narrative & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Dynamic Mode Header */}
              <div className="space-y-3">
                <div className="badge-tag">
                  {activeTab === 'proposal' && (
                    <>
                      <Briefcase className="w-3.5 h-3.5 text-[#087CCB]" />
                      <span>Full-Funnel Growth Architecture</span>
                    </>
                  )}
                  {activeTab === 'audit' && (
                    <>
                      <Activity className="w-3.5 h-3.5 text-[#FF7900]" />
                      <span>Whitespace &amp; Vulnerability Audit</span>
                    </>
                  )}
                  {activeTab === 'fastcall' && (
                    <>
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>1-on-1 Senior Discovery Sprint</span>
                    </>
                  )}
                </div>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70] leading-tight">
                  {activeTab === 'proposal' && 'Design Your Custom 90-Day Performance Blueprint'}
                  {activeTab === 'audit' && 'Expose Where Competitors Are Stealing Your Market Share'}
                  {activeTab === 'fastcall' && 'Reserve a Confidential 1-on-1 Roadmap Workshop'}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeTab === 'proposal' &&
                    'Every high-growth business requires a synchronized ecosystem. Share your current benchmarks below to receive our audited revenue model.'}
                  {activeTab === 'audit' &&
                    'Enter your brand URL and top competitor. Our forensic team will record a private screen-share detailing their ad fatigue, keyword gaps, and missed conversions.'}
                  {activeTab === 'fastcall' &&
                    'A candid 30-minute strategic briefing with our agency founders. We review your live funnel, answer pressing growth questions, and provide candid feasibility analysis.'}
                </p>
              </div>

              {/* Dynamic Live Scope Preview Box */}
              <div className="card-luxury p-6 bg-gradient-to-br from-slate-50/80 via-white to-white space-y-4 border border-slate-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono-tag uppercase tracking-wider text-slate-400 font-semibold">
                    Strategic Scope Parameters
                  </span>
                  <span className="text-[11px] font-bold text-[#087CCB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    Live Diagnostics
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Selected Practice:</span>
                    <strong className="text-slate-800 font-semibold truncate max-w-[200px]">{formData.service}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Target Budget Tier:</span>
                    <strong className="text-[#071B70] font-bold">{formData.budget.split('/')[0]}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Implementation Timeline:</span>
                    <strong className="text-slate-800 font-semibold">{formData.timeline.split('(')[0]}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Practice Leadership:</span>
                    <strong className="text-emerald-700 font-semibold">Senior Director Level Only</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Guaranteed Response &lt; 2 hrs
                  </span>
                  <span>Mutual NDA Active</span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-1">
                <div className="card-luxury p-4.5 flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#071B70] to-[#087CCB] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tag uppercase tracking-wider text-slate-400">Direct Business Email</div>
                    <a href="mailto:novasparkdmagency@gmail.com" className="font-semibold text-slate-900 hover:text-[#087CCB] text-sm block mt-0.5 transition-colors">
                      novasparkdmagency@gmail.com
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">Direct to Senior Leadership Inbox</div>
                  </div>
                </div>

                <div className="card-luxury p-4.5 flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#071B70] to-[#087CCB] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tag uppercase tracking-wider text-slate-400">Headquarters Phone</div>
                    <a href="tel:+918280788689" className="font-semibold text-slate-900 hover:text-[#087CCB] text-sm block mt-0.5 transition-colors">
                      +91 8280788689
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">Mon – Sat, 9:30 AM to 7:00 PM IST</div>
                  </div>
                </div>

                <div className="card-luxury p-4.5 flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFC400] to-[#FF7900] text-[#071B70] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 text-[#071B70]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono-tag uppercase tracking-wider text-slate-400">Studio &amp; Growth Lab</div>
                    <div className="font-semibold text-slate-900 text-sm mt-0.5 leading-relaxed">
                      Bhubaneswar, 751015, Odisha, India
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Serving clients across India, UAE, UK &amp; US</div>
                  </div>
                </div>
              </div>

              {/* VIP WhatsApp Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-emerald-950">Need Immediate Advice?</h4>
                    <p className="text-xs text-emerald-800">Chat directly with our founding strategist on WhatsApp.</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/918280788689?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide transition-all shrink-0 shadow-md hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Right: The High-Converting Interactive Form */}
            <div className="lg:col-span-7">
              <div className="card-luxury p-8 sm:p-12 relative overflow-hidden bg-white/95">
                {/* Accent top gradient stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#071B70] via-[#087CCB] to-[#FFC400]" />

                <div className="mb-8 space-y-2">
                  <div className="badge-tag">
                    <Sparkles className="w-3.5 h-3.5 text-[#087CCB]" />
                    <span>
                      {activeTab === 'proposal' && 'Step 01 // Growth Scope Definition'}
                      {activeTab === 'audit' && 'Step 01 // Competitor Intelligence Input'}
                      {activeTab === 'fastcall' && 'Step 01 // Discovery Sprint Scheduling'}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#071B70] mt-2">
                    {activeTab === 'proposal' && 'Initiate Your Strategic Growth Consultation'}
                    {activeTab === 'audit' && 'Request Your Free Competitor Teardown'}
                    {activeTab === 'fastcall' && 'Book a Private 1-on-1 Roadmap Briefing'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {activeTab === 'proposal' &&
                      'Complete your parameters below. Our founding directors will deliver a custom performance forecast and whitespace breakdown.'}
                    {activeTab === 'audit' &&
                      'Provide your website and main competitor. You will receive an audited teardown report within 48 hours.'}
                    {activeTab === 'fastcall' &&
                      'Select your preferred timeline and discussion focus. We will match you with the relevant practice lead for a private video session.'}
                  </p>
                </div>

                {/* Status Messages */}
                {statusMessage && (
                  <div
                    className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border border-rose-200 text-rose-900'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div className="text-sm">
                      <p className="font-semibold">{statusMessage.text}</p>
                      {statusMessage.leadId && (
                        <p className="text-xs mt-1 text-emerald-700 font-mono-tag">
                          CRM Reference ID: {statusMessage.leadId} • Stored Securely in NovaSpark CRM
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (hidden from humans) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 82807 88689"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Medallion Lifestyle"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Website & Competitor Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Brand Website URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {activeTab === 'audit' ? (
                          <span className="text-[#071B70] font-bold">Top Competitor URL to Audit *</span>
                        ) : (
                          'Top Competitor (Optional)'
                        )}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. competitorbrand.com"
                        value={formData.competitor}
                        onChange={(e) => setFormData({ ...formData, competitor: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Interactive Service Chips */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700">
                        Primary Capability Needed <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400 font-medium">Click to select focus</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: opt })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                            formData.service === opt
                              ? 'bg-[#0F172A] text-[#FFC400] border-[#0F172A] shadow-md font-semibold scale-[1.02]'
                              : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Budget Tier Chips */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700">
                        Monthly Marketing Budget Commitment
                      </label>
                      <span className="text-[11px] text-slate-400 font-medium">Used for media plan modeling</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {BUDGET_OPTIONS.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`p-2.5 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                            formData.budget === tier
                              ? 'bg-gradient-to-r from-[#FFC400] to-[#FF7900] text-[#071B70] border-transparent font-bold shadow-md scale-[1.02]'
                              : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {tier.split(' ')[0]} {tier.split(' ')[1] || ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Implementation Timeline Chips */}
                  <div>
                    <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      Desired Kickoff Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {TIMELINE_OPTIONS.map((tl) => (
                        <button
                          key={tl}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: tl })}
                          className={`p-2 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                            formData.timeline === tl
                              ? 'bg-[#0F172A] text-[#00BCEB] border-[#0F172A] font-bold shadow-inner'
                              : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300'
                          }`}
                        >
                          {tl.split(' ')[0]} {tl.split(' ')[1] || ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-mono-tag font-bold uppercase tracking-wider text-slate-700 mb-2">
                      {activeTab === 'audit'
                        ? 'What bothers you most about your current digital performance? *'
                        : activeTab === 'fastcall'
                        ? 'Key Agenda or Questions for the 1-on-1 Session *'
                        : 'Project Details / Core Revenue Ambition *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        activeTab === 'audit'
                          ? 'e.g. Our CAC on Meta ads increased by 40% last quarter while our competitor seems to dominate Google rankings for our core keywords...'
                          : activeTab === 'fastcall'
                          ? 'e.g. We want to evaluate if Google Performance Max or Meta Ads will deliver a higher ROAS for our catalog of 200+ luxury products...'
                          : 'Tell us about your target audience, current monthly revenue, primary growth goals, and any specific bottlenecks...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/25 focus:border-[#087CCB] transition-all shadow-2xs"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-skeuo-gold w-full py-4 text-base font-bold rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {loading ? (
                        <span>Processing Strategic Intake...</span>
                      ) : (
                        <>
                          <span>
                            {activeTab === 'proposal' && 'Send My Inquiry — Request Custom Proposal'}
                            {activeTab === 'audit' && 'Send My Inquiry — Competitor Teardown'}
                            {activeTab === 'fastcall' && 'Send My Inquiry — Book Discovery Call'}
                          </span>
                          <Send className="w-4 h-4 ml-1.5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-3 font-normal">
                      Submissions are protected by strict non-disclosure and reviewed personally by NovaSpark directors.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STORYTELLING SECTION: THE 48-HOUR NARRATIVE JOURNEY (SKEUOMORPHIC OBSIDIAN DECK)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#040711] text-white relative overflow-hidden border-y border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#087CCB]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="badge-tag mx-auto bg-white/10 text-white border-white/20">
              <Clock className="w-3.5 h-3.5 text-[#00BCEB]" />
              <span>Radical Agency Transparency</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              The 48-Hour Narrative: <br />
              <span className="text-[#00BCEB]">What Happens After You Inquire</span>
            </h2>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              We eliminated the traditional 3-week corporate sales pitch cycle. Here is exactly how your engagement unfolds from the moment you hit submit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                time: 'Hour 0 – 2',
                phase: 'Senior Director Intake',
                desc: 'Your submission is personally reviewed by our lead strategists. We analyze your live website, verify tracking pixels, and confirm category exclusivity.',
                badge: 'Immediate Response',
              },
              {
                time: 'Hour 2 – 12',
                phase: 'Forensic Competitor Audit',
                desc: 'Our intelligence team scrapes competitor keywords, ad creatives, and landing page funnels to uncover hidden conversion leakage in your niche.',
                badge: 'Data Diagnostics',
              },
              {
                time: 'Hour 24',
                phase: 'Custom 90-Day Blueprint',
                desc: 'We synthesize findings into a bespoke growth spreadsheet model: expected ROAS, estimated CAC reduction, and budget allocation recommendations.',
                badge: 'Tailored Model',
              },
              {
                time: 'Hour 48',
                phase: 'Strategy Briefing Session',
                desc: 'A candid 30-minute private screen-share call with our directors. Zero sales pressure. Pure, actionable strategic insight you can execute immediately.',
                badge: 'Zero Obligation',
              },
            ].map((step, idx) => (
              <div key={step.time} className="card-skeuo-dark p-7 space-y-4 relative group hover:border-[#00BCEB]/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tag font-bold text-[#FFC400] tracking-wider uppercase">
                    {step.time}
                  </span>
                  <span className="text-[10px] font-mono-tag text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Step 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#00BCEB] transition-colors">
                  {step.phase}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#00BCEB]">
                  <Check className="w-3.5 h-3.5" />
                  <span>{step.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE NOVASPARK CLIENT CHARTER: 4 CORE PROMISES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="badge-tag mx-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-[#071B70]" />
              <span>Our Agency Philosophy</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              The NovaSpark Client Charter
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              We built NovaSpark to be the agency we wished we could hire. These 4 foundational commitments govern every client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '100% Asset Ownership',
                desc: 'You own every ad account, tracking pixel, creative file, and analytics container. If you ever leave, everything remains 100% yours.',
                icon: Lock,
              },
              {
                title: 'Senior Practitioners Only',
                desc: 'No junior coordinators or outsourced contractors. Your media spend is managed directly by certified directors with 5+ years tenure.',
                icon: Award,
              },
              {
                title: 'Live Attribution Dashboards',
                desc: 'No static, cherry-picked monthly PDF reports. You receive 24/7 access to live Looker Studio dashboards tracking every rupee spent.',
                icon: Activity,
              },
              {
                title: 'Category Exclusivity',
                desc: 'We never represent your direct local competitors simultaneously. When you partner with NovaSpark, we protect your market territory.',
                icon: ShieldCheck,
              },
            ].map((charter) => {
              const Icon = charter.icon;
              return (
                <div key={charter.title} className="card-skeuomorphic p-7 space-y-4">
                  <div className="w-12 h-12 rounded-2xl skeuo-well text-[#071B70] flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#071B70]">{charter.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{charter.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTERACTIVE FAQ ACCORDION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="badge-tag mx-auto">
              <HelpCircle className="w-3.5 h-3.5 text-[#087CCB]" />
              <span>Questions &amp; Direct Answers</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#071B70] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Clear, candid answers to everything business owners ask before booking their first discovery session.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="card-skeuomorphic rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#071B70]">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#0F172A] text-[#FFC400]' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL ENGAGEMENT BANNER (OBSIDIAN TITANIUM / SKEUOMORPHIC)
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#05070B] border-t border-slate-800 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00BCEB]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="badge-tag-dark mx-auto">
            <span>Direct Access • Zero Middlemen</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Stop Guessing Your Growth Numbers.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Let&apos;s build an audited marketing system that transforms digital attention into compounding monthly revenue.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-skeuo-gold text-base px-8 py-4 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              <span>Start Your Strategy Review</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
            <a
              href={`https://wa.me/918280788689?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-skeuo-pearl text-base px-8 py-4 w-full sm:w-auto"
            >
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
