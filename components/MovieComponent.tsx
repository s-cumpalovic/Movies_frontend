"use client";

import React from "react";
import { IMovie } from "../types/movie.type";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

const MovieComponent = ({ ...movie }: IMovie) => {
  const { _id: id, title, description, coverImage, genre } = movie || {};
  return (
    <div className="movies-container">
      <Link className="card-link" href={`http://localhost:3002/movies/${id}`}>
        <Card key={id} sx={{ boxShadow: 3, margin: 2, maxWidth: 350, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={coverImage}
              alt="green iguana"
              sx={{ boxShadow: 1 , padding: 3, marginRight: 2 , width: 300, height: 300 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description.length > 70 || title.length > 15
                  ? `${description.substring(0, 80)}..`
                  : `${description}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default MovieComponent;
