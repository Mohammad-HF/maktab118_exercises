import { useEffect, useState } from "react";
import Edit from "./Edit";

export default function Alarm({
  title,
  description,
  time,
  removeItem,
  editItem,
}: IAllValues & { removeItem: RemoveItem; editItem: EditItem }) {
  const [showModal, setShowModal] = useState<ShowModal>("false");
  const [offAlarm , setOffAlarm] = useState<boolean>(false);

  let editEl: JSX.Element | undefined;
  if (showModal === "edit") {
    editEl = (
      <Edit
        rOrE="edit"
        dataAlarm={{ title: title, desc: description, time: time }}
        removeOrEdit={() => editItem}
        changeShowModal={() => showModalChange("false")}
      />
    );
  } else if (showModal === "delete") {
    editEl = (
      <Edit
        rOrE="remove"
        dataAlarm={{ title: title, desc: description, time: time }}
        removeOrEdit={removeItem}
        changeShowModal={() => showModalChange("false")}
      />
    );
  } else if (showModal === "editTime") {
    editEl = (
      <Edit
        rOrE="editTime"
        dataAlarm={{ title: title, desc: description, time: time }}
        removeOrEdit={() => editItem}
        changeShowModal={(off) => showModalChange("false",off)}
        plusFunc={removeItem}
      />
    );
  } else editEl = undefined;

  const showModalChange = (which: ShowModal , off? : boolean) => {
    if(off ) setOffAlarm(true);
    setShowModal(which);
  };
  
  useEffect(() => {
    console.log("44");
    
    const secounds =
      Number(time.split(":")[0]) * 3600 + Number(time.split(":")[1]) * 60;
    let nowTime: Date | number = new Date();
    nowTime =
      nowTime.getHours() * 3600 +
      nowTime.getMinutes() * 60 +
      nowTime.getSeconds();
    const remainder = (secounds - nowTime) * 1000;
    setTimeout(() => {
      console.log("execute", remainder);
      setShowModal("editTime");
    }, remainder);
  }, [time]);
  return (
    <>
      <div className={`flex items-center m-5 border-2 ${offAlarm ? "bg-gray-300/90" : "bg-white/95"} bg-white/95 border-white px-2  rounded-md border-r-2 shadow-lg shadow-blueApp_1`}>
        <h2 className="font-bold text-xl max-sm:text-base max-sm:px-3 border-r-2 py-4 text-wrap pr-6 grow">{title}</h2>
        <p className="font-bold text-2xl max-sm:text-base max-sm:px-3 border-r-2 py-4 px-6">{time}</p>
        <div className="flex gap-x-3 py-4 max-sm:px-3 flex-wrap max-sm:justify-center max-sm:gap-y-1 max-sm:py-2  pr-4 font-bold pl-6">
          <button
            onClick={() => showModalChange("edit")}
            className={`px-2 py-1 max-sm:text-sm border-2 border-white rounded-md hover:text-white shadow-blue-300/60 shadow-lg ${offAlarm ? "bg-blueApp_2/30 hover:bg-blueApp_2/40" : "bg-blueApp_2 hover:bg-blueApp_2/50"}`}
          >
            Edit
          </button>
          <button
            onClick={() => showModalChange("delete")}
            className={`px-2 py-1 max-sm:text-sm border-2 border-white rounded-md hover:text-white shadow-blue-300/60 shadow-lg ${offAlarm ? "bg-redApp/60 hover:bg-redApp/30" : "bg-redApp hover:bg-redApp/50"}`}
          >
            Delete
          </button>
        </div>
      </div>
      {!!editEl && editEl}
    </>
  );
}
