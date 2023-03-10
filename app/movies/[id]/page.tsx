"use client";

import React from "react";
import MovieComponent from "../../../components/MovieComponent";
import { movieService } from "../../../services/MoviesService";
import { useQuery } from "react-query";
import Loader from "@/components/helperComponents/Loader";

export default function SingleMovie({ params }: any): JSX.Element {
  const id = params.id;

  const { isLoading, isError, error, data } = useQuery(["movie"], () => {
    return movieService.getMovie(id);
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error: {(error as Error).message}</p>;
  }

  const movie = data;

  return (
    <div>
      <MovieComponent {...movie} isNotSingleMovie={false} />
    </div>
  );
}
