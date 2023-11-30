"use client";

import { TextInput } from "../core/TextInput";
import { ChangeEvent } from "react";
import { formatCurrency } from "@/utils";
import Link from "next/link";
import { calculateYearly } from "@/utils";
import { ABSOLUTE_FINANCIAL_FREEDOM } from "@/constants";
import { useAbsoluteFinancialFreedom } from "@/hooks/useAbsoluteFinancialFreedom";

export const AbsoluteFinancialFreedomForm = () => {
  const {
    absoluteFinancialFreedom,
    resetAbsoluteFiancialFreedom,
    handleChange,
    handleSubmit,
  } = useAbsoluteFinancialFreedom();

  return (
    <div className="w-full">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <TextInput
          label="Luxury Item #1 per month"
          min={0}
          type="number"
          value={absoluteFinancialFreedom.luxuryItemNum1}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum1, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/4"
          inputClassName="w-1/4"
        />
        <TextInput
          label="Luxury Item #2 per month"
          min={0}
          type="number"
          value={absoluteFinancialFreedom.luxuryItemNum2}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum2, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/4"
          inputClassName="w-1/4"
        />
        <TextInput
          label="Luxury Item #3 per month"
          min={0}
          type="number"
          value={absoluteFinancialFreedom.luxuryItemNum3}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum3, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/4"
          inputClassName="w-1/4"
        />
        <TextInput
          label="Financial Freedom Number"
          min={0}
          type="number"
          value={absoluteFinancialFreedom.financialFreedomNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(
              ABSOLUTE_FINANCIAL_FREEDOM.financialFreedomNumber,
              event,
            );
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/4"
          inputClassName="w-1/4"
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
      {absoluteFinancialFreedom.totalForAbsoluteFinancialFreedom > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">
            {`You need ${formatCurrency(
              calculateYearly(
                Number(
                  absoluteFinancialFreedom.totalForAbsoluteFinancialFreedom.toFixed(
                    2,
                  ),
                ),
              ),
            )}€ per year to achieve financial security.`}
          </p>
          <div className="flex w-full items-center justify-between">
            <button
              className="rounded-3xl border border-slate-900 px-5 py-2.5 text-slate-900 hover:border-orange-500 hover:bg-orange-500"
              onClick={resetAbsoluteFiancialFreedom}
            >
              Reset
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
