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
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { UpdateForm } from "../models/IUpdatedUser";

type AuthResponse = {
  token: string;
  userId: string;
  status?: string;
  message?: string;
  refreshToken?: string;
  expireTime: string;
};

// const axiosInstance = axios.create({
//   baseURL: "http://93.63.175.216:8000/api/v1/prod",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

class AuthService extends ServiceBase {
  getLoggerName(): string {
    return "AuthService";
  }

  login = async (data: { email: string; password: string }) => {
    //axiosinstance.post()
    const response = await this.http.post("/auth/login/", data);
    return response.data;
  };

  async validEmail(email: string): Promise<TResponse> {
    return await this.http.get(`/auth/email-validation?email=${email}`);
  }

  // async getUser(): Promise<IAuthenticatedUser> {
  //   const res = await this.http.get(`/user/me`);

  //   return res.data;
  // }

  async getUser(): Promise<IAuthenticatedUser> {
    const token = Cookies.get("token");
    const parsedToken = JSON.parse(token || "{}");
    const decodedToken = jwtDecode<IAuthenticatedUser>(parsedToken.token);
    return decodedToken;
  }

   getUserSurveys = async (completed: boolean) => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get(`${completed ? '/surveys/completed' : '/surveys/'}`, {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

  getCompletedSurveys = async () => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get('/surveys/completed', {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

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

// Check this with BE
  // updateUser = async (data: { email?: string; password?: string, first_name?: string, last_name?: string, gender?: string, country?: string }) => {
  //   const res = await this.http.put<IAuthenticatedUser>(
  //     "/auth/user/data/",
  //     data
  //   );
  //   return res.data;
  // }


  updateUser = async (data: UpdateForm) => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.put('/auth/user/data/', data, {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };
}
export default new AuthService();
