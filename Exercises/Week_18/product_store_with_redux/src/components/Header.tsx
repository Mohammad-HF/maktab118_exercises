import { FaBasketShopping, FaCaretDown } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { cardAction } from "../redux/features/cardSlice";

export const Header: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const cardList = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();
  const removeProduct = (id: number) => {
    dispatch(cardAction.removeOfCard(id));
  };
  useEffect(() => {
    if (cardList.list.length === 0) setPopup(false);
  }, [cardList]);
  return (
    <div className="flex flex-wrap gap-1 justify-evenly px-4 sm:px-8 py-3 items-center bg-appGray fixed w-full">
      <h2 className="text-white text-2xl font-semibold ">Shopping Card</h2>
      <div className="flex justify-between gap-x-1 w-1/2 min-w-[265px]">
        <input
          className="px-2 py-2 grow max-w-96 rounded-md focus:outline-blue-500 focus:outline focus:outline-2"
          type="text"
          placeholder="Search a product"
        />
        <div className="relative">
          <button
            onClick={() => setPopup((prev) => !prev)}
            disabled={cardList.list.length === 0 ? true : false}
            className="align-top bg-green-500 rounded-md min-w-[83px] text-base px-2 py-1 text-yellow-50 hover:bg-green-400 font-bold disabled:bg-gray-300"
          >
            <FaBasketShopping className="size-8 inline-block mr-2 fill-yellow-50" />
            {cardList.list.length}
            <FaCaretDown className="size-3 inline-block ml-1 fill-yellow-50"  />
          </button>
          {popup && (
            <div className="absolute grid gap-y-2 px-4 py-2 mt-1 right-0 min-w-[276px] border bg-white ">
              {cardList.list.map((product) => {
                return (
                  <div className="flex gap-x-2 items-center">
                    {/* images not load */}
                    {/* <img src={images[0]} alt="pic" /> */}
                    <img className="h-10 w-16" src="lake-Montain.jpg" alt="" />
                    <div className="flex flex-col gap-y-1 text-sm font-semibold w-3/6">
                      <h2 className="truncate">{product.title}</h2>
                      <h2>{product.price}</h2>
                    </div>
                    <button onClick={() => removeProduct(product.id)}>
                      <MdDelete className="size-8" />
                    </button>
                  </div>
                );
              })}
              <button className="w-full bg-blue-500 px-2 py-1 rounded-md">Go to Card</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
