"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "As a surgeon at KMCH with zero time for broker calls, Bhoomihub's transparency was refreshing. They shared the 35-year Encumbrance Certificate and DTCP order upfront. We built our retirement home in Kovaipudur with complete peace of mind.",
      author: "Dr. Rajesh K.",
      role: "Senior Consultant Cardiologist",
      location: "KMCH Hospital, Coimbatore",
      project: "Bhoomi Imperial Gardens (Kovaipudur)",
      rating: "★★★★★"
    },
    {
      quote:
        "Working at Bosch inside CHIL SEZ, I wanted an East-facing plot within a 10-minute commute. Bhoomihub delivered exactly what was promised — 40ft blacktop road, underground drainage, and immediate Patta transfer within 14 days of registration.",
      author: "Karthik Subramanian",
      role: "Lead Software Architect, Bosch",
      location: "Saravanampatti, Coimbatore",
      project: "Green Valley Phase II",
      rating: "★★★★★"
    },
    {
      quote:
        "Being based in Dubai, managing property back home in Tamil Nadu is usually fraught with trust issues. Bhoomihub arranged video walkthroughs, shared GPS boundary coordinates, and facilitated bank disbursement without requiring multiple flights.",
      author: "Meera & Anand Narayanan",
      role: "NRI Senior Finance Director",
      location: "Dubai, UAE",
      project: "Horizon Grandeur Estates (Pollachi Rd)",
      rating: "★★★★★"
    }
  ];

  return (
    <section className="section" style={{ background: "var(--color-white)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
          <span className="eyebrow">PEOPLE · PROPERTIES · LEGACIES</span>
          <h2 className="section-title">
            Trusted by <em>450+ Families.</em>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real stories from Coimbatore healthcare leaders, technology professionals, and NRI investors who secured their land legacy with zero brokerage.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem"
          }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--color-cream-bg)",
                borderRadius: "var(--radius-sm)",
                padding: "2.5rem 2.2rem",
                border: "1px solid var(--color-cream-border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ color: "var(--color-gold)", fontSize: "1.1rem", marginBottom: "1rem" }}>
                  {item.rating}
                </div>
                <blockquote style={{ fontStyle: "italic", color: "var(--color-ink)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                  “{item.quote}”
                </blockquote>
              </div>

              <div style={{ paddingTop: "1.2rem", borderTop: "1px solid var(--color-cream-border)" }}>
                <strong style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-charcoal)", display: "block" }}>
                  {item.author}
                </strong>
                <span style={{ fontSize: "0.78rem", color: "var(--color-muted)", display: "block" }}>
                  {item.role} · {item.location}
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--color-emerald-forest)", fontWeight: 700, display: "inline-block", marginTop: "0.3rem" }}>
                  Acquired: {item.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
