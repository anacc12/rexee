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

type ForgotPasswordForm = {
  email: string;
};

const ForgotPassword = () => {
  const form = useForm<ForgotPasswordForm>();


  const handleButtonClick = () => {
    navigate("/reset-password-code");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit: SubmitHandler<ForgotPasswordForm> = async (data) => {
    try {
      const response = await authService.forgotPassword(data.email);

      if (response.succeeded) {
        setShowConfirmation(true);
        navigate("/reset-password-code");

      }
    } catch (err) {}
  };

  return (
    <div className="w-screen h-screen bg-extra-light">
      <div className="w-screen h-[200px] pb-8 bg-primary text-white flex flex-col gap-10 justify-center items-center z-10">
      <Link to={`/`}>
        <img src={logo} alt="Rexee Logo" className="h-[50px] w-auto" />
        </Link>
      </div>
      <Card
        rounded="xxl"
        cardStyle="outline"
        cardSize="base"
        className="max-w-[500px] -mt-[45px] mx-auto z-20 flex flex-col items-center"
      >
        <h4 className="text-[24px] font-bold mb-3">Forgot password</h4>
        <p className="text-[15px] !text-gray-dark text-center">
          Please enter your email to receive a password reset code.
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
          
          <div className="flex flex-col gap-4 items-center">
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
              onClick={handleButtonClick}
            >
              Get a link
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
