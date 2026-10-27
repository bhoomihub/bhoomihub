"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BHOOMIHUB_PHONE, BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../lib/analytics";

interface HeaderProps {
  onOpenSiteVisit?: () => void;
}

export default function Header({ onOpenSiteVisit }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent("header_whatsapp_click", { location: "navbar" });
  };

  const waUrl = generateWhatsAppUrl(
    BHOOMIHUB_WA_PHONE,
    "Hello BHOOMIHUB team, I am interested in exploring DTCP & RERA approved residential plots in Coimbatore."
  );

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="brand-link" onClick={() => setMobileMenuOpen(false)}>
        <span className="brand-title">
          BHOOMIHUB<span>.</span>
        </span>
        <span className="brand-tagline">Your Land. Your Legacy.</span>
      </Link>

      <nav className="nav-menu">
        <Link href="#properties" className="nav-link">
          Properties
        </Link>
        <Link href="#calculator" className="nav-link">
          ROI & EMI
        </Link>
        <Link href="#legal" className="nav-link">
          Legal Verification
        </Link>
        <Link href="#connectivity" className="nav-link">
          Locations
        </Link>
        <Link href="#why-us" className="nav-link">
          Why Bhoomihub
        </Link>
        <Link href="#contact" className="nav-link">
          Contact
        </Link>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {onOpenSiteVisit && (
          <button
            onClick={() => {
              trackEvent("nav_book_site_visit_click");
              onOpenSiteVisit();
            }}
            className="btn btn-gold"
            style={{ padding: "0.65rem 1.2rem", fontSize: "0.72rem" }}
          >
            Book Site Visit ↗
          </button>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="btn btn-outline-white"
          style={{ padding: "0.65rem 1.1rem", fontSize: "0.72rem" }}
        >
          WhatsApp ↗
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "white",
            padding: "0.5rem 0.8rem",
            borderRadius: "4px",
            cursor: "pointer",
            display: "none"
          }}
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "rgba(6, 26, 16, 0.98)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            borderBottom: "1px solid rgba(198, 161, 91, 0.2)"
          }}
        >
          <Link
            href="#properties"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "white", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
          >
            Properties
          </Link>
          <Link
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "white", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
          >
            ROI & EMI Calculator
          </Link>
          <Link
            href="#legal"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "white", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
          >
            Legal Verification (DTCP/RERA)
          </Link>
          <Link
            href="#connectivity"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "white", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
          >
            Locations & Connectivity
          </Link>
          <Link
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "white", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
          >
            Why Bhoomihub
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "white", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}
          >
            Contact & Advisory
          </Link>
          <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "1rem" }}>
            <a href={`tel:${BHOOMIHUB_PHONE}`} style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>
              📞 Call Advisor: {BHOOMIHUB_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
