import { Header } from "../components/Header";

export const MainLayout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-20"></div>
      {children}
    </>
  );
};
