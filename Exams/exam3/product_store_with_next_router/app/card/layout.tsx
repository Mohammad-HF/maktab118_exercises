import Link from "next/link";

const FooterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className=" flex gap-x-2 sm:gap-x-4 max-w-[1600px] mx-auto">
      <div
        className="
flex flex-col gap-y-6 bg-appGray text-white h-[calc(100vh-86px)] rounded-md ml-2 p-2 sm:p-4 w-full sticky top-20 max-h-[810px]"
      >
        <h2 className="font-semibold text-lg sm:text-xl">
          0 items
          <span className="text-sm sm:text-base">: 0 types of products</span>
        </h2>
        <p className="sm:text-lg font-semibold">Total Price : 0</p>
        <Link href={"user-info"}>
          <button className="w-full bg-blue-400 font-semibold py-2 rounded-md hover:bg-blue-300 disabled:bg-gray-300">
            complition informatin
          </button>
        </Link>
      </div>
      <div className="w-10/12 xs:pt-20">
      {children}
      </div>
    </div>
  );
};

export default FooterLayout;
