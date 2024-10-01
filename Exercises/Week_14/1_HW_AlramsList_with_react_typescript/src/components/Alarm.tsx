import { useState } from "react";
import Edit from "./Edit";

export default function Alarm({title,description,time,removeItem,editItem}: IAllValues & { removeItem: RemoveItem , editItem : EditItem}) {
  const [showModal, setShowModal] = useState<ShowModal>("false");

    let editEl : JSX.Element | undefined;
    if(showModal === "edit") {
     editEl =  <Edit rOrE="edit" dataAlarm={{title : title , desc : description}} removeOrEdit={()=>editItem} changeShowModal={()=>showModalChange("false")} />
    }else if(showModal === "delete"){
     editEl =  <Edit rOrE="remove" dataAlarm={{title : title , desc : description}} removeOrEdit={removeItem} changeShowModal={()=>showModalChange("false")}/>
    } else editEl = undefined;
  
    const showModalChange = (which : ShowModal)=>{
        setShowModal(which)
    }

  return (
    <>
    <div className="flex m-5 border-2 bg-white/95 border-white px-2  rounded-md border-r-2 shadow-lg shadow-blueApp_1">
      <h2 className="font-bold text-xl border-r-2 py-4 pr-6 grow">{title}</h2>
      <p className="font-bold text-2xl border-r-2 py-4 px-6">{time}</p>
      <div className="flex gap-x-3 py-4 pr-4 font-bold pl-6">
        <button 
        onClick={()=>showModalChange("edit")}
          className="px-2 py-1 border-2 border-white rounded-md hover:text-white shadow-blue-300/60 shadow-lg bg-blueApp_2 hover:bg-blueApp_2/50"
        >
          Edit
        </button>
        <button
          onClick={()=>showModalChange("delete")}
          className="px-2 py-1 border-2 border-white rounded-md hover:text-white shadow-blue-300/60 shadow-lg bg-redApp hover:bg-redApp/50"
        >
          Delete
        </button>
      </div>
    </div>
   {!!editEl && editEl}
   </>
   );
}


    