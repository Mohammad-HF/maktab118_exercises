import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts, fetchPostsByUser } from "../apis/services/posts-services";
import { PostCard } from "../components/PostCard";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const AllPosts: React.FC<{ userId?: number }> = ({ userId }) => {
  const [ref, inView] = useInView();
  const allPosts = useInfiniteQuery({
    refetchOnWindowFocus: false,
    // refetchOnMount : false,
    queryKey: ["fetch-all-posts"],
    queryFn: (skip) =>
      userId
        ? fetchPostsByUser(userId, skip.pageParam)
        : fetchPosts(skip.pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.skip < lastPage.total ? lastPage.skip + 10 : undefined,
  });

  useEffect(() => {
    if (!allPosts.error || !allPosts.isError) return;
    throw new Error("bad request to server");
  }, [allPosts.error, allPosts.isError]);
  useEffect(() => {
    if (inView && allPosts.hasNextPage && !allPosts.isFetching) {
      allPosts.fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="">
      {allPosts.data?.pages.map((el) =>
        el.posts.map((obj) => <PostCard key={obj.id} {...obj} />)
      )}
      <div>
        <button
          ref={ref}
          disabled={!allPosts.hasNextPage || allPosts.isFetchingNextPage}
          onClick={() => allPosts.fetchNextPage()}
          className="py-2 px-1 rounded-md font-bold text-appBlue border-2 mt-2 block mx-auto bg-appGreen"
        >
          {allPosts.isFetching
            ? "Fetching more posts"
            : !allPosts.data?.pages[0].posts.length
            ? "No post"
            : allPosts.hasNextPage
            ? "Fetch More Post"
            : "No more post"}
        </button>
      </div>
      <div
        className={`${allPosts.isPending ? "block" : "hidden"} text-appWhite`}
      >
        <h1>is loading ...</h1>
      </div>
    </div>
  );
};
