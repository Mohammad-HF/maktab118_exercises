export default function Logo({ src }) {
  return (
    <div className="flex gap-1 items-center shrink-0">
      <img className="w-6 h-4" src={src+"Icon.svg"} alt="" />
      <img src={src+"Nexcent.svg"} alt="" />
    </div>
  );
}
