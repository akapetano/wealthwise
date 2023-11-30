import { AbsoluteFinancialFreedomState } from "@/types";
import { atomWithStorage } from "jotai/utils";
import { STORAGE_KEY } from "@/constants";

const initialState: AbsoluteFinancialFreedomState = {
  luxuryItemNum1: 0,
  luxuryItemNum2: 0,
  luxuryItemNum3: 0,
  financialFreedomNumber: 0,
  totalForAbsoluteFinancialFreedom: 0,
};

export const absoluteFinancialFreedomAtom = atomWithStorage(
  STORAGE_KEY.absoluteFinancialFreedom,
  {
    ...initialState,
  },
);
