import { ReactNode, useState } from "react";

export default function Input({ info }: { info: IData }) : ReactNode {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (info.validator(e.target.value)) {
      setError(()=> info.validator(e.target.value) as string)
        info.collectValue("")
    } else {
      setError("");
       info.collectValue(e.target.value);
    }
    
    // !error ? info.collectValue(e.target.value) : info.collectValue("");
    setValue(e.target.value);
     console.log(e.target.value);
   
  };
  return (
    <div
      className={`pb-8 w-full  ${info.maxW ? "inline-block " + info.maxW : ""} max-lg:max-w-full`}
    >
      <input
        className={`border-b border-b-grayApp px-3 py-2 text-sm w-full `}
        key={info.id}
        type={info.type}
        placeholder={info.placeholder}
        onChange={onChangeHandler}
        value={value}
      />
      <p className={`text-sm text-red-500 pt-2 ${error ? "" : "hidden"}`}>
        {error}
      </p>
    </div>
  );
}


