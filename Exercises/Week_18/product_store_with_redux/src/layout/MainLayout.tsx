import { Header } from "../components/header/Header";
import { Side } from "../components/Side";

export const MainLayout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-28 xs:pt-20 flex gap-x-2 sm:gap-x-4 max-w-[1600px] mx-auto">
        <div className="w-4/12 max-w-60 relative">
        <Side />
        </div>
        <div className="w-10/12 ">{children}</div>
      </div>
    </div>
  );
};
