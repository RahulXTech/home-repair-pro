import { cities } from '@/utils/data';

const featuredCities = [
  {
    slug: 'indore',
    areas: '36+',
    response: '30 Min',
    repairs: '3,000+',
    highlight: 'Indore ka #1 AC & Appliance Repair',
    color: 'from-blue-600 to-blue-800',
    accent: '#1B4FD8',
  },
  {
    slug: 'bhopal',
    areas: '35+',
    response: '30 Min',
    repairs: '2,000+',
    highlight: 'Bhopal mein Same-Day Service',
    color: 'from-orange-500 to-orange-700',
    accent: '#F97316',
  },
];

const otherCities = ['ujjain', 'jabalpur', 'jaipur', 'dewas', 'sehore', 'mhow', 'pritampur', 'mumbai'];

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function ServiceCoverage() {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="text-center mb-4">
          <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Service Coverage
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 text-center mb-3 leading-tight">
          10+ Cities &mdash; Same-Day Repair<br className="hidden md:block" />
          <span className="text-[#F97316]"> At Your Doorstep</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base text-center max-w-xl mx-auto mb-8">
          Indore se Mumbai tak &mdash; 500+ areas mein certified technicians. Call karo, 30-60 min mein ghar pe.
        </p>

        {/* ── Summary pills ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: '10+ Cities', icon: '🏙️' },
            { label: '500+ Areas', icon: '📍' },
            { label: '5,000+ Repairs', icon: '🔧' },
            { label: '30-Day Warranty', icon: '🛡️' },
          ].map((pill) => (
            <div key={pill.label} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-gray-700 shadow-sm">
              <span>{pill.icon}</span>
              {pill.label}
            </div>
          ))}
        </div>

        {/* ── Featured Cities ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {featuredCities.map((fc) => {
            const city = cities.find((c) => c.slug === fc.slug);
            if (!city) return null;
            const topAreas = city.localities.slice(0, 6);

            return (
              <div
                key={fc.slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                {/* Card top bar */}
                <div className={`bg-gradient-to-r ${fc.color} px-5 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-2 text-white">
                    <PinIcon />
                    <span className="text-xl font-black">{city.name}</span>
                  </div>
                  <span className="text-white/80 text-xs font-medium bg-white/20 rounded-full px-3 py-1">
                    {fc.highlight}
                  </span>
                </div>

                <div className="p-5">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { val: fc.areas, label: 'Areas' },
                      { val: fc.response, label: 'Response' },
                      { val: fc.repairs, label: 'Repairs' },
                    ].map(({ val, label }) => (
                      <div key={label} className="text-center bg-gray-50 rounded-xl py-3 border border-gray-100">
                        <p className="text-base md:text-lg font-black text-gray-900 leading-tight">{val}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Top areas */}
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Top Areas</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {topAreas.map((area) => (
                      <span key={area} className="text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1 border border-gray-200">
                        {area}
                      </span>
                    ))}
                    <span className="text-xs bg-gray-100 text-gray-400 rounded-full px-3 py-1 border border-gray-200">
                      +{city.localities.length - 6} more
                    </span>
                  </div>

                  {/* CTA */}
                  <a
                    href="tel:+918889539174"
                    style={{ backgroundColor: fc.accent }}
                    className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl text-sm transition-all hover:opacity-90 active:scale-95"
                  >
                    📞 Book Repair in {city.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Other Cities Grid ── */}
        <div className="mb-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-4">Also Available In</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherCities.map((slug) => {
              const city = cities.find((c) => c.slug === slug);
              if (!city) return null;
              return (
                <a
                  key={slug}
                  href="tel:+918889539174"
                  className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-gray-900 hover:shadow-sm transition-all"
                >
                  <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
                    <PinIcon />
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{city.name}</p>
                    <p className="text-[10px] text-gray-400">{city.localities.length}+ areas</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="relative bg-gradient-to-br from-[#1B4FD8] via-[#2563EB] to-[#1d40b0] rounded-2xl p-6 md:p-8 text-center overflow-hidden">
          {/* decorative blobs */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#F97316]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Expand Coverage
            </span>
            <p className="text-white font-black text-xl md:text-2xl mb-2">Aapka Sheher List Mein Nahi?</p>
            <p className="text-blue-100 text-sm mb-6">WhatsApp karo — hum batayenge ki aapke area mein service available hai ya nahi.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+918889539174"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold py-3 px-7 rounded-xl text-sm transition-all shadow-lg shadow-orange-500/30"
              >
                📞 Call Now — Free Estimate
              </a>
              <a
                href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20repair%20service%20in%20my%20area"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold py-3 px-7 rounded-xl text-sm transition-all shadow-lg shadow-green-500/30"
              >
                💬 WhatsApp Karo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
