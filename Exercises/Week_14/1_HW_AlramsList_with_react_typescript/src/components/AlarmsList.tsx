import Alarm from "./Alarm";

export default function AlarmsList(){

    return <div className="grid gap-y-7 bg-skyBlueApp border-2 border-white rounded-md">
        <div className=" flex text-2xl font-bold border-b-2 border-b-white">
            <h2 className="py-4 border-r-2 px-7 grow">Title of Alarms</h2>
            <h2 className="py-4 border-r-2 px-7 ">Alarm At</h2>
            <h2 className="py-4 pr-14 pl-7">Operation</h2>
        </div>
        <div className="grid gap-y-4">
            <Alarm/>
        </div>
    </div>
}