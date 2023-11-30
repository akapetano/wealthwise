import { FormEvent, ChangeEvent, useEffect } from "react";
import { FINANCIAL_VITALITY } from "@/constants";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { financialVitalityAtom } from "@/store/financial-vitality";
import { useFinancialSecurity } from "./useFinancialSecurity";
import { formatCurrency, calculateYearly } from "@/utils";

export function useFinancialVitality() {
  const { financialSecurity } = useFinancialSecurity();
  const [financialVitality, setFinancialVitality] = useAtom(
    financialVitalityAtom,
  );
  const financialSecurityNumberIsPresent = Boolean(
    financialSecurity?.totalForFinancialSecurity &&
      financialSecurity?.totalForFinancialSecurity > 0,
  );
  const resetFiancialVitality = useResetAtom(financialVitalityAtom);

  function calculateTotal() {
    const {
      clothingCosts,
      diningAndEntertainmentCosts,
      smallIndulgenceOrLittleLuxuryCosts,
      additionalIncomeForVitality,
      financialSecurityNumber,
    } = financialVitality;
    const totalForFinancialVitality =
      clothingCosts +
      diningAndEntertainmentCosts +
      smallIndulgenceOrLittleLuxuryCosts +
      additionalIncomeForVitality +
      financialSecurityNumber;
    setFinancialVitality((prev) => ({ ...prev, totalForFinancialVitality }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateTotal();
  }

  function handleChange(
    expense: keyof typeof FINANCIAL_VITALITY,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const removedLeadingZero = event.target.value.replace(/^0+/, "");

    switch (expense) {
      case FINANCIAL_VITALITY.clothingCosts:
        setFinancialVitality((prev) => ({
          ...prev,
          clothingCosts: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_VITALITY.diningAndEntertainmentCosts:
        setFinancialVitality((prev) => ({
          ...prev,
          diningAndEntertainmentCosts: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_VITALITY.smallIndulgenceOrLittleLuxuryCosts:
        setFinancialVitality((prev) => ({
          ...prev,
          smallIndulgenceOrLittleLuxuryCosts: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_VITALITY.additionalIncomeForVitality:
        setFinancialVitality((prev) => ({
          ...prev,
          additionalIncomeForVitality: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_VITALITY.financialSecurityNumber:
        setFinancialVitality((prev) => ({
          ...prev,
          financialSecurityNumber: Number(removedLeadingZero),
        }));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (financialSecurityNumberIsPresent) {
      setFinancialVitality((prev) => ({
        ...prev,
        financialSecurityNumber: +Number(
          financialSecurity.totalForFinancialSecurity,
        ).toFixed(2),
      }));
    } else {
      setFinancialVitality((prev) => ({
        ...prev,
        financialSecurityNumber: 0,
      }));
    }
  }, [
    setFinancialVitality,
    financialSecurity,
    financialSecurityNumberIsPresent,
  ]);

  const calculationMessage = `You need ${formatCurrency(
    calculateYearly(
      Number(financialVitality.totalForFinancialVitality.toFixed(2)),
    ),
  )}€ per year to achieve Financial Vitality!`;

  return {
    financialVitality,
    financialSecurityNumberIsPresent,
    resetFiancialVitality,
    handleSubmit,
    handleChange,
    calculationMessage,
  };
}
