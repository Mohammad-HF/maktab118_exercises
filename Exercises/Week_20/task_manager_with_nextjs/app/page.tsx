import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" bg-[#7748cc] min-h-[calc(100vh-128px)]">
      <img className="h-1/3 sm:h-1/2" src="To-do_List_Template.png" alt="" />
      <div className="px-8">
        <p className="text-white w-3/4">
          Enhance individual and team work operations by effectively organizing,
          prioritizing, and optimizing tasks using our To-Do List Template
        </p>
        <Link
          href={"tasks"}
          className="flex items-center bg-[#fcba64] rounded-2xl w-fit px-3 mt-10"
        >
          <button className="text-lg text-slate-900 py-1 font-semibold ">
            Go to Tasks
          </button>
          <FaExternalLinkAlt className="inline-block ml-2 align-baseline" />
        </Link>
      </div>
    </div>
  );
}
