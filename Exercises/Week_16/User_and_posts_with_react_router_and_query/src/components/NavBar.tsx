import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <div className="w-full fixed bg-appBlue">
      <div className="flex gap-x-2 px-2 py-3  max-w-[1600px] mx-auto font-bold">
      <IoHomeSharp className="size-8 ml-2 fill-appWhite"/>
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
      </div>
    </div>
  );
};
