"use client";

import { Input } from "../core/Input";
import { NestedInput } from "../core/NestedInput";
import { ChangeEvent } from "react";
import { ABSOLUTE_FINANCIAL_FREEDOM } from "@/constants";
import { useAbsoluteFinancialFreedom } from "@/hooks/useAbsoluteFinancialFreedom";

export const AbsoluteFinancialFreedomForm = () => {
  const {
    absoluteFinancialFreedom,
    resetAbsoluteFiancialFreedom,
    handleChange,
    handleSubmit,
    calculationMessage,
  } = useAbsoluteFinancialFreedom();

  return (
    <div className="w- w-full">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <NestedInput
          labelValue={absoluteFinancialFreedom.luxuryItemNum1Label}
          onLabelChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum1Label, event);
          }}
          min={0}
          type="number"
          value={absoluteFinancialFreedom.luxuryItemNum1}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum1, event);
          }}
          wrapperClassName="w-full flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
        />
        <NestedInput
          labelValue={absoluteFinancialFreedom.luxuryItemNum2Label}
          onLabelChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum2Label, event);
          }}
          min={0}
          type="number"
          value={absoluteFinancialFreedom.luxuryItemNum2}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum2, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
        />
        <NestedInput
          labelValue={absoluteFinancialFreedom.luxuryItemNum3Label}
          onLabelChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum3Label, event);
          }}
          min={0}
          type="number"
          value={absoluteFinancialFreedom.luxuryItemNum3}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(ABSOLUTE_FINANCIAL_FREEDOM.luxuryItemNum3, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-4/6"
          inputClassName="w-2/6"
        />
        <Input
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
      {absoluteFinancialFreedom.totalForAbsoluteFinancialFreedom > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">{calculationMessage}</p>
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
