import MainTitle from "./MainTitle";

export default function Main() {
  return (
    <div className="flex px-[100px] py-[66px] justify-between items-center bg-grayApp gap-10">
      {/* left */}
      <MainTitle />
      {/* right */}
      <div className="flex justify-center items-center">
        <img className="" src="./src/assets/section1/pic.png" alt="" />
      </div>
    </div>
  );
}
