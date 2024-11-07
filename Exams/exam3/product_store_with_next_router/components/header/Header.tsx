import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";


export const Header: React.FC = () => {

  return (
    <div className="bg-gray-800 w-full z-50 fixed">
      <div className="flex flex-wrap gap-1 justify-evenly px-4 sm:px-8 py-3 items-center w-full container mx-auto">
        <Link href={"/"} className="flex gap-x-2 items-center">
          <FaHome className="size-8 fill-white"/>
          <h2 className="text-white text-2xl font-semibold ">Home</h2>
        </Link>
        <Link href={"/card"} className="flex gap-x-2 items-center">
        <FaBasketShopping className="size-8 inline-block mr-2 fill-yellow-50" />
          <h2 className="text-white text-2xl font-semibold ">Card</h2>
        </Link>
       
      </div>
    </div>
  );
};
