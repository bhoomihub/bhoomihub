"use client";

import React from "react";
import { Property } from "../../lib/properties";
import { trackEvent } from "../../lib/analytics";

interface PropertyCatalogSectionProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onOpenSiteVisit: (property: Property) => void;
  onOpenBrochure: (property: Property) => void;
}

export default function PropertyCatalogSection({
  properties,
  onSelectProperty,
  onOpenSiteVisit,
  onOpenBrochure
}: PropertyCatalogSectionProps) {
  return (
    <section className="section" id="properties">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "3.5rem" }}>
          <div>
            <span className="eyebrow">CURATED RESIDENTIAL PLOTTING</span>
            <h2 className="section-title">
              Places Worth <em>Owning.</em>
            </h2>
            <p className="section-subtitle">
              Every property is hand-vetted through our 7-Point Legal Clearance Framework — strictly DTCP/RERA certified with 35-year clear parent titles.
            </p>
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--color-muted)", fontWeight: 600 }}>
            Showing <strong>{properties.length}</strong> Prime Developments
          </div>
        </div>

        {properties.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "2.2rem"
            }}
          >
            {properties.map(property => (
              <article key={property.id} className="property-card">
                {/* Image */}
                <div className="property-card-image-wrap">
                  <img
                    src={property.heroImage}
                    alt={property.name}
                    className="property-card-image"
                  />
                  <div className="property-badge-corridor">
                    {property.corridor.split(" ")[0]} CORRIDOR
                  </div>
                  <div className="property-badge-dtcp">
                    ✓ {property.dtcpNumber.includes("DTCP") ? "DTCP APPROVED" : "PANCHAYAT AGRO"}
                  </div>
                </div>

                {/* Body */}
                <div className="property-card-body">
                  <span className="property-card-type">{property.type}</span>
                  <h3 className="property-card-title">{property.name}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", marginBottom: "0.8rem" }}>
                    📍 {property.location}
                  </p>

                  <div className="property-card-meta">
                    <div className="meta-item">
                      <small>Plot Dimensions</small>
                      <strong>{property.sizeRangeCents}</strong>
                    </div>
                    <div className="meta-item">
                      <small>Road Network</small>
                      <strong>{property.roadWidths[0]}</strong>
                    </div>
                    <div className="meta-item">
                      <small>Water Reserve</small>
                      <strong>{property.waterTableDepth.split("(")[0]}</strong>
                    </div>
                    <div className="meta-item">
                      <small>TN RERA</small>
                      <strong>{property.reraNumber.split("/")[3] || "Approved"}</strong>
                    </div>
                  </div>

                  <div className="property-card-price-row">
                    <div>
                      <small style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--color-muted)", letterSpacing: "0.08em" }}>
                        Starting From
                      </small>
                      <div className="price-display">{property.startingPriceDisplay}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--color-emerald-forest)", fontWeight: 700 }}>
                        ₹{property.pricePerSqFt} / Sq.Ft.
                      </span>
                      <small style={{ display: "block", fontSize: "0.65rem", color: "var(--color-muted)" }}>
                        Zero Brokerage
                      </small>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "0.6rem", marginTop: "1.4rem" }}>
                    <button
                      onClick={() => {
                        trackEvent("property_inspect_click", { property: property.name });
                        onSelectProperty(property);
                      }}
                      className="btn btn-emerald"
                      style={{ padding: "0.8rem 0.5rem", fontSize: "0.72rem" }}
                    >
                      Inspect Layout ↗
                    </button>
                    <button
                      onClick={() => {
                        trackEvent("property_site_visit_click", { property: property.name });
                        onOpenSiteVisit(property);
                      }}
                      className="btn btn-gold"
                      style={{ padding: "0.8rem 0.5rem", fontSize: "0.72rem" }}
                    >
                      Site Visit 🚗
                    </button>
                  </div>

                  <div style={{ textAlign: "center", marginTop: "0.8rem" }}>
                    <button
                      onClick={() => {
                        trackEvent("property_brochure_click", { property: property.name });
                        onOpenBrochure(property);
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--color-muted)",
                        fontSize: "0.74rem",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: 600
                      }}
                    >
                      Download Master Layout PDF ↓
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 2rem", background: "white", borderRadius: "var(--radius-md)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--color-charcoal)" }}>
              No Properties Found Matching Your Criteria
            </h3>
            <p style={{ color: "var(--color-muted)", marginTop: "0.5rem" }}>
              Try broadening your budget slider or corridor filter to explore available layouts.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
