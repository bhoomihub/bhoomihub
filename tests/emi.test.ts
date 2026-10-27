import { describe, it, expect } from "vitest";
import { calculateLandEmi, formatIndianCurrency } from "../lib/emi";

describe("Land Investment & EMI Engine", () => {
  it("calculates accurate EMI for ₹25 Lakhs plot with 20% down payment", () => {
    const result = calculateLandEmi({
      propertyValueInLakhs: 25,
      downPaymentPercentage: 20,
      interestRateAnnual: 8.5,
      tenureYears: 15,
      appreciationRateAnnual: 14
    });

    expect(result.propertyValue).toBe(2500000);
    expect(result.downPaymentAmount).toBe(500000);
    expect(result.loanPrincipal).toBe(2000000);
    // At 8.5% for 180 months on 20L, EMI should be ~19,695
    expect(result.monthlyEmi).toBeGreaterThan(19000);
    expect(result.monthlyEmi).toBeLessThan(21000);
    expect(result.totalRepayment).toBeGreaterThan(result.loanPrincipal);
  });

  it("calculates 5-year and 10-year compound appreciation accurately", () => {
    const result = calculateLandEmi({
      propertyValueInLakhs: 30,
      downPaymentPercentage: 25,
      interestRateAnnual: 9.0,
      tenureYears: 10,
      appreciationRateAnnual: 15
    });

    // ₹30L at 15% annual growth for 5 years: 30 * (1.15^5) = 30 * 2.0113 = ~60.34 Lakhs
    expect(result.projectedFutureValue5Years).toBeGreaterThan(5800000);
    expect(result.projectedFutureValue5Years).toBeLessThan(6300000);
    expect(result.projectedAppreciationGain5Years).toBe(result.projectedFutureValue5Years - 3000000);

    // Land gain should significantly beat standard Bank FD at 7%
    expect(result.comparisonWithBankFd5Years.extraWealthCreatedByLand).toBeGreaterThan(1500000);
  });

  it("handles boundaries gracefully", () => {
    const clampedResult = calculateLandEmi({
      propertyValueInLakhs: 18,
      downPaymentPercentage: 5, // below 10% minimum -> clamped to 10%
      interestRateAnnual: 0,    // 0% -> clamped to 1% minimum
      tenureYears: 1
    });

    expect(clampedResult.downPaymentAmount).toBe(180000); // 10% of 18L
    expect(clampedResult.monthlyEmi).toBeGreaterThan(0);
  });

  it("formats Indian currency correctly into Lakhs and Crores", () => {
    expect(formatIndianCurrency(2500000)).toBe("₹25.00 Lakhs");
    expect(formatIndianCurrency(15000000)).toBe("₹1.50 Cr");
    expect(formatIndianCurrency(50000)).toBe("₹50,000");
  });
});
