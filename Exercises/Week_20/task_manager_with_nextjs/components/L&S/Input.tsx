"use client"
import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error?: string;
  value ? : string
}
export const Input: React.FC<IInputProps> = ({label,name,error,value, ...props}) => {
  const [inputValue ,setInputValue] = useState<string | undefined>(value);
  const changeHandler : ChangeEventHandler<HTMLInputElement> = (e)=>{
    setInputValue(e.target.value)
  }
  return (
  <>  
    <div className="flex flex-wrap gap-x-4">
        <label htmlFor={label} className="w-24 sm:32 font-semibold text-sm sm:text-base">{label} :</label>
        <input onChange={changeHandler} {...props} value={inputValue ? inputValue : ""} type="text" name={name} id={label} className="rounded-sm px-2 text-black"/>
    </div>
      {error && <p className="text-red-400">{error}</p>}
  </>
  );
};
