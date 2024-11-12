import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { Menu } from "../Menu";
import { LoginSingupButton } from "./L&SButton";

export const Navbar: React.FC = () => {
  return (
    <div className="bg-slate-900 flex justify-between items-center py-2 px-6">
      <Link href={"/"} className="flex items-center gap-x-2">
        <IoHomeSharp className="fill-white size-7 sm:size-10" />
        <h2 className="text-xl sm:text-2xl text-white font-semibold">
          TaskManager
        </h2>
      </Link>
      <div className="sm:flex gap-x-4 hidden">
        <Link href={"/in-progress"}>
          <button className="text-white font-semibold border rounded-md py-1 px-2 bg-[#f7be82] hover:bg-[#ca945e]">
            In Progress
          </button>
        </Link>
        <Link href={"/completed"}>
          <button className="text-white font-semibold border rounded-md py-1 px-2 bg-green-400 hover:bg-green-600">
            Completed
          </button>
        </Link>
      </div>
      <div className="hidden sm:block">
      <LoginSingupButton/>
      </div>
      <div className="block sm:hidden">
        <Menu />
      </div>
    </div>
  );
};
