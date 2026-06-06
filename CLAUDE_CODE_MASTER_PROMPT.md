# HomeRepairPro.in — Complete Website Build
## Read all 3 files before starting: this prompt + Document 1 (Roadmap) + Document 2 (Technical Guide)

---

## MOST IMPORTANT RULE
**Mobile-first always.** 80%+ traffic will be on phones in India. Every component must look AMAZING on 375px screen first, then desktop. Phone number must be visible without scrolling. WhatsApp button always visible.

---

## CREDENTIALS

```env
NEXT_PUBLIC_SUPABASE_URL=https://nomzecuuzbdldkmedsgf.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=REPLACE_WITH_FULL_eyJ_KEY_FROM_SUPABASE
SUPABASE_SECRET_KEY=REPLACE_WITH_SUPABASE_SECRET
NEXT_PUBLIC_GTM_ID=GTM-5STRL8HQ
NEXT_PUBLIC_GA4_ID=G-DTY0JXELD8
NEXT_PUBLIC_CLARITY_ID=wa2qlbh4a6
NEXT_PUBLIC_PHONE=8889539174
NEXT_PUBLIC_WHATSAPP=918889539174
```

---

## BRAND

- **Name:** HomeRepairPro
- **Tagline:** "Ghar Ki Har Repair — Ek Call Mein"
- **Phone:** +91 88895 39174
- **WhatsApp:** +91 88895 39174
- **Primary color:** #1B4FD8 (strong trust blue)
- **Accent:** #F97316 (orange — urgency/CTA)
- **Success:** #16A34A (green — WhatsApp + trust badges)
- **Font:** 'Plus Jakarta Sans' from Google Fonts (modern, readable on mobile)

---

## FREE IMAGES — USE THESE EXACT URLS (all from Unsplash/Pexels — 100% free)

```
HERO (technician working):
https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80
(AC technician working on unit)

AC REPAIR:
https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80
https://images.pexels.com/photos/4489751/pexels-photo-4489751.jpeg?w=600

WASHING MACHINE:
https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80
https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?w=600

REFRIGERATOR:
https://images.pexels.com/photos/4116716/pexels-photo-4116716.jpeg?w=600
https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80

TECHNICIAN PORTRAIT (trust section):
https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80
https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80

TOOLS/REPAIR WORK:
https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80
https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?w=600

CHIMNEY:
https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?w=600

GEYSER/WATER HEATER:
https://images.pexels.com/photos/4116724/pexels-photo-4116724.jpeg?w=600

HAPPY CUSTOMER:
https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80
```

All images: use Next.js `<Image>` component with proper `alt` text, `width`, `height`, and `loading="lazy"` (except hero — use `priority`).

---

## SERVICES & CITIES

**Services (6):**
AC Repair & Service | Washing Machine Repair | Refrigerator Repair | Chimney Cleaning | Geyser Repair | Microwave Repair

**Cities (10):**
Indore | Bhopal | Ujjain | Mhow | Dewas | Sehore | Jabalpur | Jaipur | Pritampur | Mumbai

---

## DATABASE — Supabase `leads` table already created

**On form submit — do BOTH:**
1. Save to Supabase `leads` table
2. Open WhatsApp: `https://wa.me/918889539174?text=🔧 New Lead!%0AName: {name}%0APhone: {phone}%0ACity: {city}%0AService: {service}%0AMessage: {message}`

---

## GCLID TRACKING — in every page via client component

```typescript
// components/GCLIDCapture.tsx — add to layout.tsx
'use client';
import { useEffect } from 'react';
export default function GCLIDCapture() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get('gclid')) {
      localStorage.setItem('gclid', p.get('gclid')!);
      localStorage.setItem('utm_source', p.get('utm_source') || 'google');
      localStorage.setItem('utm_campaign', p.get('utm_campaign') || '');
      localStorage.setItem('utm_keyword', p.get('utm_keyword') || '');
      localStorage.setItem('lp', window.location.pathname);
    }
  }, []);
  return null;
}
```

---

## HOMEPAGE DESIGN — MOBILE FIRST

### Section 1: Hero (above the fold on mobile)
```
┌─────────────────────────────┐
│  HomeRepairPro          ☰   │  ← sticky header, 56px tall
├─────────────────────────────┤
│  [HERO IMAGE - technician]  │  ← 200px tall on mobile
│  overlay with text:         │
│                             │
│  Ghar Ki Har Repair         │  ← 28px bold white
│  Ek Call Mein ✓             │
│                             │
│  Same Day Service           │  ← 14px white
│  Indore • Bhopal • 8 Cities │
│                             │
│  [📞 Call Now: 88895 39174] │  ← orange button, full width
│  [💬 WhatsApp Us]           │  ← green button, full width
└─────────────────────────────┘
```

### Section 2: Trust Strip (4 badges in a row)
```
✓ GST Reg. | ✓ MSME | ✓ 5000+ Repairs | ✓ Same Day
```
Scrollable horizontal on mobile, 4-col grid on desktop.

### Section 3: Services Grid
2×3 grid on mobile, 3×2 on desktop. Each card:
- Icon (emoji or SVG)
- Service name
- "Starting ₹299"
- Arrow →

