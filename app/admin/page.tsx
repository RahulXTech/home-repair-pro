'use client';
import { useState, useEffect, useCallback } from 'react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  city: string;
  service: string;
  message: string;
  utm_source: string;
  utm_campaign: string;
  gclid: string;
  landing_page: string;
  device: string;
  created_at: string;
}

const QUICK_LINKS = [
  { label: 'Search Console', url: 'https://search.google.com/search-console', icon: '🔍', color: 'bg-blue-900' },
  { label: 'Google Ads', url: 'https://ads.google.com', icon: '📢', color: 'bg-green-900' },
  { label: 'Tag Manager', url: 'https://tagmanager.google.com', icon: '🏷️', color: 'bg-yellow-900' },
  { label: 'GA4 Analytics', url: 'https://analytics.google.com', icon: '📊', color: 'bg-purple-900' },
  { label: 'Supabase', url: 'https://supabase.com/dashboard', icon: '🗄️', color: 'bg-teal-900' },
  { label: 'Google My Business', url: 'https://business.google.com', icon: '📍', color: 'bg-red-900' },
  { label: 'Vercel Dashboard', url: 'https://vercel.com/dashboard', icon: '▲', color: 'bg-gray-700' },
  { label: 'Keyword Planner', url: 'https://ads.google.com/home/tools/keyword-planner', icon: '🔑', color: 'bg-orange-900' },
];

