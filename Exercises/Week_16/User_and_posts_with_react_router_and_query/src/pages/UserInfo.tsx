import { useParams } from "react-router-dom";
import { AllUserInfo } from "../components/AllUserInfo";
import { AllPosts } from "../containers/AllPosts";

export const UserInfo: React.FC = () => {
  const {id} = useParams();
  return <div className="px-5 sm:px-10 py-2">
  <h1 className="text-appBlue font-semibold text-2xl">User Information:</h1>
  <AllUserInfo/>
  <h1 className="text-appBlue font-semibold text-2xl py-2">User Posts:</h1>
  <AllPosts userId={Number(id)}/>
  </div>
};
