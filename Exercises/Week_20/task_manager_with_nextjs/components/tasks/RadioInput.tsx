"use client"
import {DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

interface IRadioInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  select: string[];
  error?: string;
}
export const RadioInput: React.FC<IRadioInputProps> = ({
  label,
  error,
  value,
  select,
  ...props
}) => {
  // const [inputValue , setInputValue] = useState<string | undefined>(value);
  // const changeHandler : ChangeEventHandler<HTMLInputElement> = (e)=>{
  //   setInputValue(e.target.value);
  // }
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
                  {...props}
                  type="radio"
                  value={item}
                  id={item}
                  checked={value === item ? true : false}
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
