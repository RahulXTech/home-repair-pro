import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GCLIDCapture from '@/components/GCLIDCapture';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import StickyBottomCTA from '@/components/StickyBottomCTA';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
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
    images: [{ url: 'https://www.homerepairpro.in/logo.png', width: 400, height: 120 }],
  },
  alternates: {
    canonical: 'https://homerepairpro.in',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5STRL8HQ');`,
          }}
        />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wa2qlbh4a6");`,
          }}
        />
      </head>
      <body className={`${plusJakarta.className} bg-white text-gray-900 antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5STRL8HQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GCLIDCapture />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyBottomCTA />
      </body>
    </html>
  );
}
