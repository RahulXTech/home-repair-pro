import Link from 'next/link';
import { cities } from '@/utils/data';

export default function CityPills() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-4">
          <h2 className="text-lg md:text-2xl font-black text-gray-900">
            Service Available In
          </h2>

          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Choose your city
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">

          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/ac-repair-${c.slug}`}
              className="
                inline-flex
                items-center
                gap-1.5
                px-3
                py-2
                rounded-full
                bg-blue-50
                border
                border-blue-100
                text-gray-700
                text-xs
                md:text-sm
                font-medium
                hover:bg-[#2563EB]
                hover:text-white
                hover:border-[#2563EB]
                transition-all
                duration-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.686 2 4 4.686 4 8c0 4.25 6 10 6 10s6-5.75 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1110 5.5a2.5 2.5 0 010 5z" />
              </svg>

              {c.name}
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
