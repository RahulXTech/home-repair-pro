# 🔧 HomeRepairPro — Home Appliance Repair Service Web App

> **Live:** [homerepairpro.in](https://homerepairpro.in) &nbsp;|&nbsp; **Phone:** +91 88895 39174

A full-stack, SEO-optimized web application for a home appliance repair business serving **Indore, Bhopal & 8 cities**. Built with Next.js 15 App Router, Supabase, and Tailwind CSS v4. Includes a WhatsApp lead capture system, admin dashboard, dynamic city×service landing pages, and Google Ads conversion tracking.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Animations | Framer Motion |
| Database | Supabase (PostgreSQL) |
| Hosting | Vercel |
| Analytics | Google Analytics 4, Google Tag Manager, Microsoft Clarity |
| Icons | React Icons |

---

## ✨ Features

- **Lead Capture System** — Form submits lead to Supabase and opens WhatsApp chat simultaneously
- **Admin Dashboard** — Password-protected `/admin` page with lead table, filters, and SEO quick-links
- **REST API** — `GET /api/admin/leads` endpoint with header-based authentication
- **Dynamic Landing Pages** — `/landing/[params]` generates city × service pages for SEO (100+ URL combos)
- **Catch-all Routes** — `/[slug]` handles city/service URL variations automatically
- **Google Ads Tracking** — GCLID capture stored in localStorage and sent with every lead
- **UTM Attribution** — Source, campaign, keyword, and landing page tracked per lead
- **JSON-LD Schema** — LocalBusiness + FAQ structured data for Google rich results
- **Auto Sitemap & Robots** — `sitemap.js` and `robots.js` generated at build time
- **OpenGraph & SEO Meta** — Full OG tags, canonical URLs, Google Search Console verified
- **Mobile-First Design** — Fully responsive, sticky header, floating WhatsApp button, bottom CTA bar
- **Blog** — Dynamic blog with slug-based routing
- **Multi-Service Pricing** — Plans with features per appliance (AC, Washing Machine, Fridge, etc.)

---

## 📁 Project Structure

```
homerepairpro-web/
├── src/
│   ├── app/                            # Next.js App Router pages
│   │   ├── page.jsx                    # Homepage
│   │   ├── layout.jsx                  # Root layout + metadata
│   │   ├── [slug]/page.jsx             # Dynamic city/service pages
│   │   ├── about/page.jsx
│   │   ├── services/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── blog/
│   │   │   ├── page.jsx
│   │   │   └── [slug]/page.jsx
│   │   ├── landing/[params]/page.jsx   # City × Service landing pages
│   │   ├── admin/
│   │   │   ├── page.jsx                # Admin dashboard
│   │   │   └── layout.jsx
│   │   ├── api/admin/leads/route.js    # REST API for leads
│   │   ├── government-contracts/page.jsx
│   │   ├── privacy/page.jsx
│   │   ├── terms/page.jsx
│   │   ├── sitemap.js                  # Auto-generated sitemap
│   │   └── robots.js                   # Auto-generated robots.txt
│   │
│   ├── components/                     # 20+ reusable UI components
│   │   ├── Header/
│   │   │   ├── Header.jsx              # Sticky navigation bar
│   │   │   └── TopHeader.jsx           # Announcement bar
│   │   ├── Hero/
│   │   │   ├── HeroSlider.jsx
│   │   │   └── HeroParallax.jsx
│   │   ├── AboutSection/
│   │   ├── ServiceGrid/
│   │   ├── LeadForm/                   # WhatsApp + Supabase lead form
│   │   ├── QuickBookForm/
│   │   ├── BrandLogos/
│   │   ├── CityPills/
│   │   ├── FAQ/
│   │   ├── Footer/
│   │   └── common/
│   │       ├── TrustBadges.jsx
│   │       ├── WhatsAppFloat.jsx       # Floating WhatsApp button
│   │       ├── StickyBottomCTA.jsx     # Mobile bottom CTA bar
│   │       ├── CallButton.jsx
│   │       └── GCLIDCapture.jsx        # Google Ads GCLID tracker
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx              # Root HTML shell + GTM + analytics
│   ├── services/
│   │   └── supabase.js                 # Supabase client + insertLead()
│   ├── utils/
│   │   ├── data.js                     # Services, cities, reviews data
│   │   ├── schema.js                   # JSON-LD structured data builders
│   │   └── blogContent.js              # Blog posts content
│   └── styles/
│       └── globals.css
│
├── public/
│   ├── favicon.ico
│   └── images/
│
├── next.config.js
├── jsconfig.json
└── .env.local                          # Environment variables (not committed)
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm
- A [Supabase](https://supabase.com) project with a `leads` table

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RahulXTech/home-repair-pro.git
cd home-repair-pro

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values (see Environment Variables section below)

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root with the following keys:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
SUPABASE_SECRET_KEY=your_supabase_service_role_key

# Google Analytics & Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

# Contact
NEXT_PUBLIC_PHONE=9999999999
NEXT_PUBLIC_WHATSAPP=919999999999

# Admin Dashboard
ADMIN_PASSWORD=your_secure_password
```

> ⚠️ Never commit `.env.local` to version control. It is already in `.gitignore`.

---

## 📄 Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — Hero, About, Services, Reviews, FAQ, Lead Form |
| `/services` | All appliance repair services with pricing plans |
| `/about` | Company info, team, certifications |
| `/contact` | Contact form |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Individual blog post |
| `/landing/[params]` | Dynamic city × service SEO landing pages |
| `/[slug]` | Catch-all for city/service URL combinations |
| `/government-contracts` | B2G service page |
| `/admin` | Password-protected admin & analytics dashboard |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |

---

## 🗄️ Supabase — Leads Table Schema

```sql
create table leads (
  id            uuid        primary key default gen_random_uuid(),
  created_at    timestamptz default now(),
  name          text,
  phone         text,
  city          text,
  service       text,
  message       text,
  gclid         text,
  utm_source    text,
  utm_campaign  text,
  utm_keyword   text,
  landing_page  text,
  device        text
);
```

---

## 🚢 Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. **Framework Preset:** `Next.js` (auto-detected)
4. Add all environment variables in the **Environment Variables** section
5. Click **Deploy**

| Build Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

---

## 📊 Admin Dashboard

Access at `/admin` using the `ADMIN_PASSWORD` environment variable.

**Includes:**
- Lead analytics — total leads, today's count, device split (mobile/desktop)
- Lead table with search, city and service filters
- Quick links — Google Search Console, GA4, Google Ads, Supabase, Vercel
- SEO tools — PageSpeed Insights, Ahrefs backlink checker, SERP checker

---

## 🧩 Key Components

| Component | Purpose |
|---|---|
| `LeadForm` | Saves lead to Supabase + opens WhatsApp with pre-filled message |
| `GCLIDCapture` | Reads `gclid` & UTM params from URL, stores in localStorage |
| `HeroSlider` | Auto-playing hero with CTA buttons |
| `ServiceGrid` | Service cards with pricing and brand support lists |
| `StickyBottomCTA` | Fixed mobile bottom bar with call + WhatsApp buttons |
| `WhatsAppFloat` | Floating WhatsApp chat button |
| `QuickBookForm` | Compact booking widget for landing pages |

---

## 🛠️ Services Covered

| Service | Starting Price |
|---|---|
| ❄️ AC Repair & Service | ₹449 |
| 🫧 Washing Machine Repair | ₹350 |
| 🧊 Refrigerator Repair | ₹350 |
| 🔥 Geyser / Water Heater Repair | ₹350 |
| 📦 Microwave Oven Repair | ₹350 |
| 💧 RO Water Purifier Repair | ₹350 |

---

## 📍 Cities Covered

Indore · Bhopal · Ujjain · Jabalpur · Gwalior · Ratlam · Dewas · Sagar · Vidisha · Chhindwara

---

## 📝 License

This project is private and proprietary. All rights reserved © 2026 HomeRepairPro.
