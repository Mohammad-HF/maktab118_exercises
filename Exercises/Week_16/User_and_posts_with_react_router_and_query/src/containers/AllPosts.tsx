import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../apis/services/posts-services";
import { PostCard } from "../components/PostCard";
import { useEffect } from "react";

export const AllPosts: React.FC = () => {
  const allPosts = useQuery({
    queryKey: ["fetch-all-posts"],
    queryFn: fetchPosts,
    enabled : !AllPosts.length
  });

  useEffect(() => {
    if (!allPosts.error || !allPosts.isError) return;
    throw new Error("bad request to server");
  }, [allPosts.error, allPosts.isError]);

  return allPosts.data?.posts.map((el) => {
    return <PostCard key={el.id} {...el} />;
  });
};
