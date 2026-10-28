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
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Listen to section change event from UtmScrollTracker
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionId: string }>;
      if (customEvent.detail?.sectionId) {
        setActiveSection(customEvent.detail.sectionId);
      }
    };
    window.addEventListener("bhoomihub:sectionchange", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("bhoomihub:sectionchange", handleSectionChange);
    };
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent("header_whatsapp_click", { location: "navbar", section: activeSection });
  };

  const waUrl = generateWhatsAppUrl(
    BHOOMIHUB_WA_PHONE,
    "Hello BHOOMIHUB team, I am interested in exploring DTCP & RERA approved residential plots in Coimbatore.",
    activeSection
  );

  const navLinks = [
    { href: "#properties", label: "Properties", id: "properties" },
    { href: "#calculator", label: "ROI & EMI", id: "calculator" },
    { href: "#legal", label: "Legal Verification", id: "legal" },
    { href: "#connectivity", label: "Locations", id: "connectivity" },
    { href: "#why-us", label: "Why Bhoomihub", id: "why-us" },
    { href: "#contact", label: "Contact", id: "contact" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <Link href="#home" className="brand-link" onClick={() => setMobileMenuOpen(false)}>
        <img
          src="/images/bhoomihub-logo.jpg"
          alt="BHOOMIHUB — Your Land. Your Legacy."
          className="brand-logo-img"
        />
      </Link>

      <nav className="nav-menu">
        {navLinks.map(link => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
              {isActive && <span className="active-pill" />}
            </Link>
          );
        })}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        {onOpenSiteVisit && (
          <button
            onClick={() => {
              trackEvent("nav_book_site_visit_click", { section: activeSection });
              onOpenSiteVisit();
            }}
            className="btn btn-gold nav-site-visit-btn"
            style={{ padding: "0.6rem 1.15rem", fontSize: "0.72rem" }}
          >
            Book Site Visit ↗
          </button>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="btn btn-outline-white nav-wa-btn"
          style={{ padding: "0.6rem 1rem", fontSize: "0.72rem" }}
        >
          WhatsApp ↗
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label} {activeSection === link.id && "•"}
            </Link>
          ))}
          <div style={{ paddingTop: "1.2rem", borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <a href={`tel:${BHOOMIHUB_PHONE}`} style={{ color: "var(--color-gold)", fontSize: "0.92rem", fontWeight: 700 }}>
              📞 Call Advisor: {BHOOMIHUB_PHONE}
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald"
              style={{ padding: "0.8rem", textAlign: "center", width: "100%" }}
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
