export interface EmiInput {
  propertyValueInLakhs: number;
  downPaymentPercentage: number; // e.g. 20 (meaning 20%)
  interestRateAnnual: number;    // e.g. 8.75 (meaning 8.75%)
  tenureYears: number;           // e.g. 15
  appreciationRateAnnual?: number; // e.g. 14 (14% p.a.)
}

export interface EmiOutput {
  propertyValue: number;
  downPaymentAmount: number;
  loanPrincipal: number;
  monthlyEmi: number;
  totalInterestPayable: number;
  totalRepayment: number;
  projectedFutureValue5Years: number;
  projectedAppreciationGain5Years: number;
  projectedFutureValue10Years: number;
  projectedAppreciationGain10Years: number;
  comparisonWithBankFd5Years: {
    landGain: number;
    fdGain: number; // assuming 7% compounding
    extraWealthCreatedByLand: number;
  };
}

export function calculateLandEmi(input: EmiInput): EmiOutput {
  const propertyValue = Math.round(input.propertyValueInLakhs * 100000);
  const downPaymentPercent = Math.min(Math.max(input.downPaymentPercentage, 10), 90);
  const downPaymentAmount = Math.round((propertyValue * downPaymentPercent) / 100);
  const loanPrincipal = propertyValue - downPaymentAmount;

  const annualRate = Math.max(input.interestRateAnnual, 1);
  const monthlyRate = annualRate / (12 * 100);
  const totalMonths = Math.max(input.tenureYears * 12, 12);

  // EMI formula: [P * r * (1+r)^n] / [(1+r)^n - 1]
  const factor = Math.pow(1 + monthlyRate, totalMonths);
  const monthlyEmi = Math.round((loanPrincipal * monthlyRate * factor) / (factor - 1));

  const totalRepayment = monthlyEmi * totalMonths;
  const totalInterestPayable = totalRepayment - loanPrincipal;

  const growthRate = (input.appreciationRateAnnual ?? 14.5) / 100;

  // 5 Years & 10 Years Compound Appreciation
  const futureValue5 = Math.round(propertyValue * Math.pow(1 + growthRate, 5));
  const appreciationGain5 = futureValue5 - propertyValue;

  const futureValue10 = Math.round(propertyValue * Math.pow(1 + growthRate, 10));
  const appreciationGain10 = futureValue10 - propertyValue;

  // Bank FD comparison at 7% p.a.
  const fdRate = 0.07;
  const fdValue5 = Math.round(propertyValue * Math.pow(1 + fdRate, 5));
  const fdGain5 = fdValue5 - propertyValue;
  const extraWealth = appreciationGain5 - fdGain5;

  return {
    propertyValue,
    downPaymentAmount,
    loanPrincipal,
    monthlyEmi,
    totalInterestPayable,
    totalRepayment,
    projectedFutureValue5Years: futureValue5,
    projectedAppreciationGain5Years: appreciationGain5,
    projectedFutureValue10Years: futureValue10,
    projectedAppreciationGain10Years: appreciationGain10,
    comparisonWithBankFd5Years: {
      landGain: appreciationGain5,
      fdGain: fdGain5,
      extraWealthCreatedByLand: extraWealth
    }
  };
}

export function formatIndianCurrency(num: number): string {
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2)} Lakhs`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(num);
}
