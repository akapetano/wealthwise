"use client";

import { Input } from "../core/Input";
import { NestedInput } from "../core/NestedInput";
import { ChangeEvent } from "react";
import Link from "next/link";
import { FINANCIAL_FREEDOM } from "@/constants";
import { useFinancialFreedom } from "@/hooks/useFinancialFreedom";

export const FinancialFreedomForm = () => {
  const {
    financialFreedom,
    resetFiancialFreedom,
    handleChange,
    handleSubmit,
    calculationMessage,
  } = useFinancialFreedom();

  return (
    <div className="w-full">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <NestedInput
          labelValue={financialFreedom.luxuryItemNum1Label}
          onLabelChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_FREEDOM.luxuryItemNum1Label, event);
          }}
          min={0}
          type="number"
          value={financialFreedom.luxuryItemNum1}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_FREEDOM.luxuryItemNum1, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
        />
        <NestedInput
          labelValue={financialFreedom.luxuryItemNum2Label}
          onLabelChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_FREEDOM.luxuryItemNum2Label, event);
          }}
          min={0}
          type="number"
          value={financialFreedom.luxuryItemNum2}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_FREEDOM.luxuryItemNum2, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
        />
        <Input
          label="Donation"
          min={0}
          type="number"
          value={financialFreedom.donation}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_FREEDOM.donation, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
        />
        <Input
          label="Financial Independence Number"
          min={0}
          type="number"
          value={financialFreedom.financialIndependenceNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_FREEDOM.financialIndependenceNumber, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
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
      {financialFreedom.totalForFinancialFreedom > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">{calculationMessage}</p>
          <div className="flex w-full items-center justify-between">
            <button
              className="rounded-3xl border border-slate-900 px-5 py-2.5 text-slate-900 hover:border-orange-500 hover:bg-orange-500"
              onClick={resetFiancialFreedom}
            >
              Reset
            </button>
            <Link
              href={"/absolute-financial-freedom"}
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
