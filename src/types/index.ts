export interface FinancialSecurityState {
  rentOrMortgagePayment: number;
  foodHousehold: number;
  gasElectricWaterPhone: number;
  transportation: number;
  insurancePayments: number;
  totalForFinancialSecurity: number;
}

export interface FinancialVitalityState {
  clothingCosts: number;
  diningAndEntertainmentCosts: number;
  smallIndulgenceOrLittleLuxuryCosts: number;
  additionalIncomeForVitality: number;
  financialSecurityNumber: number;
  totalForFinancialVitality: number;
}

export interface FinancialIndependenceState {
  totalForFinancialIndependence: number;
}

export interface FinancialFreedomState {
  luxuryItemNum1: number;
  luxuryItemNum1Label: string;
  luxuryItemNum2: number;
  luxuryItemNum2Label: string;
  donation: number;
  financialIndependenceNumber: number;
  totalForFinancialFreedom: number;
}

export interface AbsoluteFinancialFreedomState {
  luxuryItemNum1: number;
  luxuryItemNum1Label: string;
  luxuryItemNum2: number;
  luxuryItemNum2Label: string;
  luxuryItemNum3: number;
  luxuryItemNum3Label: string;
  financialFreedomNumber: number;
  totalForAbsoluteFinancialFreedom: number;
}
