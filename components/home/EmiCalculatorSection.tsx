"use client";

import React, { useState } from "react";
import { calculateLandEmi, formatIndianCurrency } from "../../lib/emi";
import { trackEvent } from "../../lib/analytics";

interface EmiCalculatorSectionProps {
  onOpenSiteVisit: () => void;
}

export default function EmiCalculatorSection({ onOpenSiteVisit }: EmiCalculatorSectionProps) {
  const [propertyValueInLakhs, setPropertyValueInLakhs] = useState<number>(28);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.65);
  const [tenureYears, setTenureYears] = useState<number>(15);
  const [appreciationRate, setAppreciationRate] = useState<number>(14.5);

  const result = calculateLandEmi({
    propertyValueInLakhs,
    downPaymentPercentage: downPaymentPercent,
    interestRateAnnual: interestRate,
    tenureYears,
    appreciationRateAnnual: appreciationRate
  });

  const handleSliderChange = () => {
    trackEvent("calculate_emi_interacted", {
      plotValueLakhs: propertyValueInLakhs,
      downPayment: downPaymentPercent,
      tenure: tenureYears
    });
  };

  return (
    <section className="section" id="calculator" style={{ background: "var(--color-cream-card)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem" }}>
          <span className="eyebrow">WEALTH & FINANCIAL INTELLIGENCE</span>
          <h2 className="section-title">
            Land Investment &amp; <em>EMI Estimator</em>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real estate in Coimbatore’s key corridors has historically outperformed bank deposits and inflation. Simulate your down payment, monthly EMI, and 5-to-10 year capital compounding.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "2.5rem",
            background: "var(--color-white)",
            borderRadius: "var(--radius-md)",
            padding: "3rem",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--color-cream-border)"
          }}
          className="calc-grid"
        >
          {/* Sliders Input Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
            {/* 1. Plot Budget */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink)" }}>
                  Plot Valuation
                </label>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-emerald-forest)" }}>
                  ₹{propertyValueInLakhs} Lakhs
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="90"
                step="1"
                value={propertyValueInLakhs}
                onChange={e => {
                  setPropertyValueInLakhs(Number(e.target.value));
                  handleSliderChange();
                }}
                style={{ width: "100%", accentColor: "var(--color-emerald-forest)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--color-muted)" }}>
                <span>₹15 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹90 Lakhs</span>
              </div>
            </div>

            {/* 2. Down Payment */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ink)" }}>
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--color-ink)" }}>
                  {formatIndianCurrency(result.downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={e => {
                  setDownPaymentPercent(Number(e.target.value));
                  handleSliderChange();
                }}
                style={{ width: "100%", accentColor: "var(--color-emerald-forest)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--color-muted)" }}>
                <span>10% (Min)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* 3. Interest Rate & Tenure */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Interest Rate
                  </label>
                  <span style={{ fontWeight: 700, color: "var(--color-emerald-forest)" }}>{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="8.0"
                  max="10.5"
                  step="0.05"
                  value={interestRate}
                  onChange={e => {
                    setInterestRate(Number(e.target.value));
                    handleSliderChange();
                  }}
                  style={{ width: "100%", accentColor: "var(--color-emerald-forest)" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Loan Tenure
                  </label>
                  <span style={{ fontWeight: 700, color: "var(--color-emerald-forest)" }}>{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={tenureYears}
                  onChange={e => {
                    setTenureYears(Number(e.target.value));
                    handleSliderChange();
                  }}
                  style={{ width: "100%", accentColor: "var(--color-emerald-forest)" }}
                />
              </div>
            </div>

            {/* 4. Expected Annual Appreciation */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-gold)" }}>
                  Projected Coimbatore Land Appreciation
                </label>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--color-gold)" }}>
                  {appreciationRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="20"
                step="0.5"
                value={appreciationRate}
                onChange={e => {
                  setAppreciationRate(Number(e.target.value));
                  handleSliderChange();
                }}
                style={{ width: "100%", accentColor: "var(--color-gold)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--color-muted)" }}>
                <span>10% (Conservative)</span>
                <span>14.5% (Corridor Avg)</span>
                <span>20% (IT Hub)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div
            style={{
              background: "var(--color-emerald-deep)",
              borderRadius: "var(--radius-sm)",
              padding: "2.5rem 2rem",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 700 }}>
                MONTHLY COMMITMENT
              </span>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", fontWeight: 700, color: "var(--color-white)", margin: "0.2rem 0 1rem" }}>
                {formatIndianCurrency(result.monthlyEmi)}
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", fontWeight: 400 }}> / month</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", padding: "1.2rem 0", borderTop: "1px solid rgba(255,255,255,0.12)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <div>
                  <small style={{ fontSize: "0.65rem", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Bank Loan Principal</small>
                  <p style={{ fontWeight: 700, fontSize: "1rem" }}>{formatIndianCurrency(result.loanPrincipal)}</p>
                </div>
                <div>
                  <small style={{ fontSize: "0.65rem", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Total Interest Payable</small>
                  <p style={{ fontWeight: 700, fontSize: "1rem" }}>{formatIndianCurrency(result.totalInterestPayable)}</p>
                </div>
              </div>

              {/* Generational Wealth Creation Box */}
              <div style={{ marginTop: "1.5rem", background: "rgba(198, 161, 91, 0.12)", border: "1px solid rgba(198, 161, 91, 0.3)", borderRadius: "var(--radius-sm)", padding: "1.2rem" }}>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 700 }}>
                  5-YEAR CAPITAL GAIN ESTIMATE
                </span>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "0.3rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>Projected Plot Value:</span>
                  <strong style={{ fontSize: "1.2rem", color: "var(--color-gold)" }}>{formatIndianCurrency(result.projectedFutureValue5Years)}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "0.4rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>
                  <span>Outperforms Bank FD by:</span>
                  <strong style={{ color: "#10B981" }}>+{formatIndianCurrency(result.comparisonWithBankFd5Years.extraWealthCreatedByLand)}</strong>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <button
                onClick={() => {
                  trackEvent("calculator_book_visit_click");
                  onOpenSiteVisit();
                }}
                className="btn btn-gold"
                style={{ width: "100%", padding: "1rem" }}
              >
                Schedule Site Visit for this Budget ↗
              </button>
              <p style={{ textAlign: "center", fontSize: "0.68rem", color: "rgba(255,255,255,0.5)", marginTop: "0.6rem" }}>
                Tie-up with SBI, HDFC, and ICICI Bank for pre-approved plot loans with 80% funding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
            padding: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
