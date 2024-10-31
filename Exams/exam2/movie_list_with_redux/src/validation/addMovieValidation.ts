import { z } from "zod";

export const addMovieSchema = z.object({
  movieName: z.string().min(4, "movie name should be 4 char or more"),
  score : z.string().refine((val)=> !isNaN(Number(val)) && val!== "" && val.length < 2,"enter number and number should be under 10"),
  genre : z.string().min(4, "movie genre should be 4 char or more"),
});
