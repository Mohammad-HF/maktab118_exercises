import { useDispatch, useSelector } from "react-redux";
import { Form } from "../containers/Form";
import { movieAction, Sort } from "../redux/features/movieSlice";
import { IoIosArrowUp } from "react-icons/io";
import { selectSortMovies } from "../redux/selectors/selectMovie";

export const Main: React.FC = () => {
  const movieState = useSelector(selectSortMovies);
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    dispatch(movieAction.removeMovie(id));
  };
  const changeSort = (so: Sort) => {
    console.log(so);
    
    dispatch(movieAction.changeSort(so));
  };
  console.log(movieState);
  
  return (
    <div>
      <Form />
      <table className="bg-gray-700 mt-4 max-w-screen-sm mx-auto w-full rounded-t-md text-white border border-collapse">
        <thead>
          <tr>
            <th
              className="border py-2 w-5/12 hover:bg-gray-600 hover:cursor-pointer"
              onClick={() => changeSort("byName")}
            >
              Name
              {movieState.sort === "byName" && <IoIosArrowUp className="inline-block ml-2 fill-white size-6" />}
            </th>
            <th
              className="border py-2 w-[10%] hover:bg-gray-600 hover:cursor-pointer"
              onClick={() => changeSort("byScore")}
            >
              Score
              {movieState.sort === "byScore" && <IoIosArrowUp className="inline-block ml-2 fill-white size-6" />}
            </th>
            <th
              className="border py-2 w-3/12 hover:bg-gray-600 hover:cursor-pointer"
              onClick={() => changeSort("byGenre")}
            >
              genre
              {movieState.sort === "byGenre" && <IoIosArrowUp className="inline-block ml-2 fill-white size-6" />}
            </th>
            <th className="border py-2 w-3/12">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-500 rounded-b-md">
          {movieState.list.map((movie) => (
            <tr key={movie.id}>
              <td className="border p-2">{movie.movieName}</td>
              <td className="border p-2">{movie.score}</td>
              <td className="border p-2">{movie.genre}</td>
              <td className="border p-2">
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
