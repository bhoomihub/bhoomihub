# 📊 BHOOMIHUB SEO & Analytics Telemetry Specification

## 1. Schema.org Microdata
Bhoomihub includes structured `RealEstateAgent` JSON-LD metadata in `app/layout.tsx`:
- Organization: BHOOMIHUB
- Service Corridors: Coimbatore, Saravanampatti, Kovaipudur, Pollachi, Tirupur
- Head Office: 123 Avinashi Road, Coimbatore
- Telephone: +91 98765 43210

## 2. GA4 Event Tracking Taxonomy
All conversion actions trigger standardized Google Analytics 4 events through `lib/analytics.ts`:

| Event Name | Trigger Condition | Parameters |
|---|---|---|
| `hero_explore_click` | User clicks "Explore Master Layouts" in Hero | `{}` |
| `hero_site_visit_click` | User clicks "Book Free VIP Site Visit" in Hero | `{}` |
| `property_inspect_click` | User opens property detail modal | `{ property: string }` |
| `property_site_visit_click` | User triggers site visit from property card | `{ property: string }` |
| `property_brochure_click` | User opens brochure download modal | `{ property: string }` |
| `calculate_emi_interacted` | User adjusts EMI / Land appreciation sliders | `{ plotValueLakhs, downPayment, tenure }` |
| `connectivity_tab_switch` | User switches corridor tabs in Connectivity section | `{ corridor: string }` |
| `book_site_visit_submit` | User successfully submits site visit form | `{ property, transport, date, timeSlot }` |
| `download_brochure_submit` | User successfully requests master layout PDF | `{ property, purpose }` |
| `contact_inquiry_submit` | User submits general consultation form | `{ corridor, budget }` |
| `floating_whatsapp_click` | User clicks floating WhatsApp concierge badge | `{ property, timestamp }` |

## 3. Local SEO Keyword Strategy
- **Primary Keywords:** DTCP approved plots in Coimbatore, residential land for sale Coimbatore, RERA plots Saravanampatti, Kovaipudur villa plots.
- **Secondary Keywords:** Pollachi Road highway plots, Siruvani farmland plots, direct land developer Coimbatore, zero brokerage property Coimbatore.
- **Robots & Sitemap:** Fully configured static `robots.txt` and `sitemap.xml` with priority index weights.
