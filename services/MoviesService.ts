import { IMovie } from "@/types/movie.type";
import { ApiService } from "./ApiService";

const ENDPOINTS = {
  BASE: "/movies",
  GENRES: "/genre",
};

class MovieService extends ApiService {
  async getMovies(
    page: number = 1,
    limit: number = 10,
    searchTerm = "",
    genreId = ""
  ) {
    try {
      const response = await this.client.get(
        `${ENDPOINTS.BASE}/?page=${page}&limit=${limit}&searchTerm=${searchTerm}&genreId=${genreId}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getMovie(movieId: string | null) {
    try {
      const response = await this.client.get(`${ENDPOINTS.BASE}/${movieId}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async createMovie(data: IMovie) {
    try {
      const response = await this.client.post(ENDPOINTS.BASE, data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getGenres() {
    try {
      const response = await this.client.get(ENDPOINTS.GENRES);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export const movieService = new MovieService();
