import { WhiteButton } from "../Button";

export default function RdCard({ item }) {
  return (
    <div className="relative h-64" key={item.id}>
      <img src={item.src} alt="" />
      <div className="absolute bottom-[3%] left-[6.5%] w-56 flex flex-col gap-y-3 p-3 bg-grayApp rounded-md">
        <h3 className="text-grayPApp text-sm font-semibold text-center px-[6px]">
          {item.title}
        </h3>
        <WhiteButton text={item.button} />
      </div>
    </div>
  );
}
