import axios, { AxiosInstance } from "axios";

export class ApiService {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:3000",
    });
  }
}

export const apiService = new ApiService();
