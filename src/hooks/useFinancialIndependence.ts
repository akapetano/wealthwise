import { FormEvent, ChangeEvent } from "react";
import { FINANCIAL_INDEPENDENCE } from "@/constants";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { financialIndependenceAtom } from "@/store/financial-independece";

export function useFinancialIndependence() {
  const [financialIndependence, setFinancialIndependence] = useAtom(
    financialIndependenceAtom,
  );
  const resetFinancialIndependence = useResetAtom(financialIndependenceAtom);

  function calculateTotal() {
    const { totalForFinancialIndependence } = financialIndependence;

    setFinancialIndependence((prev) => ({
      ...prev,
      totalForFinancialIndependence,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateTotal();
  }

  function handleChange(
    expense: keyof typeof FINANCIAL_INDEPENDENCE,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const removedLeadingZero = event.target.value.replace(/^0+/, "");

    switch (expense) {
      case FINANCIAL_INDEPENDENCE.totalForFinancialIndependence:
        setFinancialIndependence((prev) => ({
          ...prev,
          totalForFinancialIndependence: Number(removedLeadingZero),
        }));
        break;
      default:
        break;
    }
  }

  return {
    financialIndependence,
    resetFinancialIndependence,
    handleSubmit,
    handleChange,
  };
}
