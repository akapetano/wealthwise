import { FormEvent, ChangeEvent } from "react";
import { FINANCIAL_SECURITY } from "@/constants";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { financialSecurityAtom } from "@/store/financial-security";

export function useFinancialSecurity() {
  const [financialSecurity, setFinancialSecurity] = useAtom(
    financialSecurityAtom,
  );
  const resetFiancialSecurity = useResetAtom(financialSecurityAtom);

  function calculateTotal() {
    const {
      rentOrMortgagePayment,
      foodHousehold,
      gasElectricWaterPhone,
      transportation,
      insurancePayments,
    } = financialSecurity;
    const totalForFinancialSecurity =
      rentOrMortgagePayment +
      foodHousehold +
      gasElectricWaterPhone +
      transportation +
      insurancePayments;
    setFinancialSecurity((prev) => ({ ...prev, totalForFinancialSecurity }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateTotal();
  }

  function handleChange(
    expense: keyof typeof FINANCIAL_SECURITY,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const removedLeadingZero = event.target.value.replace(/^0+/, "");

    switch (expense) {
      case FINANCIAL_SECURITY.rentOrMortgagePayment:
        setFinancialSecurity((prev) => ({
          ...prev,
          rentOrMortgagePayment: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_SECURITY.foodHousehold:
        setFinancialSecurity((prev) => ({
          ...prev,
          foodHousehold: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_SECURITY.gasElectricWaterPhone:
        setFinancialSecurity((prev) => ({
          ...prev,
          gasElectricWaterPhone: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_SECURITY.transportation:
        setFinancialSecurity((prev) => ({
          ...prev,
          transportation: Number(removedLeadingZero),
        }));
        break;
      case FINANCIAL_SECURITY.insurancePayments:
        setFinancialSecurity((prev) => ({
          ...prev,
          insurancePayments: Number(removedLeadingZero),
        }));
        break;

      default:
        break;
    }
  }

  return {
    financialSecurity,
    resetFiancialSecurity,
    handleSubmit,
    handleChange,
  };
}
