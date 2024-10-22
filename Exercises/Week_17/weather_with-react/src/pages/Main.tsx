import { useState } from "react";
import { Input } from "../components/Input";
import { IResult } from "../types/opencage";
import { Weather } from "../components/Weather";
export const Main: React.FC = () => {
  const [dataServer, setDataServer] = useState<IResult[] | []>([]);

  const dataLatAndLng = async (data: IResult[]) => {
    setDataServer(data);
  };
  return (
    <div className="h-screen bg-appblue ">
      <div className="max-w-[1600px] min-w-[330px] mx-auto border-2 border-white p-4">
        <Input cbData={dataLatAndLng} />
      </div>
        {dataServer.length > 0 && <Weather formatted={dataServer[0].formatted} geo={dataServer[0].geometry}/>}
      </div>
  );
};
