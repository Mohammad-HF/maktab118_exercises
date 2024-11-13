import Link from "next/link";

export const LoginSingupButton: React.FC<{ showHide?: () => void }> = ({
  showHide,
}) => {
  return (
    <div className="flex gap-x-4 sm:mr-6 ">
      <Link href={"/login"}>
        <button
          onClick={showHide}
          className="border rounded-md text-sm text-white bg-gray-500 font-semibold py-1 px-2 hover:bg-gray-700"
        >
          login
        </button>
      </Link>
      <Link href={"/signup"}>
        <button
          onClick={showHide}
          className="border rounded-md text-sm text-white bg-gray-500 font-semibold py-1 px-2 hover:bg-gray-700"
        >
          signUp
        </button>
      </Link>
    </div>
  );
};
