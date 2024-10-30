import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

export const ShoppingSlide: React.FC = () => {
    const cardList = useAppSelector((state)=> state.card)
  return (
    <div
      className="
    flex flex-col gap-y-6 bg-appGray text-white h-[calc(100vh-86px)] rounded-md ml-2 p-2 sm:p-4 w-full sticky max-h-[810px]"
    >
      <h2 className="font-semibold text-lg sm:text-2xl">Total {cardList.list.length} items</h2>
      <p className="sm:text-lg font-semibold">Total Price : <span>{Math.round(cardList.list.reduce((acc,item)=>acc += item.price,0)*100)/100}</span></p>
      <Link to={"/user-info"} >
        <button className="w-full bg-blue-400 font-semibold py-2 rounded-md hover:bg-blue-300 disabled:bg-gray-300" disabled={cardList.list.length === 0}>
          Completion of Information
        </button>
      </Link>
    </div>
  );
};
