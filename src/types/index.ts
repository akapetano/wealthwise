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
  luxuryItemNum2: number;
  donation: number;
  financialIndependenceNumber: number;
  totalForFinancialFreedom: number;
}

export interface AbsoluteFinancialFreedomState {
  luxuryItemNum1: number;
  luxuryItemNum2: number;
  luxuryItemNum3: number;
  financialFreedomNumber: number;
  totalForAbsoluteFinancialFreedom: number;
}
