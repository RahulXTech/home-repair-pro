import { reviews } from '@/utils/data';

function GoogleGIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.91 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GoogleWordmark() {
  return (
    <span className="text-2xl font-bold tracking-tight leading-none">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function Stars({ count = 5, size = 'md' }) {
  const cls = size === 'sm' ? 'text-base' : 'text-xl';
  return (
    <div className={`flex gap-0.5 ${cls}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-[#FBBC05]' : 'text-gray-200'}>★</span>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Customer Reviews
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
            5,000+ Customers Ka <span className="text-[#F97316]">Bharosa</span>
          </h2>
          <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto" />
        </div>

        {/* ── Google Rating Banner ── */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6 mb-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">

          {/* Rating number + stars */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-black text-gray-900 leading-none">4.8</p>
              <Stars count={5} size="md" />
              <p className="text-gray-500 text-xs mt-1.5 font-medium">5,000+ reviews</p>
            </div>
            <div className="h-14 w-px bg-gray-300 hidden sm:block" />
          </div>

          {/* Google branding */}
          <div className="flex flex-col items-center sm:items-start gap-1 flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Verified ratings on</p>
            <div className="flex items-center gap-2">
              <GoogleGIcon className="w-7 h-7" />
              <GoogleWordmark />
            </div>
            <p className="text-gray-500 text-xs mt-1 text-center sm:text-left">
              Real reviews from verified customers across Indore, Bhopal &amp; 8 cities
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://www.google.com/search?q=HomeRepairPro+Indore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all whitespace-nowrap"
          >
            <GoogleGIcon className="w-4 h-4" />
            See All Reviews
          </a>
        </div>

        {/* ── Review Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all flex flex-col"
            >
              {/* Top row: avatar + name + Google G */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#1B4FD8] text-white flex items-center justify-center font-black text-base flex-shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">{r.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">📍 {r.city}</p>
                  </div>
                </div>
                <GoogleGIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              </div>

              {/* Stars */}
              <Stars count={r.rating} size="sm" />

              {/* Service badge */}
              {r.service && (
                <span className="inline-block mt-2.5 bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full border border-orange-100 self-start">
                  🔧 {r.service}
                </span>
              )}

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Verified badge */}
              <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-100">
                <span className="text-[#34A853] text-xs font-semibold">✓ Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=HomeRepairPro+Indore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
          >
            <GoogleGIcon className="w-5 h-5" />
            Read All Google Reviews
          </a>
        </div>

      </div>
    </section>
  );
}
