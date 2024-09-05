import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather"; // Import Menu and X icons

import logo from "../../src/assets/svg/logo-white.svg";
import logoDark from "../../src/assets/svg/logo-black.svg";

import clsx from "clsx";

export interface HeaderProps {
  type: "dark" | "light";
  isRelative?: boolean;
}

export function Header(props: HeaderProps) {
  const { type, isRelative } = props;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const handleClick = () => {
    window.open("https://ffind.com", "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div
      className={`w-screen max-w-[1224px] px-8   flex justify-between items-center ${isRelative ? "py-8" : "absolute top-8"
        } mx-auto z-30`}
    >
      <Link to={`/`}>
        <img
          src={type === "dark" ? logoDark : logo}
          alt="Rexee Logo"
          className="h-[50px] w-auto"
        />
      </Link>

      {/* Hamburger Menu Button (Visible on Mobile/Tablet) */}
      <button className="block md:hidden text-grey-900" onClick={toggleMenu}>
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />} {/* Toggle between Menu and X icons */}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to={`/`} className={`text-[16px] font-semibold ${type == "light" ? "text-white" : "text-gray-900"
          }`}>
          Home
        </Link>
        <Link to={`/contact`} className={`text-[16px] font-semibold ${type == "light" ? "text-white" : "text-gray-900"
          }`}>
          Contact us
        </Link>
        {/* <Link to={`/blog`} className={`text-[16px] font-semibold ${type == "light" ? "text-white" : "text-gray-900"
          }`}>
          Blog
        </Link> */}
        <Link
          to="/login"
          className={`text-[16px] px-4 py-2 rounded-full font-semibold`}
          style={{
            backgroundColor: type === "light" ? "white" : "#5F00BA", // bg-white or bg-primary
            color: type === "light" ? "#5F00BA" : "white" // text-gray-900 or text-white
          }}
        >
          Log in
        </Link>
      </div>

      {/* Mobile Menu (Visible when Menu is Open) */}
      <div
        className={clsx(
          "fixed inset-0 bg-white flex flex-col justify-center items-center z-40 p-6 transition-transform transform",
          {
            "translate-x-full": !isMenuOpen, // Slide off-screen when menu is closed
            "translate-x-0": isMenuOpen, // Slide into view when menu is open
          }
        )}
      >
        {/* Close Button inside the menu */}
        <button onClick={() => {
          navigate("/");
          toggleMenu()
        }}>
          <img
            src={logoDark}
            alt="Rexee Logo"
            className="h-[40px] w-auto absolute top-8 left-8"
          />
        </button>

        <button
          className="absolute top-12 right-8 text-gray-dark"
          onClick={toggleMenu}
        >
          <X size={24} />
        </button>

        <Link
          to={`/`}
          className="text-[16px] text-text-dark font-semibold mb-6"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to={`/contact`}
          className="text-[16px] text-text-dark font-semibold mb-6"
          onClick={toggleMenu}
        >
          Contact us
        </Link>
        {/* <Link
          to={`/blog`}
          className="text-[16px] text-text-dark font-semibold mb-6"
          onClick={toggleMenu}
        >
          Blog
        </Link> */}
        <Link
          to="/login"
          className="text-[16px] px-6 py-3 rounded-full font-semibold bg-primary text-white"
          onClick={toggleMenu}
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Header;
