import { Controller, useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IForm } from "../types/form.type";
import { addMovieSchema } from "../validation/addMovieValidation";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/features/movieSlice";

export const Form: React.FC = () => {
    const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IForm>({ mode: "all", resolver: zodResolver(addMovieSchema) });
  const submitForm = (values: IForm) => {
    dispatch(movieAction.addMovie(values))
  };
  return (
    <div className="bg-gray-700 p-4 max-w-screen-sm mx-auto mt-5 rounded-md">
      <h2 className="text-2xl font-semibold text-center text-white border-b pb-2">Add your Movie</h2>
      <form onSubmit={handleSubmit((values) => submitForm(values))} className="flex flex-col gap-y-2 mt-2">
        <Controller
          control={control}
          name="movieName"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="MovieName"
              error={fieldState.error?.message}
            />
          )}
        ></Controller>
        <Controller
          control={control}
          name="score"
          render={({ field, fieldState }) => (
            <Input {...field} label="Score" error={fieldState.error?.message} />
          )}
        ></Controller>
        <Controller
          control={control}
          name="genre"
          render={({ field, fieldState }) => (
            <Input {...field} label="Genre" error={fieldState.error?.message} />
          )}
        ></Controller>
        <button
          disabled={!isDirty || !isValid}
          className="text-white bg-blue-600 hover:bg-blue-400 px-4 py-2 mt-2 disabled:bg-gray-400 rounded-md"
          type="submit"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};
