import React, { useEffect, useState } from "react";
import {
  authService,
  IAuthenticatedUser,
  UpdateForm,
} from "../auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<UpdateForm>();

  const [user, setUser] = useState<IAuthenticatedUser | null>(null);
  const [personal, setIsPersonal] = useState(true);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getUser();
        console.log("Fetched User Data:", userData);
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
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        toast.error("Failed to load user data.");
      }
    };

    fetchUser();
  }, [reset]);

  const handlePersonalTab = () => {
    setIsPersonal(true);
  };

  const handleLoginTab = () => {
    setIsPersonal(false);
  };

  // Handle form submission
  const onSubmit: SubmitHandler<UpdateForm> = async (data) => {
    try {
      const password = watch('password'); 
      const email = data.email;

      if (password) {
        // Update password if it's changed
        await authService.resetPassword(email, password);
        toast.success("Password updated successfully.");
      }

      // Update the user data
      const { password: _, ...updateData } = data; 
      const updatedUser = await authService.updateUser(updateData);

      if (updatedUser) {
        setUser(updatedUser);
        toast.success("Profile updated successfully.");
      } else {
        toast.error("An error occurred while updating your profile.");
      }
    } catch (err) {
      toast.error("Sorry, there was an error.");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-full min-h-screen md:h-screen flex flex-col md:flex-row bg-extra-light gap-0 md:gap-6 relative">
      <Navigation active="profile" />

      <div className="flex flex-col flex-1 gap-4 md:ml-[240px] p-6">
        <h4 className="text-[24px] font-bold">Profile Settings</h4>

        <Card
          rounded="xxl"
          cardStyle="outline"
          cardSize="base"
          className="max-w-[500px] flex flex-col"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col gap-4">
              <ul
                className="flex flex-wrap p-1 list-none rounded-full bg-extra-light w-full"
                data-tabs="tabs"
                role="list"
              >
                <li className="flex-auto text-center">
                  <a
                    className={`flex items-center justify-center w-full px-0 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                      personal ? "bg-white font-semibold" : "font-medium"
                    }`}
                    onClick={handlePersonalTab}
                  >
                    Personal data
                  </a>
                </li>
                <li className="flex-auto text-center">
                  <a
                    className={`flex items-center justify-center w-full px-0 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit ${
                      !personal ? "bg-white font-semibold" : "font-medium"
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
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
