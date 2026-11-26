import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040D36] text-white pt-20 pb-12 border-t border-blue-950 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#087CCB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BCEB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-xl p-1 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="NovaSpark"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  Nova<span className="text-[#00BCEB]">Spark</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#00BCEB] font-semibold">
                  Digital Marketing Agency
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your Business, Our Strategy. We combine creative thinking, intelligent marketing systems and performance-driven execution to help 100+ businesses build enduring brands and achieve measurable revenue growth.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Trusted by 100+ Businesses Across India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#087CCB] hover:text-white hover:border-[#00BCEB]/50 hover:scale-105 transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0-.05-3.18 1.59 1.59 0 0 0 .05 3.18m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#087CCB] hover:text-white hover:border-[#00BCEB]/50 hover:scale-105 transition-all shadow-2xs"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#087CCB] hover:text-white hover:border-[#00BCEB]/50 hover:scale-105 transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#087CCB] hover:text-white hover:border-[#00BCEB]/50 hover:scale-105 transition-all shadow-2xs"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00BCEB]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">
                  Case Studies & Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00BCEB]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#seo" className="text-slate-300 hover:text-white transition-colors">
                  SEO & Search Rankings
                </Link>
              </li>
              <li>
                <Link href="/services#google-ads" className="text-slate-300 hover:text-white transition-colors">
                  Google Ads (PMax & Search)
                </Link>
              </li>
              <li>
                <Link href="/services#meta-ads" className="text-slate-300 hover:text-white transition-colors">
                  Meta Ads (FB & Instagram)
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="text-slate-300 hover:text-white transition-colors">
                  Web Development & UI/UX
                </Link>
              </li>
              <li>
                <Link href="/services#branding-creative" className="text-slate-300 hover:text-white transition-colors">
                  Branding & Logo Design
                </Link>
              </li>
              <li>
                <Link href="/services#social-media" className="text-slate-300 hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00BCEB]">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFC400] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Bhubaneswar, 751015, Odisha, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00BCEB] shrink-0" />
                <a href="tel:+918280788689" className="hover:text-white transition-colors">
                  +91 8280788689
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00BCEB] shrink-0" />
                <a href="mailto:novasparkdmagency@gmail.com" className="hover:text-white transition-colors">
                  novasparkdmagency@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary w-full py-3 text-xs font-bold rounded-xl tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Get a Free Audit</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NovaSpark Digital Marketing Agency | All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-1.5 text-slate-500 hover:text-[#00BCEB] transition-colors"
              title="Admin Lead CRM Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
