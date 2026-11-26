import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { getLeads, updateLeadStatus, deleteLead, getLeadById, Lead } from '@/lib/db';

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') || undefined;
  const status = searchParams.get('status') || undefined;
  const service = searchParams.get('service') || undefined;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '50', 10);

  const { leads, total } = getLeads({ search, status, service, page, limit });

  return NextResponse.json({
    success: true,
    leads,
    total,
    page,
    totalPages: Math.ceil(total / limit) || 1,
  });
}

export async function PATCH(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { id, status, admin_notes } = body;

  if (!id || !status) {
    return NextResponse.json({ success: false, error: 'Lead ID and status are required' }, { status: 400 });
  }

  const validStatuses: Lead['status'][] = ['New', 'Contacted', 'In Discussion', 'Converted', 'Closed'];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ success: false, error: 'Invalid lead status' }, { status: 400 });
  }

  const updated = updateLeadStatus(id, status, admin_notes);
  if (!updated) {
    return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, lead: updated });
}

export async function DELETE(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, error: 'Lead ID is required' }, { status: 400 });
  }

  const deleted = deleteLead(id);
  if (!deleted) {
    return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: 'Lead deleted successfully' });
}
