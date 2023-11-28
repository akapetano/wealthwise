"use client";
import { FinancialSecurityState, FinancialSecurityAction } from "@/types";
import { TextInput } from "./TextInput";
import { useReducer, ChangeEvent, Dispatch, FormEvent } from "react";
import { formatCurrency } from "@/utils";
import Link from "next/link";
import { calculateYearly } from "@/utils";

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

export const FinancialSecurityForm = () => {
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
    <div className="w-full max-w-lg">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <TextInput
          label="Rent or mortgage payment"
          min={0}
          type="number"
          value={financialSecurity.rentOrMortgagePayment}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateRent(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Food, household"
          min={0}
          type="number"
          value={financialSecurity.foodHousehold}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateFood(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Gas, electric, water, phone"
          min={0}
          type="number"
          value={financialSecurity.gasElectricWaterPhone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateGas(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Transportation"
          min={0}
          type="number"
          value={financialSecurity.transportation}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const removedLeadingZero = event.target.value.replace(/^0+/, "");
            updateTransportation(Number(removedLeadingZero));
          }}
        />
        <TextInput
          label="Insurance Payments"
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
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">
            {`You need ${formatCurrency(
              calculateYearly(Number(financialSecurity.total.toFixed(2))),
            )}€ per year to achieve financial security.`}
          </p>

          <Link
            href={"/financial-vitality"}
            className="rounded-3xl bg-orange-500 px-5 py-2.5 text-slate-900"
          >
            Next Level
          </Link>
        </div>
      ) : null}
    </div>
  );
};
