import MainLayout from '@/layouts/MainLayout';

export const metadata = {
  verification: {
    google: 'wDU1PYBMM1c37aQRWhUSDCUA8AtrSge9MJlEpZ2Xhtk',
  },
  title: 'HomeRepairPro — Ghar Ki Har Repair, Ek Call Mein | +91 88895 39174',
  description:
    'Professional home appliance repair in Indore, Bhopal & 8 cities. AC, Washing Machine, Refrigerator, Geyser repair. Same day service, starting ₹299. GST & MSME registered.',
  keywords: 'home appliance repair, AC repair Indore, washing machine repair Bhopal, refrigerator repair, geyser repair',
  metadataBase: new URL('https://homerepairpro.in'),
  openGraph: {
    title: 'HomeRepairPro — Ghar Ki Har Repair, Ek Call Mein',
    description: 'Same day appliance repair in Indore & Bhopal. Verified technicians, starting ₹299.',
    url: 'https://homerepairpro.in',
    siteName: 'HomeRepairPro',
    type: 'website',
    images: [{ url: 'https://www.homerepairpro.in/images/logo.png', width: 400, height: 120 }],
  },
  alternates: {
    canonical: 'https://homerepairpro.in',
  },
};

export default MainLayout;
