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

 const updateUserBase = axios.create({
   baseURL: "https://93.63.175.219/api/v1/prod",
   headers: {
     "Content-Type": "application/json",
   },
 });

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

  getUserData = async () => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get('/auth/user/data', {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

  getUserVouchers = async () => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get('/auth/user/data', {
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

  async resetPasswordCode(code: string): Promise<IdentityResponse> {
    const res = await this.http.post<IdentityResponse>(
      "/auth/forgot-password",
      { code }
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

  updateUser = async (data: UpdateForm) => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await updateUserBase.post('/auth/user/data/', data, {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };


  logout = async () => {
    try {
      const token = Cookies.get('token');
      const parsedToken = JSON.parse(token || '{}');
  
      // Make the API call to log out the user
      await this.http.post('/auth/logout/', null, {
        headers: {
          Authorization: `Bearer ${parsedToken.token}`,
        },
      });
  
      // Clear the authentication token and other relevant cookies
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      Cookies.remove('user');
    } catch (error) {
      const err = error as Error; // Assert error as Error type
      console.error("Logout failed:", err.message);
    }
  };
}

  
export default new AuthService();
