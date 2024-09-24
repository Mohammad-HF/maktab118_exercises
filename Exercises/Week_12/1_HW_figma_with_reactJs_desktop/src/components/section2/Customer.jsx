import Brands from "../section1/Brands";
import { WhiteButton } from "../Button";

export default function Customer() {
  return (
    <div className="flex gap-x-14 bg-grayApp px-[100px] py-[22px]">
      <div className="shrink-0">
        <img src="./src/assets/section2/customer/image 9.svg" alt="" />
      </div>
      <div className="grid items-center">
        <div>
          <p className="text-grayPApp font-medium text-xs mb-3">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-greenApp font-semibold text-sm mb-[6px] ">
            Tim Smith
          </h3>
          <p className="text-grayPApp/70 font-normal text-xs">
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className=" flex gap-x-[22px]">
          <div className="grow ">
            <Brands end={6} />
          </div>
          <WhiteButton text={"Meet all customers"} />
        </div>
      </div>
    </div>
  );
}
