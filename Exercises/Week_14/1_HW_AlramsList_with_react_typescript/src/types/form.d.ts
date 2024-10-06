interface IData {
    id : number;
    placeHolder : string;
    type : React.HTMLInputTypeAttribute 
    validator : (input : string) => string | undefined;
    collectValue : (input : string) => void;
}
type Validator = (input : string) => string | undefined;
type collectValue = (input : string) => void;
interface IAllValues {
    id : string
    title : string;
    description : string;
    time : string;
    isOff : boolean;
}
type SendData = (form : IAllValues)=>void
type RemoveItem = ()=>void
type EditItem = (title : string , desc : string , time : string , offAlarm? : boolean)=>void
type ChangeShowModal = ()=> void
interface IDataAlarm{
    title: string; 
    desc: string; 
    time: string
}

type ShowModal = "edit" | "delete" | "false" | "editTime"
interface IEditValues {
    title : string;
    description : string;
}