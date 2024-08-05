import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import logo from "../../src/assets/svg/logo-white.svg";
import authService from "../auth/services/authService";
import { authStore } from "../auth";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

type LoginForm = {
  email: string;
  // username: string;
  password: string;
  rememberMe?: boolean;
};

const Login = () => {
  const form = useForm<LoginForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const response = await authService.login({
        email: data.email,
        password: data.password,
      });

      console.log(response);

      //   if (response.status === "Authenticated") {
      if (response.status == 200) {
        authStore.setToken({
          token: response.data.access,
          refreshToken: response.data.refresh,
          expireTime: response.data.expireTime,
        });
        await authStore.setUser();
        navigate("/dashboard");
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

  return (
    <div className="w-screen h-screen bg-extra-light">
      <div className="w-screen h-[200px] pb-8 bg-primary text-white flex flex-col gap-10 justify-center items-center z-10">
        <img src={logo} alt="Rexee Logo" className="h-[50px] w-auto" />
      </div>
      <Card
        rounded="xxl"
        cardStyle="outline"
        cardSize="base"
        className="max-w-[500px] -mt-[45px] mx-auto z-20 flex flex-col items-center"
      >
        <h4 className="text-[24px] font-bold mb-3">Welcome!</h4>
        <p className="text-[15px] !text-gray-dark text-center">
          Please enter your email and password to log in.
        </p>

        <hr className="border-t-1 border-gray-light w-full my-6" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <p className="text-[12px] font-semibold text-dark mb-2">Email *</p>
          <input
            type="text"
            id="email"
            // name="email"
            placeholder="Enter your email"
            // value={email}
            // onChange={(e) => setemail(e.target.value)}
            {...register("email", { required: true })}
            required
            className={`w-full text-[14px] p-3 mb-4 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              email ? "bg-extra-light border-primary" : "bg-white"
            }`}
          />
          <p className="text-[12px] font-semibold text-dark mb-2">Password *</p>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            required
            className={`w-full text-[14px] mb-8 p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              password ? "bg-extra-light border-primary" : "bg-white"
            }`}
          />
          <div className="flex flex-col gap-4 items-center">
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
              Sign in
            </button>
            <Link
              to={`/forgot-password`}
              className="text-primary text-sm border-b border-primary"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
