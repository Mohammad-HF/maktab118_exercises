import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../apis/services/posts-services";
import { PostHome } from "../components/PostHome";
import { useEffect } from "react";

export const PostListHome: React.FC = () => {
  const posts = useQuery({
    queryKey: ["post-list-home"],
    queryFn: () => fetchPosts(0),
  });

  useEffect(() => {
    if (!posts.error || !posts.isError) return;
    throw new Error("bad request to server");
  }, [posts.error, posts.isError]);
  return (
    <>
      <div  className="grid gap-6 max-w-[500px] mx-auto md:max-w-full  md:gap-10 md:grid-cols-2 lg:gap-10">
        {posts.data?.posts.slice(0, 2).map((post) => {
          return <PostHome key={post.id} {...post} />
        })}
      </div>
      <div className="mt-10 grid  max-w-[500px] mx-auto md:max-w-full gap-6 md:gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {posts.data?.posts.slice(2, 10).map((post) => {
          return <PostHome key={post.id} {...post} />;
        })}
      </div>
      <h2 className={`${!posts.isLoading && "hidden"} font-bold`}>is loading...</h2>
    </>
  );
};
