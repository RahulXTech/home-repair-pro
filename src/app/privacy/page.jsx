export const metadata = {
  title: 'Privacy Policy — HomeRepairPro',
  description: 'Privacy policy for HomeRepairPro website and services.',
  alternates: { canonical: 'https://homerepairpro.in/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p className="text-sm text-gray-500">Last updated: June 2025</p>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>When you fill out a service request form on HomeRepairPro.in, we collect: your name, phone number, city, service requested, and optionally a message. We also collect technical data like your device type, referring URL, and Google Click ID (GCLID) to improve our advertising.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To contact you about your service request</li>
            <li>To dispatch a technician to your location</li>
            <li>To improve our advertising efficiency</li>
            <li>To send service updates via WhatsApp/SMS (you can opt out anytime)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Data Storage</h2>
          <p>Your data is stored securely in Supabase (PostgreSQL database) hosted in a secure cloud environment. We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies & Tracking</h2>
          <p>We use Google Analytics, Google Tag Manager, and Microsoft Clarity for website analytics. These tools may place cookies on your browser to understand usage patterns. You can disable cookies in your browser settings.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>For privacy concerns, contact us at: <a href="tel:+918889539174" className="text-[#1B4FD8] font-semibold">+91 88895 39174</a></p>
        </section>
      </div>
    </div>
  );
}
