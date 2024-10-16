import { useQuery } from "@tanstack/react-query";
import { IPost } from "../types/posts.type";
import { fetchUser } from "../apis/services/users-service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
interface IColor {
  [key: string]: string;
}
const color: IColor = {
  history: "text-red-400",
  english: "text-red-800",
  magical: "text-blue-400",
  fiction: "text-blue-800",
  crime: "text-stone-400",
  american: "text-stone-800",
  french: "text-brown-400",
  mystery: "text-green-600",
  love: "text-rose-400",
};
export const PostHome: React.FC<IPost> = ({
  id,
  userId,
  tags,
  title,
}) => {
  const user = useQuery({
    queryKey: ["user-info", userId],
    queryFn: () => fetchUser(userId),
  });

  const navigate = useNavigate();
  const routChange = ()=>{
    navigate(`/post-info/${id}`)
  }

  useEffect(() => {
    if (!user.error || !user.isError) return;
    throw new Error("bad request to server");
  }, [user.error, user.isError]);
  return (
    <div className="group grid hover:scale-105 ">
      <img
        className="w-full rounded-t-lg h-full "
        src={`${id}.png`}
        alt=""
      />
      <div className="flex flex-col gap-y-2 bg-white rounded-b-lg px-2 pt-1 pb-2 ">
        <div className="flex gap-x-2 flex-wrap text-sm font-semibold">
          {tags.map((el) => (
            <p key={el} className={`${color[el]} `}>
              {" "}
              {el}
            </p>
          ))}
        </div>
        <h2 onClick={routChange} className="text-xl leading-6 font-semibold cursor-pointer "><span className="bg-gradient-to-r from-green-300 to-green-200 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] ">{title}</span></h2>
        <div className="flex gap-x-2 items-center">
            <img className="size-5" src={`${user.data?.image}`} alt="" />
            <p className="text-sm font-semibold text-appBlue/60">{user.data?.firstName} {user.data?.lastName} </p>
            <p className="text-sm font-semibold text-appBlue/60">{user.data?.phone}</p>
        </div>
      </div>
    </div>
  );
};
