import { FaBasketShopping } from "react-icons/fa6";
import { AllProducts } from "../containers/AllProducts";
import { useAppSelector } from "../redux/hooks";

export const Products: React.FC = () => {
  const cardList = useAppSelector((state) => state.card);
  return (
    <div className="grid ">
      <button disabled={cardList.list.length ===0 ? true : false} className="mt-2 justify-self-center bg-green-500 rounded-sm px-3 py-1 text-yellow-50 hover:bg-green-400 font-bold disabled:bg-gray-300">
        <FaBasketShopping className="size-9 inline-block mr-2 fill-yellow-50" />
        {cardList.list.length}
      </button>
      <AllProducts />
    </div>
  );
};
