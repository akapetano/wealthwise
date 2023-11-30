import { AbsoluteFinancialFreedomState } from "@/types";
import { atomWithStorage } from "jotai/utils";
import { STORAGE_KEY } from "@/constants";

const initialState: AbsoluteFinancialFreedomState = {
  luxuryItemNum1: 0,
  luxuryItemNum1Label: "Luxury Item #1",
  luxuryItemNum2: 0,
  luxuryItemNum2Label: "Luxury Item #2",
  luxuryItemNum3: 0,
  luxuryItemNum3Label: "Luxury Item #3",
  financialFreedomNumber: 0,
  totalForAbsoluteFinancialFreedom: 0,
};

export const absoluteFinancialFreedomAtom = atomWithStorage(
  STORAGE_KEY.absoluteFinancialFreedom,
  {
    ...initialState,
  },
);
