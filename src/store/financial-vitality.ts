import { FinancialVitalityState } from "@/types";
import { atomWithStorage } from "jotai/utils";
import { STORAGE_KEY } from "@/constants";

const initialState: FinancialVitalityState = {
  clothingCosts: 0,
  diningAndEntertainmentCosts: 0,
  smallIndulgenceOrLittleLuxuryCosts: 0,
  additionalIncomeForVitality: 0,
  financialSecurityNumber: 0,
  totalForFinancialVitality: 0,
};

export const financialVitalityAtom = atomWithStorage(
  STORAGE_KEY.financialVitality,
  {
    ...initialState,
  },
);
