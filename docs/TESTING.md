# 🧪 BHOOMIHUB Quality Assurance & Testing Suite

## Testing Framework
Bhoomihub uses **Vitest** for unit and domain verification tests, coupled with **TypeScript** compiler validation.

## Test Suites

### 1. Land Investment & EMI Engine (`tests/emi.test.ts`)
- Validates Indian home/plot loan EMI formula across various tenures (5 to 20 years).
- Verifies compound annual appreciation algorithms (5-year and 10-year growth).
- Validates comparison metrics against standard Bank Fixed Deposits (7% p.a.).
- Verifies boundary clamping for down payment percentages and loan tenures.
- Validates Indian currency formatting into Lakhs and Crores.

### 2. Property Catalog Integrity (`tests/catalog.test.ts`)
- Ensures all 6 curated Coimbatore land developments are loaded with complete metadata.
- Validates DTCP and TN RERA approval credentials.
- Confirms valid square-foot pricing, road width configurations, and connectivity data.
- Confirms regional corridor coverage.

### 3. Lead Validation & Schemas (`tests/lead-validation.test.ts`)
- Verifies Zod validation for VIP site visit bookings.
- Validates Indian mobile number regex (10 digits starting with 6, 7, 8, or 9).
- Validates brochure download gating schema.
- Validates general contact inquiry submission data.

## Running Tests
```bash
# Run Vitest test suite
npm run test

# Run TypeScript compiler checks
npm run typecheck

# Run Next.js production build and static export
npm run build
```
