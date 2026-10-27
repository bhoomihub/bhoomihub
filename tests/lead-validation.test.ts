import { describe, it, expect } from "vitest";
import { siteVisitSchema, brochureLeadSchema, contactInquirySchema } from "../lib/validations";

describe("Lead Validation & Security Schemas", () => {
  it("validates a complete and legitimate site visit booking request", () => {
    const validData = {
      fullName: "Karthik Subramanian",
      phone: "9843212345",
      email: "karthik.subramanian@gmail.com",
      propertyId: "bh-01",
      visitDate: "2026-11-05",
      timeSlot: "10:00 AM (Morning)",
      transportMode: "Free AC Cab Pickup (Bhoomihub Concierge)",
      pickupLocation: "Lakshmi Mills Junction, Avinashi Road",
      notes: "Looking for East-facing 3-cent plot for immediate construction."
    };

    const parseResult = siteVisitSchema.safeParse(validData);
    expect(parseResult.success).toBe(true);
  });

  it("rejects invalid Indian phone numbers in site visit bookings", () => {
    const invalidData = {
      fullName: "Ramesh",
      phone: "12345", // invalid format
      propertyId: "bh-01",
      visitDate: "2026-11-05",
      timeSlot: "10:00 AM (Morning)",
      transportMode: "Self-Drive (Meet at Site)"
    };

    const parseResult = siteVisitSchema.safeParse(invalidData);
    expect(parseResult.success).toBe(false);
  });

  it("validates brochure lead gate input", () => {
    const brochureData = {
      fullName: "Dr. Ananya Natarajan",
      phone: "9443355667",
      email: "ananya.doc@kmch.ac.in",
      propertyId: "bh-02",
      purpose: "Long-Term Capital Investment"
    };

    const parseResult = brochureLeadSchema.safeParse(brochureData);
    expect(parseResult.success).toBe(true);
  });

  it("validates contact inquiry submission", () => {
    const contactData = {
      name: "Senthil Kumar",
      phone: "9876543210",
      email: "senthil@outlook.com",
      preferredCorridor: "North Coimbatore IT Belt",
      budgetRange: "₹25L – ₹50L",
      message: "Need 2 contiguous plots for joint family construction."
    };

    const parseResult = contactInquirySchema.safeParse(contactData);
    expect(parseResult.success).toBe(true);
  });
});
