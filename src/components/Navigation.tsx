import { Link } from "react-router-dom";

import logoDark from "../../src/assets/svg/logo-black.svg";
import { ArrowLeft } from "react-feather";

const Navigation = () => {
  return (
    <div className="fixed top-[24px] left-[24px] bottom-[24px] p-6 flex flex-col items-start justify-between bg-white rounded-2xl border border-gray-light w-[240px]">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"}>
            {/* <ArrowLeft size={16} /> */}
            <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
          </Link>
          
        </div>

        <hr className="border-t-1 border-light w-full" />
        <Link className="text-sml" to={"/dashboard"}>
          Dashboard
        </Link>

        <Link className="text-sml" to={"/surveys"}>
          Surveys
        </Link>
        <Link className="text-sml" to={"/surveys"}>
          Vouchers
        </Link>
        <Link className="text-sml" to={"/profile"}>
          Profile
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <hr className="border-t-1 border-light w-full" />
        <Link className="text-sml" to={"/surveys"}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
