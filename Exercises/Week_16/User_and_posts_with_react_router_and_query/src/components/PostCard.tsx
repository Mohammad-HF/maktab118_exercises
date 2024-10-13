import { IPost } from "../types/posts.type";
import ShowMoreText from "react-show-more-text";

export const PostCard: React.FC<IPost> = ({ title, body }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 border-b border-b-appGray py-2 ">
        <h2 className="font-bold text-2xl text-appWhite">{title}</h2>
        <ShowMoreText
          lines={1}
          more="Show more"
          less="Show less"
          anchorClass="anchor1"
          expanded={false}
          truncatedEndingComponent={"... "}
          className="text-appGreen cursor-pointer"
        >
          <p className="text-appGreen cursor-text">{body}</p>
        </ShowMoreText>
      </div>
    </>
  );
};
