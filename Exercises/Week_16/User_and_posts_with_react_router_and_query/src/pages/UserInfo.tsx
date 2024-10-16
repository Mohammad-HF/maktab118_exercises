import { AllUserInfo } from "../components/AllUserInfo";

export const UserInfo: React.FC = () => {
  return <div className="px-5 sm:px-10 py-2">
  <h1 className="text-appBlue font-semibold text-2xl">User Information:</h1>
  <AllUserInfo/>
  <h1 className="text-appBlue font-semibold text-2xl py-2">User Comments:</h1>
  </div>
};
