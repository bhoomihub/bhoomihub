"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "../../lib/analytics";

interface HeroSectionProps {
  onOpenSiteVisit: () => void;
}

export default function HeroSection({ onOpenSiteVisit }: HeroSectionProps) {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-background-image" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="eyebrow">PREMIUM LAND & RESIDENTIAL PLOTTING · COIMBATORE</span>
        
        <h1 className="hero-h1">
          YOUR LAND.<br />
          <span className="gold">YOUR LEGACY.</span>
        </h1>

        <p className="hero-description">
          Connecting families and discerning investors to institutional-grade, DTCP & TN RERA approved residential plots in Coimbatore’s fastest appreciating corridors — completely direct, with 100% legal title clearance and zero brokerage.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", alignItems: "center" }}>
          <Link
            href="#properties"
            onClick={() => trackEvent("hero_explore_click")}
            className="btn btn-gold"
          >
            Explore Master Layouts <span>→</span>
          </Link>
          <button
            onClick={() => {
              trackEvent("hero_site_visit_click");
              onOpenSiteVisit();
            }}
            className="btn btn-outline-white"
          >
            Book Free VIP Site Visit (AC Cab) <span>↗</span>
          </button>
          <Link
            href="#calculator"
            onClick={() => trackEvent("hero_calculator_click")}
            style={{
              color: "var(--color-gold-light)",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            📊 Land ROI & EMI Estimator →
          </Link>
        </div>

        {/* Live Authority KPI Metrics */}
        <div className="hero-kpis">
          <div className="kpi-item">
            <strong>6+</strong>
            <span>Prime Growth Corridors</span>
          </div>
          <div className="kpi-item">
            <strong>100%</strong>
            <span>DTCP & RERA Approved</span>
          </div>
          <div className="kpi-item">
            <strong>₹0</strong>
            <span>Brokerage Commission</span>
          </div>
          <div className="kpi-item">
            <strong>480+</strong>
            <span>Clear Title Plots Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
