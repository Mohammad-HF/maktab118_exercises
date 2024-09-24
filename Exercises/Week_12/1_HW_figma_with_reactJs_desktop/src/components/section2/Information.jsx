import Statistics from "./Statistics";

export default function Info() {
  return (
    <div className="bg-grayApp flex justify-between py-11 px-[100px]">
      <div className="flex flex-col gap-y-1 w-[284px]">
        <h2 className="font-semibold text-2xl text-grayApp flex flex-wrap">
          Helping a local
          <span className="text-greenApp"> business reinvent itself</span>
        </h2>
        <p className="text-xs text-blackPApp">
          We reached here with our hard work and dedication
        </p>
      </div>
      <Statistics/>
    </div>
  );
}
