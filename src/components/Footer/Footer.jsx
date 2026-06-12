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
    <footer className="bg-sky-500 text-white pt-8">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div>
            <h3 className="text-xl font-bold mb-1">About Us</h3>
            <div className="w-10 h-0.5 bg-white mb-4"></div>

            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/logo-round.png"
                alt="HomeRepairPro"
                width={60}
                height={60}
                className="rounded-full bg-white p-1"
              />
            </Link>

            <p className="text-sm leading-6 text-white/90 mb-4">
              Ghar Ki Har Repair — Ek Call Mein. Verified technicians,
              same day service, GST & MSME registered.
            </p>

            <h4 className="font-semibold mb-3">Follow Us</h4>

            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">f</div>
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">i</div>
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">▶</div>
              <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">in</div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1">Services</h3>
            <div className="w-10 h-0.5 bg-white mb-4"></div>
            <ul className="space-y-1.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}-indore`} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1">Cities</h3>
            <div className="w-10 h-0.5 bg-white mb-4"></div>
            <ul className="space-y-1.5 text-sm">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/ac-repair-${city.slug}`} className="hover:underline">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1">Reach Us</h3>
            <div className="w-10 h-0.5 bg-white mb-4"></div>
            <div className="space-y-3 text-sm">
              <p>📍 HomeRepairPro<br />Madhya Pradesh, India</p>
              <a href="tel:+918889539174" className="block hover:underline">📞 +91 88895 39174</a>
              <p>📧 support@homerepairpro.in</p>
              <a
                href="https://wa.me/918889539174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/30 mt-6 pt-4 pb-4 text-sm">
          <span className="font-semibold">Related Search :</span>{' '}
          {seoLinks.map((link, index) => (
            <span key={link.label}>
              <Link href={link.href} className="hover:underline">{link.label}</Link>
              {index !== seoLinks.length - 1 && ' | '}
            </span>
          ))}
        </div>

      </div>

      <div className="bg-blue-900 py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>© 2026 HomeRepairPro. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span>GST: 23DNCPG4775E1Z7</span>
            <span>MSME: UDYAM-MP-10-0042011</span>
            <span>Verified Service Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
