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
import { UpdateForm } from "../models/IUpdatedUser";
import { jwtDecode } from "jwt-decode";

type AuthResponse = {
  token: string;
  userId: string;
  status?: string;
  message?: string;
  refreshToken?: string;
  expireTime: string;
};


class AuthService extends ServiceBase {
  getLoggerName(): string {
    return "AuthService";
  }

  login = async (data: { email: string; password: string }) => {
    const response = await this.http.post("/auth/login/", data);
    
    return response.data;
  };

  async validEmail(email: string): Promise<TResponse> {
    return await this.http.get(`/auth/email-validation?email=${email}`);
  }

  decodeToken(): IAuthenticatedUser | null {
    const token = Cookies.get("token");
    if (token) {
      const parsedToken = JSON.parse(token || "{}");
      return jwtDecode<IAuthenticatedUser>(parsedToken.token);
    }
    return null;
  }


   async getUser(): Promise<IAuthenticatedUser> {
     const token = Cookies.get("token");
     const parsedToken = JSON.parse(token || "{}");
     const decodedToken = jwtDecode<IAuthenticatedUser>(parsedToken.token);
     return decodedToken;
   }


  getUserSurveys = async (completed: boolean) => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get(`${completed ? '/surveys/completed/' : '/surveys/'}`, {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

  getCompletedSurveys = async () => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get('/surveys/completed/', {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

  getUserData = async () => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get('/auth/user/data/', {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

  getUserVouchers = async () => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.get('/auth/user/data/', {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    return response.data;
  };

  async forgotPassword(email: string): Promise<IdentityResponse> {
    const res = await this.http.post<IdentityResponse>(
      "/auth/forgot-password/",
      { email }
    );
    return res.data;
  }

  async resetPasswordCode(code: string): Promise<IdentityResponse> {
    const res = await this.http.post<IdentityResponse>(
      "/auth/forgot-password/",
      { code }
    );
    return res.data;
  }

  async createPassword(data: Password): Promise<IdentityResponse> {
    const res = await this.http.put<IdentityResponse>(
      "/auth/create-password/",
      data
    );
    return res.data;
  }

  updateUser = async (data: UpdateForm) => {
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token || '{}');
    const response = await this.http.patch('/auth/user/data/patch/', data, {
      headers: {
        Authorization: `Bearer ${parsedToken.token}`,
      },
    });
    
    const updatedUser = response.data;

      // // Refresh the JWT token after the update
      // const refreshResponse = await this.http.post('/auth/token/refresh/', {
      //   refresh: parsedToken.refreshToken,
      // });

      // const newToken = refreshResponse.data.token;

      // // Update the token in cookies
      // Cookies.set("token", JSON.stringify({ token: newToken, refreshToken: parsedToken.refreshToken }));

      return updatedUser;

  };

  sendResetPasswordEmail = async (email: string) => {
    return await this.http.post('/auth/reset-password/email/', { email });
  };

  verifyResetPasswordCode = async (email: string, code: string) => {
    return await this.http.post('/auth/reset-password/code/', { email, code });
  };

  resetPassword = async (email: string, password: string) => {
    return await this.http.post('/auth/reset-password/', { email, password });
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

      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  
    } catch (error) {
      const err = error as Error; // Assert error as Error type
      console.error("Logout failed:", err.message);
    }
  };

}

export default new AuthService();
