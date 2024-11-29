"use client"

import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label : string
}
export const Input : React.FC<IInput> = ({label , ...props})=>{
    
    return  <div className="flex flex-col">
        <label htmlFor="">{label}:</label>
        <input {...props} type="text" className="rounded-md"/>
    </div>
}