import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchUser } from "../apis/services/users-service";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail, MdPhoneIphone } from "react-icons/md";
import { BiFemale, BiMale } from "react-icons/bi";

export const AllUserInfo: React.FC = () => {
  const { id } = useParams();
  const user = useQuery({
    queryKey: ["user-info", id],
    queryFn: () => fetchUser(Number(id)),
  });
  return (
    <div className={` ${user.isPending && "hidden"}`}>
      <div className="flex flex-col gap-y-4 border-b border-b-appGray py-2 pb-4">
        <div className="flex items-center gap-x-4">
          <img className="size-14" src={user.data?.image} alt="" />
          <h2 className="font-bold text-lg sm:text-2xl text-appWhite md:w-4/12 ">
            {user.data?.firstName} {user.data?.lastName}
          </h2>
        </div>
        <div className="flex items-center gap-x-2 ">
          <p className="text-appGreen  ">
            {user.data?.gender === "male" ? (
              <BiMale className="size-6 align-bottom " />
            ) : (
              <BiFemale className="size-6 align-bottom " />
            )}{" "}
          </p>
          <p className="text-appGreen  ">{user.data?.age} years old</p>
        </div>
        <p className="text-appGreen  shrink-0 ">
          <MdPhoneIphone className="size-6 inline-block align-bottom mr-2" />
          {user.data?.phone}
        </p>
        <p className="text-appGreen text-sm md:text-base  w-full">
          <MdOutlineMail className="size-6 inline-block align-bottom mr-2" />
          {user.data?.email}
        </p>
        <p className="text-appGreen cursor-text text-sm md:text-base">
          <FaMapLocationDot className="size-6 inline-block align-bottom mr-2" />
          {user.data?.address.country}/ {user.data?.address.state}/{" "}
          {user.data?.address.city}/ {user.data?.address.address}
        </p>
      </div>
    </div>
  );
};
