import { ApiService } from "./ApiService";

const ENDPOINTS = {
  ALL_MOVIES: "/movies",
};

class MovieService extends ApiService {
  async getMovies() {
    try {
      const response = await this.client.get(ENDPOINTS.ALL_MOVIES);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export const movieService = new MovieService();
