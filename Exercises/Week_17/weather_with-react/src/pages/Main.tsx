import { useCallback, useState } from "react";
import { Input } from "../components/Input";
import { IResult } from "../types/opencage";
import { Weather } from "../components/Weather";
import { Map } from "../components/map";
import { ILeafletRes } from "../types/leaflet";

export const Main: React.FC = () => {
  const [dataServer, setDataServer] = useState<IResult[] | ILeafletRes[] | []>(
    []
  );
  const [disableClick , setDisableClick] = useState<boolean>(false)

  const dataLatAndLng = useCallback(async (data: IResult[] | ILeafletRes[]) => {
    // for animation when click on map
    setTimeout(() => {
      setDataServer(data);
    }, 700);
    setDisableClick(true)
    // for space between each click
    setTimeout(() => {
      setDisableClick(false)
    }, 1200)},[])
  return (
    <div className="min-h-screen bg-appblue ">
      <div className="max-w-[1600px] min-w-[330px] mx-auto border-2 border-white p-4">
        <Input cbData={dataLatAndLng} />
      </div>
      {dataServer.length > 0 && (
        <Weather
          formatted={
            "formatted" in dataServer[0] ? dataServer[0].formatted : undefined
          }
          geo={
            "geometry" in dataServer[0] ? dataServer[0].geometry : dataServer[0]
          }
        />
      )}
     <div className={`${disableClick ? "pointer-events-none" : "place-items-center"}`}>
     <Map
        geo={
          dataServer.length > 0 && "geometry" in dataServer[0] ? dataServer[0].geometry : dataServer.length > 0 ? dataServer[0] as ILeafletRes : undefined
        }
        formatted={
          dataServer.length > 0 && "formatted" in dataServer[0] ? dataServer[0].formatted : undefined
        }
        cbData={dataLatAndLng}
      />
     </div>
    </div>
  );
};
