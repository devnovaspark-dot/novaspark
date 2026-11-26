'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Search,
  Filter,
  Download,
  LogOut,
  RefreshCw,
  Mail,
  Phone,
  Building,
  Globe,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  X,
  Edit3,
  Trash2,
  Eye,
  Check,
} from 'lucide-react';
import { Lead } from '@/lib/db';

const STATUS_OPTIONS: Lead['status'][] = ['New', 'Contacted', 'In Discussion', 'Converted', 'Closed'];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [totalLeads, setTotalLeads] = useState(0);
  const [stats, setStats] = useState<{
    total: number;
    newCount: number;
    inDiscussion: number;
    converted: number;
    contacted: number;
    closed: number;
    conversionRate: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/stats');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (e) {
      console.error('Failed to fetch stats:', e);
    }
  }, [router]);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (statusFilter !== 'All') params.set('status', statusFilter);

      const res = await fetch(`/api/admin/leads?${params.toString()}`);
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
        setTotalLeads(data.total);
      }
    } catch (e) {
      console.error('Failed to fetch leads:', e);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, router]);

  useEffect(() => {
    fetchStats();
    fetchLeads();
  }, [fetchStats, fetchLeads]);

  const handleStatusChange = async (leadId: string, newStatus: Lead['status']) => {
    setUpdatingId(leadId);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)));
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
        fetchStats();
        showToast(`Lead status updated to "${newStatus}"`);
      } else {
        showToast(data.error || 'Failed to update status', 'error');
      }
    } catch (e) {
      showToast('Network error updating status', 'error');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setUpdatingId(selectedLead.id);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedLead.id,
          status: selectedLead.status,
          admin_notes: editingNotes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLead.id ? { ...l, admin_notes: editingNotes } : l))
        );
        setSelectedLead({ ...selectedLead, admin_notes: editingNotes });
        showToast('Admin notes saved successfully');
      }
    } catch (e) {
      showToast('Error saving notes', 'error');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to permanently delete this lead?')) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${leadId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.filter((l) => l.id !== leadId));
        if (selectedLead?.id === leadId) setSelectedLead(null);
        fetchStats();
        showToast('Lead deleted');
      }
    } catch (e) {
      showToast('Error deleting lead', 'error');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'New':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Contacted':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'In Discussion':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Converted':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Closed':
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#070F2B] text-slate-100 flex flex-col font-sans">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold ${
            toast.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
          }`}
        >
          {toast.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-[#040D36]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 bg-white rounded-lg p-0.5">
                <Image src="/images/logo.png" alt="NovaSpark" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">NovaSpark</span>
                <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#00BCEB]/20 text-[#00BCEB] border border-[#00BCEB]/30">
                  Lead CRM
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/api/admin/leads/export"
              download
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#00BCEB]" />
              <span>Export CSV</span>
            </a>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-300 border border-rose-500/20 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 space-y-8">
        {/* KPI Stats Row */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Leads</div>
              <div className="font-display font-extrabold text-2xl text-white mt-1">{stats.total}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">All Time Submissions</div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">New Inquiries</div>
              <div className="font-display font-extrabold text-2xl text-blue-300 mt-1">{stats.newCount}</div>
              <div className="text-[10px] text-blue-400/80 mt-0.5">Needs First Touch</div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400">In Discussion</div>
              <div className="font-display font-extrabold text-2xl text-purple-300 mt-1">{stats.inDiscussion}</div>
              <div className="text-[10px] text-purple-400/80 mt-0.5">Proposal Stage</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Converted</div>
              <div className="font-display font-extrabold text-2xl text-emerald-300 mt-1">{stats.converted}</div>
              <div className="text-[10px] text-emerald-400/80 mt-0.5">Active Retainers</div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Contacted</div>
              <div className="font-display font-extrabold text-2xl text-amber-300 mt-1">{stats.contacted}</div>
              <div className="text-[10px] text-amber-400/80 mt-0.5">Discovery Done</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#087CCB]/15 border border-[#087CCB]/30">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00BCEB]">Win Rate</div>
              <div className="font-display font-extrabold text-2xl text-white mt-1">{stats.conversionRate}</div>
              <div className="text-[10px] text-[#00BCEB]/80 mt-0.5">Lead to Deal</div>
            </div>
          </div>
        )}

        {/* Search & Filters Bar */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by prospect name, email, company, keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCEB] transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-400">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#00BCEB]"
              >
                <option value="All" className="bg-slate-900">All Statuses</option>
                {STATUS_OPTIONS.map((st) => (
                  <option key={st} value={st} className="bg-slate-900">{st}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => { fetchStats(); fetchLeads(); }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 border-b border-white/10 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-4 px-4">Date & Time</th>
                  <th className="py-4 px-4">Prospect</th>
                  <th className="py-4 px-4">Company</th>
                  <th className="py-4 px-4">Service</th>
                  <th className="py-4 px-4">Budget</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4 text-center">Notification</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
                    onClick={() => {
                      setSelectedLead(lead);
                      setEditingNotes(lead.admin_notes || '');
                    }}
                  >
                    {/* Date */}
                    <td className="py-3.5 px-4 whitespace-nowrap text-slate-400 text-xs">
                      <div className="font-medium text-slate-200">
                        {new Date(lead.created_at).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        {new Date(lead.created_at).toLocaleTimeString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </td>

                    {/* Prospect */}
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white">{lead.name}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <Mail className="w-3 h-3 text-[#00BCEB]" />
                        <span>{lead.email}</span>
                      </div>
                      {lead.phone && (
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <Phone className="w-3 h-3 text-emerald-400" />
                          <span>{lead.phone}</span>
                        </div>
                      )}
                    </td>

                    {/* Company */}
                    <td className="py-3.5 px-4">
                      <div className="text-slate-200 font-medium">{lead.company || 'Direct Prospect'}</div>
                      {lead.website && (
                        <a
                          href={lead.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] text-[#00BCEB] hover:underline flex items-center gap-1 mt-0.5"
                        >
                          <span>{lead.website.replace(/^https?:\/\//, '')}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </td>

                    {/* Service */}
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-200 max-w-[200px] truncate">
                        {lead.service}
                      </span>
                    </td>

                    {/* Budget */}
                    <td className="py-3.5 px-4 text-xs text-slate-300">
                      {lead.budget || 'Not specified'}
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={lead.status}
                        disabled={updatingId === lead.id}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border focus:outline-none cursor-pointer ${getStatusBadge(
                          lead.status
                        )}`}
                      >
                        {STATUS_OPTIONS.map((st) => (
                          <option key={st} value={st} className="bg-slate-900 text-slate-100">
                            {st}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Email Delivery */}
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        title={lead.email_status}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Notified</span>
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setEditingNotes(lead.admin_notes || '');
                          }}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {leads.length === 0 && !loading && (
              <div className="text-center py-16 text-slate-400">
                No matching leads found.
              </div>
            )}

            {loading && (
              <div className="text-center py-16 text-slate-400">
                Loading inquiries from database...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Lead Details Modal / Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Lead Ref: {selectedLead.id}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">{selectedLead.name}</h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Submitted on {new Date(selectedLead.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact & Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Business Email</span>
                <a href={`mailto:${selectedLead.email}`} className="text-sm font-semibold text-[#00BCEB] hover:underline block mt-0.5">
                  {selectedLead.email}
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Phone Number</span>
                <span className="text-sm font-semibold text-white block mt-0.5">
                  {selectedLead.phone || 'Not provided'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Company</span>
                <span className="text-sm font-semibold text-white block mt-0.5">
                  {selectedLead.company || 'Not provided'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Website</span>
                {selectedLead.website ? (
                  <a href={selectedLead.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#00BCEB] hover:underline block mt-0.5">
                    {selectedLead.website}
                  </a>
                ) : (
                  <span className="text-sm text-slate-400 block mt-0.5">Not provided</span>
                )}
              </div>
            </div>

            {/* Service & Budget */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">Requested Service</span>
                <strong className="text-white font-semibold">{selectedLead.service}</strong>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-2">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">Monthly Budget</span>
                <strong className="text-[#FFC400] font-semibold">{selectedLead.budget || 'Not specified'}</strong>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-2">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">Admin Email Status</span>
                <span className="font-mono text-emerald-400 font-semibold">{selectedLead.email_status}</span>
              </div>
            </div>

            {/* Message Box */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Inquiry Message / Core Problem
              </label>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                {selectedLead.message}
              </div>
            </div>

            {/* Admin Internal Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>Internal CRM Strategy Notes</span>
                <span className="text-[10px] text-slate-400 font-normal">Visible only to agency team</span>
              </label>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Log call updates, audit notes, next steps or assigned account director..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCEB]"
              />
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={handleSaveNotes}
                  disabled={updatingId === selectedLead.id}
                  className="px-4 py-2 rounded-xl bg-[#087CCB] hover:bg-[#071B70] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Save Internal Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
