"use client";

import React from "react";
import Link from "next/link";
import { BHOOMIHUB_PHONE, BHOOMIHUB_EMAIL, BHOOMIHUB_ADDRESS, BHOOMIHUB_WA_PHONE, generateWhatsAppUrl } from "../lib/analytics";

export default function Footer() {
  const waUrl = generateWhatsAppUrl(
    BHOOMIHUB_WA_PHONE,
    "Hello Bhoomihub, I would like to schedule a confidential property consultation."
  );

  return (
    <footer style={{ background: "var(--color-charcoal)", color: "white", padding: "5.5rem 0 2rem" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3.5rem",
            paddingBottom: "4.5rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)"
          }}
        >
          {/* Brand info */}
          <div>
            <Link href="#home" style={{ display: "inline-block", marginBottom: "1.25rem" }}>
              <img
                src="/images/bhoomihub-logo.png"
                alt="BHOOMIHUB — Your Land. Your Legacy."
                style={{ height: "96px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.5))" }}
              />
            </Link>
            <p style={{ color: "rgba(255, 255, 255, 0.68)", fontSize: "0.88rem", lineHeight: 1.7, marginTop: "0.5rem" }}>
              Coimbatore’s premier direct-to-consumer land acquisition platform. Delivering DTCP &amp; TN RERA approved residential layouts with 100% legal title clearance and zero brokerage.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ padding: "0.6rem 1.2rem", fontSize: "0.72rem" }}
              >
                Instant WhatsApp Concierge ↗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Growth Corridors
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.7)" }}>
              <Link href="#properties" style={{ transition: "color 0.2s" }}>Saravanampatti (IT Corridor)</Link>
              <Link href="#properties" style={{ transition: "color 0.2s" }}>Kovaipudur (Western Ghats Breeze)</Link>
              <Link href="#properties" style={{ transition: "color 0.2s" }}>Pollachi Road (4-Lane NH-83)</Link>
              <Link href="#properties" style={{ transition: "color 0.2s" }}>Avinashi Road (Premium Arterial)</Link>
              <Link href="#properties" style={{ transition: "color 0.2s" }}>Sulur (Defence Corridor &amp; Airport)</Link>
              <Link href="#properties" style={{ transition: "color 0.2s" }}>Siruvani Foothills (Eco-Farmland)</Link>
            </div>
          </div>

          {/* Legal & Tools */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Platform &amp; Tools
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.7)" }}>
              <Link href="#calculator">Land Investment &amp; EMI Calculator</Link>
              <Link href="#legal">7-Point Legal Verification Protocol</Link>
              <Link href="#connectivity">Connectivity &amp; Distance Matrix</Link>
              <Link href="#why-us">Zero Brokerage Guarantee</Link>
              <Link href="#contact">Book Free VIP Site Visit</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Direct Office
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.75)" }}>
              <p>📍 {BHOOMIHUB_ADDRESS}</p>
              <p>📞 Phone: <a href={`tel:${BHOOMIHUB_PHONE}`} style={{ color: "var(--color-gold)", fontWeight: 700 }}>{BHOOMIHUB_PHONE}</a></p>
              <p>✉️ Email: <a href={`mailto:${BHOOMIHUB_EMAIL}`} style={{ color: "var(--color-gold)" }}>{BHOOMIHUB_EMAIL}</a></p>
              <p>🕒 Mon – Sun: 9:00 AM – 7:00 PM IST (Site Visits on all 7 days)</p>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            fontSize: "0.74rem",
            color: "rgba(255, 255, 255, 0.5)"
          }}
        >
          <div>
            © {new Date().getFullYear()} BHOOMIHUB REAL ESTATE PLATFORM. ALL RIGHTS RESERVED.
          </div>
          <div>
            All featured layouts are approved by the Directorate of Town and Country Planning (DTCP) and registered with TN RERA.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>RERA Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
