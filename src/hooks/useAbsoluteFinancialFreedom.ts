import { FormEvent, ChangeEvent, useEffect } from "react";
import { ABSOLUTE_FINANCIAL_FREEDOM } from "@/constants";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { absoluteFinancialFreedomAtom } from "@/store/absolute-financial-freedom";
import { useFinancialFreedom } from "./useFinancialFreedom";
import { formatCurrency, calculateYearly } from "@/utils";

export function useAbsoluteFinancialFreedom() {
  const { financialFreedom } = useFinancialFreedom();
  const [absoluteFinancialFreedom, setAbsoluteFinancialFreedom] = useAtom(
    absoluteFinancialFreedomAtom,
  );
  const resetAbsoluteFiancialFreedom = useResetAtom(
    absoluteFinancialFreedomAtom,
  );

  const financialFreedomNumberIsPresent = Boolean(
    financialFreedom?.totalForFinancialFreedom &&
      financialFreedom?.totalForFinancialFreedom > 0,
  );

  function calculateTotal() {
    const {
      luxuryItemNum1,
      luxuryItemNum2,
      luxuryItemNum3,
      financialFreedomNumber,
    } = absoluteFinancialFreedom;
    const totalForAbsoluteFinancialFreedom =
      luxuryItemNum1 + luxuryItemNum2 + luxuryItemNum3 + financialFreedomNumber;
    setAbsoluteFinancialFreedom((prev) => ({
      ...prev,
      totalForAbsoluteFinancialFreedom,
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateTotal();
  }

  function handleChange(
    expense: keyof typeof ABSOLUTE_FINANCIAL_FREEDOM,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const removedLeadingZero = event.target.value.replace(/^0+/, "");

    switch (expense) {
      case ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum1:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum1: Number(removedLeadingZero),
        }));
        break;
      case ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum1Label:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum1Label: event.target.value,
        }));
        break;
      case ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum2:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum2: Number(removedLeadingZero),
        }));
        break;
      case ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum2Label:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum2Label: event.target.value,
        }));
        break;
      case ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum3:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum3: Number(removedLeadingZero),
        }));
        break;
      case ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum3Label:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          luxuryItemNum3Label: event.target.value,
        }));
        break;
      case ABSOLUTE_FINANCIAL_FREEDOM.financialFreedomNumber:
        setAbsoluteFinancialFreedom((prev) => ({
          ...prev,
          financialFreedomNumber: Number(removedLeadingZero),
        }));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (financialFreedomNumberIsPresent) {
      setAbsoluteFinancialFreedom((prev) => ({
        ...prev,
        financialFreedomNumber: +Number(
          financialFreedom.totalForFinancialFreedom,
        ).toFixed(2),
      }));
    } else {
      setAbsoluteFinancialFreedom((prev) => ({
        ...prev,
        financialFreedomNumber: 0,
      }));
    }
  }, [
    setAbsoluteFinancialFreedom,
    financialFreedom,
    financialFreedomNumberIsPresent,
  ]);

  const calculationMessage = `You need ${formatCurrency(
    calculateYearly(
      Number(
        absoluteFinancialFreedom.totalForAbsoluteFinancialFreedom.toFixed(2),
      ),
    ),
  )}€ per year to achieve financial security.`;

  return {
    absoluteFinancialFreedom,
    resetAbsoluteFiancialFreedom,
    handleSubmit,
    handleChange,
    calculationMessage,
  };
}
