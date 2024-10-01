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
    title : string;
    description : string;
    time : string;
}
type SendData = (form : IAllValues)=>void
type RemoveItem = ()=>void
type EditItem = (title : string , desc : string)=>void
type ChangeShowModal = ()=> void

type ShowModal = "edit" | "delete" | "false"
interface IEditValues {
    title : string;
    description : string;
}