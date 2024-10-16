import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../apis/services/users-service";
import { UserCard } from "../components/UserCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const AllUsers: React.FC = () => {
  const [ref, inView] = useInView();

  const allUsers = useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: ["fetch-all-users"],
    queryFn: (skip) => fetchUsers(skip.pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.skip < lastPage.total ? lastPage.skip + 10 : undefined,
  });

  useEffect(() => {
    if (!allUsers.error || !allUsers.isError) return;
    throw new Error("bad request to server");
  }, [allUsers.error, allUsers.isError]);
  useEffect(() => {
    if (inView && allUsers.hasNextPage && !allUsers.isFetching) {
      allUsers.fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      {allUsers.data?.pages.map((page) =>
        page.users.map((user) => <UserCard key={user.id} {...user} />)
      )}
      <div>
        <button
          ref={ref}
          disabled={!allUsers.hasNextPage || allUsers.isFetchingNextPage}
          onClick={() => allUsers.fetchNextPage()}
          className="py-2 px-1 rounded-md font-bold text-appBlue border-2 mt-2 block mx-auto bg-appGreen"
        >
          {allUsers.isFetching
            ? "Fetching more user"
            : allUsers.hasNextPage
            ? "Fetch More User"
            : "No more user"}
        </button>
      </div>
      <div className={`${allUsers.isPending ? "block" : "hidden"} text-appWhite`}>
        <h1>is loading ...</h1>
      </div>
    </>
  );
};
