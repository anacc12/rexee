import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Menu, X } from "react-feather";

import logoDark from "../../src/assets/svg/logo-black.svg";
import { authStore } from "../auth";

export interface NavigationProps {
  active: string;
}

export function Navigation(props: NavigationProps) {
  const { active } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await authStore.logout();
    setIsMenuOpen(!isMenuOpen)
    navigate("/")
  }

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="fixed top-[24px] left-[24px] bottom-[24px] p-6 flex flex-col items-start justify-between bg-white rounded-2xl border border-gray-light w-[240px] hidden md:flex">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between items-center w-full">
            <Link to={"/"}>
              <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
            </Link>
          </div>

          <hr className="border-t-1 border-light w-full" />

          <div className="w-full flex flex-col gap-1">
            <Link
              className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${active === "dashboard"
                  ? "bg-primary text-white font-semibold before:absolute before:shadow-[1px_0px_13px_0px_#d6bcfa] before:bg-primary before:left-0 before:h-[24px] before:w-[4px] before:rounded-full"
                  : "text-dark"
                }`}
              to={"/dashboard"}
            >
              <p>Dashboard</p>
            </Link>

            <Link
              className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${active === "surveys"
                  ? "bg-primary text-white font-semibold before:absolute before:shadow-[1px_0px_13px_0px_#d6bcfa] before:bg-primary before:left-0 before:h-[24px] before:w-[4px] before:rounded-full"
                  : ""
                }`}
              to={"/surveys"}
            >
              Surveys
            </Link>

            <Link
              className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${active === "items"
                  ? "bg-primary text-white font-semibold before:absolute before:shadow-[1px_0px_13px_0px_#d6bcfa] before:bg-primary before:left-0 before:h-[24px] before:w-[4px] before:rounded-full"
                  : ""
                }`}
              to={"/items"}
            >
              Items
            </Link>


            {/* <Link
              className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${active === "vouchers"
                  ? "bg-primary text-white font-semibold before:absolute before:shadow-[1px_0px_13px_0px_#d6bcfa] before:bg-primary before:left-0 before:h-[24px] before:w-[4px] before:rounded-full"
                  : ""
                }`}
              to={"/vouchers"}
            >
              Vouchers
            </Link> */}




            <Link
              className={`text-[13px] flex gap-2 items-center py-3 px-4 w-full rounded-full  ${active === "profile"
                  ? "bg-primary text-white font-semibold before:absolute before:shadow-[1px_0px_13px_0px_#d6bcfa] before:bg-primary before:left-0 before:h-[24px] before:w-[4px] before:rounded-full"
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

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center justify-between p-6">
        <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
        <button onClick={handleMenuToggle}>
          <Menu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-4">
            <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
            <button onClick={handleMenuToggle}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center h-full w-full -mt-10">
            <Link
              className={`text-[16px] w-full text-center py-3 px-4 rounded-full ${active === "dashboard"
                  ? "bg-primary text-white font-semibold"
                  : "text-dark"
                }`}
              to={"/dashboard"}
              onClick={handleMenuToggle}
            >
              Dashboard
            </Link>

            <Link
              className={`text-[16px] w-full text-center py-3 px-4 rounded-full ${active === "surveys"
                  ? "bg-primary text-white font-semibold"
                  : "text-dark"
                }`}
              to={"/surveys"}
              onClick={handleMenuToggle}
            >
              Surveys
            </Link>


            <Link
              className={`text-[16px] w-full text-center py-3 px-4 rounded-full ${active === "items"
                  ? "bg-primary text-white font-semibold"
                  : "text-dark"
                }`}
              to={"/items"}
              onClick={handleMenuToggle}
            >
              Items
            </Link>
            {/* <Link
              className={`text-[16px] w-full text-center py-3 px-4 rounded-full ${active === "vouchers"
                  ? "bg-primary text-white font-semibold"
                  : "text-dark"
                }`}
              to={"/vouchers"}
              onClick={handleMenuToggle}
            >
              Vouchers
            </Link> */}

            <Link
              className={`text-[16px] w-full text-center py-3 px-4 rounded-full ${active === "profile"
                  ? "bg-primary text-white font-semibold"
                  : "text-dark"
                }`}
              to={"/profile"}
              onClick={handleMenuToggle}
            >
              Profile
            </Link>

            <button
              className="text-[16px] w-full text-center py-3 px-4 rounded-full text-dark"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
