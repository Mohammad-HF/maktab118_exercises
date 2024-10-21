import { useState } from "react";
import { Input } from "../components/Input";
import { IResult } from "../types/opencage";
export const Main: React.FC = () => {
  const [dataServer , setDataServer] = useState<IResult[] | []>([])
  const dataLatAndLng = (data : IResult[])=>{
    setDataServer(data)
  }
  return (
    <div className="h-screen bg-appblue ">
      <div className="max-w-[1600px] mx-auto border-2 border-white p-4">
        <Input cbData={dataLatAndLng}/>
      </div>
      <div className="max-w-[1600px] mx-auto border-2 border-white p-4 mt-2">
        <h2 className="text-2xl font-semibold text-blue-950 border-b-2 pb-4">
          Result for : {dataServer[0]?.formatted}
        </h2>
      </div>
    </div>
  );
};
