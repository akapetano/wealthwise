import { FinancialFreedomState } from "@/types";
import { atomWithStorage } from "jotai/utils";
import { STORAGE_KEY } from "@/constants";

const initialState: FinancialFreedomState = {
  luxuryItemNum1: 0,
  luxuryItemNum1Label: "Luxury Item #1",
  luxuryItemNum2: 0,
  luxuryItemNum2Label: "Luxury Item #2",
  donation: 0,
  financialIndependenceNumber: 0,
  totalForFinancialFreedom: 0,
};

export const financialFreedomAtom = atomWithStorage(
  STORAGE_KEY.financialFreedom,
  {
    ...initialState,
  },
);
