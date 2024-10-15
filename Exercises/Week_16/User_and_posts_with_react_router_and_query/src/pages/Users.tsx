import { AllUsers } from "../containers/AllUsers";

export const Users: React.FC = () => {
  return (
    <div className="max-w-[900px] mx-auto ">
      <div className="border-b-4 border-b-appBlue pb-4">
        <h1 className="text-3xl font-bold text-appBlue py-2">All Users</h1>
        <p className="text-appBlue font-bold">
          for show more user scroll down to bottom of the page
        </p>
      </div>
      <AllUsers />
    </div>
  );
};
