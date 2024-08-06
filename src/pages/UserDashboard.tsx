import React, { useEffect, useState } from "react";
import { authStore, IAuthenticatedUser } from "../auth";
import { Link } from "react-router-dom";
// import { IAuthenticatedUser } from '../auth/interfaces/IAuthenticatedUser';

import logoDark from "../../src/assets/svg/logo-black.svg";
import Header from "../components/Header";
import { ArrowLeft } from "react-feather";
import Navigation from "../components/Navigation";

const UserDashboard = () => {
  const [user, setUser] = useState<IAuthenticatedUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authStore.getUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen flex bg-extra-light gap-6 relative">
      <Navigation active="dashboard" />

      <div className="flex flex-col flex-1 gap-4 ml-[264px] p-6">
        <h4 className="text-[24px] font-bold">
          Welcome, <span className="text-gray-cool">{user.first_name}</span>
        </h4>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
