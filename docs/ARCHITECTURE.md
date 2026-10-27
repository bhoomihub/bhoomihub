# 🏛️ BHOOMIHUB Technical Architecture Blueprint

## System Overview
Bhoomihub is engineered as a high-performance, mobile-first real estate digital marketing platform built with **Next.js 15 (App Router)** and **TypeScript**, configured for static export (`output: "export"`).

### Design Goals
1. **Ultra-Low Latency:** Pre-rendered HTML and client-side hydration yielding sub-second Time to Interactive (TTI) across mobile networks in India.
2. **Zero Brokerage Friction:** Integrated WhatsApp direct routing (`wa.me`) bypassing aggregators and intermediaries.
3. **Dual Deployment Compatibility:** Out of the box support for Netlify via `netlify.toml` and GitHub Pages via GitHub Actions.

## Directory Structure
```
bhoomihub/
├── app/
│   ├── globals.css         # Complete design tokens, emerald/gold theme & typography
│   ├── layout.tsx          # Root layout with RealEstateAgent schema & fonts
│   ├── page.tsx            # Main application landing page
│   ├── robots.ts           # Crawler directives
│   └── sitemap.ts          # XML Sitemap generator
├── components/             # Reusable UI components
│   ├── Header.tsx          # Sticky glassmorphism navigation
│   ├── Footer.tsx          # Corporate footer & regulatory disclosures
│   ├── LandscapeCanvas.tsx # HTML5 topological vector canvas animation
│   ├── SiteVisitModal.tsx  # VIP site visit booking engine with AC Cab pickup
│   ├── BrochureModal.tsx   # Master layout plan PDF download gate
│   ├── PropertyDetailModal.tsx # Full-spec inspection modal
│   ├── FloatingWhatsApp.tsx# Live pulsing concierge widget
│   └── home/               # Section components
├── lib/
│   ├── properties.ts       # Single Source of Truth property catalog
│   ├── emi.ts              # Financial EMI & compound land growth engine
│   ├── validations.ts      # Zod validation schemas for forms
│   └── analytics.ts        # Telemetry & WhatsApp dispatch utilities
└── tests/
    ├── emi.test.ts         # Financial engine test cases
    ├── catalog.test.ts     # Data integrity test cases
    └── lead-validation.test.ts # Form validation test cases
```

## Security & Reliability
- **Input Validation:** All client submissions sanitized and verified via Zod schemas before WhatsApp dispatch or local storage.
- **Security Headers:** Strict Content-Type-Options, X-Frame-Options, and Referrer-Policy configured in `netlify.toml`.
- **Zero Runtime Server Vulnerabilities:** By deploying as a pure static export (`out/`), the attack surface of an application server is eliminated.
