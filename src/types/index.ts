export interface FinancialSecurityState {
  rentOrMortgagePayment: number;
  foodHousehold: number;
  gasElectricWaterPhone: number;
  transportation: number;
  insurancePayments: number;
  total: number;
}

export type FinancialSecurityAction =
  | { type: "UPDATE_RENT"; payload: number }
  | { type: "UPDATE_FOOD"; payload: number }
  | { type: "UPDATE_GAS"; payload: number }
  | { type: "UPDATE_TRANSPORTATION"; payload: number }
  | { type: "UPDATE_INSURANCE"; payload: number }
  | { type: "UPDATE_TOTAL"; payload: number };
