import { IMovie } from "@/types/movie.type";
import { ApiService } from "./ApiService";

const ENDPOINTS = {
  BASE: "/movies",
  GENRES: "/genre",
};

class MovieService extends ApiService {
  async getMovies() {
    try {
      const response = await this.client.get(ENDPOINTS.BASE);
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
