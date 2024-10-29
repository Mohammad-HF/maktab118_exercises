import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export const Side: React.FC = () => {
  const [rate, setRate] = useState<number>(0);
  return (
    <div className="flex flex-col gap-y-6 bg-appGray text-white h-[calc(100vh-86px)] rounded-md ml-2 p-2 sm:p-4 w-full sticky top-28 sm:top-20 max-h-[810px]">
      <h2 className=" text-lg sm:text-2xl pb-2 flex-shrink">Filter Products</h2>
      <div className="flex items-center ">
        <input type="radio" value="ascending" name="sort" id="asSort" />
        <label htmlFor="asSort" className="pl-2 text-xs sm:text-base">
          Ascending
        </label>
      </div>
      <div className="flex items-center ">
        <input type="radio" value="descending" name="sort" id="desSort" />
        <label htmlFor="desSort" className="pl-2 text-xs sm:text-base">
          Descending
        </label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="sort" id="stock" />
        <label htmlFor="stock" className="pl-2 text-xs sm:text-base">
          Include Out of Stock
        </label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="fastDel" id="fastDel" />
        <label htmlFor="fastDel" className="pl-2 text-xs sm:text-base">
          Ships overnight
        </label>
      </div>
      <div>
        <p className=" text-xs sm:text-base">Rating:</p>
        <div className="flex gap-x-1">
          {[1, 2, 3, 4, 5].slice(0, rate).map((el) => (
            <button key={el} onClick={() => setRate(el)}>
              <IoStar />
            </button>
          ))}
          {[1, 2, 3, 4, 5].slice(rate, 5).map((el) => (
            <button key={el} onClick={() => setRate(el)}>
              <IoStarOutline />
            </button>
          ))}
          {/*  */}
        </div>
      </div>
    </div>
  );
};
