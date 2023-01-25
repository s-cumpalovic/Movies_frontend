"use client";

import React from "react";
import { IMovie } from "../types/movie.type";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { allMoviesOptions, moviesCardOptions } from "@/utils/static";
import { oneMovieCardOptions, oneMovieOptions } from "../utils/static";

const MovieComponent = ({ ...movie }: IMovie) => {
  const {
    _id: id,
    title,
    description,
    coverImage,
    genre,
    isNotSingleMovie = true,
  } = movie || {};
  return (
    <div className="movies-container">
      <div className="card-image">
        <Link className="card-link" href={`http://localhost:3002/movies/${id}`}>
          <Card
            key={id}
            sx={isNotSingleMovie ? moviesCardOptions : oneMovieCardOptions}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={coverImage}
                alt="green iguana"
                sx={isNotSingleMovie ? allMoviesOptions : oneMovieOptions}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {isNotSingleMovie
                    ? `${
                        description.length > 70 || title.length > 15
                          ? `${description.substring(0, 80)}..`
                          : `${description}`
                      }`
                    : `${genre}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
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
