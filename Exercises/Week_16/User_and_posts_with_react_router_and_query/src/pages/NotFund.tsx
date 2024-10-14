export const NotFound: React.FC = () => {
  return (
    <>
      <div className="grid gap-y-5 py-4 text-appWhite">
        <div className="flex flex-col gap-y-2 items-center">
          <h2 className="font-bold text-xl text-appBlack">Page Not Found</h2>
          <p className="px-6 text-center text-appBlack/90">
            Sorry,the address you entered cannot be found.please check again or
            try with another address.
          </p>
        </div>
        <img className="mx-auto" src="public/404-error.svg" alt="" />
      </div>
    </>
  );
};
