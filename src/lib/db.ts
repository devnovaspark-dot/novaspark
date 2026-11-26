import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Discussion' | 'Converted' | 'Closed';
  email_sent: number;
  email_status: string;
  admin_notes?: string;
  ip_hash?: string;
  created_at: string;
  updated_at: string;
}

export interface LeadFilter {
  search?: string;
  status?: string;
  service?: string;
  page?: number;
  limit?: number;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'leads.db');

let dbInstance: DatabaseSync | null = null;

function getDb(): DatabaseSync {
  if (dbInstance) return dbInstance;

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const db = new DatabaseSync(DB_PATH);
  
  // Create table if not exists
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      website TEXT,
      service TEXT NOT NULL,
      budget TEXT,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'New',
      email_sent INTEGER DEFAULT 0,
      email_status TEXT DEFAULT 'pending',
      admin_notes TEXT,
      ip_hash TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
    CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
  `);

  // Seed sample leads if empty
  const countRow = db.prepare('SELECT COUNT(*) as count FROM leads').get() as { count: number };
  if (countRow.count === 0) {
    seedInitialLeads(db);
  }

  dbInstance = db;
  return db;
}

function seedInitialLeads(db: DatabaseSync) {
  const sampleLeads: Partial<Lead>[] = [
    {
      id: 'lead_1732610101',
      name: 'Rohan Verma',
      email: 'rohan.v@medallion.in',
      phone: '+91 98765 43211',
      company: 'Medallion House',
      website: 'https://medallionhouse.in',
      service: 'Google Ads & Performance Marketing',
      budget: '₹2,50,000 - ₹5,00,000',
      message: 'Looking to scale our luxury home decor e-commerce campaigns across North & East India before the festive season.',
      status: 'In Discussion',
      email_sent: 1,
      email_status: 'delivered',
      admin_notes: 'Initial strategy call completed. Preparing custom performance forecast proposal.',
      created_at: new Date(Date.now() - 36 * 3600 * 1000).toISOString(),
      updated_at: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
    },
    {
      id: 'lead_1732610102',
      name: 'Ananya Mohapatra',
      email: 'ananya@ekatraaretail.com',
      phone: '+91 94370 12890',
      company: 'Ekatraa Organics',
      website: 'https://ekatraa.com',
      service: 'Search Engine Optimization (SEO)',
      budget: '₹1,00,000 - ₹2,50,000',
      message: 'Need high-intent organic search ranking for national sustainable personal care categories.',
      status: 'New',
      email_sent: 1,
      email_status: 'delivered',
      admin_notes: 'Audit checklist generated.',
      created_at: new Date(Date.now() - 14 * 3600 * 1000).toISOString(),
      updated_at: new Date(Date.now() - 14 * 3600 * 1000).toISOString(),
    },
    {
      id: 'lead_1732610103',
      name: 'Dr. Debabrata Sen',
      email: 'contact@divinefresh.co.in',
      phone: '+91 91234 56789',
      company: 'Sri Pandurangan Divine Fresh',
      website: 'https://divinefresh.co.in',
      service: 'Local SEO & Google Business Profile Optimization',
      budget: '₹1,00,000 - ₹2,50,000',
      message: 'We operate 4 organic retail superstores in Bhubaneswar. Need multi-store local search map domination and reviews funnel.',
      status: 'Converted',
      email_sent: 1,
      email_status: 'delivered',
      admin_notes: 'Onboarded on monthly retainer. Kickoff delivered on time.',
      created_at: new Date(Date.now() - 72 * 3600 * 1000).toISOString(),
      updated_at: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    },
    {
      id: 'lead_1732610104',
      name: 'Priyanka Das',
      email: 'priyanka@weekendbhraman.com',
      phone: '+91 99371 88299',
      company: 'Weekend Bhraman Tours',
      website: 'https://weekendbhraman.com',
      service: 'Meta Ads & Paid Social',
      budget: '₹2,50,000 - ₹5,00,000',
      message: 'Experiential tour bookings need high converting video ad creatives and remarketing funnels.',
      status: 'Contacted',
      email_sent: 1,
      email_status: 'delivered',
      admin_notes: 'Spoke with CEO. Follow-up deck sent.',
      created_at: new Date(Date.now() - 22 * 3600 * 1000).toISOString(),
      updated_at: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
    }
  ];

  const stmt = db.prepare(`
    INSERT INTO leads (
      id, name, email, phone, company, website, service, budget, message, status, email_sent, email_status, admin_notes, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const lead of sampleLeads) {
    stmt.run(
      lead.id!,
      lead.name!,
      lead.email!,
      lead.phone || null,
      lead.company || null,
      lead.website || null,
      lead.service!,
      lead.budget || null,
      lead.message!,
      lead.status!,
      lead.email_sent!,
      lead.email_status!,
      lead.admin_notes || null,
      lead.created_at!,
      lead.updated_at!
    );
  }
}

