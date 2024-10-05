import { useEffect, useState } from "react";
import Alarm from "./Alarm";
import { getStorage, setStorage } from "../utils/storage-managment";

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
      editItem={(title: string, desc: string ,time : string, offAlarm? : boolean) => {
        editAlarm(index, title, desc, time , offAlarm);
      }}
    />
  ));
  const removeAlarm = (id: number) => {
    const list = alarmsList?.filter((_, index) => {return index !== id;});
    setAlarmsList(list);
    list && setStorage(list)
  };
  const editAlarm = (id: number, title: string, desc: string , time: string , isOff? : boolean) => {
    const list: IAllValues[] = [...alarmsList!];
    list[id].title = title;
    list[id].description = desc;
    list[id].time = time;
    list[id].isOff = isOff ? isOff : list[id].isOff;
    setAlarmsList(list);
    setStorage(list);
  };

  const onClickHandler = (id : number, auto : boolean = false,newlist? : IAllValues[])=>{
    if(id === 1 && (id !== sort || auto === true)){
      if(id !== sort) setSort(1)
      const newList2 = newlist ? newlist.sort((a,b)=>{ return a.title.localeCompare(b.title)}) 
       : alarmsList?.sort((a,b)=>{ return a.title.localeCompare(b.title) })
      setAlarmsList(newList2);
      newList2 && setStorage(newList2)
      
    } else if(id === 2 && (id !== sort || auto === true)){
      if(id !== sort) setSort(2)
      const newList2 = newlist ? newlist.sort((a,b)=>{ return a.time.localeCompare(b.time)}) 
      : alarmsList?.sort((a,b)=>{ return a.time.localeCompare(b.time) })
      setAlarmsList(newList2)
      newList2 && setStorage(newList2)
    }
  }

  // solution one
  //    if(alarmData && alarmData !== alarmsList?.[alarmsList.length -1])  setAlarmsList([...(alarmsList ? alarmsList : [] ) , alarmData])

  // solution two
  useEffect(() => {
    if(alarmData === undefined && alarmsList === undefined ) {
      setAlarmsList(getStorage());
    }
    if (alarmData){
      if(sort === 0){
        const newList : IAllValues[] = [...(alarmsList ? alarmsList : []), alarmData]
        setAlarmsList(newList);
        setStorage(newList);
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
