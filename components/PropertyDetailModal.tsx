"use client";

import React from "react";
import { Property } from "../lib/properties";
import { BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../lib/analytics";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenSiteVisit: (property: Property) => void;
  onOpenBrochure: (property: Property) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onOpenSiteVisit,
  onOpenBrochure
}: PropertyDetailModalProps) {
  if (!property) return null;

  const waUrl = generateWhatsAppUrl(
    BHOOMIHUB_WA_PHONE,
    `Hi Bhoomihub, I am reviewing ${property.name} in ${property.location}. Please send the latest layout availability map and exact price calculation for a 3-cent plot.`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: "860px", maxHeight: "92vh" }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Header Section */}
        <div>
          <span className="eyebrow">{property.corridor}</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--color-charcoal)", margin: "0.2rem 0 0.4rem" }}>
            {property.name}
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "1rem" }}>
            📍 {property.location} · <strong style={{ color: "var(--color-emerald-forest)" }}>{property.type}</strong>
          </p>
        </div>

        {/* Hero image and price banner */}
        <div style={{ position: "relative", height: "340px", borderRadius: "var(--radius-sm)", overflow: "hidden", margin: "1.5rem 0" }}>
          <img
            src={property.heroImage}
            alt={property.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.5rem",
              background: "linear-gradient(0deg, rgba(6,26,16,0.92) 0%, transparent 100%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              color: "white"
            }}
          >
            <div>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 700 }}>
                PRICE SPECS
              </span>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700 }}>
                {property.startingPriceDisplay}
              </div>
              <small style={{ color: "rgba(255,255,255,0.75)" }}>₹{property.pricePerSqFt} / Sq.Ft. · Zero Brokerage</small>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <span style={{ background: "#10B981", color: "white", padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.72rem", fontWeight: 800 }}>
                {property.dtcpNumber.split("/")[0]} APPROVED
              </span>
            </div>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            background: "var(--color-cream-card)",
            padding: "1.4rem",
            borderRadius: "var(--radius-sm)",
            marginBottom: "1.8rem"
          }}
        >
          <div>
            <small style={{ fontSize: "0.68rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              DTCP / LPA Approval
            </small>
            <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-ink)" }}>{property.dtcpNumber}</p>
          </div>
          <div>
            <small style={{ fontSize: "0.68rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              TN RERA Registration
            </small>
            <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-ink)" }}>{property.reraNumber}</p>
          </div>
          <div>
            <small style={{ fontSize: "0.68rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Available Plot Sizes
            </small>
            <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-ink)" }}>{property.sizeRangeCents}</p>
          </div>
          <div>
            <small style={{ fontSize: "0.68rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Road Network Width
            </small>
            <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-ink)" }}>{property.roadWidths.join(", ")}</p>
          </div>
          <div>
            <small style={{ fontSize: "0.68rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Water Table Depth
            </small>
            <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-ink)" }}>{property.waterTableDepth}</p>
          </div>
          <div>
            <small style={{ fontSize: "0.68rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Soil Characteristic
            </small>
            <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--color-ink)" }}>{property.soilType}</p>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "0.6rem" }}>
            Architectural & Lifestyle Overview
          </h4>
          <p style={{ color: "var(--color-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            {property.description}
          </p>

          <div style={{ marginTop: "1.2rem" }}>
            <h5 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-gold)", marginBottom: "0.6rem" }}>
              Key Infrastructure Highlights:
            </h5>
            <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem", color: "var(--color-ink)", fontSize: "0.92rem" }}>
              {property.keyHighlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connectivity Matrix */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", marginBottom: "0.8rem" }}>
            Strategic Proximity & Commute Times
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.8rem" }}>
            {property.connectivity.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.85rem 1rem",
                  background: "white",
                  border: "1px solid var(--color-cream-border)",
                  borderRadius: "var(--radius-sm)"
                }}
              >
                <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--color-charcoal)" }}>
                  {item.destination}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
                  <span>{item.distance}</span>
                  <span style={{ color: "var(--color-emerald-forest)", fontWeight: 700 }}>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--color-cream-border)"
          }}
        >
          <button
            onClick={() => {
              onClose();
              onOpenSiteVisit(property);
            }}
            className="btn btn-emerald"
            style={{ flex: 1, minWidth: "220px" }}
          >
            🚗 Book VIP Site Visit (Free AC Cab)
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBrochure(property);
            }}
            className="btn btn-gold"
            style={{ flex: 1, minWidth: "200px" }}
          >
            📄 Download Master Plan Dossier
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("modal_whatsapp_click", { property: property.name })}
            className="btn btn-outline-emerald"
            style={{ padding: "0.95rem 1.4rem" }}
          >
            WhatsApp Layout Map ↗
          </a>
        </div>
      </div>
    </div>
  );
}
