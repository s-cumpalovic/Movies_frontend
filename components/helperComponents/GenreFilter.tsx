import { IGenre } from "@/types/movie.type";
import { useForm } from "react-hook-form";

export default function GenreFilter({
  genre,
  setGenre,
  genres,
  onSubmit,
}: any) {
  const { register, handleSubmit } = useForm();

  const submitCallback = (data: any) => {
    onSubmit({
      genre: data.genre,
    });
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit(submitCallback)}>
        <h1 className="genre-heading">Filter by genre</h1>
        <select
          required
          defaultValue={genre}
          {...register("genre")}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" disabled>
            Choose genre
          </option>
          <option value="">
            All movies
          </option>
          {genres.map((genre: any) => (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
