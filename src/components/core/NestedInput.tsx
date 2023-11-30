import { FC, InputHTMLAttributes, ChangeEvent } from "react";
import { Input } from "./Input";

interface INestedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelValue?: string;
  onLabelChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export const NestedInput: FC<INestedInputProps> = ({
  labelValue,
  onLabelChange,
  wrapperClassName = "",
  labelClassName = "",
  inputClassName = "",
  ...rest
}) => {
  return (
    <div className={`mb-4 ${wrapperClassName}`}>
      <label className={`block ${labelClassName}`} htmlFor={rest.id}>
        <Input
          type="text"
          value={labelValue}
          onChange={onLabelChange}
          wrapperClassName="!mb-0"
        />
      </label>

      <input
        className={`outline-blue w-full rounded-3xl border border-slate-200/10 bg-white p-2.5 pr-14 text-black placeholder-slate-800 shadow outline-green-600 focus:bg-slate-100 ${inputClassName}`}
        {...rest}
      />
    </div>
  );
};
