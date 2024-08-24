import { Link, useNavigate } from "react-router-dom";

import logoDark from "../../src/assets/svg/logo-black.svg";
import { ArrowLeft, Home } from "react-feather";
import { authService, authStore } from "../auth";

export interface NavigationProps {
  active: string;
}

export function Navigation(props: NavigationProps) {
  const { active } = props;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authStore.logout();
    navigate("/")
  };

  
  return (
    <div className="fixed overflow-hidden top-[24px] left-[24px] bottom-[24px] p-6 flex flex-col items-start justify-between bg-white rounded-2xl border border-gray-light w-[240px]">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"}>
            {/* <ArrowLeft size={16} /> */}
            <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
          </Link>
        </div>

        <hr className="border-t-1 border-light w-full" />

        <div className="w-full flex flex-col gap-1">
          {/* <Link
            className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${
              active == "dashboard"
                ? "bg-primary text-white font-semibold before:absolute before:shadow-[1px_0px_13px_0px_#d6bcfa] before:bg-primary before:left-0 before:h-[24px] before:w-[4px] before:rounded-full"
                : "text-dark"
            }`}
            to={"/dashboard"}
          >
            
            <p>Dashboard</p>
          </Link> */}

          <Link
            className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${
              active == "surveys"
                ? "bg-primary text-white font-semibold before:absolute before:bg-primary before:left-0 before:shadow-[1px_0px_13px_0px_#d6bcfa] before:h-[24px] before:w-[4px] before:rounded-full"
                : ""
            }`}
            to={"/surveys"}
          >
            Surveys
          </Link>
          <Link
            className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${
              active == "vouchers"
                ? "bg-primary text-white font-semibold before:absolute before:bg-primary before:left-0 before:shadow-[1px_0px_13px_0px_#d6bcfa] before:h-[24px] before:w-[4px] before:rounded-full"
                : ""
            }`}
            to={"/vouchers"}
          >
            Vouchers
          </Link>
          <Link
            className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${
              active == "items"
                ? "bg-primary text-white font-semibold before:absolute before:bg-primary before:left-0 before:shadow-[1px_0px_13px_0px_#d6bcfa] before:h-[24px] before:w-[4px] before:rounded-full"
                : ""
            }`}
            to={"/items"}
          >
            Items
          </Link>
          <Link
            className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${
              active == "profile"
                ? "bg-primary text-white font-semibold before:absolute before:bg-primary before:left-0 before:shadow-[1px_0px_13px_0px_#d6bcfa] before:h-[24px] before:w-[4px] before:rounded-full"
                : ""
            }`}
            to={"/profile"}
          >
            Profile
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <hr className="border-t-1 border-light w-full" />
        <button className="text-[14px] flex gap-2 items-center font-semibold text-gray-dark" onClick={handleLogout}>
          <ArrowLeft size={16} />
          Log out
        </button>
      </div>
    </div>
  );
}

export default Navigation;
