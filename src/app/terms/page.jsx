export const metadata = {
  title: 'Terms of Service — HomeRepairPro',
  description: 'Terms and conditions for HomeRepairPro appliance repair services.',
  alternates: { canonical: 'https://homerepairpro.in/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="space-y-6 text-gray-600">
        <p className="text-sm text-gray-500">Last updated: June 2025</p>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Service Agreement</h2>
          <p>By booking a service with HomeRepairPro, you agree to these terms. We provide appliance repair services for residential and commercial clients across Indore, Bhopal, and partner cities.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Pricing & Payment</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service charges start from ₹299 (visiting charge ₹99 adjustable against service)</li>
            <li>Final price communicated before work begins — no hidden charges</li>
            <li>Parts cost communicated separately with owner approval</li>
            <li>Payment accepted: Cash, UPI (GPay, PhonePe, Paytm)</li>
            <li>GST invoice provided for all services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Service Warranty</h2>
          <p>All repair services carry a 30-day warranty. If the same problem recurs within 30 days, we will fix it free of charge. Parts warranty depends on manufacturer terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cancellation Policy</h2>
          <p>You can cancel a booking any time before the technician arrives. If you cancel after the technician visits and diagnosis is done, a ₹99 visiting charge may apply.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>HomeRepairPro is not liable for pre-existing damage, cosmetic damage, or issues unrelated to the specific repair performed. Our liability is limited to the service charge paid.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>Questions about these terms: <a href="tel:+918889539174" className="text-[#1B4FD8] font-semibold">+91 88895 39174</a></p>
        </section>
      </div>
    </div>
  );
}
