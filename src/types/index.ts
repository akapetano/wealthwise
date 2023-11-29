export interface FinancialSecurityState {
  rentOrMortgagePayment: number;
  foodHousehold: number;
  gasElectricWaterPhone: number;
  transportation: number;
  insurancePayments: number;
  total: number;
}

export interface FinancialVitalityState {
  clothingCosts: number;
  diningAndEntertainmentCosts: number;
  smallIndulgenceOrLittleLuxuryCosts: number;
  additionalIncomeForVitality: number;
  financialSecurityNumber: number;
  total: number;
}

export type FinancialSecurityAction =
  | { type: "UPDATE_RENT"; payload: number }
  | { type: "UPDATE_FOOD"; payload: number }
  | { type: "UPDATE_GAS"; payload: number }
  | { type: "UPDATE_TRANSPORTATION"; payload: number }
  | { type: "UPDATE_INSURANCE"; payload: number }
  | { type: "UPDATE_TOTAL"; payload: number };

export type FinancialVitalityAction =
  | { type: "UPDATE_CLOTHING"; payload: number }
  | { type: "UPDATE_DINING_AND_ENTERTAINMENT"; payload: number }
  | { type: "UPDATE_SMALL_INDULGENCE_OR_LUXURY"; payload: number }
  | { type: "UPDATE_ADDITIONAL_MONTHLY_INCOME_FOR_VITALITY"; payload: number }
  | { type: "UPDATE_FINANCIAL_SECURITY_NUMBER"; payload: number }
  | { type: "UPDATE_TOTAL"; payload: number };
