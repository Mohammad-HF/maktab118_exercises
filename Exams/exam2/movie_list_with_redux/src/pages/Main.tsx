import { useDispatch, useSelector } from "react-redux";
import { Form } from "../containers/Form";
import { RootState } from "../redux/store";
import { movieAction } from "../redux/features/movieSlice";

export const Main: React.FC = () => {
  const movieList = useSelector((state: RootState) => state.movie.list);
  const dispatch = useDispatch();
  console.log(movieList);
  const removeItem = (id: string) => {
    dispatch(movieAction.removeMovie(id));
  };
  return (
    <div>
      <Form />
      <table className="bg-gray-700 mt-4 max-w-screen-sm mx-auto w-full rounded-t-md text-white border border-collapse">
        <thead>
          <tr>
            <th className="border py-2">Name</th>
            <th className="border py-2">Score</th>
            <th className="border py-2">genre</th>
            <th className="border py-2 ">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-500 rounded-b-md">
          {movieList.map((movie) => (
            <tr>
              <td className="border p-2 w-5/12">{movie.movieName}</td>
              <td className="border p-2 w-[10%]">{movie.score}</td>
              <td className="border p-2 w-[23.3%]">{movie.genre}</td>
              <td className="border p-2 w-3/12">
                <div className="mx-auto w-fit">
                  <button
                    onClick={() => removeItem(movie.id)}
                    className="bg-red-500 hover:bg-red-400 px-2 py-1 rounded-md hover:font-semibold text-sm"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
