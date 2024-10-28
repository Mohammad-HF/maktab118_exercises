import { Header } from "../components/header/Header";

export const MainLayout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-28 xs:pt-20"></div>
      {children}
    </>
  );
};
