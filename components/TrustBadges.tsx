const badges = [
  { icon: '⭐', label: '4.8/5 Google Rating', sub: '500+ Verified Reviews' },
  { icon: '🔧', label: '5,000+ Repairs Done', sub: 'Since 2019 — 5+ Years' },
  { icon: '⚡', label: '30 Min Response', sub: 'Same Day Guaranteed' },
  { icon: '🛡️', label: '30-Day Warranty', sub: 'GST & MSME Registered' },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#1B4FD8] py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-3"
            >
              <span className="text-[#F97316] font-bold text-lg flex-shrink-0">{b.icon}</span>
              <div className="min-w-0">
                <p className="text-white font-semibold text-xs md:text-sm leading-tight">{b.label}</p>
                <p className="text-blue-200 text-xs truncate">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
