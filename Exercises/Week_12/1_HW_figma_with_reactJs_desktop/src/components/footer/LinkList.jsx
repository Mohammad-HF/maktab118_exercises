export default function LinkLists({ array, title }) {
  let linkListEl = array.map((obj) => (
    <a className="text-[#F5F7FA]/50 text-[10px] font-normal" href="" key={obj.id}>
      {obj.text}
    </a>
  ));
  return (
    <div className="flex flex-col gap-y-4 w-[112px]">
      <h2 className="font-semibold text-sm text-white">{title}</h2>
      <div className="flex flex-col gap-y-2">{linkListEl}</div>
    </div>
  );
}
