import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import logo from "../../src/assets/svg/logo-white.svg";

type LoginForm = {
  email: string;
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
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      // const response = await authService.login(data);
      // if (response.status === 'Authenticated') {
      //     authStore.setToken({
      //         token: response.token,
      //         refreshToken: response.refreshToken,
      //         expireTime: response.expireTime,
      //     });
      //     await authStore.setUser();
      //     navigate('/burial-search/dashboard');
      // }
    } catch (err: any) {
      // let msg = t.main('ERROR.LOGIN_GENERIC_ERROR');
      // const error = err as AxiosError;
      // if (error.response?.data) {
      //     for (const key in error.response.data) {
      //         const txt = (error.response.data as any)[key].join('');
      //         if (txt && txt !== '') {
      //             msg = txt;
      //         }
      //     }
      // }
      // toast.error(msg);
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
        <p className="text-[16px] !text-gray-dark text-center mb-6">
          Please enter your email and password to log in to your account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-light rounded-lg bg-[#fff] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-light rounded-lg bg-[#fff] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <hr className="border-t-1 border-gray-light w-full !mt-6 !mb-3" />

          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
          >
            Sign in
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
