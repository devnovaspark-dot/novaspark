import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { getLeads } from '@/lib/db';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { leads } = getLeads({ limit: 1000 });

  const headers = [
    'Lead ID',
    'Date Submitted (IST)',
    'Full Name',
    'Business Email',
    'Phone',
    'Company',
    'Website',
    'Service',
    'Budget',
    'Status',
    'Email Notified',
    'Email Status',
    'Admin Notes',
    'Message',
  ];

  const escapeCsv = (str: string | undefined | null) => {
    if (!str) return '""';
    const clean = String(str).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = leads.map((l) => [
    escapeCsv(l.id),
    escapeCsv(new Date(l.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })),
    escapeCsv(l.name),
    escapeCsv(l.email),
    escapeCsv(l.phone),
    escapeCsv(l.company),
    escapeCsv(l.website),
    escapeCsv(l.service),
    escapeCsv(l.budget),
    escapeCsv(l.status),
    escapeCsv(l.email_sent ? 'Yes' : 'No'),
    escapeCsv(l.email_status),
    escapeCsv(l.admin_notes),
    escapeCsv(l.message),
  ].join(','));

  const csvContent = [headers.join(','), ...rows].join('\r\n');

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="novaspark_inquiries_${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
