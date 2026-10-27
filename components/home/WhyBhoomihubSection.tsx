"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "../../lib/analytics";

export default function WhyBhoomihubSection() {
  const pillars = [
    {
      icon: "💰",
      title: "Zero Brokerage Guarantee",
      desc: "Traditional brokers extract 2% from the buyer and 2% from the seller — that is ₹1,00,000 to ₹1,50,000 lost on a ₹40 Lakh plot. With Bhoomihub, you deal 100% direct with zero intermediary fees.",
      stat: "Save ₹1 Lakh+"
    },
    {
      icon: "⚖️",
      title: "100% Clean Legal Title",
      desc: "Every inch of land has passed our 7-Point Legal Clearance protocol: DTCP approval, TN RERA compliance, 35-year Nil EC search, and revenue Patta verification before listing.",
      stat: "35-Yr Scrutiny"
    },
    {
      icon: "🏗️",
      title: "Plug-and-Play Infrastructure",
      desc: "No empty promises. Every layout comes delivered with wide 30–50ft blacktop asphalt roads, individual sweet water connections, underground storm drainage, and solar street lamps.",
      stat: "Ready to Build"
    },
    {
      icon: "📜",
      title: "Post-Purchase Patta Concierge",
      desc: "Our responsibility does not end at registration. Our dedicated revenue liaison team handles your individual Patta and Chitta name transfer at the Sub-Registrar office seamlessly.",
      stat: "End-to-End"
    }
  ];

  return (
    <section className="section" id="why-us" style={{ background: "var(--color-white)" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", marginBottom: "4rem" }}>
          <span className="eyebrow">THE DIRECT-TO-CONSUMER ADVANTAGE</span>
          <h2 className="section-title">
            Your Trust. <em>Our Responsibility.</em>
          </h2>
          <p className="section-subtitle">
            We built Bhoomihub to solve the traditional real estate trust deficit: fragmented brokers, hidden charges, and opaque paperwork. Here is why over 450 Coimbatore families and NRI investors chose us.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem"
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--color-cream-bg)",
                borderRadius: "var(--radius-sm)",
                padding: "2.5rem 2rem",
                border: "1px solid var(--color-cream-border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all var(--transition-normal)"
              }}
            >
              <div>
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{pillar.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--color-charcoal)", marginBottom: "0.8rem" }}>
                  {pillar.title}
                </h3>
                <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {pillar.desc}
                </p>
              </div>

              <div style={{ marginTop: "2rem", paddingTop: "1.2rem", borderTop: "1px solid var(--color-cream-border)" }}>
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-emerald-forest)", fontWeight: 800 }}>
                  ✓ {pillar.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Broker Comparison Table */}
        <div
          style={{
            marginTop: "4.5rem",
            background: "var(--color-cream-card)",
            borderRadius: "var(--radius-md)",
            padding: "3rem",
            border: "1px solid var(--color-cream-border)"
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            <span className="eyebrow">UNIT ECONOMICS BREAKDOWN</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-charcoal)" }}>
              Traditional Broker vs. Bhoomihub Direct
            </h3>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-cream-border)" }}>
                  <th style={{ padding: "1rem 1.2rem", color: "var(--color-muted)" }}>Dimension</th>
                  <th style={{ padding: "1rem 1.2rem", color: "var(--color-muted)" }}>Traditional Unorganized Broker</th>
                  <th style={{ padding: "1rem 1.2rem", color: "var(--color-emerald-forest)", fontWeight: 800 }}>BHOOMIHUB Direct Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-cream-border)" }}>
                  <td style={{ padding: "1.1rem 1.2rem", fontWeight: 700 }}>Brokerage Commission</td>
                  <td style={{ padding: "1.1rem 1.2rem", color: "#E53E3E" }}>2% from Buyer + 2% from Seller (₹1.2L–₹2L loss)</td>
                  <td style={{ padding: "1.1rem 1.2rem", color: "#10B981", fontWeight: 700 }}>₹0 Brokerage (100% Direct Developer Price)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-cream-border)" }}>
                  <td style={{ padding: "1.1rem 1.2rem", fontWeight: 700 }}>Legal Title Verification</td>
                  <td style={{ padding: "1.1rem 1.2rem" }}>Buyer must hire private advocate at own cost</td>
                  <td style={{ padding: "1.1rem 1.2rem", color: "var(--color-emerald-forest)", fontWeight: 700 }}>Certified 35-Year Title Audit Dossier provided upfront</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-cream-border)" }}>
                  <td style={{ padding: "1.1rem 1.2rem", fontWeight: 700 }}>Site Visit Experience</td>
                  <td style={{ padding: "1.1rem 1.2rem" }}>Self-travel or coordinate multiple brokers</td>
                  <td style={{ padding: "1.1rem 1.2rem", color: "var(--color-emerald-forest)", fontWeight: 700 }}>Complimentary VIP AC Cab Pickup across Coimbatore</td>
                </tr>
                <tr>
                  <td style={{ padding: "1.1rem 1.2rem", fontWeight: 700 }}>Post-Purchase Patta Transfer</td>
                  <td style={{ padding: "1.1rem 1.2rem" }}>Disappears after receiving commission</td>
                  <td style={{ padding: "1.1rem 1.2rem", color: "var(--color-emerald-forest)", fontWeight: 700 }}>Dedicated revenue liaison until Patta name change</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
