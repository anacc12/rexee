import React, { useEffect, useState } from "react";
import {
  authService,
  authStore,
  IAuthenticatedUser,
  UpdateForm,
} from "../auth";
import { Link } from "react-router-dom";
// import { IAuthenticatedUser } from '../auth/interfaces/IAuthenticatedUser';

import logoDark from "../../src/assets/svg/logo-black.svg";
import Header from "../components/Header";
import { ArrowLeft } from "react-feather";
import Navigation from "../components/Navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const UserProfile = () => {
  const form = useForm<UpdateForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateForm>();

  const [user, setUser] = useState<IAuthenticatedUser | null>(null);

  const [personal, setIsPersonal] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authStore.getUser();
      setUser(userData);

      if (userData) {
        reset({
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          gender: userData.gender,
          country: userData.country,
        });
      }
    };

    fetchUser();
  }, [reset]);

  const handlePersonalTab: any = () => {
    setIsPersonal(true);
  };

  const handleLoginTab: any = () => {
    setIsPersonal(false);
  };

  const onSubmit: SubmitHandler<UpdateForm> = async (data) => {
    try {
      const updatedUser = await authStore.updateUser(data);

      if (updatedUser) {
        setUser(updatedUser);
        toast.success("Profile updated successfully");
      } else {
        toast.error("An error occurred while updating your profile.");
      }
    } catch (err: any) {
      let msg = "Wrong credentials.";
      const error = err as AxiosError;

      if (error.response?.data) {
        const responseData = error.response.data as { [key: string]: any };

        // Check if responseData is an object
        if (typeof responseData === "object" && responseData !== null) {
          // Loop through the keys of responseData
          for (const key in responseData) {
            if (Object.prototype.hasOwnProperty.call(responseData, key)) {
              const value = responseData[key];
              const txt = Array.isArray(value) ? value.join("") : value;
              if (txt && txt !== "") {
                msg = txt;
              }
            }
          }
        }
      }

      toast.error(msg);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen flex">
      <Navigation />

      <div className="flex flex-col flex-1 p-6 gap-4">
        <h4 className="text-[24px] font-bold">Profile Settings</h4>
        <hr className="border-t-1 border-gray-light w-full" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px]"
        >
          <div className="flex flex-col gap-4">
                <ul
                  className="flex flex-wrap p-1 list-none rounded-full bg-light w-full"
                  data-tabs="tabs"
                  role="list"
                >
                  <li className="flex-auto text-center">
                    <a
                      className={`flex items-center justify-center w-full px-0 py-2 text-[14px] font-medium mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                        personal ? "bg-white" : ""
                      }`}
                      onClick={handlePersonalTab}
                    >
                      Personal data
                    </a>
                  </li>
                  <li className="flex-auto text-center">
                    <a
                      className={`flex items-center justify-center w-full px-0 py-2 text-[14px] font-medium mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                        !personal ? "bg-white" : ""
                      }`}
                      onClick={handleLoginTab}
                    >
                      Login data
                    </a>
                  </li>
                </ul>

            {personal && (
              <>
                <div>
                  <p className="text-[12px] font-semibold text-dark mb-2">
                    First name
                  </p>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="Enter your first name"
                    {...register("first_name")}
                    className={`w-full text-[14px] p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.first_name
                        ? "bg-extra-light border-primary"
                        : "bg-white"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-dark mb-2">
                    Last name
                  </p>
                  <input
                    type="text"
                    id="last_name"
                    placeholder="Enter your last name"
                    {...register("last_name")}
                    className={`w-full text-[14px] p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.last_name
                        ? "bg-extra-light border-primary"
                        : "bg-white"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-dark mb-2">
                    Gender
                  </p>
                  <input
                    type="text"
                    id="gender"
                    placeholder="Enter your gender"
                    {...register("gender")}
                    className={`w-full text-[14px] p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.gender
                        ? "bg-extra-light border-primary"
                        : "bg-white"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-dark mb-2">
                    Country
                  </p>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter your country"
                    {...register("country")}
                    className={`w-full text-[14px] p-3 mb-4 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.country
                        ? "bg-extra-light border-primary"
                        : "bg-white"
                    }`}
                  />
                </div>
              </>
            )}

            {!personal && (
              <>
                <div>
                  <p className="text-[12px] font-semibold text-dark mb-2">
                    Email
                  </p>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={`w-full text-[14px] p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email
                        ? "bg-extra-light border-primary"
                        : "bg-white"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-dark mb-2">
                    Password
                  </p>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    {...register("password")}
                    className={`w-full text-[14px] mb-4 p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.password
                        ? "bg-extra-light border-primary"
                        : "bg-white"
                    }`}
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-4 items-center">
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
