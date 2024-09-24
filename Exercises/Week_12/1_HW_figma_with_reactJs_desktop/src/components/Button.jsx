export default function GreenButton(props) {
  return (
    <button className="bg-greenApp rounded-sm flex items-center text-xs text-white font-semibold gap-x-2 w-fit px-[22px] py-[10px] text-nowrap">
      {props.text} {props.src ? <img src={`${props.src} `} alt="" /> : ""}
    </button>
  );
}

export function WhiteButton({text}) {
  return (
    <button className="text-greenApp font-semibold text-sm ">
      {text}
      <img
        src="./src/assets/section2/customer/Right.svg"
        className="inline ml-1"
        alt=""
      />
    </button>
  );
}
