import { useState } from "react";
import AlarmsList from "./components/AlarmsList";
import Form from "./components/Form";

function App() {
  const [data , setData] = useState<IAllValues>();
  
  return (
    <div className=" grid gap-y-8 max-w-[800px] mx-auto pt-10">
      <Form sendData={(form)=>{setData(form)}}/>
      
       <AlarmsList alarmData={data}/>
    </div>
  )
    
}

export default App
