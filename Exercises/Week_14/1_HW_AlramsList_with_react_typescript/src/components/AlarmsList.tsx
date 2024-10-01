import { useEffect, useState } from "react";
import Alarm from "./Alarm";

export default function AlarmsList({alarmData}: {alarmData: IAllValues | undefined}) {
  const [alarmsList, setAlarmsList] = useState<IAllValues[]>();
  const alarmsEl = alarmsList?.map((alarm, index) => (
    <Alarm
      key={index}
      {...alarm}
      removeItem={() => {
        removeAlarm(index);
      }}
      editItem={(title: string, desc: string) => {
        editAlarm(index, title, desc);
      }}
    />
  ));
  const removeAlarm = (id: number) => {
    setAlarmsList(
      alarmsList?.filter((_, index) => {
        return index !== id;
      })
    );
  };
  const editAlarm = (id: number, title: string, desc: string) => {
    const list: IAllValues[] = [...alarmsList!];
    list[id].title = title;
    list[id].description = desc;
    setAlarmsList(list);
  };

  // solution one
  //    if(alarmData && alarmData !== alarmsList?.[alarmsList.length -1])  setAlarmsList([...(alarmsList ? alarmsList : [] ) , alarmData])

  // solution two
  useEffect(() => {
    if (alarmData)
      setAlarmsList([...(alarmsList ? alarmsList : []), alarmData]);
  }, [alarmData]);
  return (
    <div className="grid gap-y-7 bg-skyBlueApp border-2 border-white rounded-md">
      <div className=" flex text-2xl font-bold border-b-2 border-b-white">
        <h2 className="py-4 border-r-2 px-7 grow">Title of Alarms</h2>
        <h2 className="py-4 border-r-2 px-7 ">Alarm At</h2>
        <h2 className="py-4 pr-14 pl-7">Operation</h2>
      </div>
      <div className="grid gap-y-4">{!!alarmsEl && alarmsEl}</div>
    </div>
  );
}
