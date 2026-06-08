import type { Metadata } from 'next';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Government & Corporate Contracts — HomeRepairPro',
  description: 'HomeRepairPro provides AMC, bulk repair and institutional appliance maintenance contracts for government offices and corporates in Central India.',
  alternates: { canonical: 'https://homerepairpro.in/government-contracts' },
};

export default function GovernmentContractsPage() {
  return (
    <>
      <section className="bg-[#1B4FD8] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          Government & Corporate Contracts
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto">
          AMC contracts, bulk repair services, and institutional maintenance for government offices and corporates
        </p>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contract Types</h2>
              <div className="space-y-3">
                {[
                  { icon: '📋', title: 'Annual Maintenance Contract (AMC)', desc: 'Year-round maintenance for all your appliances at fixed cost.' },
                  { icon: '🔧', title: 'One-time Bulk Repair', desc: 'Large-scale repair projects — 10 to 100+ appliances.' },
                  { icon: '🏢', title: 'Corporate Office Maintenance', desc: 'Dedicated technician for corporates on weekly/monthly basis.' },
                  { icon: '🏛️', title: 'Government Tender Work', desc: 'Registered for GeM portal and government tenders.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 bg-blue-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us for B2B</h2>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  '✓ GST registered — proper invoicing for accounts dept.',
                  '✓ MSME / Udyam registered — govt procurement eligible',
                  '✓ PAN available for TDS purposes',
                  '✓ Purchase order & work order acceptance',
                  '✓ Service agreement with SLA terms',
                  '✓ 50+ technicians — scale without delay',
                  '✓ All service reports documented',
                  '✓ Emergency 24hr helpline for AMC clients',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#16A34A] font-bold flex-shrink-0">{item.slice(0, 1)}</span>
                    <span>{item.slice(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[#1B4FD8]/10 rounded-xl">
                <p className="font-bold text-[#1B4FD8] mb-1">B2B Inquiry Contact</p>
                <p className="text-gray-700 text-sm">📞 +91 88895 39174</p>
                <p className="flex items-center gap-1.5 text-gray-700 text-sm"><WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> WhatsApp: +91 88895 39174</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#1B4FD8]">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-2">B2B / Contract Inquiry</h2>
          <p className="text-blue-200 text-center text-sm mb-6">Service rate card aur company profile bhej denge</p>
          <div className="bg-white rounded-2xl p-6">
            <LeadForm defaultService="Corporate AMC Contract" />
          </div>
        </div>
      </section>
    </>
  );
}
