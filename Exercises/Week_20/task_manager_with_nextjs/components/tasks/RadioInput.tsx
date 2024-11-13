"use client"
import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

interface IRadioInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  select: string[];
  error?: string;
  value?: string;
}
export const RadioInput: React.FC<IRadioInputProps> = ({
  label,
  name,
  error,
  select,
  value,
  ...props
}) => {
  const [inputValue , setInputValue] = useState<string | undefined>(value);
  const changeHandler : ChangeEventHandler<HTMLInputElement> = (e)=>{
    setInputValue(e.target.value);
  }
  return (
    <>
      <div className="flex">
        <label className="w-36 text-sm sm:text-base font-semibold">
          {label} :
        </label>
        <div className="flex flex-wrap gap-x-3">
          {select.map((item, index) => {
            return (
              <div key={index} className="flex gap-x-1">
                <label htmlFor={item}>{item}</label>
                <input
                onChange={changeHandler}
                  {...props}
                  type="radio"
                  name={name}
                  value={item}
                  id={item}
                  checked={inputValue === item ? true : false}
                ></input>
              </div>
            );
          })}
        </div>
      </div>
      {error && <p className="text-red-500 font-semibold">{error}</p>}
    </>
  );
};
