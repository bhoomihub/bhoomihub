"use client";

import React from "react";
import Link from "next/link";

interface ProcessTimelineSectionProps {
  onOpenSiteVisit: () => void;
}

export default function ProcessTimelineSection({ onOpenSiteVisit }: ProcessTimelineSectionProps) {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Filter With Purpose",
      desc: "Explore vetted developments across Coimbatore's prime corridors with transparent square-foot pricing, exact road widths, and DTCP approval credentials."
    },
    {
      num: "02",
      title: "EXPLORE",
      subtitle: "Review Detailed Layouts",
      desc: "Download high-resolution master plan PDFs, inspect facing orientation (East/North/West/South), and examine water table and soil test reports."
    },
    {
      num: "03",
      title: "VISIT",
      subtitle: "Complimentary VIP Site Visit",
      desc: "Walk the land with your family. We arrange door-to-door AC cab pickup from your Coimbatore home or airport with a Senior Land Relationship Manager."
    },
    {
      num: "04",
      title: "VERIFY",
      subtitle: "Legal Scrutiny & Document Audit",
      desc: "Review certified copies of the 35-year Encumbrance Certificate, Parent Deeds, and DTCP sanction order with your family advocate."
    },
    {
      num: "05",
      title: "OWN",
      subtitle: "Registration & Patta Transfer",
      desc: "Complete registration at the Sub-Registrar office with clear revenue documentation and our post-purchase Patta name transfer guarantee."
    }
  ];

  return (
    <section className="section" style={{ background: "var(--color-cream-bg)" }}>
      <div className="container">
        <div style={{ maxWidth: "720px", marginBottom: "4rem" }}>
          <span className="eyebrow">TRANSPARENT CLIENT JOURNEY</span>
          <h2 className="section-title">
            From Search to <em>Ownership.</em>
          </h2>
          <p className="section-subtitle">
            We replaced opaque real estate haggling with an engineered, 5-stage transparent protocol designed for complete peace of mind.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {steps.map(step => (
            <div
              key={step.num}
              style={{
                background: "white",
                padding: "2.2rem 1.8rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-cream-border)",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  color: "var(--color-gold)",
                  fontWeight: 800,
                  marginBottom: "0.8rem"
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-charcoal)" }}>
                {step.title}
              </h3>
              <small style={{ color: "var(--color-emerald-forest)", fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0.3rem 0 0.8rem" }}>
                {step.subtitle}
              </small>
              <p style={{ color: "var(--color-muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <button onClick={onOpenSiteVisit} className="btn btn-emerald">
            Begin with Step 03: Book Free VIP Site Visit ↗
          </button>
        </div>
      </div>
    </section>
  );
}
