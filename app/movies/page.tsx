"use client";

import { movieService } from "../../services/MoviesService";
import MovieComponent from "../../components/MovieComponent";
import { IMovie, IGenre } from "../../types/movie.type";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Pagination from "@mui/material/Pagination";
import SearchBar from "../../components/SearchBar";
import useDebounce from "@/utils/useDebounce";
import Loader from "../../components/helperComponents/Loader";
import GenreFilter from '../../components/helperComponents/GenreFilter';

export default function Movies(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [genres, setGenres] = useState<IGenre[]>();
  const [genreFilter, setGenreFilter] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 750);

  useEffect(() => {
    handleGetGenres();
  }, []);

  const handleGetGenres = async () => {
    const response = await movieService.getGenres();
    setGenres(response);
  };

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearch = async (data: any) => {
    setSearchValue(data);
  };

  const handleSetGenreFilter = (data: string) => {
    setGenreFilter(data);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["movies", page, debouncedSearchValue, genreFilter],
    () => {
      return movieService.getMovies(page, undefined, debouncedSearchValue, genreFilter);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  const movies = data.movies;
  const metadata = data.metadata;
  return (
    <div className="main-container">
      <div className="landing-page">
        <h1 className="landing-header">
          W-Movies | Best website to search for movies
        </h1>
      </div>
      <div className="filter-containers">
        {genres ? (
          <div className="genre-filter">
            {
              <GenreFilter
                genres={genres}
                genre={genreFilter}
                setGenre={setGenreFilter}
                onSubmit={handleSetGenreFilter}
              />
            }
          </div>
        ) : (
          ""
        )}
        <div className="search-bar">
          <SearchBar
            term={searchValue}
            setTerm={setSearchValue}
            onSubmit={handleSearch}
          />
        </div>
      </div>
      <div className="movies-container-main">
        <div className="movies-main">
          {movies.map((movie: IMovie) => {
            return <MovieComponent key={movie._id} {...movie} />;
          })}
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          count={metadata.totalPages}
          color="secondary"
          page={page}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
}
