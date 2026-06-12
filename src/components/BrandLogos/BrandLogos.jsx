const brands = [
  'LG', 'Samsung', 'Voltas', 'Daikin', 'Whirlpool', 'Bosch', 'IFB',
  'Godrej', 'Haier', 'Panasonic', 'Hitachi', 'Carrier', 'Blue Star',
  'O General', 'Bajaj', 'Havells', 'Racold', 'AO Smith', 'Elica', 'Faber', 'Siemens',
];

export default function BrandLogos() {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-[0.18em] mb-6">
          In Sabhi Brands Ki Expert Repair Karte Hain
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 bg-white hover:bg-gray-900 hover:text-white border border-gray-200 hover:border-gray-900 rounded-xl text-sm font-bold text-gray-600 transition-all cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
