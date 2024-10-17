import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <div className="w-full fixed bg-appBlue z-50">
      <div className="flex md:hidden justify-between px-2 py-3 font-bold">
        <div className="shrink-0">
        <img className="h-8 w-16 ml-4" src="logo.svg" alt="" />
        </div>
        <div className="flex gap-x-4 mx-4">
          <Link to={"/"}>
            <button className="bg-appTeal px-2 py-1 rounded-lg text-appWhite hover:bg-slate-600">
              Home
            </button>
          </Link>
          <Link to={"/posts"}>
            <button className="bg-appTeal px-2 py-1 rounded-lg text-appWhite hover:bg-slate-600">
              Posts
            </button>
          </Link>
          <Link to={"/users"}>
            <button className="bg-appTeal px-2 py-1 rounded-lg text-appWhite hover:bg-slate-600">
              Users
            </button>
          </Link>
        </div>
      </div>
      <div className="gap-x-4 px-2 py-3  max-w-[1600px] mx-auto font-bold hidden md:flex">
        <a href="#">
          <IoHomeSharp className="size-8 ml-2 fill-appWhite cursor-pointer" />
        </a>
        <div className="flex gap-x-8 lg:gap-x-10 mx-auto">
          <Link to={"/"}>
            <button className="bg-appTeal px-2 py-1 rounded-lg text-appWhite hover:bg-slate-600 ml-5">
              Home
            </button>
          </Link>
          <Link to={"/posts"}>
            <button className="bg-appTeal px-2 py-1 rounded-lg text-appWhite hover:bg-slate-600">
              Posts
            </button>
          </Link>
          <Link to={"/users"}>
            <button className="bg-appTeal px-2 py-1 rounded-lg text-appWhite hover:bg-slate-600">
              Users
            </button>
          </Link>
          <img className="h-8  lg:mx-6" src="logo.svg" alt="" />
          <button className="bg-appTeal px-2 lg:px-4 py-1 rounded-lg text-appWhite hover:bg-slate-600">
            download
          </button>
          <button className="bg-appTeal px-2 lg:px-4 py-1 rounded-lg text-appWhite hover:bg-slate-600">
            archive
          </button>
          <button className="bg-appTeal px-2 lg:px-4 py-1 rounded-lg text-appWhite hover:bg-slate-600">
            about
          </button>
        </div>
      </div>
    </div>
  );
};
