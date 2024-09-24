import GreenButton from "../Button";
import Company from "./Company";
import Links from "./Links";

export default function Footer() {
  return (
    <>
      {/* top */}
      <div className="w-full">
        <div className="py-6 justify-center grid max-w-[1400px] mx-auto bg-grayApp">
          <div className="w-[617px] flex flex-col items-center gap-y-6 ">
            <h2 className="font-semibold text-[45px] leading-[54px] text-blackApp text-center px-4">
              Pellentesque suscipit fringilla libero eu.
            </h2>
            <GreenButton
              text={"Get a Demo"}
              src={"./src/assets/header/right.svg"}
            />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-blackApp w-full">
        <div className=" px-[115px] py-[45px] flex gap-x-[88px] lg:justify-between max-w-[1400px] mx-auto">
          {/* left */}
          <Company />
          {/* right */}
          <Links />
        </div>
      </div>
    </>
  );
}
