import { useState } from "react";

export default function FileInput({collectValue}:{collectValue : CollectValue}) : JSX.Element {
    const [file,setFile] = useState<string>("");
    const [srcFile,setSrcFile] = useState<string>();
    const [borderC,setBorderC] = useState<string>("border-gray-400/70");
    const onChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (e)=>{
     if(e.target.files?.[0] && e.target.files[0].size <= 10000000) {
      setFile(e.target.files[0].name);
      collectValue(e.target.files[0].name);
      setBorderC("border-green-400/70");
     }else if(e.target.files?.[0] && e.target.files[0].size > 10000000){
      setFile("not valid");
      collectValue("");
      setBorderC("border-red-400/70")
     }
     if (e.target.files?.[0] && e.target.files?.[0].type.includes("image")) {
      setSrcFile(URL.createObjectURL(e.target.files[0]))
     }else if(e.target.files?.[0] ) setSrcFile("./src/assets/file-check.svg")
     
    }
    const removeFile : React.MouseEventHandler<HTMLImageElement> = (e)=>{
      e.preventDefault();
      setFile("");
      setSrcFile("");
      collectValue("");
      setBorderC("border-gray-400/70");
    }
    return (
      <div className="w-full  mb-8">
        <label
          htmlFor="fileI"
          className={`w-full text-sm ${file ? "text-black" : "text-grayApp"} text-center border-2 border-dashed ${borderC} px-8 py-8 inline-block`}
        >
          <img
            className={`${srcFile ? "size-10" : "size-5"} inline-block mr-3 align-middle ${file ==="not valid" && "hidden"}`}
            src={srcFile ? srcFile : "./src/assets/upload.svg"}
            alt=""
          />
          {file ? file : "Upload Additional file"}
          {file && <img className="size-6 inline-block pl-1 cursor-pointer" src="./src/assets/delete.svg" alt="" title="remove" onClick={removeFile}/>}
        </label>
        <input type="file" id="fileI" className="hidden" onChange={onChangeHandler} />
        <p className={` text-[10px] pt-2 ${file === "not valid" ? "text-red-500" : "text-grayPApp/50"}`}>
          Attach file. File size of your documents should not exceed 10MB
        </p>
      </div>
    );
  }