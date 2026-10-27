"use client";

import React from "react";
import { CORRIDORS, PROPERTY_TYPES } from "../../lib/properties";

interface SearchFilterSectionProps {
  selectedCorridor: string;
  onSelectCorridor: (c: string) => void;
  selectedType: string;
  onSelectType: (t: string) => void;
  maxBudgetLakhs: number;
  onSelectMaxBudget: (b: number) => void;
}

export default function SearchFilterSection({
  selectedCorridor,
  onSelectCorridor,
  selectedType,
  onSelectType,
  maxBudgetLakhs,
  onSelectMaxBudget
}: SearchFilterSectionProps) {
  return (
    <section
      style={{
        marginTop: "-4.5rem",
        position: "relative",
        zIndex: 20,
        padding: "0 5vw"
      }}
    >
      <div
        className="container"
        style={{
          background: "var(--color-white)",
          borderRadius: "var(--radius-md)",
          padding: "2rem 2.5rem",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--color-cream-border)",
          display: "grid",
          gridTemplateColumns: "1.2fr 1.2fr 1.2fr auto",
          gap: "1.5rem",
          alignItems: "flex-end"
        }}
      >
        {/* Corridor Filter */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-gold)",
              fontWeight: 700,
              marginBottom: "0.4rem"
            }}
          >
            1. Growth Corridor
          </label>
          <select
            value={selectedCorridor}
            onChange={e => onSelectCorridor(e.target.value)}
            style={{
              width: "100%",
              padding: "0.85rem 0.5rem",
              border: "none",
              borderBottom: "2px solid var(--color-cream-border)",
              background: "transparent",
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "var(--color-charcoal)",
              outline: "none",
              cursor: "pointer"
            }}
          >
            {CORRIDORS.map(corridor => (
              <option key={corridor} value={corridor}>
                {corridor}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-gold)",
              fontWeight: 700,
              marginBottom: "0.4rem"
            }}
          >
            2. Property Category
          </label>
          <select
            value={selectedType}
            onChange={e => onSelectType(e.target.value)}
            style={{
              width: "100%",
              padding: "0.85rem 0.5rem",
              border: "none",
              borderBottom: "2px solid var(--color-cream-border)",
              background: "transparent",
              fontSize: "0.92rem",
              fontWeight: 600,
              color: "var(--color-charcoal)",
              outline: "none",
              cursor: "pointer"
            }}
          >
            {PROPERTY_TYPES.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Filter */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-gold)",
              fontWeight: 700,
              marginBottom: "0.4rem"
            }}
          >
            3. Maximum Budget ({maxBudgetLakhs >= 60 ? "Any Budget" : `Up to ₹${maxBudgetLakhs}L`})
          </label>
          <div style={{ padding: "0.5rem 0" }}>
            <input
              type="range"
              min="15"
              max="60"
              step="5"
              value={maxBudgetLakhs}
              onChange={e => onSelectMaxBudget(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--color-emerald-forest)", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
              <span>₹18L</span>
              <span>₹35L</span>
              <span>₹60L+</span>
            </div>
          </div>
        </div>

        {/* Reset Filter Button */}
        <div>
          <button
            onClick={() => {
              onSelectCorridor("All Corridors");
              onSelectType("All Types");
              onSelectMaxBudget(60);
            }}
            className="btn btn-emerald"
            style={{ padding: "0.9rem 1.6rem", width: "100%", whiteSpace: "nowrap" }}
          >
            Reset Filters ⟳
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .container {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .container {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
