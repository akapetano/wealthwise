import { FinancialSecurityState } from "@/types";
import { atomWithStorage } from "jotai/utils";
import { STORAGE_KEY } from "@/constants";

const initialState: FinancialSecurityState = {
  rentOrMortgagePayment: 0,
  foodHousehold: 0,
  gasElectricWaterPhone: 0,
  transportation: 0,
  insurancePayments: 0,
  totalForFinancialSecurity: 0,
};

export const financialSecurityAtom = atomWithStorage(
  STORAGE_KEY.financialSecurity,
  {
    ...initialState,
  },
);
