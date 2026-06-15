import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import Image from 'next/image';
import { services, cities } from '@/utils/data';

const seoLinks = [
  { label: 'AC Repair Indore',              href: '/ac-repair-indore' },
  { label: 'AC Repair Bhopal',              href: '/ac-repair-bhopal' },
  { label: 'Washing Machine Repair Indore', href: '/washing-machine-repair-indore' },
  { label: 'Refrigerator Repair Indore',    href: '/refrigerator-repair-indore' },
  { label: 'Geyser Repair Indore',          href: '/geyser-repair-indore' },
  { label: 'Microwave Repair Indore',       href: '/microwave-repair-indore' },
  { label: 'Chimney Cleaning Indore',       href: '/chimney-cleaning-indore' },
  { label: 'AC Repair Ujjain',              href: '/ac-repair-ujjain' },
  { label: 'Appliance Repair Jabalpur',     href: '/ac-repair-jabalpur' },
  { label: 'AC Service Jaipur',             href: '/ac-repair-jaipur' },
  { label: 'Voltas AC Repair Indore',       href: '/ac-repair-indore' },
  { label: 'LG Washing Machine Repair',     href: '/washing-machine-repair-indore' },
  { label: 'Samsung Fridge Repair Bhopal',  href: '/refrigerator-repair-bhopal' },
  { label: 'Home Repair Near Me',           href: '/services' },
  { label: 'AC Gas Refill Indore',          href: '/ac-repair-indore' },
];

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white pt-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* 2-col on mobile → 4-col on desktop; About spans full width on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {/* About — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-base font-bold mb-1">About Us</h3>
            <div className="w-8 h-0.5 bg-white mb-3" />

            <div className="flex items-center gap-3 mb-2">
              <Link href="/">
                <Image
                  src="/images/logo-round.png"
                  alt="HomeRepairPro"
                  width={48}
                  height={48}
                  className="rounded-full bg-white p-1"
                />
              </Link>
              <p className="text-xs leading-5 text-white/90">
                Ghar Ki Har Repair — Ek Call Mein. Verified technicians, same day service, GST &amp; MSME registered.
              </p>
            </div>

            <h4 className="font-semibold text-sm mb-2">Follow Us</h4>
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-xs">f</div>
              <div className="w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center text-xs">i</div>
              <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-xs">▶</div>
              <div className="w-7 h-7 rounded-full bg-blue-900 flex items-center justify-center text-xs">in</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-1">Services</h3>
            <div className="w-8 h-0.5 bg-white mb-3" />
            <ul className="space-y-1 text-xs">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}-indore`} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-base font-bold mb-1">Cities</h3>
            <div className="w-8 h-0.5 bg-white mb-3" />
            <ul className="space-y-1 text-xs">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/ac-repair-${city.slug}`} className="hover:underline">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-1">Reach Us</h3>
            <div className="w-8 h-0.5 bg-white mb-3" />
            <div className="space-y-2 text-xs">
              <p>📍 HomeRepairPro<br />Madhya Pradesh, India</p>
              <a href="tel:+918889539174" className="block hover:underline">📞 +91 88895 39174</a>
              <p>📧 support@homerepairpro.in</p>
              <a
                href="https://wa.me/918889539174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        {/* SEO links */}
        <div className="border-t border-white/30 mt-4 pt-3 pb-3 text-xs leading-relaxed">
          <span className="font-semibold">Related Search: </span>
          {seoLinks.map((link, i) => (
            <span key={link.label}>
              <Link href={link.href} className="hover:underline">{link.label}</Link>
              {i !== seoLinks.length - 1 && ' | '}
            </span>
          ))}
        </div>

      </div>

      {/* Copyright bar */}
      <div className="bg-blue-900 py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-1 text-xs">
          <p>© 2026 HomeRepairPro. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-2 text-white/80">
            <span>GST: 23DNCPG4775E1Z7</span>
            <span>·</span>
            <span>MSME: UDYAM-MP-10-0042011</span>
            <span>·</span>
            <span>Verified Service Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
