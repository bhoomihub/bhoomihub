"use client";

import React, { useState } from "react";
import { PROPERTIES, Property } from "../lib/properties";
import { siteVisitSchema, SiteVisitFormData } from "../lib/validations";
import { BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../lib/analytics";

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProperty?: Property | null;
}

export default function SiteVisitModal({
  isOpen,
  onClose,
  initialProperty
}: SiteVisitModalProps) {
  const [formData, setFormData] = useState<Partial<SiteVisitFormData>>({
    fullName: "",
    phone: "",
    email: "",
    propertyId: initialProperty ? initialProperty.id : PROPERTIES[0].id,
    visitDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    timeSlot: "10:00 AM (Morning)",
    transportMode: "Free AC Cab Pickup (Bhoomihub Concierge)",
    pickupLocation: "",
    notes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedProperty =
    PROPERTIES.find(p => p.id === formData.propertyId) || PROPERTIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = siteVisitSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const valid = result.data;
    trackEvent("book_site_visit_submit", {
      property: selectedProperty.name,
      transport: valid.transportMode,
      date: valid.visitDate,
      timeSlot: valid.timeSlot
    });

    // Format Unicode WhatsApp dispatch message
    const waText = [
      `🏛️ *BHOOMIHUB SITE VISIT RESERVATION*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Project:* ${selectedProperty.name} (${selectedProperty.location})`,
      `📅 *Date:* ${valid.visitDate}`,
      `⏰ *Time Slot:* ${valid.timeSlot}`,
      `🚗 *Mode:* ${valid.transportMode}`,
      valid.pickupLocation ? `📌 *Pickup Point:* ${valid.pickupLocation}` : "",
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Visitor Name:* ${valid.fullName}`,
      `📞 *Mobile:* ${valid.phone}`,
      valid.email ? `✉️ *Email:* ${valid.email}` : "",
      valid.notes ? `📝 *Specific Interest:* ${valid.notes}` : "",
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Please confirm the vehicle allocation and assign my site manager.`
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = generateWhatsAppUrl(BHOOMIHUB_WA_PHONE, waText);

    // Save lead to local storage
    try {
      const existing = JSON.parse(localStorage.getItem("bhoomihub_leads") || "[]");
      existing.push({ type: "site_visit", ...valid, timestamp: new Date().toISOString() });
      localStorage.setItem("bhoomihub_leads", JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }

    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="eyebrow">VIP SITE EXPERIENCE</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", color: "var(--color-charcoal)" }}>
                Book Your Complimentary Site Visit
              </h3>
              <p style={{ color: "var(--color-muted)", fontSize: "0.92rem", marginTop: "0.4rem" }}>
                Walk the land, inspect the road widths, test ground water sweetness, and verify DTCP approval documents in person.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {/* Property Selector */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem", color: "var(--color-ink)" }}>
                  Select Property *
                </label>
                <select
                  value={formData.propertyId}
                  onChange={e => setFormData({ ...formData, propertyId: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-cream-border)",
                    background: "var(--color-cream-bg)",
                    fontSize: "0.95rem"
                  }}
                >
                  {PROPERTIES.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.location} ({p.startingPriceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              {/* Transport Mode */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem", color: "var(--color-ink)" }}>
                  Travel Preference *
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, transportMode: "Free AC Cab Pickup (Bhoomihub Concierge)" })}
                    style={{
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: formData.transportMode?.includes("Cab") ? "2px solid var(--color-emerald-forest)" : "1px solid var(--color-cream-border)",
                      background: formData.transportMode?.includes("Cab") ? "var(--color-cream-card)" : "white",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    🚗 Free AC Cab Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, transportMode: "Self-Drive (Meet at Site)" })}
                    style={{
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: formData.transportMode?.includes("Self") ? "2px solid var(--color-emerald-forest)" : "1px solid var(--color-cream-border)",
                      background: formData.transportMode?.includes("Self") ? "var(--color-cream-card)" : "white",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    🚙 Self-Drive
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={e => setFormData({ ...formData, visitDate: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "white"
                    }}
                  />
                  {errors.visitDate && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.visitDate}</p>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={e => setFormData({ ...formData, timeSlot: e.target.value as SiteVisitFormData["timeSlot"] })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "white"
                    }}
                  >
                    <option value="10:00 AM (Morning)">10:00 AM (Morning)</option>
                    <option value="02:00 PM (Afternoon)">02:00 PM (Afternoon)</option>
                    <option value="04:30 PM (Sunset / Golden Hour)">04:30 PM (Sunset / Golden Hour)</option>
                  </select>
                </div>
              </div>

              {/* Customer Name & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthik Subramanian"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "white"
                    }}
                  />
                  {errors.fullName && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.fullName}</p>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    10-Digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9843212345"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "white"
                    }}
                  />
                  {errors.phone && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.phone}</p>}
                </div>
              </div>

              {/* Pickup Address if Cab Selected */}
              {formData.transportMode?.includes("Cab") && (
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    Pickup Landmark in Coimbatore (Home/Office/Hotel)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Near Lakshmi Mills, Avinashi Road"
                    value={formData.pickupLocation}
                    onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "white"
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                  Plot Size or Specific Requirement (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Looking for 3 to 4 cents, North-facing plot"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-cream-border)",
                    background: "white"
                  }}
                />
              </div>

              <div style={{ marginTop: "1rem" }}>
                <button type="submit" className="btn btn-emerald" style={{ width: "100%", padding: "1.1rem" }}>
                  Confirm Site Visit & Open WhatsApp Dispatch ↗
                </button>
                <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--color-muted)", marginTop: "0.8rem" }}>
                  🔒 100% Free Service. No broker fees. Direct promoter site briefing with legal dossier.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
            <span style={{ fontSize: "3.5rem" }}>✅</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--color-charcoal)", margin: "1rem 0 0.5rem" }}>
              Site Visit Requested!
            </h3>
            <p style={{ color: "var(--color-muted)", fontSize: "0.98rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
              Your reservation for <strong>{selectedProperty.name}</strong> has been logged. Our Senior Land Relationship Manager will contact you shortly to coordinate vehicle pickup.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn btn-emerald"
              >
                Return to Exploration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
