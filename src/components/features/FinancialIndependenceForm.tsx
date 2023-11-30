"use client";

import { Input } from "../core/Input";
import { ChangeEvent } from "react";
import Link from "next/link";
import { useFinancialIndependence } from "@/hooks/useFinancialIndependence";
import { FINANCIAL_INDEPENDENCE } from "@/constants";

export const FinancialIndependenceForm = () => {
  const {
    financialIndependence,
    resetFinancialIndependence,
    handleChange,
    handleSubmit,
    calculationMessage,
  } = useFinancialIndependence();

  return (
    <div className="w-full">
      <form className="mt-5 w-full" onSubmit={handleSubmit}>
        <Input
          label="Financial Independence number"
          min={0}
          type="number"
          value={financialIndependence.totalForFinancialIndependence}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(
              FINANCIAL_INDEPENDENCE.totalForFinancialIndependence,
              event,
            );
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
      {financialIndependence.totalForFinancialIndependence > 0 ? (
        <div className="my-10 flex flex-col items-center justify-center gap-5 rounded-3xl bg-green-600 p-5 text-white">
          <p className="text-2xl">{calculationMessage}</p>
          <div className="flex w-full items-center justify-between">
            <button
              className="rounded-3xl border border-slate-900 px-5 py-2.5 text-slate-900 hover:border-orange-500 hover:bg-orange-500"
              onClick={resetFinancialIndependence}
            >
              Reset
            </button>
            <Link
              href={"/financial-freedom"}
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
