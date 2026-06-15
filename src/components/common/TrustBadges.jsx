const stats = [
  { icon: '🔧', val: '5,000+', label: 'Repairs Done',      sub: 'Since 2019 — 5+ Years'    },
  { icon: '⚡', val: '30 Min', label: 'Response Time',     sub: 'Same Day Guaranteed'       },
  { icon: '🛡️', val: '30-Day', label: 'Warranty',          sub: 'Free Re-Service Included'  },
  { icon: '🏙️', val: '10 Cities', label: 'Service Coverage', sub: 'MP & Rajasthan'          },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function GoogleWordmark() {
  return (
    <svg viewBox="0 0 272 92" className="h-6" aria-label="Google" role="img" xmlns="http://www.w3.org/2000/svg">
      {/* G */}
      <path fill="#4285F4" d="M35.29 41.41V32h31.91c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.71.36 15.53 16.32.07 35.5.07c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.96-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.67l-22.5.03z"/>
      {/* o (red) */}
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      {/* o (yellow) */}
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      {/* g */}
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      {/* l */}
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
      {/* e */}
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
    </svg>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#FBBC05]" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide divide-x divide-gray-200">

          {/* ── Google Rating Badge ── */}
          <div className="flex flex-col items-center justify-center gap-1 px-5 md:px-8 py-4 md:py-5 flex-1 min-w-[150px] md:min-w-[190px] text-center">
            <div className="flex items-center gap-2 mb-0.5">
              <GoogleG />
              <div className="text-left">
                <p className="text-[11px] font-semibold text-gray-500 leading-none mb-0.5">Excellent</p>
                <Stars />
              </div>
            </div>
            <p className="text-xl md:text-2xl font-black text-gray-900 leading-tight">4.8 / 5</p>
            <p className="text-[10px] text-gray-400">Based on 500+ reviews</p>
            <GoogleWordmark />
          </div>

          {/* ── Other Stats ── */}
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
