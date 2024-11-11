"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoginSingupButton } from "./navbar/L&SButton";
import Link from "next/link";

export const Menu: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  console.log(show);
  
  return (
    <div className="relative z-10">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="text-white align-middle"
      >
        <GiHamburgerMenu className="size-7" />
      </button>

      {show && (
        <div className="bg-slate-900 flex flex-col w-52 absolute top-10 right-0 p-2 gap-y-2 text-sm items-center rounded-md">
          <div className="flex gap-x-2 ">
            <Link href={"/in-progress"}>
              <button className="text-white font-semibold border rounded-md py-1 px-2 bg-red-400 hover:bg-red-600">
                In Progress
              </button>
            </Link>
            <Link href={"/completed"}>
              <button className="text-white font-semibold border rounded-md py-1 px-2 bg-green-400 hover:bg-green-600">
                Completed
              </button>
            </Link>
          </div>
          <LoginSingupButton />
        </div>
      )}
    </div>
  );
};
