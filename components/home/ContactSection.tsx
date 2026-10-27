"use client";

import React, { useState } from "react";
import { contactInquirySchema, ContactInquiryFormData } from "../../lib/validations";
import { CORRIDORS } from "../../lib/properties";
import { BHOOMIHUB_PHONE, BHOOMIHUB_EMAIL, BHOOMIHUB_ADDRESS, BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../../lib/analytics";

export default function ContactSection() {
  const [formData, setFormData] = useState<Partial<ContactInquiryFormData>>({
    name: "",
    phone: "",
    email: "",
    preferredCorridor: "All Corridors",
    budgetRange: "₹25L – ₹40L",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactInquirySchema.safeParse(formData);
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
    trackEvent("contact_inquiry_submit", {
      corridor: valid.preferredCorridor,
      budget: valid.budgetRange
    });

    // Format WhatsApp inquiry text
    const waText = [
      `🏛️ *BHOOMIHUB PROPERTY ENQUIRY*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${valid.name}`,
      `📞 *Phone:* ${valid.phone}`,
      valid.email ? `✉️ *Email:* ${valid.email}` : "",
      `📍 *Preferred Corridor:* ${valid.preferredCorridor}`,
      `💰 *Budget Range:* ${valid.budgetRange}`,
      valid.message ? `📝 *Message:* ${valid.message}` : "",
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `Please connect me with a Senior Land Advisor.`
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = generateWhatsAppUrl(BHOOMIHUB_WA_PHONE, waText);

    // Save lead
    try {
      const existing = JSON.parse(localStorage.getItem("bhoomihub_leads") || "[]");
      existing.push({ type: "general_inquiry", ...valid, timestamp: new Date().toISOString() });
      localStorage.setItem("bhoomihub_leads", JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }

    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section className="section" id="contact" style={{ background: "var(--color-cream-card)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "4rem",
            alignItems: "start"
          }}
          className="contact-layout"
        >
          {/* Left: Contact Info */}
          <div>
            <span className="eyebrow">CONFIDENTIAL CONSULTATION</span>
            <h2 className="section-title">
              Let’s Find <em>Your Place.</em>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
              Whether you are an end-user building a custom home or an investor acquiring multi-cent land banks, our relationship directors provide impartial advisory.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem" }}>📍</span>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)", display: "block" }}>
                    Executive Experience Center
                  </strong>
                  <span style={{ color: "var(--color-muted)", fontSize: "0.88rem" }}>
                    {BHOOMIHUB_ADDRESS}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem" }}>📞</span>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)", display: "block" }}>
                    Direct Telephone Helpline
                  </strong>
                  <a href={`tel:${BHOOMIHUB_PHONE}`} style={{ color: "var(--color-emerald-forest)", fontWeight: 700, fontSize: "0.92rem" }}>
                    {BHOOMIHUB_PHONE}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem" }}>✉️</span>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)", display: "block" }}>
                    Official Correspondence
                  </strong>
                  <a href={`mailto:${BHOOMIHUB_EMAIL}`} style={{ color: "var(--color-emerald-forest)", fontSize: "0.92rem" }}>
                    {BHOOMIHUB_EMAIL}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.4rem" }}>🕒</span>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)", display: "block" }}>
                    Consultation Hours
                  </strong>
                  <span style={{ color: "var(--color-muted)", fontSize: "0.88rem" }}>
                    Monday – Sunday: 9:00 AM – 7:00 PM IST (Site visits conducted all 7 days)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            style={{
              background: "white",
              borderRadius: "var(--radius-md)",
              padding: "2.8rem",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--color-cream-border)"
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--color-charcoal)", marginBottom: "0.5rem" }}>
                  Schedule Direct Callback
                </h3>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senthil Kumar"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "var(--color-cream-bg)"
                    }}
                  />
                  {errors.name && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.name}</p>}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                      10-Digit Mobile *
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
                        background: "var(--color-cream-bg)"
                      }}
                    />
                    {errors.phone && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.phone}</p>}
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. senthil@gmail.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-cream-border)",
                        background: "var(--color-cream-bg)"
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                      Corridor of Interest
                    </label>
                    <select
                      value={formData.preferredCorridor}
                      onChange={e => setFormData({ ...formData, preferredCorridor: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-cream-border)",
                        background: "var(--color-cream-bg)"
                      }}
                    >
                      {CORRIDORS.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                      Budget Bracket
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-cream-border)",
                        background: "var(--color-cream-bg)"
                      }}
                    >
                      <option value="₹18L – ₹25L">₹18L – ₹25L</option>
                      <option value="₹25L – ₹40L">₹25L – ₹40L</option>
                      <option value="₹40L – ₹65L">₹40L – ₹65L</option>
                      <option value="₹65L+ (Bespoke Land Bank)">₹65L+ (Bespoke Land Bank)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    Specific Details or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your timeline, whether you need immediate construction or investment hold..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-cream-border)",
                      background: "var(--color-cream-bg)",
                      resize: "vertical"
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-emerald" style={{ width: "100%", padding: "1.05rem" }}>
                  Send Enquiry &amp; Open WhatsApp Hotline ↗
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <span style={{ fontSize: "3rem" }}>🤝</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-charcoal)", margin: "0.8rem 0" }}>
                  Thank You for Reaching Out
                </h3>
                <p style={{ color: "var(--color-muted)", marginBottom: "1.8rem" }}>
                  Your inquiry has been registered. Our Land Advisory team has received your preferences and will get in touch shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-gold">
                  Send Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
