import Coffee from "../components/Coffee";
import { data } from "../data/data";

export default function CoffeesList(){
    return <div className="my-2">
        <h2 className="font-bold text-base text-appGreen text-center">Starbucks Online Coffee Order</h2>
        <div className="flex gap-x-2 pt-3">
        {data.map((el,index)=>{
           return <Coffee key={index} {...el}/>
        })}
        </div>
    </div>
}