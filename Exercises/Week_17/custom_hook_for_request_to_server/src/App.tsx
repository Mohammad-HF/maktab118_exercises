import { fetchPosts } from "./apis/posts-service";
import { useGetResposnse } from "./hooks/useGetResposnse";

function App() {
  const { data, isError, isLoading, isSuccess, refetch } = useGetResposnse({
    queryFunc: fetchPosts,
  });
  console.log({ data, isError, isLoading, isSuccess });

  return (
    <div className="text-center">
      <button
        className="mt-6 border border-gray-600 px-4 py-2 hover:bg-green-400"
        onClick={refetch}
      >
        click for refetch
      </button>
    </div>
  );
}

export default App;
