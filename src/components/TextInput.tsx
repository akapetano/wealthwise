import { FC, InputHTMLAttributes } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  wrapperClassName?: string;
  inputClassName?: string;
}

export const TextInput: FC<ITextInputProps> = ({
  label,
  wrapperClassName,
  inputClassName,
  ...rest
}) => {
  return (
    <div className={`mb-4 ${wrapperClassName}`}>
      {label && (
        <label className="mb-1 block text-slate-400" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input
        className={`outline-blue w-full rounded-3xl border border-slate-200/10 bg-white p-2.5 pr-14 text-black placeholder-slate-800 shadow outline-green-600 focus:bg-slate-100 ${inputClassName}`}
        {...rest}
      />
    </div>
  );
};
