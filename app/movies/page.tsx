"use client";

import { movieService } from "../../services/MoviesService";
import MovieComponent from "../../components/MovieComponent";
import { IMovie } from "../../types/movie.type";
import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "@mui/material/Pagination";
import SearchBar from "../../components/SearchBar";
import useDebounce from "@/utils/useDebounce";

export default function Movies(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 750);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearch = async (data: any) => {
    setSearchValue(data);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["movies", page, debouncedSearchValue],
    () => {
      return movieService.getMovies(page, undefined, debouncedSearchValue);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  const movies = data.movies;
  const metadata = data.metadata;
  return (
    <div className="main-container">
      <div className="landing-page">
        <h1 className="landing-header">IMDB movies showcase</h1>
      </div>
      <div className="search-bar">
        <SearchBar
          term={searchValue}
          setTerm={setSearchValue}
          onSubmit={handleSearch}
        />
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
