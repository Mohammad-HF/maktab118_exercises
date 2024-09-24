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

export function FileInput({collectValue}:{collectValue : CollectValue}) : JSX.Element {
  const [file,setFile] = useState<string>("");
  const [mainFile,setMainFile] = useState<string>();
  const onChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (e)=>{
   if(e.target.files?.[0] && e.target.files[0].size <= 10000000) {
    setFile(e.target.files[0].name);
    collectValue(e.target.files[0].name);
   }else if(e.target.files?.[0] && e.target.files[0].size > 10000000){
    setFile("not valid");
    collectValue("");
   }
   e.target.files?.[0] && setMainFile(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className="w-full  mb-8">
      <label
        htmlFor="fileI"
        className={`w-full text-sm ${file ? "text-black" : "text-grayApp"} text-center border-2 border-dashed border-grayApp/70 px-8 py-8 inline-block`}
      >
        <img
          className={`${mainFile ? "size-8" : "size-5"} inline-block mr-3 align-middle `}
          src={mainFile ? mainFile : "./src/assets/upload.svg"}
          alt=""
        />
        {file ? file : "Upload Additional file"}
      </label>
      <input type="file" id="fileI" className="hidden" onChange={onChangeHandler} />
      <p className={` text-[10px] pt-2 ${file === "not valid" ? "text-red-500" : "text-grayPApp/50"}`}>
        Attach file. File size of your documents should not exceed 10MB
      </p>
    </div>
  );
}
