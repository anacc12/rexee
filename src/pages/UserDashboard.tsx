import React, { useEffect, useState } from "react";
import { authStore, IAuthenticatedUser } from "../auth";
import { Link } from "react-router-dom";
// import { IAuthenticatedUser } from '../auth/interfaces/IAuthenticatedUser';

import logoDark from "../../src/assets/svg/logo-black.svg";
import Header from "../components/Header";
import { ArrowLeft } from "react-feather";

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
    <div className="w-screen h-screen flex">
      <div className="p-6 flex flex-col items-start gap-4 bg-light border-r border-gray-light w-[200px]">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"}>
            <ArrowLeft size={16} />
          </Link>
          <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
        </div>

        <hr className="border-t-2 border-gray w-full" />

        <Link className="text-sml" to={"/profile"}>
          Profile
        </Link>
        <Link className="text-sml" to={"/surveys"}>
          Surveys
        </Link>
      </div>

      <div className="flex-1 p-6 gap-6">
        <h4 className="text-[24px] font-bold">
          Welcome, <span className="text-gray-cool">{user.first_name}</span>
        </h4>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
