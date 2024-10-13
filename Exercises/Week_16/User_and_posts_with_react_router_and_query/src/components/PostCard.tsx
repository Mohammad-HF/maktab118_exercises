import { IPost } from "../types/posts.type";

export const PostCard: React.FC<IPost> = ({ title, body }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 border-b border-b-appGray py-10 ">
        <h2 className="font-bold text-2xl text-appWhite">{title}</h2>
        <p className="text-appGreen">{body}</p>
      </div>
    </>
  );
};
