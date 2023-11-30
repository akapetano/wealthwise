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
