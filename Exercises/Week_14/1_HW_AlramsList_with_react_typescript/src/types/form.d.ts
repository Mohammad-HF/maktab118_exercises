interface IData {
    id : number;
    placeHolder : string;
    type : React.HTMLInputTypeAttribute 
    validator : (input : string) => string | undefined;
    collectValue : (input : string) => void;
}
interface IAllValues {
    title : string;
    description : string;
    time : string;
}
type SendData = (form : IAllValues)=>void
type RemoveItem = ()=>void