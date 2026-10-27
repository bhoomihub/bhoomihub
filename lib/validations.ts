import { z } from "zod";

export const phoneRegex = /^[6-9]\d{9}$/;

export const siteVisitSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(80),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  propertyId: z.string().min(1, "Please select a property"),
  visitDate: z.string().min(1, "Please select your preferred visit date"),
  timeSlot: z.enum(["10:00 AM (Morning)", "02:00 PM (Afternoon)", "04:30 PM (Sunset / Golden Hour)"]),
  transportMode: z.enum(["Free AC Cab Pickup (Bhoomihub Concierge)", "Self-Drive (Meet at Site)"]),
  pickupLocation: z.string().optional().default(""),
  notes: z.string().max(400).optional().default("")
});

export type SiteVisitFormData = z.infer<typeof siteVisitSchema>;

export const brochureLeadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(80),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email address"),
  propertyId: z.string().min(1, "Property ID is required"),
  purpose: z.enum(["Immediate Home Construction", "Long-Term Capital Investment", "NRI Generational Wealth", "Commercial / Farmland"])
});

export type BrochureLeadFormData = z.infer<typeof brochureLeadSchema>;

export const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  phone: z.string().regex(phoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  preferredCorridor: z.string().optional().default("All Corridors"),
  budgetRange: z.string().optional().default("₹20L – ₹40L"),
  message: z.string().max(600).optional().default("")
});

export type ContactInquiryFormData = z.infer<typeof contactInquirySchema>;
