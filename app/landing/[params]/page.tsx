import type { Metadata } from 'next';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import { services, cities } from '@/lib/data';

interface Props {
  params: Promise<{ params: string }>;
}

function parseParams(paramsStr: string) {
  for (const service of services) {
    for (const city of cities) {
      if (paramsStr === `${service.slug}-${city.slug}`) {
        return { service, city };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { params: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ params: `${service.slug}-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { params: paramsStr } = await params;
  const parsed = parseParams(paramsStr);
  if (!parsed) return {};
  const { service, city } = parsed;

  return {
    title: `${service.name} in ${city.name} — Same Day ₹299 | HomeRepairPro`,
    description: `${service.name} in ${city.name}. Call now: +91 88895 39174. Same day, verified technician, starting ₹${service.price}. GST registered.`,
    robots: 'noindex, nofollow',
  };
}

export default async function LandingPage({ params }: Props) {
  const { params: paramsStr } = await params;
  const parsed = parseParams(paramsStr);
  if (!parsed) notFound();

  const { service, city } = parsed;

  const reviews = [
    { name: 'Rajesh K.', city: city.name, text: `Best ${service.name} service in ${city.name}! Same day mein aa gaye, kaam achha kiya.`, rating: 5 },
    { name: 'Sunita M.', city: city.name, text: 'Bahut professional service. GST invoice mili, price reasonable tha. Recommended!', rating: 5 },
    { name: 'Anil S.', city: city.name, text: '30 minute mein technician aa gaya. AC ek ghante mein theek. Happy customer!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal header — no nav */}
      <header className="bg-white shadow-sm py-3 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="font-black text-[#1B4FD8] text-lg">🔧 HomeRepairPro</span>
          <a
            href="tel:+918889539174"
            className="bg-[#F97316] text-white font-bold px-4 py-2 rounded-lg text-sm"
          >
            📞 Call Now
          </a>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Phone CTA — BIG */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+918889539174"
            className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-black py-5 px-6 rounded-2xl text-xl shadow-lg"
          >
            📞 88895 39174
          </a>
          <a
            href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(city.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-black py-5 px-6 rounded-2xl text-xl shadow-lg"
          >
            <WhatsAppIcon className="w-6 h-6" /> WhatsApp Now
          </a>
        </div>

        {/* H1 + Rating */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            {service.name} in {city.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="font-bold text-gray-900">4.8/5</span>
            <span className="text-gray-500 text-sm">(200+ reviews)</span>
          </div>
          <ul className="space-y-2">
            {[
              '✓ Same Day Service — 30 Min Response',
              '✓ Verified & Trained Technician',
              `✓ Starting ₹${service.price} — No Hidden Charges`,
              '✓ GST & MSME Registered',
              '✓ 30-Day Service Warranty',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm font-medium text-gray-700">
                <span className="text-[#16A34A] flex-shrink-0">{item.slice(0, 1)}</span>
                <span>{item.slice(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Image */}
        <div className="relative h-48 rounded-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.name} in ${city.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white">
            <p className="font-bold text-sm">{service.name}</p>
            <p className="text-xs text-white/80">{city.name} — Same Day Available</p>
          </div>
        </div>

        {/* Quick Lead Form */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-4 text-lg">Free Quote Maango</h2>
          <LeadForm defaultCity={city.name} defaultService={service.name} compact />
        </div>

        {/* Reviews */}
        <div>
          <h2 className="font-bold text-gray-900 mb-3">Customer Reviews — {city.name}</h2>
          <div className="space-y-3">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#1B4FD8] text-white flex items-center justify-center text-xs font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                    <span className="text-yellow-400 text-xs">{'⭐'.repeat(r.rating)}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom call CTA */}
        <div className="pb-20 md:pb-0 text-center">
          <a
            href="tel:+918889539174"
            className="inline-block bg-[#F97316] text-white font-black text-lg px-8 py-4 rounded-2xl w-full"
          >
            📞 Abhi Call Karo — Free Quote
          </a>
          <p className="text-gray-500 text-xs mt-2">Mon–Sun 6 AM – 10 PM • Same day service</p>
        </div>
      </div>

      {/* Sticky bottom */}
      <div className="fixed bottom-0 left-0 right-0 flex md:hidden z-50">
        <a href="tel:+918889539174" className="flex-1 bg-[#F97316] text-white text-base font-bold py-4 flex items-center justify-center gap-1">
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(city.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white text-base font-bold py-4 flex items-center justify-center gap-1"
        >
          <WhatsAppIcon className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
