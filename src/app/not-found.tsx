import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071B70] text-white p-4 text-center">
      <div className="max-w-md space-y-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#00BCEB] border border-white/20">
          Error 404
        </span>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white">
          Page Not Found
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The growth page or resource you are looking for does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Return to NovaSpark Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
