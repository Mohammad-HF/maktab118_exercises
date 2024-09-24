import { ReactNode } from "react";

export default function Button({disableChange = false , children ,data}:{disableChange? : boolean , children : ReactNode,data?: string}) {
  const onClickHandler : React.MouseEventHandler<HTMLButtonElement> = ()=>{
    console.log(data);
    
  }
  return (
    <button
      className={`w-full font-semibold text-sm px-3 ${children === "submit" ? "py-3" : "py-[6px]"} bg-green-600 text-white disabled:bg-gray-400 rounded-md`}
      disabled={disableChange}
      onClick={data ? onClickHandler : undefined}
    >
      {children}
    </button>
  );
}
