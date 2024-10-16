import { Link } from "react-router-dom";
import { PostListHome } from "../containers/PostListHome";

export const Home: React.FC = () => {
  return (
    <>
      <div className="p-2 md:px-12 md:py-5">
        <PostListHome />
        <div className="mt-10 flex justify-center">
          <Link
            to="/posts"
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-appBlue px-3 py-2 pl-4 text-sm font-medium text-appWhite hover:bg-gray-500 focus:z-20 "
          >
            <span>View all Posts</span>
          </Link>
        </div>
      </div>
    </>
  );
};