export function checkDuplicateLead(email: string, message: string): boolean {
  try {
    const db = getDb();
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const row = db.prepare(`
      SELECT id FROM leads 
      WHERE email = ? AND message = ? AND created_at > ?
      LIMIT 1
    `).get(email.trim().toLowerCase(), message.trim(), fiveMinutesAgo) as { id: string } | undefined;
    
    return !!row;
  } catch (err) {
    console.error('Error checking duplicate lead:', err);
    return false;
  }
}

export function createLead(data: Omit<Lead, 'id' | 'status' | 'created_at' | 'updated_at' | 'email_sent' | 'email_status'>): Lead {
  const db = getDb();
  const id = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();
  
  const lead: Lead = {
    ...data,
    id,
    email: data.email.trim().toLowerCase(),
    status: 'New',
    email_sent: 0,
    email_status: 'pending',
    created_at: now,
    updated_at: now,
  };

  const stmt = db.prepare(`
    INSERT INTO leads (
      id, name, email, phone, company, website, service, budget, message, status, email_sent, email_status, admin_notes, ip_hash, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    lead.id,
    lead.name,
    lead.email,
    lead.phone || null,
    lead.company || null,
    lead.website || null,
    lead.service,
    lead.budget || null,
    lead.message,
    lead.status,
    lead.email_sent,
    lead.email_status,
    lead.admin_notes || null,
    lead.ip_hash || null,
    lead.created_at,
    lead.updated_at
  );

  return lead;
}

export function updateLeadEmailStatus(id: string, sent: boolean, status: string, error?: string): void {
  const db = getDb();
  const now = new Date().toISOString();
  db.prepare(`
    UPDATE leads 
    SET email_sent = ?, email_status = ?, updated_at = ?
    WHERE id = ?
  `).run(sent ? 1 : 0, status + (error ? `: ${error}` : ''), now, id);
}

export function getLeads(filters: LeadFilter = {}): { leads: Lead[]; total: number } {
  const db = getDb();
  const { search, status, service, page = 1, limit = 50 } = filters;
  const offset = (page - 1) * limit;

  let query = 'SELECT * FROM leads WHERE 1=1';
  let countQuery = 'SELECT COUNT(*) as total FROM leads WHERE 1=1';
  const params: (string | number)[] = [];
  const countParams: (string | number)[] = [];

  if (search && search.trim() !== '') {
    const s = `%${search.trim().toLowerCase()}%`;
    const searchClause = ` AND (LOWER(name) LIKE ? OR LOWER(email) LIKE ? OR LOWER(company) LIKE ? OR LOWER(message) LIKE ?)`;
    query += searchClause;
    countQuery += searchClause;
    params.push(s, s, s, s);
    countParams.push(s, s, s, s);
  }

  if (status && status !== 'All') {
    query += ' AND status = ?';
    countQuery += ' AND status = ?';
    params.push(status);
    countParams.push(status);
  }

  if (service && service !== 'All') {
    query += ' AND service = ?';
    countQuery += ' AND service = ?';
    params.push(service);
    countParams.push(service);
  }

  query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);

  const leads = db.prepare(query).all(...params) as unknown as Lead[];
  const totalRow = db.prepare(countQuery).get(...countParams) as { total: number };

  return { leads, total: totalRow.total };
}

export function getLeadById(id: string): Lead | null {
  const db = getDb();
  const lead = db.prepare('SELECT * FROM leads WHERE id = ?').get(id) as unknown as Lead | undefined;
  return lead || null;
}

export function updateLeadStatus(id: string, status: Lead['status'], admin_notes?: string): Lead | null {
  const db = getDb();
  const now = new Date().toISOString();
  
  if (admin_notes !== undefined) {
    db.prepare(`
      UPDATE leads 
      SET status = ?, admin_notes = ?, updated_at = ?
      WHERE id = ?
    `).run(status, admin_notes, now, id);
  } else {
    db.prepare(`
      UPDATE leads 
      SET status = ?, updated_at = ?
      WHERE id = ?
    `).run(status, now, id);
  }

  return getLeadById(id);
}

export function deleteLead(id: string): boolean {
  const db = getDb();
  const result = db.prepare('DELETE FROM leads WHERE id = ?').run(id);
  return result.changes > 0;
}

export function getLeadStats() {
  const db = getDb();
  const total = (db.prepare('SELECT COUNT(*) as count FROM leads').get() as { count: number }).count;
  const newCount = (db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'New'").get() as { count: number }).count;
  const inDiscussion = (db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'In Discussion'").get() as { count: number }).count;
  const converted = (db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'Converted'").get() as { count: number }).count;
  const contacted = (db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'Contacted'").get() as { count: number }).count;
  const closed = (db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'Closed'").get() as { count: number }).count;

  const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : '0.0';

  const servicesBreakdown = db.prepare(`
    SELECT service, COUNT(*) as count 
    FROM leads 
    GROUP BY service 
    ORDER BY count DESC
  `).all() as { service: string; count: number }[];

  return {
    total,
    newCount,
    inDiscussion,
    converted,
    contacted,
    closed,
    conversionRate: `${conversionRate}%`,
    servicesBreakdown,
  };
}
