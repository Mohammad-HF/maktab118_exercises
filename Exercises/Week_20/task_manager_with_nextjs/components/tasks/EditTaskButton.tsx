"use client"

import { useState } from "react";
import { NewTask } from "./NewTask";

export const EditTaskButton :React.FC<{task : ITask}> = ({task})=>{
    const [show,setShow] = useState<boolean>(false);
    return <>
    <button
      onClick={()=>setShow(prev=>!prev)}
      className="gap-x-2 rounded-l-md border-r-2 border-r-white text-sm bg-rose-100 font-semibold px-2 w-1/2 py-1 hover:bg-rose-600">
        Edit
      </button>
      {show && <NewTask task={task} isEdit={true} showHandle={()=>setShow(false)}/>}
    </>
}