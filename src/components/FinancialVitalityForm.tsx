"use client";
import { FinancialSecurityState, FinancialSecurityAction } from "@/types";
import { TextInput } from "./TextInput";
import { useReducer, ChangeEvent, Dispatch, FormEvent } from "react";
import { formatCurrency } from "@/utils";
import Link from "next/link";

const initialState: FinancialSecurityState = {
  rentOrMortgagePayment: 0,
  foodHousehold: 0,
  gasElectricWaterPhone: 0,
  transportation: 0,
  insurancePayments: 0,
  total: 0,
};

const financialSecurityReducer = (
  state: FinancialSecurityState,
  action: FinancialSecurityAction,
) => {
  switch (action.type) {
    case "UPDATE_RENT":
      return { ...state, rentOrMortgagePayment: action.payload };
    case "UPDATE_FOOD":
      return { ...state, foodHousehold: action.payload };
    case "UPDATE_GAS":
      return { ...state, gasElectricWaterPhone: action.payload };
    case "UPDATE_TRANSPORTATION":
      return { ...state, transportation: action.payload };
    case "UPDATE_INSURANCE":
      return { ...state, insurancePayments: action.payload };
    case "UPDATE_TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export const FinancialVitalityForm = () => {
  const [financialSecurity, dispatch] = useReducer(
    financialSecurityReducer,
    initialState,
  );

  const updateRent = (value: number) =>
    dispatch({ type: "UPDATE_RENT", payload: value });
  const updateFood = (value: number) =>
    dispatch({ type: "UPDATE_FOOD", payload: value });
  const updateGas = (value: number) =>
    dispatch({ type: "UPDATE_GAS", payload: value });
  const updateTransportation = (value: number) =>
    dispatch({ type: "UPDATE_TRANSPORTATION", payload: value });
  const updateInsurance = (value: number) =>
    dispatch({ type: "UPDATE_INSURANCE", payload: value });

  function calculateTotal() {
    const {
      rentOrMortgagePayment,
      foodHousehold,
      gasElectricWaterPhone,
      transportation,
      insurancePayments,
    } = financialSecurity;
    const total =
      rentOrMortgagePayment +
      foodHousehold +
      gasElectricWaterPhone +
      transportation +
      insurancePayments;
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
          value={financialSecurity.rentOrMortgagePayment}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateRent(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Half of your current monthly dining and entertainment costs"
          min={0}
          type="number"
          value={financialSecurity.foodHousehold}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateFood(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Half of your current small indulgence or little luxury costs"
          min={0}
          type="number"
          value={financialSecurity.gasElectricWaterPhone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateGas(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Total additional monthly income for vitality"
          min={0}
          type="number"
          value={financialSecurity.transportation}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateTransportation(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Monthly Financial Security number"
          min={0}
          type="number"
          value={financialSecurity.insurancePayments}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateInsurance(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Total Monthly Income Necessary for Vitality"
          min={0}
          type="number"
          value={financialSecurity.insurancePayments}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateInsurance(Number(removedLeadingZero));
          }}
        />
        <button
          type="submit"
          className="rounded-3xl bg-orange-500 px-5 py-2.5 text-slate-900"
        >
          Submit
        </button>
      </form>
      {financialSecurity.total > 0 ? (
        <div className="rounded-3xl bg-green-600 p-5 text-2xl text-white">
          {`${formatCurrency(Number(financialSecurity.total.toFixed(2)))} €`}
        </div>
      ) : null}
      {financialSecurity.total > 0 ? (
        <div className="flex w-full items-end justify-end">
          <Link
            href={"/financial-vitality"}
            className="rounded-3xl bg-orange-500 px-5 py-2.5 text-slate-900"
          >
            Next Level
          </Link>
        </div>
      ) : null}
    </>
  );
};
