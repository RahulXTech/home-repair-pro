import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import LeadForm from '@/components/LeadForm/LeadForm';

export const metadata = {
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">✅ Verified Completed Work</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Government & Corporate Projects — Done
            </h2>
            <p className="text-gray-500 text-sm">GST invoice ke saath completed — 100% verified work records</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#1B4FD8] px-5 py-4">
                <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">🏛️ Government — Police HQ</span>
                <h3 className="text-white font-black text-base leading-tight">IG Headquarter</h3>
                <p className="text-blue-200 text-xs mt-0.5">Central Frontier ITB Police, Bhopal</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs w-20 flex-shrink-0">Service</span>
                  <span className="text-gray-800 text-xs font-semibold">AC Gas Filling, Servicing & Repair (10 Units)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Date</span>
                  <span className="text-gray-800 text-xs font-semibold">22 May 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Amount</span>
                  <span className="text-[#1B4FD8] font-black text-sm">₹61,950</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Brands</span>
                  <span className="text-gray-600 text-xs">LG, Videocon, Voltas, Blue Star</span>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 text-[10px]">GST Invoice Issued</span>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✓ Completed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#7C3AED] px-5 py-4">
                <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">🎓 Central University</span>
                <h3 className="text-white font-black text-base leading-tight">National Forensic Sciences University</h3>
                <p className="text-purple-200 text-xs mt-0.5">NFSU Bhopal Campus, C/o CFSL</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs w-20 flex-shrink-0">Service</span>
                  <span className="text-gray-800 text-xs font-semibold">AC Deep Cleaning + R32 Gas Top Up</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Date</span>
                  <span className="text-gray-800 text-xs font-semibold">02 June 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Invoice No</span>
                  <span className="text-[#7C3AED] font-bold text-xs">VE/2026/NFSU/01</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs w-20 flex-shrink-0">Inclusions</span>
                  <span className="text-gray-600 text-xs">Indoor + Outdoor Jet Wash, Foam Wash, Performance Optimization</span>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 text-[10px]">GST Invoice Issued</span>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✓ Completed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#0F766E] px-5 py-4">
                <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">🏢 Corporate — Pvt. Ltd.</span>
                <h3 className="text-white font-black text-base leading-tight">Nibav Lifts Pvt. Ltd.</h3>
                <p className="text-teal-200 text-xs mt-0.5">Madhya Pradesh | GSTIN: 23AAGCN7620Q1Z2</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 text-xs w-20 flex-shrink-0">Service</span>
                  <span className="text-gray-800 text-xs font-semibold">Cassette & Split AC Deep Jet Wash (8 Units)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Date</span>
                  <span className="text-gray-800 text-xs font-semibold">02 June 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Amount</span>
                  <span className="text-[#0F766E] font-black text-sm">₹7,200</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs w-20">Invoice No</span>
                  <span className="text-[#0F766E] font-bold text-xs">VE/2026/353</span>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-gray-400 text-[10px]">GST Invoice Issued</span>
                  <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">✓ Completed</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              🔒 Sabhi projects mein proper <span className="font-semibold text-gray-700">GST Tax Invoice</span> issue ki gayi •
              GSTIN: <span className="font-semibold text-gray-700">23DNCPG4775E1Z7</span>
            </p>
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
