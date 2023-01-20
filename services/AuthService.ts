import { ApiService } from "./ApiService";
import { IUserLogin } from "../types/user.type";
import { getItem, setItem } from "@/utils/helpers";
import { AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import { AUTHORIZATION } from "../utils/static";

const ENDPOINTS = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  TOKEN_REFRESH: "/token/refresh",
};

class AuthService extends ApiService {
  constructor() {
    super();
    this.setAccessToken(this.getAccessToken());
    this.client.interceptors.request.use(async (config) =>
      this.checkTokenExpiration(config)
    );
  }

  //  JWT validation methods

  getAccessToken = (): string => getItem("access_token");
  getRefreshToken = (): string => getItem("refresh_token");

  checkTokenExpiration = async (request: AxiosRequestConfig) => {
    if (request.url === ENDPOINTS.TOKEN_REFRESH) {
      return request;
    }

    const token = this.getAccessToken();

    if (
      token &&
      Date.now() / 1000 >= (jwtDecode(token) as { exp: number }).exp
    ) {
      const refreshToken = this.getRefreshToken();
      const newToken = await this.refreshToken(refreshToken);
      this.client.defaults.headers.common[AUTHORIZATION] = `Bearer ${newToken}`;
    }
    return request;
  };

  setAccessToken = (token: string) => {
    if (!token) {
      return;
    }
    setItem("access_token", token);
  };

  setRefreshToken = (token: string) => {
    if (!token) {
      return;
    }
    setItem("refresh_token", token);
  };

  refreshToken = async (refreshToken: string) => {
    try {
      const response = await this.client.post(ENDPOINTS.TOKEN_REFRESH, {
        refresh_token: refreshToken,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  //  Auth methods

  async login(user: IUserLogin) {
    try {
      const response = await this.client.post(ENDPOINTS.LOGIN, user);
      setItem("access_token", response.data.token);
      return [response.data];
    } catch (err) {
      console.error(err);
    }
  }
}

export const authService = new AuthService();
