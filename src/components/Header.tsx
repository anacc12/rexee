import Button from "./Button";

import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "react-feather";

import logo from "../../src/assets/svg/logo-white.svg";
import logoDark from "../../src/assets/svg/logo-black.svg";

import clsx from "clsx";

export interface HeaderProps {
  type: "dark" | "light"
}

export function Header(props: HeaderProps) {
  const {
    type
  } = props;

  const handleClick = () => {
    window.open("https://ffind.com", "_blank");
  };

  return (
    <div className="w-screen max-w-[1224px] flex justify-between items-center absolute top-8 mx-center z-30">
      <img
        src={type == "dark" ? logoDark : logo}
        alt="Rexee Logo"
        className="h-[50px] w-auto"
      />
      <div className="flex gap-6 items-center">
        <Link to={`/`} className="text-[16px] text-grey-900 font-semibold">
          Home
        </Link>
        <Link to={`/contact`} className="text-[16px] text-grey-900 font-semibold">
          Contact us
        </Link>
        <Link
          to='/login'
          className={clsx("text-[16px] px-4 py-2 rounded-full font-semibold", type == "dark" ? "bg-primary" : "bg-white")}
          style={type=="light" ? { color: 'rgba(55, 65, 81)' } : {color: 'rgba(255,255,255)'}}
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Header;
