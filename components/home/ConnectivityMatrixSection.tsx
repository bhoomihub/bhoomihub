"use client";

import React, { useState } from "react";
import { trackEvent } from "../../lib/analytics";

interface Hub {
  name: string;
  category: "IT & Tech" | "Aviation & Transit" | "Healthcare" | "Education";
  distanceMin: string;
  significance: string;
}

export default function ConnectivityMatrixSection() {
  const [activeCorridorTab, setActiveCorridorTab] = useState<"Saravanampatti" | "Kovaipudur" | "Pollachi Road" | "Avinashi Road">("Saravanampatti");

  const corridorData: Record<string, { title: string; desc: string; mapQuery: string; hubs: Hub[] }> = {
    Saravanampatti: {
      title: "Saravanampatti — North Coimbatore IT Engine",
      desc: "Home to CHIL Special Economic Zone, hosting global technology leaders including Bosch, Cognizant, and Amazon. Surging IT professional workforce creating premier villa plot demand.",
      mapQuery: "Saravanampatti, Coimbatore, Tamil Nadu",
      hubs: [
        { name: "CHIL SEZ IT Park (Bosch, Cognizant)", category: "IT & Tech", distanceMin: "6 mins", significance: "8,500+ tech employees" },
        { name: "Sankara College of Science & Commerce", category: "Education", distanceMin: "4 mins", significance: "Premier educational campus" },
        { name: "KMCH Hospital (Avinashi Rd)", category: "Healthcare", distanceMin: "15 mins", significance: "Quaternary multi-specialty hub" },
        { name: "Coimbatore International Airport", category: "Aviation & Transit", distanceMin: "18 mins", significance: "Direct domestic & Int'l flights" }
      ]
    },
    Kovaipudur: {
      title: "Kovaipudur — Little Ooty Hill Breeze Sanctuary",
      desc: "Set against the dramatic backdrop of the Western Ghats, Kovaipudur boasts an elevation 2.5°C cooler than downtown Coimbatore. The definitive corridor for bespoke retirement bungalows and doctor residences.",
      mapQuery: "Kovaipudur, Coimbatore, Tamil Nadu",
      hubs: [
        { name: "Western Ghats Forest Reserve", category: "Healthcare", distanceMin: "5 mins", significance: "Unpolluted mountain air index" },
        { name: "VLB Janakiammal College", category: "Education", distanceMin: "3 mins", significance: "Established academic landmark" },
        { name: "Ukkadam Central Terminal", category: "Aviation & Transit", distanceMin: "18 mins", significance: "Direct city connector" },
        { name: "Palakkad Highway Connector", category: "Aviation & Transit", distanceMin: "7 mins", significance: "Inter-state commerce link" }
      ]
    },
    "Pollachi Road": {
      title: "Pollachi Main Road — 4-Lane NH-83 Industrial Corridor",
      desc: "Direct access to the recently widened 4-lane national highway. Prime logistics, agro-business warehousing, and high-density manufacturing bringing high capital appreciation.",
      mapQuery: "Kinathukadavu, Coimbatore, Tamil Nadu",
      hubs: [
        { name: "Kinathukadavu Railway Station", category: "Aviation & Transit", distanceMin: "5 mins", significance: "Rapid suburban rail transit" },
        { name: "Eachanari Industrial Estate & SIDCO", category: "IT & Tech", distanceMin: "14 mins", significance: "Major engineering & auto hub" },
        { name: "Karpagam Academy of Higher Education", category: "Education", distanceMin: "10 mins", significance: "Deemed university campus" },
        { name: "Sundarapuram Market Junction", category: "Aviation & Transit", distanceMin: "16 mins", significance: "Vibrant South retail core" }
      ]
    },
    "Avinashi Road": {
      title: "Avinashi Road — Coimbatore’s Flagship Commercial Spine",
      desc: "Coimbatore’s premier avenue featuring 5-star hospitality, top tertiary medical centers, and the new 10km elevated corridor reducing city transit to under 15 minutes.",
      mapQuery: "Avinashi Road, Neelambur, Coimbatore, Tamil Nadu",
      hubs: [
        { name: "Coimbatore International Airport", category: "Aviation & Transit", distanceMin: "10 mins", significance: "Immediate runway connectivity" },
        { name: "TIDEL Park Coimbatore", category: "IT & Tech", distanceMin: "12 mins", significance: "Tamil Nadu Government IT Hub" },
        { name: "PSG Institute of Medical Sciences", category: "Education", distanceMin: "8 mins", significance: "World-class healthcare campus" },
        { name: "Le Méridien & Radisson Blu", category: "Aviation & Transit", distanceMin: "5 mins", significance: "Luxury business hospitality" }
      ]
    }
  };

  const active = corridorData[activeCorridorTab];

  return (
    <section className="section" id="connectivity" style={{ background: "var(--color-emerald-forest)", color: "white" }}>
      <div className="container">
        <div style={{ maxWidth: "750px", marginBottom: "3rem" }}>
          <span className="eyebrow" style={{ color: "var(--color-gold-light)" }}>LOCATION & INFRASTRUCTURE</span>
          <h2 className="section-title" style={{ color: "white" }}>
            Connectivity &amp; <em style={{ color: "var(--color-gold)" }}>Commute Matrix</em>
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            A plot’s long-term worth is determined by its micro-location. Explore drive times to Coimbatore’s tech SEZs, airports, and premier medical universities.
          </p>
        </div>

        {/* Corridor Selector Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2.5rem" }}>
          {(Object.keys(corridorData) as Array<keyof typeof corridorData>).map(tab => (
            <button
              key={tab}
              onClick={() => {
                const selected = tab as "Saravanampatti" | "Kovaipudur" | "Pollachi Road" | "Avinashi Road";
                trackEvent("connectivity_tab_switch", { corridor: selected });
                setActiveCorridorTab(selected);
              }}
              style={{
                padding: "0.8rem 1.6rem",
                borderRadius: "var(--radius-sm)",
                border: activeCorridorTab === tab ? "1px solid var(--color-gold)" : "1px solid rgba(255,255,255,0.2)",
                background: activeCorridorTab === tab ? "var(--color-gold)" : "rgba(6, 26, 16, 0.6)",
                color: activeCorridorTab === tab ? "#121814" : "white",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all var(--transition-fast)"
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Corridor Detail Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "2.5rem",
            alignItems: "center"
          }}
          className="connectivity-grid"
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", color: "var(--color-gold)", marginBottom: "0.8rem" }}>
              {active.title}
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.98rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              {active.desc}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {active.hubs.map((hub, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(6, 26, 16, 0.7)",
                    border: "1px solid rgba(198, 161, 91, 0.25)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.2rem"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
                    <small style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-gold-light)" }}>
                      {hub.category}
                    </small>
                    <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--color-white)" }}>
                      ⏱️ {hub.distanceMin}
                    </span>
                  </div>
                  <strong style={{ fontSize: "0.9rem", color: "white", display: "block" }}>{hub.name}</strong>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.65)", marginTop: "0.2rem" }}>
                    {hub.significance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div
            style={{
              height: "440px",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              border: "1px solid rgba(198, 161, 91, 0.3)",
              boxShadow: "var(--shadow-lg)",
              position: "relative"
            }}
          >
            <iframe
              title={`BHOOMIHUB location map for ${activeCorridorTab}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(active.mapQuery)}&output=embed`}
              style={{ width: "100%", height: "100%", border: 0, filter: "saturate(0.85)" }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(6, 26, 16, 0.9)",
                padding: "0.8rem 1.2rem",
                fontSize: "0.75rem",
                color: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>📌 {active.mapQuery}</span>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(active.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-gold)", fontWeight: 700 }}
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .connectivity-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
