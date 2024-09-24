import Logo from "../Logo";
import Social from "./social";

export default function Company() {
  return (
    <div className="flex flex-col gap-y-7 w-[220px]">
      <Logo src={"./src/assets/footer/"} />
      <div className="font-normal text-[#F5F7FA]/50 text-xs flex flex-col gap-y-1">
        <p>Copyright © 2020 Landify UI Kit.</p>
        <p>All rights reserved</p>
      </div>
      <div className="flex gap-x-3">
        <Social />
      </div>

    </div>
  );
}
