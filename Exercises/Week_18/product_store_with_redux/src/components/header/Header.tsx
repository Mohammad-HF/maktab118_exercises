import { FaBasketShopping, FaCaretDown } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { Popup } from "./Popup";
import { productAction } from "../../redux/features/productSlice";

export const Header: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const cardList = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();
  const searchProducts: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(productAction.searchProduct(e.target.value));
  };
  const hidePopup = () => {
    setPopup(false);
  };

  return (
    <div className="bg-appGray w-full z-50 fixed">
      <div className="flex flex-wrap gap-1 justify-evenly px-4 sm:px-8 py-3 items-center w-full container mx-auto">
        <h2 className="text-white text-2xl font-semibold ">Shopping Card</h2>
        <div className="flex justify-between gap-x-1 w-1/2 min-w-[265px] ">
          <input
            onChange={searchProducts}
            className="px-2 py-2 grow max-w-96 rounded-md focus:outline-blue-500 focus:outline focus:outline-2"
            type="text"
            placeholder="Search a product"
          />
          <div className="relative ">
            <button
              onClick={() => setPopup((prev) => !prev)}
              disabled={cardList.list.length === 0 ? true : false}
              className="align-top bg-green-500 rounded-md min-w-[83px] text-base px-2 py-1 text-yellow-50 hover:bg-green-400 font-bold disabled:bg-gray-300"
            >
              <FaBasketShopping className="size-8 inline-block mr-2 fill-yellow-50" />
              {cardList.list.length}
              <FaCaretDown className="size-3 inline-block ml-1 fill-yellow-50" />
            </button>
            {popup && <Popup cardList={cardList} hidePopup={hidePopup} />}
          </div>
        </div>
      </div>
    </div>
  );
};
