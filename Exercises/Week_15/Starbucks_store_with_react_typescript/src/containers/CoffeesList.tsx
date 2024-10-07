import Coffee from "../components/Coffee";
import { data } from "../data/data";

export default function CoffeesList({title}:{title : string}){
    return <div className="my-2">
        <h2 className="font-bold text-lg text-appGreen text-center">{title}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-3">
        {data.map((el,index)=>{
           return <Coffee title={title} key={index} {...el}/>
        })}
        </div>
    </div>
}