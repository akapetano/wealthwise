"use client";

import { Input } from "../core/Input";
import { ChangeEvent } from "react";
import Link from "next/link";
import { useFinancialVitality } from "@/hooks/useFinancialVitality";
import { FINANCIAL_VITALITY } from "@/constants";

export const FinancialVitalityForm = () => {
  const {
    financialVitality,
    resetFiancialVitality,
    handleChange,
    handleSubmit,
    calculationMessage,
  } = useFinancialVitality();

  return (
    <div className="w-full">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <Input
          label="Half of your current monthly clothing costs"
          min={0}
          type="number"
          value={financialVitality.clothingCosts}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_VITALITY.clothingCosts, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <Input
          label="Half of your current monthly dining and entertainment costs"
          min={0}
          type="number"
          value={financialVitality.diningAndEntertainmentCosts}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_VITALITY.diningAndEntertainmentCosts, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <Input
          label="Half of your current small indulgence or little luxury costs"
          min={0}
          type="number"
          value={financialVitality.smallIndulgenceOrLittleLuxuryCosts}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(
              FINANCIAL_VITALITY.smallIndulgenceOrLittleLuxuryCosts,
              event,
            );
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <Input
          label="Total additional monthly income for vitality"
          min={0}
          type="number"
          value={financialVitality.additionalIncomeForVitality}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_VITALITY.additionalIncomeForVitality, event);
          }}
          wrapperClassName="flex items-center gap-5"
          labelClassName="w-3/5"
          inputClassName="w-2/5"
        />
        <Input
          label="Monthly Financial Security number"
          min={0}
          type="number"
          value={financialVitality.financialSecurityNumber}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(FINANCIAL_VITALITY.financialSecurityNumber, event);
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
      {financialVitality.totalForFinancialVitality > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">{calculationMessage}</p>
          <div className="flex w-full items-center justify-between">
            <button
              className="rounded-3xl border border-slate-900 px-5 py-2.5 text-slate-900 hover:border-orange-500 hover:bg-orange-500"
              onClick={resetFiancialVitality}
            >
              Reset
            </button>
            <Link
              href={"/financial-independence"}
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
