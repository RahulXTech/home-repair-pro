import LeadForm from '@/components/LeadForm/LeadForm';

export const metadata = {
  title: 'Contact Us — HomeRepairPro | +91 88895 39174',
  description: 'Contact HomeRepairPro for appliance repair in Indore, Bhopal & 8 cities. Call +91 88895 39174 or WhatsApp for same day service.',
  alternates: { canonical: 'https://homerepairpro.in/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-900 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Contact Us</h1>
        <p className="text-gray-300">Same day response — Call, WhatsApp, ya form fill karo</p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Direct Contact</h2>
            <div className="space-y-4">
              <a
                href="tel:+918889539174"
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-sm transition-all"
              >
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-gray-900">Phone / Call</p>
                  <p className="text-[#F97316] font-semibold">+91 88895 39174</p>
                  <p className="text-gray-500 text-xs">Mon–Sun, 6 AM – 10 PM</p>
                </div>
              </a>
              <a
                href="https://wa.me/918889539174"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-sm transition-all"
              >
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold text-gray-900">WhatsApp</p>
                  <p className="text-[#25D366] font-semibold">+91 88895 39174</p>
                  <p className="text-gray-500 text-xs">Instant response</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Service Areas</p>
                  <p className="text-gray-500 text-sm">Indore • Bhopal • Ujjain • Mhow • Dewas • Sehore • Jabalpur • Jaipur • Pritampur • Mumbai</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="font-bold text-gray-900">Working Hours</p>
                  <p className="text-gray-500 text-sm">Monday – Sunday: 6:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Book Service</h2>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