### Section 4: How It Works (3 steps)
1. Call/WhatsApp → 2. Technician visits → 3. Problem solved ✓

### Section 5: Cities We Serve
Scrollable pills on mobile: Indore • Bhopal • Ujjain • +7 more

### Section 6: Why Choose Us
4 cards: Fast | Verified | Affordable | Guaranteed

### Section 7: Customer Reviews (3 cards)
Star rating + name + city + review text

### Section 8: Lead Form
Sticky CTA or full section form

### Section 9: FAQ (5 questions, accordion)

### Footer
Phone | WhatsApp | Cities | Services | GST No. | MSME

---

## STICKY ELEMENTS ON ALL PAGES (mobile)
```
Bottom of screen — always visible:
┌──────────────┬──────────────┐
│  📞 Call Now │  💬 WhatsApp │
└──────────────┴──────────────┘
```
These 2 buttons fixed at bottom on mobile — this is how Urban Company does it — MAXIMUM conversions.

---

## SEO PAGES (60 pages — dynamic route)

URL: `/[service-slug]-[city-slug]/`
Example: `/ac-repair-indore/`, `/washing-machine-repair-bhopal/`

Generate ALL combinations via `generateStaticParams()`:
```typescript
const services = [
  { name: 'AC Repair & Service', slug: 'ac-repair' },
  { name: 'Washing Machine Repair', slug: 'washing-machine-repair' },
  { name: 'Refrigerator Repair', slug: 'refrigerator-repair' },
  { name: 'Chimney Cleaning', slug: 'chimney-cleaning' },
  { name: 'Geyser Repair', slug: 'geyser-repair' },
  { name: 'Microwave Repair', slug: 'microwave-repair' },
];
const cities = [
  { name: 'Indore', slug: 'indore' },
  { name: 'Bhopal', slug: 'bhopal' },
  { name: 'Ujjain', slug: 'ujjain' },
  { name: 'Mhow', slug: 'mhow' },
  { name: 'Dewas', slug: 'dewas' },
  { name: 'Sehore', slug: 'sehore' },
  { name: 'Jabalpur', slug: 'jabalpur' },
  { name: 'Jaipur', slug: 'jaipur' },
  { name: 'Pritampur', slug: 'pritampur' },
  { name: 'Mumbai', slug: 'mumbai' },
];
```

Each SEO page must have:
- `<title>` : "[Service] in [City] — Same Day | HomeRepairPro"
- `<meta description>` : "[Service] in [City] — Call +91 88895 39174. Same day service, verified technicians, starting ₹299. GST & MSME registered."
- H1: "[Service] in [City] — Fast & Reliable"
- Service image (use relevant image from list above)
- 4 paragraphs of content mentioning city name naturally
- Price table (Basic / Standard / Premium)
- LocalBusiness + Service JSON-LD schema
- FAQ (5 questions) with FAQPage schema
- Lead form with city pre-filled
- Related services links

---

## LANDING PAGES (20 pages — for Google Ads)

URL: `/landing/[service-slug]-[city-slug]/`

NO header nav, NO footer links — conversion only:
```
┌─────────────────────────────┐
│  🏠 HomeRepairPro           │  ← logo only, no menu
│  ─────────────────────────  │
│  [📞 88895 39174]           │  ← HUGE, tap to call
│  [💬 WhatsApp Now]          │
│  ─────────────────────────  │
│  AC Repair in Indore        │  ← H1
│  ⭐⭐⭐⭐⭐ 4.8/5 (200+ reviews)│
│  ─────────────────────────  │
│  ✓ Same Day Service         │
│  ✓ Verified Technician      │
│  ✓ Starting ₹299            │
│  ✓ GST & MSME Registered    │
│  ─────────────────────────  │
│  [QUICK LEAD FORM]          │
│  Name: _____________________│
│  Phone: ____________________│
│  [Get Free Quote →]         │
│  ─────────────────────────  │
│  3 customer reviews         │
│  (star rating + text)       │
└─────────────────────────────┘
```

---

## LEAD FORM COMPONENT

```typescript
// On submit:
// 1. Validate: phone must be 10 digits
// 2. Insert to Supabase with GCLID data
// 3. Open WhatsApp in new tab
// 4. Show: "✓ Done! Hum 30 minute mein call karenge."
// 5. Fire GTM: dataLayer.push({ event: 'lead_submit', city, service })

const trackingData = {
  gclid: localStorage.getItem('gclid') || null,
  utm_source: localStorage.getItem('utm_source') || 'direct',
  utm_campaign: localStorage.getItem('utm_campaign') || null,
  utm_keyword: localStorage.getItem('utm_keyword') || null,
  landing_page: localStorage.getItem('lp') || window.location.pathname,
  device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
};
```

Fields: Name* | Phone* | City (dropdown) | Service (dropdown) | Message (optional)

---

## GTM INSTALLATION in layout.tsx

```tsx
// In <head> — Script 1
<Script
  id="gtm-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5STRL8HQ');`
  }}
/>

// After <body> — noscript
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5STRL8HQ"
    height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
