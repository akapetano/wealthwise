"use client";
import { FinancialVitalityState, FinancialVitalityAction } from "@/types";
import { TextInput } from "./TextInput";
import { useReducer, ChangeEvent, Dispatch, FormEvent } from "react";
import { formatCurrency } from "@/utils";
import Link from "next/link";
import { calculateYearly } from "@/utils";

const initialState: FinancialVitalityState = {
  clothingCosts: 0,
  diningAndEntertainmentCosts: 0,
  smallIndulgenceOrLittleLuxuryCosts: 0,
  additionalIncomeForVitality: 0,
  financialSecurityNumber: 0,
  total: 0,
};

const financialSecurityReducer = (
  state: FinancialVitalityState,
  action: FinancialVitalityAction,
) => {
  switch (action.type) {
    case "UPDATE_CLOTHING":
      return { ...state, clothingCosts: action.payload };
    case "UPDATE_DINING_AND_ENTERTAINMENT":
      return { ...state, diningAndEntertainmentCosts: action.payload };
    case "UPDATE_SMALL_INDULGENCE_OR_LUXURY":
      return { ...state, smallIndulgenceOrLittleLuxuryCosts: action.payload };
    case "UPDATE_ADDITIONAL_MONTHLY_INCOME_FOR_VITALITY":
      return { ...state, additionalIncomeForVitality: action.payload };
    case "UPDATE_FINANCIAL_SECURITY_NUMBER":
      return { ...state, financialSecurityNumber: action.payload };
    case "UPDATE_TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export const FinancialVitalityForm = () => {
  const [financialVitality, dispatch] = useReducer(
    financialSecurityReducer,
    initialState,
  );

  const updateClothingCosts = (value: number) =>
    dispatch({ type: "UPDATE_CLOTHING", payload: value });
  const updateDiningAndEntertainment = (value: number) =>
    dispatch({ type: "UPDATE_DINING_AND_ENTERTAINMENT", payload: value });
  const updateSmallIndulgenceOrLittleLuxuryCosts = (value: number) =>
    dispatch({ type: "UPDATE_SMALL_INDULGENCE_OR_LUXURY", payload: value });
  const updateAdditionalMonthlyIncomeForVitality = (value: number) =>
    dispatch({
      type: "UPDATE_ADDITIONAL_MONTHLY_INCOME_FOR_VITALITY",
      payload: value,
    });
  const updateFinancialSecurityNumber = (value: number) =>
    dispatch({ type: "UPDATE_FINANCIAL_SECURITY_NUMBER", payload: value });

  function calculateTotal() {
    const {
      clothingCosts,
      diningAndEntertainmentCosts,
      smallIndulgenceOrLittleLuxuryCosts,
      additionalIncomeForVitality,
      financialSecurityNumber,
    } = financialVitality;
    const total =
      clothingCosts +
      diningAndEntertainmentCosts +
      smallIndulgenceOrLittleLuxuryCosts +
      additionalIncomeForVitality +
      financialSecurityNumber;
    dispatch({ type: "UPDATE_TOTAL", payload: total });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateTotal();
  }

  return (
    <>
      <form className="mt-5 w-full max-w-lg" onSubmit={handleSubmit}>
        <TextInput
          label="Half of your current monthly clothing costs"
          min={0}
          type="number"
          value={financialVitality.clothingCosts}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateClothingCosts(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Half of your current monthly dining and entertainment costs"
          min={0}
          type="number"
          value={financialVitality.diningAndEntertainmentCosts}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateDiningAndEntertainment(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Half of your current small indulgence or little luxury costs"
          min={0}
          type="number"
          value={financialVitality.smallIndulgenceOrLittleLuxuryCosts}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateSmallIndulgenceOrLittleLuxuryCosts(
              Number(removedLeadingZero),
            );
          }}
        />
        <TextInput
          label="Total additional monthly income for vitality"
          min={0}
          type="number"
          value={financialVitality.additionalIncomeForVitality}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateAdditionalMonthlyIncomeForVitality(
              Number(removedLeadingZero),
            );
          }}
        />
        <TextInput
          label="Monthly Financial Security number"
          min={0}
          type="number"
          value={financialVitality.financialSecurityNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateFinancialSecurityNumber(Number(removedLeadingZero));
          }}
        />

        <button
          type="submit"
          className="rounded-3xl bg-orange-500 px-5 py-2.5 text-slate-900 hover:opacity-70"
        >
          Submit
        </button>
      </form>
      {financialVitality.total > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">
            {`You need ${formatCurrency(
              calculateYearly(Number(financialVitality.total.toFixed(2))),
            )}€ for Financial Vitality!`}
          </p>

          <Link
            href={"/financial-independence"}
            className="rounded-3xl bg-orange-500 px-5 py-2.5 text-slate-900 hover:opacity-70"
          >
            Next Level
          </Link>
        </div>
      ) : null}
    </>
  );
};
