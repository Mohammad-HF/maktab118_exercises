import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPost } from "../apis/services/posts-services";
import { AxiosError } from "axios";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaEye, FaHashtag } from "react-icons/fa";

export const PostInfo: React.FC = () => {
  const { id } = useParams();
  const validId = !isNaN(Number(id));

  const post = useQuery({
    queryKey: ["post-info", id],
    queryFn: () => fetchPost(Number(id)),
    enabled: validId,
    retry: 1,
  });
  if (!validId || (post.error as AxiosError)) {
    throw new Error("id isnot valid");
  }

  return (
    <div className="px-5 sm:px-10 ">
      <div className="flex flex-col gap-y-4 border-b border-b-appGray py-2 pb-4">
        <h2 className="font-bold text-2xl text-appWhite">{post.data?.title}</h2>
        <p className="text-appGreen cursor-text">{post.data?.body}</p>
        <div className="flex justify-between px-2 sm:justify-start sm:gap-x-4">
          <div className="flex gap-x-2 items-center text-appWhite border w-fit px-2 py-1 bg-appBlue">
            <p>{post.data?.reactions.likes}</p>
            <BiSolidLike className="fill-appWhite size-4 shrink-0" />
          </div>
          <div className="flex gap-x-2 items-center text-appWhite border w-fit px-2 py-1 bg-appBlue">
            <p>{post.data?.reactions.dislikes}</p>
            <BiSolidDislike className="fill-appWhite size-4 shrink-0" />
          </div>
          <div className="flex gap-x-2 items-center text-appWhite border w-fit px-2 py-1 bg-appBlue">
            <p>{post.data?.views}</p>
            <FaEye className="size-4 " />
          </div>
        </div>
        <div className="flex gap-x-2 items-center text-appWhite border w-fit px-2 py-1 bg-appBlue ml-2">
          <FaHashtag className="size-5" />
          {post.data?.tags.map((el) => (
            <p key={el}> {el}</p>
          ))}
        </div>
      </div>
      <div className={`${post.isPending ? "block" : "hidden"} text-appWhite`}>
        <h1>is loading ...</h1>
      </div>
    </div>
  );
};
