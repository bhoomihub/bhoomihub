"use client";

import { useState } from "react";
import { trackEvent } from "../../lib/analytics";

interface Hub {
  name: string;
  category: "IT & Tech" | "Aviation & Transit" | "Healthcare" | "Education";
  distanceMin: string;
  significance: string;
}

export default function ConnectivityMatrixSection() {
  const [activeCorridorTab, setActiveCorridorTab] = useState<"Gobi Central" | "Bangalapudur" | "Modachur" | "Jyothi Nagar">("Gobi Central");

  const corridorData: Record<string, { title: string; desc: string; mapQuery: string; hubs: Hub[] }> = {
    "Gobi Central": {
      title: "Gobichettipalayam Central — Town Hub & Balaji Nagar",
      desc: "Prime connectivity at the heart of Gobichettipalayam. Direct access to the Sathy - Bhavani highway, leading matriculation schools, and bustling commercial downtown.",
      mapQuery: "Gobichettipalayam, Tamil Nadu",
      hubs: [
        { name: "Gobi Central Bus Terminal", category: "Aviation & Transit", distanceMin: "4 mins", significance: "Inter-district express transit link" },
        { name: "Sathy - Bhavani State Highway", category: "Aviation & Transit", distanceMin: "3 mins", significance: "Arterial regional connectivity corridor" },
        { name: "Leading CBSE & Matric Schools", category: "Education", distanceMin: "4 mins", significance: "Top tier academic campuses" },
        { name: "Erode Commercial & Rail Junction", category: "IT & Tech", distanceMin: "35 mins", significance: "Major textile and trade junction" }
      ]
    },
    Bangalapudur: {
      title: "Bangalapudur Road — Education & Green Enclave",
      desc: "Situated right next to the historic Gobi Arts & Science College campus, just 500 meters from the main bus stop. An ideal green environment for families.",
      mapQuery: "Gobi Arts & Science College, Karattadipalayam, Tamil Nadu",
      hubs: [
        { name: "Gobi Arts & Science College", category: "Education", distanceMin: "2 mins walk", significance: "Premier multidisciplinary academic landmark" },
        { name: "Bangalapudur Bus Stop", category: "Aviation & Transit", distanceMin: "5 mins walk", significance: "Frequent local and town bus service" },
        { name: "Gobi Main Bazaar & Post Office", category: "Aviation & Transit", distanceMin: "8 mins", significance: "Central municipal civic core" },
        { name: "Sathyamangalam Highway Connector", category: "Aviation & Transit", distanceMin: "10 mins", significance: "Direct state highway artery" }
      ]
    },
    Modachur: {
      title: "Chinna Modachur — High Growth Commercial & Residential Belt",
      desc: "A vibrant mixed-use growth node offering prime street frontage for commercial establishments alongside quiet residential living.",
      mapQuery: "Modachur, Gobichettipalayam, Tamil Nadu",
      hubs: [
        { name: "Modachur Main Road Market", category: "Aviation & Transit", distanceMin: "1 min", significance: "Active retail and convenience corridor" },
        { name: "Gobi Central Bus Stand", category: "Aviation & Transit", distanceMin: "5 mins", significance: "Central bus terminus" },
        { name: "Government Hospital & Medical Hub", category: "Healthcare", distanceMin: "6 mins", significance: "Emergency and multi-speciality care" },
        { name: "Sathy - Bhavani Highway Junction", category: "Aviation & Transit", distanceMin: "7 mins", significance: "Fast highway access" }
      ]
    },
    "Jyothi Nagar": {
      title: "Jyothi Nagar Extension — Quiet Gated Residential Enclave",
      desc: "A well-planned community of compact independent homes with asphalt roads, streetlights, and quiet neighborhood surroundings.",
      mapQuery: "Jyothi Nagar, Gobichettipalayam, Tamil Nadu",
      hubs: [
        { name: "Daily Supermarkets & Convenience", category: "Aviation & Transit", distanceMin: "2 mins", significance: "Essential daily retail & provisions" },
        { name: "Gobichettipalayam Town Center", category: "Aviation & Transit", distanceMin: "5 mins", significance: "Shopping and administrative offices" },
        { name: "Gobi General Hospital", category: "Healthcare", distanceMin: "6 mins", significance: "Comprehensive medical facilities" },
        { name: "State Highway Corridor", category: "Aviation & Transit", distanceMin: "8 mins", significance: "Regional highway transit" }
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
                const selected = tab as "Gobi Central" | "Bangalapudur" | "Modachur" | "Jyothi Nagar";
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
    </section>
  );
}
