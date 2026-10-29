"use client";

import React, { useState } from "react";
import { Property } from "../lib/properties";
import { brochureLeadSchema, BrochureLeadFormData } from "../lib/validations";
import { BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../lib/analytics";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
}

export default function BrochureModal({
  isOpen,
  onClose,
  property
}: BrochureModalProps) {
  const [formData, setFormData] = useState<Partial<BrochureLeadFormData>>({
    fullName: "",
    phone: "",
    email: "",
    propertyId: property.id,
    purpose: "Immediate Home Construction"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = brochureLeadSchema.safeParse({
      ...formData,
      propertyId: property.id
    });

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
    trackEvent("download_brochure_submit", {
      property: property.name,
      purpose: valid.purpose
    });

    // Save lead
    try {
      const existing = JSON.parse(localStorage.getItem("bhoomihub_leads") || "[]");
      existing.push({ type: "brochure_download", ...valid, timestamp: new Date().toISOString() });
      localStorage.setItem("bhoomihub_leads", JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }

    setDownloadReady(true);

    // Auto trigger dynamic client-side PDF/HTML download for the master brochure
    const brochureContent = `
=====================================================
BHOOMIHUB — MASTER PROJECT BRIEF & LEGAL SUMMARY
Project: ${property.name}
Location: ${property.location} (${property.corridor})
Type: ${property.type}
Starting Price: ${property.startingPriceDisplay} (₹${property.pricePerSqFt} / Sq.Ft.)
Plot Sizes: ${property.sizeRangeSqFt} (${property.sizeRangeCents})
DTCP Approval: ${property.dtcpNumber}
RERA Registration: ${property.reraNumber}
Road Widths: ${property.roadWidths.join(", ")}
Water Table: ${property.waterTableDepth}
Soil Quality: ${property.soilType}
=====================================================
KEY HIGHLIGHTS:
${property.keyHighlights.map((h, i) => `${i + 1}. ${h}`).join("\n")}

CONNECTIVITY & COMMUTE:
${property.connectivity.map(c => `• ${c.destination} — ${c.distance} (${c.time})`).join("\n")}

INVESTMENT METRICS:
Projected Capital Appreciation: ${property.investmentMetrics.projectedAnnualGrowth}
Demand Drivers:
${property.investmentMetrics.nearbyDemandDrivers.map(d => `• ${d}`).join("\n")}
=====================================================
Verified & Certified by BHOOMIHUB Legal Scrutiny Cell
Head Office: 123 Avinashi Road, Coimbatore, Tamil Nadu
Helpline: +91 98765 43210 | www.bhoomihub.in
=====================================================
    `.trim();

    const blob = new Blob([brochureContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `BHOOMIHUB_${property.slug.toUpperCase()}_MASTER_PLAN.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleWhatsAppInstant = () => {
    const waText = `Hi Bhoomihub, I requested the master brochure for *${property.name}*. Please send the high-res layout map PDF and video walkthrough to my WhatsApp.`;
    window.open(generateWhatsAppUrl(BHOOMIHUB_WA_PHONE, waText), "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!downloadReady ? (
          <div>
            <span className="eyebrow">INSTANT PROJECT DOSSIER</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-charcoal)" }}>
              Download Master Plan & Pricing Sheet
            </h3>
            <p style={{ color: "var(--color-muted)", fontSize: "0.92rem", marginTop: "0.4rem", marginBottom: "1.5rem" }}>
              Access the approved DTCP layout sketch, plot number availability matrix, and full road network for <strong>{property.name}</strong>.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ananya Natarajan"
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
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 6374171413"
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

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ananya@domain.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-cream-border)",
                    background: "white"
                  }}
                />
                {errors.email && <p style={{ color: "#E53E3E", fontSize: "0.75rem", marginTop: "0.2rem" }}>{errors.email}</p>}
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  Primary Objective *
                </label>
                <select
                  value={formData.purpose}
                  onChange={e => setFormData({ ...formData, purpose: e.target.value as BrochureLeadFormData["purpose"] })}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-cream-border)",
                    background: "white"
                  }}
                >
                  <option value="Immediate Home Construction">Immediate Home Construction (within 6-12 months)</option>
                  <option value="Long-Term Capital Investment">Long-Term Capital Investment (3-5 years hold)</option>
                  <option value="NRI Generational Wealth">NRI Generational Wealth Creation</option>
                  <option value="Commercial / Farmland">Commercial / Weekend Eco-Retreat</option>
                </select>
              </div>

              <div style={{ marginTop: "0.8rem" }}>
                <button type="submit" className="btn btn-gold" style={{ width: "100%", padding: "1.1rem" }}>
                  Download Master Plan Dossier Now ↓
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "1.5rem 0.5rem" }}>
            <span style={{ fontSize: "3.5rem" }}>📄</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--color-charcoal)", margin: "0.8rem 0" }}>
              Brochure Download Initiated!
            </h3>
            <p style={{ color: "var(--color-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
              The comprehensive project dossier for <strong>{property.name}</strong> has been downloaded to your device. Would you also like the video walkthrough dispatched to WhatsApp?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <button onClick={handleWhatsAppInstant} className="btn btn-emerald" style={{ width: "100%" }}>
                Receive Full Video & HD Layout on WhatsApp ↗
              </button>
              <button
                onClick={() => {
                  setDownloadReady(false);
                  onClose();
                }}
                className="btn btn-outline-emerald"
                style={{ width: "100%" }}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
