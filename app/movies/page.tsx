import { movieService } from "../../services/MoviesService";
import MovieComponent from "../../components/MovieComponent";
import { IMovie } from "../../types/movie.type";

export default async function Movies() {
  const movies = await movieService.getMovies();
  return (
    <div className="main-container">
      <div className="landing-page">
        <h1 className="landing-header">IMDB movies showcase</h1>
      </div>
      <div className="movies-main">
        {movies.map((movie: IMovie) => {
          return <MovieComponent {...movie} />;
        })}
      </div>
    </div>
  );
}
