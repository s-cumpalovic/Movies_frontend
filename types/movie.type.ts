export interface IMovie {
  _id?: string;
  title: string;
  description: string;
  coverImage: string;
  genre: string;
}

export interface IMovieForm {
  onSubmit: (data: IMovie) => void;
  isNewMovie: boolean;
  genres: object[];
}

export interface IGenre {
  _id?: string,
  name: string,
}
