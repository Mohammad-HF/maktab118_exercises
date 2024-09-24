import GreenButton from "./Button";

export default function Nav() {
  return (
    <div className="flex items-center gap-x-[22px]">
      <div className="flex gap-4 text-xs font-medium">
        <a href="">Home</a>
        <a href="">Features</a>
        <a href="">Community</a>
        <a href="">Blog</a>
        <a href="">Pricing</a>
      </div>
      <GreenButton
        text={"Register Now"}
        src={"./src/assets/header/right.svg"}
      />
    </div>
  );
}
