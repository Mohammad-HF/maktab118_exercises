import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Coffee({
  name,
  img,
  price,
  quantity,
  title,
}: ICoffee & { title: string }) {
  return (
    <div className="p-2 bg-appGreen rounded-2xl">
      <img className=" inline-block" src={img} alt="" />
      <div className="flex flex-col gap-y-1 text-base font-semibold px-2">
        <h3 className="text-white">{name}</h3>
        <h2 className="text-appCream text-lg font-bold">${price}</h2>
        <div className={`flex justify-center items-center ${title === "Bill" && "hidden"}`}>
          <FaPlus className="bg-appCream p-2 size-7" />
          <p className="bg-white px-3 py-[2px] h-7">{quantity}</p>
          <FaMinus className="bg-appCream p-2 size-7" />
        </div>
        <h3 className={`text-white font-semibold ${title !== "Bill" && "hidden"}`}>Qty : {quantity}</h3>
      </div>
    </div>
  );
}
