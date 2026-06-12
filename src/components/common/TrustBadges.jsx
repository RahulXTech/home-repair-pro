const stats = [
  { icon: '⭐', val: '4.8 / 5', label: 'Google Rating', sub: '500+ Verified Reviews' },
  { icon: '🔧', val: '5,000+', label: 'Repairs Done', sub: 'Since 2019 — 5+ Years' },
  { icon: '⚡', val: '30 Min', label: 'Response Time', sub: 'Same Day Guaranteed' },
  { icon: '🛡️', val: '30-Day', label: 'Warranty', sub: 'Free Re-Service Included' },
  { icon: '🏙️', val: '10 Cities', label: 'Service Coverage', sub: 'MP & Rajasthan' },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide divide-x divide-gray-200">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 px-5 md:px-8 py-4 md:py-5 flex-1 min-w-[130px] md:min-w-[160px] text-center md:text-left"
            >
              <span className="text-2xl md:text-3xl flex-shrink-0">{s.icon}</span>
              <div>
                <p className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{s.val}</p>
                <p className="text-xs font-bold text-gray-700 mt-0.5">{s.label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 hidden md:block">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
