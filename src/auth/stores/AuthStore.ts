import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

import {
  IToken,
  tokenFlowService,
  authService,
  IAuthenticatedUser,
  UpdateForm,
} from "../../auth";
import { jwtDecode } from "jwt-decode";

class AuthStore {
  refreshSubscribers: any = [];
  isDispatched: boolean = false;

  syncToken = async () => {
    try {
      const tokenCookie = Cookies.get("token");

      if (tokenCookie) {
        const parsedToken = JSON.parse(tokenCookie);

        const response = await tokenFlowService.refreshToken(
          parsedToken.refreshToken
        );

        this.setToken({
          token: response.token,
          refreshToken: response.refreshToken,
          expireTime: response.expireTime,
        });

        this.onTokenUpdate(response.token);
      } else {
        this.removeUser();
      }
    } catch (err) {
      this.removeUser();
    }
  };

  async onTokenUpdate(token: string) {
    this.isDispatched = false;

    this.refreshSubscribers.forEach(
      (subscriber: (token?: string) => AxiosRequestConfig) => subscriber(token)
    );

    this.refreshSubscribers = [];
  }

  setToken(token: IToken) {
    Cookies.set("token", JSON.stringify(token));
  }


  async setUser() {
    try {
      const token = Cookies.get("token");
      const parsedToken = JSON.parse(token || "{}");
      const decodedUser = jwtDecode<IAuthenticatedUser>(parsedToken.token);
      Cookies.set("user", JSON.stringify(decodedUser));
    } catch (err) {
      console.log(err);
    }
  }

  async getUser(): Promise<IAuthenticatedUser | null> {
    const user = Cookies.get("user");
    return user ? JSON.parse(user) : null;
  }

  async dispatchTokenEvent() {
    this.isDispatched = true;

    await this.syncToken();

    setTimeout(() => (this.isDispatched = false), 1000);
  }

  async logout() {
    try {
      await authService.logout(); // Call the logout function in authService
      this.removeUser(); // Remove user and token from cookies
      console.log("User logged out successfully.");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  async removeUser() {
    Cookies.remove("token");
    Cookies.remove("user");
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

    const tokenExpiredEvent = new Event("tokenExpired");
    window.dispatchEvent(tokenExpiredEvent);
  }

  // async updateUser(data: {}) {
  //     try {
  //         authService.updateUser(data)
  //       } catch (err) {
  //         console.log(err);
  //       }
  //   }

  async updateUser(data: UpdateForm): Promise<IAuthenticatedUser | null> {
    try {
      const updatedUser = await authService.updateUser(data);
      Cookies.set("user", JSON.stringify(updatedUser));
      return updatedUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getUserSurveys(completed: boolean) {
    try {
      const response = await authService.getUserSurveys(completed);
      return response.surveys;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getUserUsedItems() {
    try {
      const response = await authService.getUserData();
      return response.currently_used_items;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getUserPurchasedItems() {
    try {
      const response = await authService.getUserData();
      return response.purchased_items;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getUserData() {
    try {
      const response = await authService.getUserData();
      return response;
    } catch (err) {
      console.log(err);
      return null;
    }
  }


  async getUserVouchers() {
    try {
      const response = await authService.getUserVouchers();
      return response.amazon_vouchers;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new AuthStore();
