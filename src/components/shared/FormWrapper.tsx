import Link from "next/link";
import { FC, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

interface IFormWrapperProps {
  children: ReactNode;
  title: string;
  description?: string;
  prevLevelUrl?: string;
  nextLevelUrl?: string;
}

export const FormWrapper: FC<IFormWrapperProps> = ({
  children,
  title,
  description,
  prevLevelUrl,
  nextLevelUrl,
}) => {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center px-5 py-10 lg:p-24">
      <div className="flex w-full items-center justify-between gap-5">
        {prevLevelUrl && (
          <Link
            href={prevLevelUrl}
            className="rounded-full bg-orange-500 p-2.5 text-xs text-slate-900 hover:opacity-70"
          >
            <ArrowLeft />
          </Link>
        )}
        <h1 className="text-center text-4xl font-bold text-slate-200">
          {title}
        </h1>
        {nextLevelUrl && (
          <Link
            href={nextLevelUrl}
            className="rounded-full bg-orange-500 p-2.5 text-xs text-slate-900 hover:opacity-70"
          >
            <ArrowRight />
          </Link>
        )}
      </div>
      <p className="my-5 text-left text-lg text-slate-200">{description}</p>
      {children}
    </main>
  );
};
