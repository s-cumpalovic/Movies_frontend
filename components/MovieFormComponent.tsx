import { IMovieForm } from "../types/movie.type";
import { useForm } from "react-hook-form";

export const MovieFormComponent: React.FC<IMovieForm> = ({
  onSubmit,
  isNewMovie = false,
  genres,
}) => {
  const { register, handleSubmit } = useForm();

  const submitCallback = (data: any) => {
    onSubmit({
      title: data.title,
      description: data.description,
      coverImage: data.image,
      genres: data.genre,
    });
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit(submitCallback)}>
        <label>Title</label>
        <input {...register("title")} type="text" required />
        <label>Description</label>
        <textarea {...register("description")} required />
        <label>Cover image</label>
        <input {...register("image")} type="url" required />
        <label>Genre</label>
        <select {...register("genre")} required multiple>
          {genres.map((genre: any) => (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button type="submit">
          {isNewMovie ? "Create movie" : "Edit movie"}
        </button>
      </form>
    </div>
  );
};
