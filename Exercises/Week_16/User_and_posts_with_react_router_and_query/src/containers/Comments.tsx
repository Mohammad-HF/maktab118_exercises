import { FcLike } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";
import { fetchCommentOfPosts } from "../apis/services/comments-service";

export const Comments: React.FC<{ id: number }> = ({ id }) => {
  const commets = useQuery({
    queryKey: ["comments", id],
    queryFn: () => fetchCommentOfPosts(Number(id)),
    retry: 1,
  });

  return (
    <div className="grid gap-y-4">
      {commets.data?.comments.map((comment) => {
        return (
          <div key={comment.id} className="flex flex-col gap-y-4 border border-appGray py-4 px-6 rounded-md">
            <h2 className="font-bold text-xl text-appWhite">
              {comment.user.username} {comment.user.fullName}
            </h2>
            <h2 className="font-semibold text-appGreen">{comment.body}</h2>
            <div className="flex gap-x-2 items-center text-appWhite border w-fit px-2 py-1 bg-appBlue rounded-md">
              <p>{comment.likes}</p>
              <FcLike className="size-4" />
            </div>
          </div>
        );
      })}

      {commets.data?.comments.length === 0 && (
        <h2 className="font-bold text-xl text-appWhite">No Comments</h2>
      )}
    </div>
  );
};