</noscript>
```

## MICROSOFT CLARITY in layout.tsx

```tsx
<Script
  id="clarity-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wa2qlbh4a6");`
  }}
/>
```

---

## PHONE CLICK TRACKING

```tsx
// components/CallButton.tsx
<a
  href="tel:+918889539174"
  onClick={() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'phone_click' });
    }
  }}
>
  📞 Call: +91 88895 39174
</a>
```

---

## ABOUT PAGE

- GST: placeholder "[Add GST Number]" — owner will fill later
- MSME/Udyam: "Udyam Registered Business"
- Years: "5+ Years Serving Central India"
- Repairs: "5,000+ Appliances Repaired"
- Technicians: "50+ Verified Technicians"
- Cities: All 10 listed
- Section: "Government & Corporate Clients" — brief paragraph

---

## BLOG — 5 FULL ARTICLES TO WRITE

1. **Slug:** `ac-ki-cooling-kam-kyu-hoti-hai`
   **Title:** "AC Ki Cooling Kam Ho Gayi? 7 Main Reasons Aur Ghar Pe Solution"
   **800 words, FAQ section, CTA**

2. **Slug:** `washing-machine-pani-nahi-nikal-rahi`
   **Title:** "Washing Machine Paani Nahi Nikal Rahi — Fix Karo 5 Steps Mein"

3. **Slug:** `fridge-thanda-nahi-kar-raha`
   **Title:** "Fridge Thanda Nahi Kar Raha — Kab Repair Zaroori Hai"

4. **Slug:** `ac-service-cost-indore-bhopal-2025`
   **Title:** "AC Service Cost Indore & Bhopal 2025 — Complete Price Guide"

5. **Slug:** `geyser-garam-pani-nahi-de-raha`
   **Title:** "Geyser Garam Paani Nahi De Raha — 6 Reasons & Solution"

Each article: intro + 4-5 sections + FAQ (5 Q&A) + CTA box "Call +91 88895 39174"

---

## SEO — EVERY PAGE

```typescript
// In each page's metadata:
export const metadata = {
  title: '[Service] in [City] — Same Day | HomeRepairPro',
  description: '[Service] in [City] by verified technicians. Call +91 88895 39174. Same day, starting ₹299.',
  keywords: '[service] [city], [service] near me, [service] repair [city]',
  openGraph: { title, description, url: 'https://homerepairpro.in/...' },
  alternates: { canonical: 'https://homerepairpro.in/...' }
}
```

Auto-generate `sitemap.xml` with all 60+ service pages + blog posts.

---

## COMPETITOR ANALYSIS — WHAT TO BEAT

**Urban Company** — big brand but expensive, impersonal
**Nakoda DCS** — text heavy, slow, bad mobile
**Valet Groups** — outdated design, hard to call
**24x7homecare** — cluttered, too many ads

**Our advantage to highlight:**
- "Local se Seedha Contact — Koi Middleman Nahi" 
- "GST + MSME Registered — Government Approved"
- "Indore & Bhopal Mein #1 Choice"
- Faster than Urban Company (30 min vs 2 hours)

---

## FILE STRUCTURE

```
homerepairpro/
├── .env.local
├── app/
│   ├── layout.tsx              ← GTM + Clarity + GCLIDCapture
│   ├── page.tsx                ← Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── government-contracts/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── sitemap.ts              ← auto-generated sitemap
│   ├── robots.ts
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── landing/
│   │   └── [params]/page.tsx   ← Ad landing pages
│   └── [service]-[city]/
│       └── page.tsx            ← 60 SEO pages
├── components/
│   ├── GCLIDCapture.tsx        ← client, in layout
│   ├── LeadForm.tsx            ← Supabase + WhatsApp + GTM
│   ├── CallButton.tsx          ← tel: + GTM event
│   ├── WhatsAppFloat.tsx       ← floating green button
│   ├── StickyBottomCTA.tsx     ← mobile sticky Call + WA
│   ├── TrustBadges.tsx
│   ├── ServiceGrid.tsx
│   ├── CityPills.tsx
│   ├── FAQ.tsx                 ← accordion + schema
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts
│   ├── data.ts                 ← services[] + cities[] arrays
│   └── schema.ts               ← JSON-LD generators
└── public/
    └── favicon.ico
```

---

## START COMMAND

```bash
npx create-next-app@latest homerepairpro --typescript --tailwind --app --src-dir=no
cd homerepairpro
npm install @supabase/supabase-js
npm install next-sitemap
# Then build everything as described above
```

---

## FINAL CHECKLIST BEFORE DONE
- [ ] `npm run build` passes with 0 errors
- [ ] Mobile: phone number visible without scroll on 375px
- [ ] Sticky bottom CTA visible on mobile
- [ ] Form submits to Supabase AND opens WhatsApp
- [ ] GCLID captured from URL and included in form submit
- [ ] GTM script in `<head>`
- [ ] Clarity script in `<head>`  
- [ ] All 60 service+city pages generated
- [ ] sitemap.xml includes all pages
- [ ] `vercel deploy` or `vercel --prod` runs successfully

