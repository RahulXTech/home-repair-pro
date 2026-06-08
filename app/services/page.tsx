import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { services, cities } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Appliance Repair Services — AC, Fridge, Washing Machine | HomeRepairPro',
  description: 'Indore, Bhopal aur 8 cities mein AC repair, washing machine, refrigerator, geyser, microwave aur chimney cleaning service. Same day • Starting ₹299 • Verified technicians.',
};

const serviceFeatures: Record<string, string[]> = {
  'ac-repair': ['Gas refill & top-up', 'Cooling problem fix', 'PCB board repair', 'AC installation', 'Annual service'],
  'washing-machine-repair': ['Drum & motor repair', 'Pump replacement', 'PCB board fix', 'Door seal change', 'Not spinning fix'],
  'refrigerator-repair': ['Compressor repair', 'Gas refill', 'Thermostat fix', 'Cooling problem', 'Freezer issue'],
  'chimney-cleaning': ['Deep cleaning', 'Filter replacement', 'Motor service', 'Suction fix', 'Baffle filter clean'],
  'geyser-repair': ['Heating element', 'Thermostat fix', 'Leakage repair', 'New installation', 'No hot water fix'],
  'microwave-repair': ['Magnetron repair', 'Door latch fix', 'Turntable repair', 'PCB replacement', 'Not heating fix'],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B4FD8] pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-medium mb-2 uppercase tracking-wide">
            {cities.length} Cities • Same Day Service
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight">
            Hamare Repair Services
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto mb-6">
            6 appliances, verified technicians, transparent pricing — ghar pe aao aur fix karein
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+918889539174"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-base transition-colors"
            >
              📞 Call: 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-6 rounded-xl text-base transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Karo
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {[
            { icon: '⚡', text: 'Same Day Service' },
            { icon: '✅', text: 'Verified Technicians' },
            { icon: '💰', text: 'Starting ₹299' },
            { icon: '🛡️', text: '30-Day Warranty' },
            { icon: '🧾', text: 'GST Invoice' },
          ].map((t) => (
            <span key={t.text} className="flex items-center gap-1.5 font-medium">
              {t.icon} {t.text}
            </span>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Card header */}
                <div className="bg-blue-50 px-6 pt-6 pb-4 flex items-center gap-4">
                  <span className="text-5xl">{s.emoji}</span>
                  <div>
                    <h2 className="text-lg font-black text-gray-900 leading-tight">{s.name}</h2>
                    <p className="text-gray-500 text-sm mt-0.5">{s.desc}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Kya Fix Karte Hain</p>
                  <ul className="space-y-1">
                    {(serviceFeatures[s.slug] || []).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands */}
                <div className="px-6 pb-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Brands Covered</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {s.brands.slice(0, 8).join(' • ')}{s.brands.length > 8 ? ` +${s.brands.length - 8} more` : ''}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-gray-500">Starting from</span>
                    <p className="text-[#1B4FD8] font-black text-xl">₹{s.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(s.name)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-3 py-2 rounded-lg text-xs font-bold transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                    </a>
                    <Link
                      href={`/${s.slug}-indore`}
                      className="flex items-center gap-1 bg-[#1B4FD8] hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Kahan Available Hain?</h2>
          <p className="text-gray-500 text-sm mb-6">{cities.length} cities mein same day service available hai</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <span
                key={c.slug}
                className="bg-blue-50 text-[#1B4FD8] px-4 py-2 rounded-full text-sm font-semibold border border-blue-100"
              >
                📍 {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 bg-[#F97316] text-center">
        <p className="text-white font-bold text-xl mb-1">Abhi Book Karo — Same Day Service</p>
        <p className="text-orange-100 text-sm mb-5">Starting ₹299 • 30-day warranty • GST invoice</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+918889539174"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#F97316] font-black text-lg px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors"
          >
            📞 88895 39174
          </a>
          <a
            href="https://wa.me/918889539174"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-green-500 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
