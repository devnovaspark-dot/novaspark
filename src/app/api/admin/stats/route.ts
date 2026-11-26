import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { getLeadStats } from '@/lib/db';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const stats = getLeadStats();
  return NextResponse.json({ success: true, stats });
}
