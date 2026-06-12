/**
 * App.jsx — HomeRepairPro App Overview
 *
 * This file represents the overall app structure.
 * Routing is file-based via src/app/ (Next.js App Router).
 *
 * Layout:   src/layouts/MainLayout.jsx   → Header + Footer + Scripts
 * Styles:   src/styles/globals.css
 *
 * ─── PAGES (src/app/) ─────────────────────────────────────────
 *  /                        → app/page.jsx              (Home)
 *  /about                   → app/about/page.jsx        (About)
 *  /services                → app/services/page.jsx     (Services)
 *  /contact                 → app/contact/page.jsx      (Contact)
 *  /blog                    → app/blog/page.jsx         (Blog List)
 *  /blog/[slug]             → app/blog/[slug]/page.jsx  (Blog Post)
 *  /[slug]                  → app/[slug]/page.jsx       (Dynamic Service Page)
 *  /landing/[params]        → app/landing/[params]/page.jsx
 *  /government-contracts    → app/government-contracts/page.jsx
 *  /privacy                 → app/privacy/page.jsx
 *  /terms                   → app/terms/page.jsx
 *  /admin                   → app/admin/page.jsx        (Admin Dashboard)
 *
 * ─── COMPONENTS (src/components/) ────────────────────────────
 *  Header/        → site navigation & mobile menu
 *  Footer/        → links, contact, social
 *  Hero/          → HeroSlider, HeroParallax
 *  ServiceGrid/   → appliance service cards
 *  LeadForm/      → booking / callback form
 *  QuickBookForm/ → quick booking widget
 *  CityPills/     → city selector
 *  FAQ/           → accordion FAQ section
 *  BrandLogos/    → brand trust strip
 *  AboutSection/  → company info section
 *  common/        → CallButton, TrustBadges, WhatsAppFloat,
 *                   WhatsAppIcon, StickyBottomCTA, GCLIDCapture
 *
 * ─── DATA & SERVICES (src/utils/ + src/services/) ───────────
 *  utils/data.js         → services, cities, FAQs, reviews
 *  utils/schema.js       → JSON-LD schema generators
 *  utils/blogContent.js  → blog posts content
 *  services/supabase.js  → Supabase client & lead insert
 */

import MainLayout from '@/layouts/MainLayout';

export default function App({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
