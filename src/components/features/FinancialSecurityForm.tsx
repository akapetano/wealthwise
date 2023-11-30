"use client";

import { TextInput } from "../core/TextInput";
import { ChangeEvent } from "react";
import { formatCurrency } from "@/utils";
import Link from "next/link";
import { calculateYearly } from "@/utils";
import { FINANCIAL_SECURITY } from "@/constants";
import { useFinancialSecurity } from "@/hooks/useFinancialSecurity";

export const FinancialSecurityForm = () => {
  const {
    financialSecurity,
    resetFiancialSecurity,
    handleChange,
    handleSubmit,
  } = useFinancialSecurity();

  return (
    <div className="w-full">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <TextInput
          label="Rent or mortgage payment"
          min={0}
          type="number"
          value={financialSecurity.rentOrMortgagePayment}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_SECURITY.rentOrMortgagePayment, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <TextInput
          label="Food, household"
          min={0}
          type="number"
          value={financialSecurity.foodHousehold}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_SECURITY.foodHousehold, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <TextInput
          label="Gas, electric, water, phone"
          min={0}
          type="number"
          value={financialSecurity.gasElectricWaterPhone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_SECURITY.gasElectricWaterPhone, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <TextInput
          label="Transportation"
          min={0}
          type="number"
          value={financialSecurity.transportation}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_SECURITY.transportation, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <TextInput
          label="Insurance Payments"
          min={0}
          type="number"
          value={financialSecurity.insurancePayments}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_SECURITY.insurancePayments, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <div className="flex w-full items-center justify-center">
          <button
            type="submit"
            className="mt-2.5 w-full rounded-3xl bg-orange-500 px-5 py-2.5 text-lg text-slate-900 hover:opacity-70 lg:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
      {financialSecurity.totalForFinancialSecurity > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">
            {`You need ${formatCurrency(
              calculateYearly(
                Number(financialSecurity.totalForFinancialSecurity.toFixed(2)),
              ),
            )}€ per year to achieve Financial Security.`}
          </p>
          <div className="flex w-full items-center justify-between">
            <button
              className="rounded-3xl border border-slate-900 px-5 py-2.5 text-slate-900 hover:border-orange-500 hover:bg-orange-500"
              onClick={resetFiancialSecurity}
            >
              Reset
            </button>
            <Link
              href={"/financial-vitality"}
              className="rounded-3xl bg-orange-500 px-5 py-2.5 text-slate-900 hover:opacity-70"
            >
              Next Level
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
