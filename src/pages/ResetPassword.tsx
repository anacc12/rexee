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

type ResetPasswordForm = {
    password: string;
    confirmPassword: string;
};

const ResetPassword = () => {
    const form = useForm<ResetPasswordForm>();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordForm>();

    ;
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();


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
                <h4 className="text-[24px] font-bold mb-3">Reset your password</h4>
                <p className="text-[15px] !text-gray-dark text-center">
                    Please enter your new password.
                </p>

                <hr className="border-t-1 border-gray-light w-full my-6" />
                <form className="w-full">

                    <p className="text-[12px] font-semibold text-dark mb-2">Password *</p>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                        required
                        className={`w-full text-[14px] mb-8 p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${password ? "bg-extra-light border-primary" : "bg-white"
                            }`}
                    />

                    <p className="text-[12px] font-semibold text-dark mb-2">Confirm Password *</p>
                    <input
                        type="password"
                        id="forgot-password"
                        placeholder="Confirm password"
                        {...register("confirmPassword", { required: true })}
                        required
                        className={`w-full text-[14px] mb-8 p-3 border border-gray-light rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${confirmPassword ? "bg-extra-light border-primary" : "bg-white"
                            }`}
                    />


                    <div className="flex flex-col gap-4 items-center">
                        <button
                            type="submit"
                            className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
                        >
                            Change password
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default ResetPassword;
