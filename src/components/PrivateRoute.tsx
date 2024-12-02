import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";


interface IAuthenticatedUser {
    id: string;
    email: string;
    exp: number; // Expiry timestamp
    // Add other fields if needed
  }
  
  const decodeToken = (): IAuthenticatedUser | null => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const parsedToken = JSON.parse(token || "{}");
        return jwtDecode<IAuthenticatedUser>(parsedToken.token);
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    return null;
  };
  
  const isAuthenticated = (): boolean => {
    const user = decodeToken();
    if (!user) return false;
  
    // Check if the token is expired
    const currentTime = Date.now() / 1000; // Current time in seconds
    return user.exp > currentTime;
  };
  
  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />; // Redirect to 404 or login
    }

    return <>{children}</>;
};

export default PrivateRoute;
