import { FormEvent, ChangeEvent, useEffect } from "react";
import { FINANCIAL_FREEDOM } from "@/constants";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { financialFreedomAtom } from "@/store/financial-freedom";
import { useFinancialIndependence } from "./useFinancialIndependence";
import { formatCurrency, calculateYearly } from "@/utils";

export function useFinancialFreedom() {
  const { financialIndependence } = useFinancialIndependence();
  const [financialFreedom, setFinancialFreedom] = useAtom(financialFreedomAtom);
  const resetFiancialFreedom = useResetAtom(financialFreedomAtom);

  const financialIndependenceNumberIsPresent = Boolean(
    financialIndependence?.totalForFinancialIndependence &&
      financialIndependence?.totalForFinancialIndependence > 0,
  );

  function calculateTotal() {
    const {
      luxuryItemNum1,
      luxuryItemNum2,
      donation,
      financialIndependenceNumber,
    } = financialFreedom;
    const totalForFinancialFreedom =
      luxuryItemNum1 + luxuryItemNum2 + donation + financialIndependenceNumber;
    setFinancialFreedom((prev) => ({ ...prev, totalForFinancialFreedom }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateTotal();
  }

  function handleChange(
    expense: keyof typeof FINANCIAL_FREEDOM,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const removedLeadingZero = event.target.value.replace(/^0+/, "");

    switch (expense) {
      case FINANCIAL_FREEDOM.luxuryItemNum1:
        setFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum1: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_FREEDOM.luxuryItemNum1Label:
        setFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum1Label: event.target.value,
        }));
        break;
      case FINANCIAL_FREEDOM.luxuryItemNum2:
        setFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum2: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_FREEDOM.luxuryItemNum2Label:
        setFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum2Label: event.target.value,
        }));
        break;
      case FINANCIAL_FREEDOM.donation:
        setFinancialFreedom((prev) => ({
          ...prev,
          donation: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_FREEDOM.financialIndependenceNumber:
        setFinancialFreedom((prev) => ({
          ...prev,
          financialIndependenceNumber: Number(removedLeadingZero),
        }));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (financialIndependenceNumberIsPresent) {
      setFinancialFreedom((prev) => ({
        ...prev,
        financialIndependenceNumber: +Number(
          financialIndependence.totalForFinancialIndependence,
        ).toFixed(2),
      }));
    } else {
      setFinancialFreedom((prev) => ({
        ...prev,
        financialIndependenceNumber: 0,
      }));
    }
  }, [
    setFinancialFreedom,
    financialIndependence,
    financialIndependenceNumberIsPresent,
  ]);

  const calculationMessage = `You need ${formatCurrency(
    calculateYearly(
      Number(financialFreedom.totalForFinancialFreedom.toFixed(2)),
    ),
  )}€ per year to achieve Financial Freedom.`;

  return {
    financialFreedom,
    resetFiancialFreedom,
    handleSubmit,
    handleChange,
    calculationMessage,
  };
}
