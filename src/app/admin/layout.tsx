import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NovaSpark CRM — Inbound Lead Management Portal',
  description: 'NovaSpark Digital Marketing Agency administrative lead management and conversion tracking system.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {children}
    </div>
  );
}
