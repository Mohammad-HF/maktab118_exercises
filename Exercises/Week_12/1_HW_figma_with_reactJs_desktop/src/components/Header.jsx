import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="  bg-red-500 w-full fixed">
      <div className="px-[100px] py-[11.14px] flex justify-between gap-2 max-w-[1400px] mx-auto">
        {/* left */}
        <Logo src={"./src/assets/header/"} />
        {/* right */}
        <Nav />
      </div>
    </div>
  );
}
