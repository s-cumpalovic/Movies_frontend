import { SetStateAction } from "react";

export interface IMovie {
  _id?: string;
  title: string;
  description: string;
  coverImage: string;
  genres: IGenre[];
  isNotSingleMovie?: boolean;
}

export interface IMovieForm {
  onSubmit: (data: IMovie) => void;
  isNewMovie: boolean;
  genres: object[];
}

export interface IGenre {
  _id?: string;
  name: string;
}

export interface ISearchBar {
  term: string;
  setTerm: (value: SetStateAction<string>) => void;
  onSubmit: (e: any) => void;
}
