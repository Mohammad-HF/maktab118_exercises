
export default function Alarm(){

    return <div className="flex m-5 border-2 border-white px-2  rounded-md border-r-2">
        <h2 className="font-bold text-xl border-r-2 py-4 pr-6 grow">this is title of alaram</h2>
        <p className="font-bold text-2xl border-r-2 py-4 px-6">15:36</p>
        <div className="flex gap-x-3 py-4 pr-4 font-bold pl-6">
            <button className="px-2 py-1 border-2 border-white rounded-md shadow-blue-300/60 shadow-lg hover:text-white bg-blueApp_2 hover:bg-blueApp_2/50">Edit</button>
            <button className="px-2 py-1 border-2 border-white rounded-md shadow-blue-300/60 shadow-lg hover:text-white bg-redApp hover:bg-redApp/50">Delete</button>
        </div>
    </div>
}