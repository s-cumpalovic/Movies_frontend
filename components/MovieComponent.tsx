"use client";

import React from "react";
import { IMovie } from "../types/movie.type";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { allMoviesOptions, moviesCardOptions, MOVIES_ENDPOINT,} from "@/utils/static";
import { oneMovieCardOptions, oneMovieOptions } from "../utils/static";
import descAndGenresHandler from "../utils/helpers";

const MovieComponent = ({ ...movie }: IMovie) => {
  const {
    _id: id,
    title,
    description,
    coverImage,
    genres,
    isNotSingleMovie = true,
  } = movie || {};
  return (
    <div className="movies-container">
      <div className="card-image">
        {/* All Movies components */}

        <Link className="card-link" href={`${MOVIES_ENDPOINT}/${id}`}>
          <Card
            key={id}
            sx={isNotSingleMovie ? moviesCardOptions : oneMovieCardOptions}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={coverImage}
                sx={isNotSingleMovie ? allMoviesOptions : oneMovieOptions}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {descAndGenresHandler(
                    isNotSingleMovie,
                    title,
                    description,
                    genres
                  )}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
      {/* Single movie components */}

      {isNotSingleMovie ? (
        ""
      ) : (
        <div className="card-description">
          <Card
            key={id}
            sx={isNotSingleMovie ? moviesCardOptions : oneMovieCardOptions}
          >
            <CardActionArea>
              <CardContent>
                <div className="single-movie-description">
                  <Typography variant="h5" color="text.primary">
                    Movie description:
                  </Typography>
                </div>
                <div className="single-movie-description">
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MovieComponent;
