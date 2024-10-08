import { useState } from "react";
import CoffeesList from "../containers/CoffeesList";

export default function Products(){

    const [coffeesQty, setCoffeesQty] = useState<IValues>({
        Cappuccino: 0,
        Latte: 0,
        Espresso: 0,
        Mocha: 0,
        Americano: 0,
      });
    
      const onClickHandler: OnClickHandler = (e, Name) => {
        if (e.currentTarget.dataset.change === "plus") {
          setCoffeesQty({ ...coffeesQty, [Name]: coffeesQty[Name] + 1 });
        } else{
            if(coffeesQty[Name] <= 0) return;
            setCoffeesQty({ ...coffeesQty, [Name]: coffeesQty[Name] - 1 });
        }
      };


    return <div className="bg-[#ececec] p-3 max-w-[1400px] mx-auto min-h-screen">
        <nav className="flex gap-x-2 justify-center">
            <img className="size-10" src="./src/assets/logo.png" alt="" />
            <h1 className="text-3xl font-bold">Starbucks</h1>
        </nav>
        {/* up */}
        <CoffeesList title="Starbucks Online Coffee Order" onClickHandler={onClickHandler} coffeesQty={coffeesQty}/>
        {/* down */}
        <CoffeesList title="Bill" onClickHandler={onClickHandler} coffeesQty={coffeesQty}/>
    </div>
}