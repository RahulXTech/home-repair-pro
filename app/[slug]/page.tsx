import type { Metadata } from 'next';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import { services, cities, pricingPlans, faqs } from '@/lib/data';
import { servicePageSchema, faqSchema, localBusinessSchema } from '@/lib/schema';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

function parseSlug(slug: string) {
  for (const service of services) {
    for (const city of cities) {
      if (slug === `${service.slug}-${city.slug}`) {
        return { service, city };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: `${service.slug}-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};
  const { service, city } = parsed;

  return {
    title: `${service.name} in ${city.name} — Same Day | HomeRepairPro`,
    description: `${service.name} in ${city.name} — Call +91 88895 39174. Same day service, verified technicians, starting ₹299. GST & MSME registered.`,
    keywords: `${service.name} ${city.name}, ${service.slug} ${city.slug}, ${service.slug} near me ${city.name}`,
    alternates: { canonical: `https://homerepairpro.in/${slug}` },
    openGraph: {
      title: `${service.name} in ${city.name} — HomeRepairPro`,
      description: `Same day ${service.name} in ${city.name}. Verified technicians, starting ₹299.`,
    },
  };
}

export default async function ServiceCityPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const { service, city } = parsed;
  const url = `https://homerepairpro.in/${slug}`;

  const serviceFaqs = [
    {
      q: `${city.name} mein ${service.name} ke liye kitna charge hai?`,
      a: `${city.name} mein ${service.name} starting ₹${service.price} se hoti hai. Visiting charge ₹99 hai jo service pe adjust ho jaata hai. Parts alag se charge hote hain.`,
    },
    {
      q: `${city.name} mein same day ${service.name} milegi?`,
      a: `Haan! ${city.name} mein hum same day service provide karte hain. Usually 30-60 minutes mein technician pahunch jaata hai.`,
    },
    {
      q: `Kya ${service.name} ke baad warranty milegi?`,
      a: `Haan, ${service.name} pe 30-day warranty milti hai. Same problem dobara aaye toh free service milegi.`,
    },
    {
      q: `Kya aap ${city.name} mein sab brands repair karte ho?`,
      a: `Haan, hum ${city.name} mein LG, Samsung, Whirlpool, Voltas, Daikin, Carrier, Godrej, Haier aur sabhi major brands ki ${service.name} karte hain.`,
    },
    {
      q: `${service.name} ke liye appointment kaise lein?`,
      a: `Sirf call ya WhatsApp karo +91 88895 39174 pe — ya neeche form fill karo. 30 minute mein callback milega.`,
    },
  ];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema(service.name, city.name, url)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(serviceFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <section className="relative min-h-[240px] md:min-h-[360px] flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} in ${city.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4FD8]/90 to-[#1B4FD8]/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 w-full">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {service.name} in {city.name}<br />
            <span className="text-[#F97316]">Fast & Reliable ✓</span>
          </h1>
          <p className="text-blue-100 text-sm mb-5">
            Same day • Verified technicians • Starting ₹{service.price} • GST invoice
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm sm:max-w-none">
            <a
              href="tel:+918889539174"
              className="flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold py-4 px-6 rounded-xl text-base w-full sm:w-auto"
            >
              📞 Call: 88895 39174
            </a>
            <a
              href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(city.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl text-base w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#1B4FD8] py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-4 justify-center md:justify-between text-white text-sm">
          {['✓ Same Day Service', '✓ Verified Technician', `✓ Starting ₹${service.price}`, '✓ GST Invoice', '✓ 30-Day Warranty'].map((b) => (
            <span key={b} className="font-semibold">{b}</span>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            {service.name} in {city.name} — Kyon Choose Karein HomeRepairPro?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {city.name} mein {service.name} ke liye HomeRepairPro sabse trusted naam hai. 2019 se hum {city.name} ke hazaron ghar mein service de rahe hain. Hamare sab technicians trained aur background-verified hain — aapke ghar mein sirf trustworthy log aate hain.
            </p>
            <p>
              {city.name} mein {service.name} ke liye hum same day service guarantee karte hain. Subah call karo, dopahar tak technician aapke ghar pe hoga. Emergency service bhi available hai — Sunday aur holidays pe bhi.
            </p>
            <p>
              Har {service.name} ke baad proper GST invoice milti hai. Hum MSME registered hain isliye pricing transparent hai — koi hidden charges nahi. {city.name} mein service starting ₹{service.price} se hoti hai, aur repair start karne se pehle complete estimate dete hain.
            </p>
            <p>
              {city.name} ke alawa hum Indore, Bhopal, Ujjain, Jabalpur aur aur cities mein bhi service dete hain. Sab repairs pe 30-day warranty milti hai — agar same problem dobara aaye toh free fix karenge. {city.name} mein {service.name} ke liye aaj hi call karo: +91 88895 39174.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Areas We Cover in {city.name}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {service.name} available across all major localities of {city.name} — same day service guaranteed.
          </p>
          <div className="flex flex-wrap gap-2">
            {city.localities.map((area) => (
              <span key={area} className="px-3 py-1.5 bg-blue-50 text-[#1B4FD8] rounded-full text-sm border border-blue-200">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* All Brands We Repair */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            All Brands We Repair — {service.name}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Expert technicians for all major brands. Any model, any year — we fix it.
          </p>
          <div className="flex flex-wrap gap-2">
            {service.brands.map((brand) => (
              <span key={brand} className="px-3 py-1.5 bg-orange-50 text-[#F97316] rounded-full text-sm border border-orange-200 font-medium">
                ✓ {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            {service.name} Price in {city.name}
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">Transparent pricing — koi hidden charges nahi</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 ${plan.popular ? 'bg-[#1B4FD8] text-white shadow-xl scale-105' : 'bg-white border border-gray-200'}`}
              >
                {plan.popular && (
                  <span className="bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-bold text-lg mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-3xl font-black mb-4 ${plan.popular ? 'text-[#F97316]' : 'text-[#1B4FD8]'}`}>
                  ₹{plan.price}<span className="text-sm font-normal"> onwards</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm flex gap-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      <span className="text-[#16A34A] flex-shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+918889539174"
                  className={`mt-5 block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                    plan.popular
                      ? 'bg-[#F97316] hover:bg-orange-600 text-white'
                      : 'bg-[#1B4FD8] hover:bg-blue-700 text-white'
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-10 bg-[#1B4FD8]" id="book">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            {service.name} Book Karo — {city.name}
          </h2>
          <p className="text-blue-200 text-center text-sm mb-6">30 minute mein callback</p>
          <div className="bg-white rounded-2xl p-6">
            <LeadForm defaultCity={city.name} defaultService={service.name} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={serviceFaqs} title={`${service.name} ${city.name} — FAQs`} />

      {/* Related Services */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Aur Services in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-${city.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#1B4FD8] hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#1B4FD8]">{s.name}</p>
                  <p className="text-gray-500 text-xs">Starting ₹{s.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
