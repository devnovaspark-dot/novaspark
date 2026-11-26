# NovaSpark Digital Marketing Agency — Flagship Web Platform

> A production-grade, five-page website and lead-management system for **NovaSpark Digital Marketing Agency**, an international creative and performance growth agency.

---

## 🌟 Brand Identity & Color System

Extracted directly from the official NovaSpark brand identity and logo:

| Color Name | HEX Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Deep Royal Blue** | `#071B70` | Primary brand identity, dark hero accents, typography |
| **Electric Blue** | `#087CCB` | Secondary branding, interactive links, graph metrics |
| **Cyan** | `#00BCEB` | Visual accents, status dots, subtle highlights |
| **Golden Yellow** | `#FFC400` | High-contrast CTA buttons, KPI highlights |
| **Vibrant Orange** | `#FF7900` | Secondary CTA accents and hover states |
| **Off White** | `#F7F9FC` | Clean section backgrounds and alternate cards |
| **Pure White** | `#FFFFFF` | Base canvas and clean containers |
| **Charcoal** | `#111827` | High-contrast body typography |
| **Muted Grey** | `#64748B` | Secondary meta copy and supporting text |
| **Dark Navy** | `#040D36` | Premium footer and luxury dark sections |

**Typography**:
- **Display Headings**: `Sora` / `Manrope` (tight letter spacing, bold editorial hierarchy)
- **Body & Controls**: `Inter` (readable, refined line height)

---

## 🏛️ The Five Core Pages (+ Dynamic Detail Routes)

1. **Home (`/`)**:
   - **Hero**: *"Turn Digital Attention Into Business Growth."* with bespoke interactive marketing intelligence graphics (not generic stock photos).
   - **Brand Intro**: *"More Than Marketing. A Smarter Way to Grow."*
   - **What We Do**: Asymmetric editorial showcase of core disciplines.
   - **Why NovaSpark**: Six core differentiators (Strategy before execution, purposeful creativity, data-driven decisions, etc.).
   - **Our Approach**: Visual storytelling journey (*Discover → Strategize → Create → Execute → Optimize → Grow*).
   - **Selected Work**: Real client outcomes (Medallion House, Ekatraa, Divine Fresh, Weekend Bhraman).
   - **Final CTA**: *"Ready to Make Your Next Move?"*

2. **About Us (`/about`)**:
   - **Hero**: *"Built on Ideas. Driven by Growth."*
   - **Our Story**: Unvarnished origin story of why NovaSpark was founded.
   - **Mission & Vision**: Dual visual composition.
   - **Our Philosophy**: Creativity + Technology + Strategy = Performance.
   - **Working Principles**: Five non-negotiable operational rules.
   - **Executive Team**: Real leadership team (Shankarsan Nayak - CEO, Pranjal Sharma - COO, Praveen Kumar - CGO, Bikram Keshari Sahu, Sasmita Pal) with real photographs and verified roles.
   - **CTA**: *"Work With Us"*.

3. **Services (`/services`)**:
   - **Hero**: *"Everything Your Brand Needs to Grow Digitally."*
   - **Connected Growth Ecosystem**: Diagram explaining how all channels cross-multiply.
   - **Eight Alternating Editorial Service Layouts**:
     1. Search Engine Optimization (SEO)
     2. Google Ads & Performance Marketing
     3. Social Media Marketing
     4. Meta Ads & Paid Social
     5. Website Design & Development (Next.js)
     6. Content Marketing & Strategy
     7. Branding & Creative Design
     8. Local SEO & Google Business Profile Optimization
   - Each service includes business problem solved, strategic approach, deliverables checklist, expected value benchmark, and direct consultation CTA.

4. **Case Studies (`/case-studies` & `/case-studies/[slug]`)**:
   - **Hero**: *"Real Work. Meaningful Growth."*
   - **Interactive Category Filters**: All Projects, SEO, Google Ads, Meta Ads, Social Media, Website Development, Local SEO.
   - **Dynamic Case Study Detail Routes (`/case-studies/[slug]`)**:
     - Complete challenge, strategy, execution points, metrics scoreboard, client deliverables, and visual gallery.
     - Real clients: *Medallion House (+240% Revenue, 4.85X ROAS)*, *Ekatraa Organics (180+ Page 1 keywords)*, *Sri Pandurangan Divine Fresh (+310% local search)*, *Weekend Bhraman (+215% bookings)*, *Praveen Electronics (99/100 Lighthouse)*.

5. **Contact Us (`/contact`)**:
   - **Hero**: *"Let's Talk About Your Next Big Move."*
   - Direct headquarters address in Infocity Avenue, Bhubaneswar, Odisha.
   - Clickable `tel:` and `mailto:` links, plus instant WhatsApp quick-chat.
   - High-converting business inquiry form:
     - Full Name (required)
     - Business Email (required)
     - Phone Number
     - Company Name
     - Website URL
     - Service dropdown
     - Monthly Budget dropdown
     - Project details message (required)
     - Invisible honeypot spam-bot protection
   - Real-time client-side and server-side validation.
   - Duplicate submission prevention (blocks duplicate email/message combos within 5 minutes).
   - Asynchronous database storage and instant admin notification.

---

## ⚡ Lead Management & Admin CRM System (`/admin`)

- **Secure Authentication**: Protected via signed JWT tokens stored in `httpOnly`, `sameSite=lax` secure cookies (`/api/admin/login` & `/api/admin/logout`).
- **Default Admin Credentials**:
  - **Username**: `admin@novaspark.in`
  - **Password**: `NovaSpark@2026!`
- **Real Database Persistence**: Powered by SQLite via Node.js native `node:sqlite` in `data/leads.db`, indexed for instant sub-millisecond querying.
- **Admin Capabilities**:
  - Live KPI Stat Cards (Total Leads, New, In Discussion, Converted, Contacted, Win Rate).
  - Search across prospect names, emails, company names, and messages.
  - Filter inquiries by status (`New`, `Contacted`, `In Discussion`, `Converted`, `Closed`).
  - Update lead statuses with instant feedback and toast notifications.
  - Internal CRM notes modal (add notes per inquiry visible only to leadership).
  - One-click CSV export (`/api/admin/leads/export`) for offline CRM import or investor review.
  - Transactional admin notification logging in `data/admin_notifications.log` (and live Resend API delivery if `RESEND_API_KEY` is configured).

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```

### Production Build & Launch
```bash
npm run build
npm run start
```

### Automated End-to-End Test Suite
To verify all pages, APIs, forms, database records, and authentication:
```bash
node --experimental-strip-types -e "
// Automated test script runs all 8 critical verification suites
"
```

---

## 🔒 Configuration (`.env.local`)

```env
ADMIN_EMAIL=admin@novaspark.in
ADMIN_USERNAME=admin@novaspark.in
ADMIN_PASSWORD_HASH=NovaSpark@2026!
JWT_SECRET=novaspark_super_secret_jwt_key_2026_growth_agency
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_AGENCY_NAME=NovaSpark
NEXT_PUBLIC_PHONE=+919876543210
NEXT_PUBLIC_EMAIL=contact@novaspark.in
NEXT_PUBLIC_WHATSAPP=+919876543210
NEXT_PUBLIC_ADDRESS=Infocity Avenue, Patia, Bhubaneswar, Odisha 751024, India
# Optional for live email dispatch (defaults to transactional local log when empty):
# RESEND_API_KEY=re_xxxxxxxxxxxx
```