const SEO_TOOLS = [
  { label: 'Competitor Check', url: 'https://www.ubersuggest.com/traffic-analyzer/trueservicecenter.in', icon: '🕵️', note: 'TrueService ka traffic dekho' },
  { label: 'Your Rankings', url: 'https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.homerepairpro.in%2F', icon: '📈', note: 'Kaunse keywords rank kar rahe hain' },
  { label: 'Indexing Status', url: 'https://search.google.com/search-console/index?resource_id=https%3A%2F%2Fwww.homerepairpro.in%2F', icon: '✅', note: 'Kitne pages indexed hain' },
  { label: 'Page Speed', url: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.homerepairpro.in', icon: '⚡', note: 'Website speed score' },
  { label: 'Ahrefs Free', url: 'https://ahrefs.com/backlink-checker?input=homerepairpro.in', icon: '🔗', note: 'Backlinks check karo' },
  { label: 'SERP Checker', url: 'https://www.google.com/search?q=ac+repair+indore', icon: '🏆', note: 'AC Repair Indore mein kahan ho' },
];

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'leads' | 'seo'>('overview');
  const [search, setSearch] = useState('');

  const fetchLeads = useCallback(async (pwd: string) => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/leads', {
      headers: { 'x-admin-password': pwd },
    });
    if (res.ok) {
      const data = await res.json();
      setLeads(data.leads || []);
      setAuthed(true);
      localStorage.setItem('hrp_admin', pwd);
    } else {
      setError('Wrong password! Dobara try karo.');
      localStorage.removeItem('hrp_admin');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('hrp_admin');
    if (saved) fetchLeads(saved);
  }, [fetchLeads]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-white font-black text-xl">HomeRepairPro Admin</h1>
            <p className="text-gray-500 text-sm mt-1">Private Dashboard</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password dalein..."
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 mb-3 outline-none border border-gray-700 focus:border-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && fetchLeads(password)}
            autoFocus
          />
          {error && <p className="text-red-400 text-sm mb-3 text-center">{error}</p>}
          <button
            onClick={() => fetchLeads(password)}
            disabled={loading || !password}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-bold transition-colors"
          >
            {loading ? '⏳ Checking...' : 'Enter Dashboard →'}
          </button>
        </div>
      </div>
    );
  }

  const total = leads.length;
  const todayLeads = leads.filter((l) => new Date(l.created_at).toDateString() === new Date().toDateString()).length;
  const weekLeads = leads.filter((l) => {
    const diff = (Date.now() - new Date(l.created_at).getTime()) / 86400000;
    return diff <= 7;
  }).length;
  const monthLeads = leads.filter((l) => {
    const diff = (Date.now() - new Date(l.created_at).getTime()) / 86400000;
    return diff <= 30;
  }).length;
  const googleAdsLeads = leads.filter((l) => l.gclid).length;
  const mobileLeads = leads.filter((l) => l.device === 'mobile').length;

  const countBy = (key: keyof Lead) => {
    const map: Record<string, number> = {};
    leads.forEach((l) => {
      const val = (l.gclid && key === 'utm_source') ? 'Google Ads' : (l[key] as string || 'Unknown');
      map[val] = (map[val] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  };

  const filteredLeads = leads.filter((l) =>
    search === '' ||
    l.name?.toLowerCase().includes(search.toLowerCase()) ||
    l.phone?.includes(search) ||
    l.city?.toLowerCase().includes(search.toLowerCase()) ||
    l.service?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black">🔧 HRP Admin</span>
          <span className="bg-green-900 text-green-400 text-xs px-2 py-0.5 rounded-full font-bold">LIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => fetchLeads(localStorage.getItem('hrp_admin') || '')} className="text-gray-400 hover:text-white text-sm">
            🔄 Refresh
          </button>
          <button
            onClick={() => { setAuthed(false); localStorage.removeItem('hrp_admin'); }}
            className="text-gray-500 hover:text-red-400 text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 flex gap-1">
        {(['overview', 'leads', 'seo'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-semibold capitalize transition-colors ${
              activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab === 'overview' ? '📊 Overview' : tab === 'leads' ? '📋 All Leads' : '🔍 SEO Tools'}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
              {[
                { label: 'Total Leads', value: total, color: 'text-blue-400', bg: 'bg-blue-950' },
                { label: 'Aaj', value: todayLeads, color: 'text-green-400', bg: 'bg-green-950' },
                { label: 'Is Hafte', value: weekLeads, color: 'text-purple-400', bg: 'bg-purple-950' },
                { label: 'Is Mahine', value: monthLeads, color: 'text-yellow-400', bg: 'bg-yellow-950' },
                { label: 'Google Ads', value: googleAdsLeads, color: 'text-orange-400', bg: 'bg-orange-950' },
                { label: 'Mobile %', value: total ? `${Math.round((mobileLeads / total) * 100)}%` : '0%', color: 'text-pink-400', bg: 'bg-pink-950' },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-xl p-4 border border-gray-800`}>
                  <p className="text-gray-500 text-xs mb-1">{s.label}</p>
                  <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              {[
                { title: '📍 By City', data: countBy('city'), color: 'bg-blue-500' },
                { title: '🔧 By Service', data: countBy('service'), color: 'bg-orange-500' },
                { title: '📡 By Source', data: countBy('utm_source'), color: 'bg-green-500' },
              ].map((chart) => (
                <div key={chart.title} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                  <h3 className="font-bold text-gray-300 mb-4">{chart.title}</h3>
                  {chart.data.length === 0 ? (
                    <p className="text-gray-600 text-sm">No data yet</p>
                  ) : (
                    chart.data.map(([label, count]) => (
                      <div key={label} className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-400 w-28 truncate">{label || '—'}</span>
                        <div className="flex-1 bg-gray-800 rounded-full h-2">
                          <div
                            className={`${chart.color} h-2 rounded-full transition-all`}
                            style={{ width: `${total ? (count / total) * 100 : 0}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-white w-5 text-right">{count}</span>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>

            {/* Latest 5 Leads */}
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-300">🕐 Latest Leads</h3>
                <button onClick={() => setActiveTab('leads')} className="text-blue-400 text-xs hover:underline">
                  Sab dekho →
                </button>
              </div>
              {leads.slice(0, 5).map((lead) => (
                <div key={lead.id} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0">
                    {lead.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{lead.name}</p>
                    <p className="text-gray-500 text-xs">{lead.service} • {lead.city}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <a href={`tel:${lead.phone}`} className="text-blue-400 font-bold text-sm hover:underline">
                      {lead.phone}
                    </a>
                    <p className="text-gray-600 text-xs">{new Date(lead.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                  {lead.gclid && (
                    <span className="bg-green-900 text-green-400 text-xs px-2 py-0.5 rounded font-bold flex-shrink-0">ADS</span>
                  )}
                </div>
              ))}
              {leads.length === 0 && <p className="text-gray-600 text-sm text-center py-4">Koi lead nahi aaya abhi</p>}
            </div>

            {/* Quick Links */}
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h3 className="font-bold text-gray-300 mb-4">⚡ Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} hover:opacity-80 rounded-xl p-3 flex items-center gap-3 transition-opacity border border-gray-700`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-semibold">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {/* LEADS TAB */}
        {activeTab === 'leads' && (
          <div className="bg-gray-900 rounded-xl border border-gray-800">
            <div className="p-4 border-b border-gray-800 flex items-center gap-3">
              <h3 className="font-bold text-gray-300">All Leads ({filteredLeads.length})</h3>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Name, phone, city search karo..."
                className="ml-auto bg-gray-800 text-white rounded-lg px-3 py-2 text-sm outline-none border border-gray-700 focus:border-blue-500 w-64"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-800">
                    <th className="text-left px-4 py-3">Name</th>
                    <th className="text-left px-4 py-3">Phone</th>
                    <th className="text-left px-4 py-3">City</th>
                    <th className="text-left px-4 py-3">Service</th>
                    <th className="text-left px-4 py-3">Message</th>
                    <th className="text-left px-4 py-3">Source</th>
                    <th className="text-left px-4 py-3">Device</th>
                    <th className="text-left px-4 py-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="px-4 py-3 font-medium">{lead.name || '—'}</td>
                      <td className="px-4 py-3">
                        <a href={`tel:${lead.phone}`} className="text-blue-400 hover:underline font-mono">
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{lead.city || '—'}</td>
                      <td className="px-4 py-3 text-gray-300">{lead.service || '—'}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-xs truncate">{lead.message || '—'}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          lead.gclid ? 'bg-green-900 text-green-400' :
                          lead.utm_source === 'direct' || !lead.utm_source ? 'bg-gray-800 text-gray-400' :
                          'bg-blue-900 text-blue-400'
                        }`}>
                          {lead.gclid ? '⭐ Google Ads' : (lead.utm_source || 'direct')}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">{lead.device || '—'}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleString('en-IN', {
                          day: '2-digit', month: 'short', year: '2-digit',
                          hour: '2-digit', minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-gray-600">
                        {search ? 'Koi lead nahi mili is search mein' : 'Abhi tak koi lead nahi aaya'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SEO TOOLS TAB */}
        {activeTab === 'seo' && (
          <>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {SEO_TOOLS.map((tool) => (
                <a
                  key={tool.label}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-700 rounded-xl p-5 flex items-start gap-4 transition-colors group"
                >
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <p className="font-bold text-white group-hover:text-blue-400 transition-colors">{tool.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{tool.note}</p>
                  </div>
                  <span className="ml-auto text-gray-600 group-hover:text-blue-400">→</span>
                </a>
              ))}
            </div>

            {/* Target Keywords */}
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 mb-5">
              <h3 className="font-bold text-gray-300 mb-4">🎯 Target Keywords — Indore/Bhopal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { kw: 'ac repair indore', vol: '1K-10K', diff: 'Medium', status: '🟡' },
                  { kw: 'ac service indore', vol: '1K-10K', diff: 'Medium', status: '🟡' },
                  { kw: 'washing machine repair indore', vol: '500-1K', diff: 'Low', status: '🟢' },
                  { kw: 'refrigerator repair indore', vol: '500-1K', diff: 'Low', status: '🟢' },
                  { kw: 'ac repair bhopal', vol: '500-1K', diff: 'Low', status: '🟢' },
                  { kw: 'geyser repair indore', vol: '100-500', diff: 'Low', status: '🟢' },
                  { kw: 'ac repair ujjain', vol: '100-500', diff: 'Very Low', status: '🟢' },
                  { kw: 'ac repair dewas', vol: '100', diff: 'Very Low', status: '🟢' },
                  { kw: 'chimney cleaning indore', vol: '100-500', diff: 'Low', status: '🟢' },
                  { kw: 'microwave repair indore', vol: '100-500', diff: 'Low', status: '🟢' },
                ].map((row) => (
                  <div key={row.kw} className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
                    <span>{row.status}</span>
                    <span className="text-sm font-mono text-blue-300 flex-1">{row.kw}</span>
                    <span className="text-xs text-gray-500">{row.vol}/mo</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                      row.diff === 'Very Low' ? 'bg-green-900 text-green-400' :
                      row.diff === 'Low' ? 'bg-teal-900 text-teal-400' :
                      'bg-yellow-900 text-yellow-400'
                    }`}>{row.diff}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitors */}
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h3 className="font-bold text-gray-300 mb-4">🏆 Competitors Monitor Karo</h3>
              <div className="space-y-3">
                {[
                  { name: 'TrueService Center', url: 'https://trueservicecenter.in', threat: 'High', note: 'Bhopal mein strongest — Hinglish content' },
                  { name: 'Shikha Refrigeration', url: 'https://shikharefrigeration.online', threat: 'Low', note: '2010-era design, not mobile friendly' },
                  { name: 'RB Refrigeration', url: 'https://rbrefrigeration.in', threat: 'None', note: 'Placeholder website — no competition' },
                ].map((comp) => (
                  <div key={comp.name} className="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
                    <div className="flex-1">
                      <p className="font-bold text-sm">{comp.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{comp.note}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-bold ${
                      comp.threat === 'High' ? 'bg-red-900 text-red-400' :
                      comp.threat === 'Low' ? 'bg-yellow-900 text-yellow-400' :
                      'bg-gray-700 text-gray-500'
                    }`}>{comp.threat}</span>
                    <a href={comp.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline">
                      Visit →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
