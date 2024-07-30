import { IAuthenticatedUser } from "../models/IAuthenticatedUser";
import {
  Password,
  ILogin,
  TResponse,
  IdentityResponse,
  ApiResponseBaseModel,
} from "../../data/models";

import { ServiceBase } from "../../data/service";
import axios from "axios";

type AuthResponse = {
  token: string;
  userId: string;
  status?: string;
  message?: string;
  refreshToken?: string;
  expireTime: string;
};

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

class AuthService extends ServiceBase {
  getLoggerName(): string {
    return "AuthService";
  }

  login = async (data: { username: string; password: string }) => {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  };

  async validEmail(email: string): Promise<TResponse> {
    return await this.http.get(`/auth/email-validation?email=${email}`);
  }

  async getUser(): Promise<IAuthenticatedUser> {
    const res = await this.http.get(`/user/me`);

    return res.data;
  }

  async forgotPassword(email: string): Promise<IdentityResponse> {
    const res = await this.http.post<IdentityResponse>(
      "/auth/forgot-password",
      { email }
    );
    return res.data;
  }

  async createPassword(data: Password): Promise<IdentityResponse> {
    const res = await this.http.put<IdentityResponse>(
      "/auth/create-password",
      data
    );
    return res.data;
  }

  async resetPassword(data: Password): Promise<IdentityResponse> {
    const res = await this.http.put<IdentityResponse>(
      "/auth/password-reset",
      data
    );
    return res.data;
  }
}
export default new AuthService();
