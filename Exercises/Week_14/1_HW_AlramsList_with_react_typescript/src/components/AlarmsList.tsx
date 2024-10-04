import { useEffect, useState } from "react";
import Alarm from "./Alarm";

export default function AlarmsList({alarmData}: {alarmData: IAllValues | undefined}) {
  const [alarmsList, setAlarmsList] = useState<IAllValues[]>();
  const [sort , setSort] = useState<number>(0);
  const alarmsEl = alarmsList?.map((alarm, index) => (
    <Alarm
      key={alarm.id}
      {...alarm}
      removeItem={() => {
        removeAlarm(index);
      }}
      editItem={(title: string, desc: string ,time : string) => {
        editAlarm(index, title, desc, time);
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
  const editAlarm = (id: number, title: string, desc: string , time: string) => {
    const list: IAllValues[] = [...alarmsList!];
    list[id].title = title;
    list[id].description = desc;
    list[id].time = time
    setAlarmsList(list);
  };

  const onClickHandler = (id : number, auto : boolean = false,newlist? : IAllValues[])=>{
    if(id === 1 && (id !== sort || auto === true)){
      if(id !== sort) setSort(1)
      const newList2 = newlist ? newlist.sort((a,b)=>{ return a.title.localeCompare(b.title)}) 
       : alarmsList?.sort((a,b)=>{ return a.title.localeCompare(b.title) })
      setAlarmsList(newList2);
      
    } else if(id === 2 && (id !== sort || auto === true)){
      if(id !== sort) setSort(2)
      const newList2 = newlist ? newlist.sort((a,b)=>{ return a.time.localeCompare(b.time)}) 
      : alarmsList?.sort((a,b)=>{ return a.time.localeCompare(b.time) })
      setAlarmsList(newList2)
    }
  }

  // solution one
  //    if(alarmData && alarmData !== alarmsList?.[alarmsList.length -1])  setAlarmsList([...(alarmsList ? alarmsList : [] ) , alarmData])

  // solution two
  useEffect(() => {
    if (alarmData){
      if(sort === 0){
        setAlarmsList([...(alarmsList ? alarmsList : []), alarmData]);
      }else {
        const newList : IAllValues[] = [...(alarmsList ? alarmsList : [])]
        newList.push(alarmData)
        onClickHandler(sort,true,newList)
      }
    }
  }, [alarmData]);
  return (
    <div className="grid gap-y-7 bg-skyBlueApp border-2 border-white rounded-md min-w-[288px]">
      <div className=" flex text-xl max-sm:text-base  font-bold border-b-2 border-b-white">
       <div className={`py-4 border-r-2 px-7 max-sm:px-3 grow ${sort !== 1 && "cursor-pointer hover:bg-blue-500" } `} onClick={()=>{onClickHandler(1)}}>
        <h2 className="inline-block">Title of Alarms</h2>
        <img className={`size-7 max-sm:size-5 align-bottom ml-3 fill-white ${sort === 1 ? "inline-block" : "hidden"}`} src="./src/assets/up-arrow.svg" alt="" />
        </div> 
       <div className={`py-4 border-r-2 px-7 max-sm:px-3 ${sort !== 2 && "cursor-pointer hover:bg-blue-500" } `} onClick={()=>{onClickHandler(2)}}>
        <h2 className="inline-block ">Alarm At</h2>
        <img className={`size-7 max-sm:size-5 align-bottom ml-3 fill-white ${sort === 2 ? "inline-block" : "hidden"}`} src="./src/assets/up-arrow.svg" alt="" />
        </div> 
       <div className="py-4 pr-14 pl-7 max-sm:px-3">
        <h2 className="">Operation</h2>
        <img src="" alt="" />
        </div> 
      </div>
      <div className="grid gap-y-4">{!!alarmsEl && alarmsEl}</div>
    </div>
  );
}
