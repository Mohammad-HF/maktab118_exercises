import GreenButton from "../Button";

export default function MainTitle() {
  return (
    <div className="flex flex-col gap-y-[22px] ">
      <div className="max-w-[457px] xl:max-w-fit">
        <h2 className="font-semibold text-[44px] leading-[52px] text-grayApp">
          Lessions and insights{" "}
          <span className="text-greenApp">from 8 years</span>
        </h2>
        <p className="text-grayPApp text-xs pt-2">
          Where to grow your business as a photographer: site or social media?
        </p>
      </div>
      <GreenButton text={"Register"} />
    </div>
  );
}
