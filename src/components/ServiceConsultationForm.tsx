'use client';

import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageSquare,
  Lock,
} from 'lucide-react';

interface Props {
  defaultService: string;
  serviceTitle: string;
}

const BUDGET_OPTIONS = [
  'Under ₹1,00,000 / month',
  '₹1,00,000 – ₹2,50,000 / month',
  '₹2,50,000 – ₹5,00,000 / month',
  '₹5,00,000 – ₹10,00,000 / month',
  '₹10,00,000+ / month (Enterprise)',
  'Project-Based / Custom Scope',
];

export default function ServiceConsultationForm({ defaultService, serviceTitle }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: defaultService,
    budget: '₹2,50,000 – ₹5,00,000 / month',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [leadId, setLeadId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please check your inputs or try again.');
        return;
      }

      setLeadId(data.leadId || null);
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try again or reach out to us directly via WhatsApp.');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi NovaSpark team, I just requested a strategy consultation regarding ${serviceTitle}. Looking forward to connecting!`
  );

  return (
    <div id="consultation-form" className="relative">
      {status === 'success' ? (
        <div className="card-skeuomorphic p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-emerald-50/40 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              Inquiry Confirmed {leadId ? `(#${leadId.slice(-6)})` : ''}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071B70]">
              Strategy Consultation Request Received
            </h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
              Our senior growth strategists are reviewing your digital whitespace for <span className="font-bold text-[#071B70]">{serviceTitle}</span>. You will receive an initial audit and scheduling options within 24 business hours.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 max-w-md mx-auto text-left space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Clock className="w-4 h-4 text-[#087CCB]" />
              <span>What Happens Next:</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-slate-600 pl-1">
              <li>Comprehensive 48-hour competitor & tag forensics</li>
              <li>Unit economics & CAC compression opportunity map</li>
              <li>Direct 1-on-1 strategy call with senior practitioner</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/918280788689?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fast-Track on WhatsApp (+91 8280788689)</span>
            </a>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  website: '',
                  service: defaultService,
                  budget: '₹2,50,00,000 – ₹5,00,000 / month',
                  message: '',
                  honeypot: '',
                });
              }}
              className="text-xs font-semibold text-slate-500 hover:text-[#071B70] underline"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card-skeuomorphic p-6 sm:p-10 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#087CCB]">
                Confidential Inquiry
              </span>
              <h3 className="font-display font-bold text-xl text-[#071B70]">
                Request a {serviceTitle} Strategy Consultation
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7900]" />
              <span>48-Hour Response SLA</span>
            </div>
          </div>

          {/* Honeypot anti-spam field (hidden) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {/* Error Alert */}
          {status === 'error' && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Submission Notice</p>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well"
              />
            </div>

            {/* Business Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. rahul@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Company / Brand Name
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Enterprises"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well"
              />
            </div>

            {/* Website URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Website or Social Handle
              </label>
              <input
                type="text"
                placeholder="e.g. https://brand.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well"
              />
            </div>

            {/* Monthly Budget */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Estimated Monthly Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well"
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Project Context & Current Growth Hurdles <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your current channels, target CAC/ROAS, timelines, and biggest bottlenecks..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#087CCB]/30 focus:border-[#087CCB] skeuo-well resize-none"
            />
          </div>

          {/* Footer with Submit Button and Trust signals */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Strict NDA & Category Exclusivity Protection</span>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-skeuo-gold w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#071B70] border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Diagnostics...</span>
                </>
              ) : (
                <>
                  <span>Request Strategy Consultation</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
