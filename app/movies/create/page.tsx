"use client";
import { MovieFormComponent } from "../../../components/MovieFormComponent";
import { IMovie } from "../../../types/movie.type";
import { movieService } from "../../../services/MoviesService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateMovie(): JSX.Element {
  const router = useRouter();
  const [genres, setGenres] = useState<object[]>([]);

  console.log(genres);

  useEffect(() => {
    handleGetGenres();
  }, []);

  const handleSubmit = async (data: IMovie) => {
    await movieService.createMovie(data);
    router.push("/movies");
  };

  const handleGetGenres = async () => {
    const apiData = await movieService.getGenres();
    setGenres(apiData);
  };

  return (
    <div className="form-wrapper">
      <div className="form-main">
        <h1 className="landing-header">Movie form</h1>
        <MovieFormComponent
          genres={genres}
          onSubmit={handleSubmit}
          isNewMovie={true}
        />
      </div>
    </div>
  );
}
