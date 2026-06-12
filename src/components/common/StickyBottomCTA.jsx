'use client';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function StickyBottomCTA() {
  const handleCall = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'phone_click', location: 'sticky_bottom' });
    }
  };

  const handleWA = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_click', location: 'sticky_bottom' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      <a
        href="tel:+918889539174"
        onClick={handleCall}
        className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] text-white py-4 text-base font-bold"
      >
        📞 Call Now
      </a>
      <a
        href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20home%20appliance%20repair%20service"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWA}
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-base font-bold"
      >
        <WhatsAppIcon className="w-5 h-5" /> WhatsApp
      </a>
    </div>
  );
}
