"use client";

import React from "react";
import { BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../../lib/analytics";

export default function LegalClearanceSection() {
  const legalPoints = [
    {
      num: "01",
      title: "DTCP / LPA Master Approval",
      desc: "Every layout possesses valid Directorate of Town and Country Planning sanction orders with strict conformity to public road widths (30ft/40ft/60ft) and open space reservations (OSR)."
    },
    {
      num: "02",
      title: "TN RERA Registration",
      desc: "Registered with Tamil Nadu Real Estate Regulatory Authority, safeguarding consumer funds and legally enforcing promoter delivery timelines and infrastructure commitments."
    },
    {
      num: "03",
      title: "35-Year Nil Encumbrance Certificate",
      desc: "Exhaustive legal title search conducted across 35 years through the Tamil Nadu Registration Department, confirming absolute zero mortgage, litigation, or hypothecation."
    },
    {
      num: "04",
      title: "Immediate Patta & Chitta Transfer",
      desc: "Direct revenue department linkage ensuring your individual Patta passbook transfer is initiated immediately following deed registration at the Sub-Registrar office."
    },
    {
      num: "05",
      title: "FMB Sketch & Precision GPS Demarcation",
      desc: "Physical stone demarcation with GPS-calibrated Field Measurement Book (FMB) survey sketches to eliminate boundary disputes or peripheral encroachments."
    },
    {
      num: "06",
      title: "Soil Test & Sweet Water Aquifer Report",
      desc: "Geotechnical core samples confirming red loam load-bearing foundation strength and independent lab-certified potable ground water at depths of 25 to 45 feet."
    },
    {
      num: "07",
      title: "Nationalized Bank Project Clearances",
      desc: "Pre-cleared and sanctioned by State Bank of India (SBI), HDFC Bank, and ICICI for up to 80% plot purchase and residential villa construction financing."
    }
  ];

  const handleRequestAudit = () => {
    trackEvent("legal_audit_dossier_request");
    const waUrl = generateWhatsAppUrl(
      BHOOMIHUB_WA_PHONE,
      "Hi Bhoomihub Legal Cell, I would like to inspect the complete 35-year Encumbrance Certificate and DTCP sanction order for your Coimbatore projects."
    );
    window.open(waUrl, "_blank");
  };

  return (
    <section className="section" id="legal" style={{ background: "var(--color-white)" }}>
      <div className="container">
        <div style={{ maxWidth: "750px", marginBottom: "3.5rem" }}>
          <span className="eyebrow">INSTITUTIONAL GOVERNANCE & TITLE SCRUTINY</span>
          <h2 className="section-title">
            The 7-Point <em>Legal Clearance</em> Protocol
          </h2>
          <p className="section-subtitle">
            Land ownership is your family’s generational legacy. We eliminate all ambiguity with rigorous multi-tier legal vetting executed by Senior Madras High Court Advocates.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.8rem"
          }}
        >
          {legalPoints.map(point => (
            <div
              key={point.num}
              style={{
                background: "var(--color-cream-bg)",
                padding: "2.2rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--color-cream-border)",
                position: "relative",
                transition: "all var(--transition-normal)"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  color: "var(--color-gold)",
                  fontWeight: 800,
                  marginBottom: "0.8rem"
                }}
              >
                {point.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  color: "var(--color-charcoal)",
                  marginBottom: "0.6rem"
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.7
                }}
              >
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Legal Advisory Banner */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "var(--color-emerald-deep)",
            color: "white",
            padding: "2.5rem 3rem",
            borderRadius: "var(--radius-md)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem"
          }}
        >
          <div>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "0.3rem" }}>
              Want to Review Original Deeds & DTCP Sanction Copies?
            </h4>
            <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.9rem" }}>
              We provide our comprehensive Legal Title Audit Dossier upfront to your family advocate before any token commitment.
            </p>
          </div>
          <div>
            <button
              onClick={handleRequestAudit}
              className="btn btn-gold"
              style={{ whiteSpace: "nowrap" }}
            >
              Request Full Legal Dossier on WhatsApp ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
