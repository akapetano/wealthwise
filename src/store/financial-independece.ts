import { FinancialIndependenceState } from "@/types";
import { atomWithStorage } from "jotai/utils";
import { STORAGE_KEY } from "@/constants";

const initialState: FinancialIndependenceState = {
  totalForFinancialIndependence: 0,
};

export const financialIndependenceAtom = atomWithStorage(
  STORAGE_KEY.financialIndependence,
  {
    ...initialState,
  },
);
