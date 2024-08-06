import { Link } from "react-router-dom";

import logoDark from "../../src/assets/svg/logo-black.svg";
import { ArrowLeft } from "react-feather";

const Navigation = () => {
  return (
    <div className="p-6 flex flex-col items-start gap-4 bg-light border-r border-gray-light w-[200px]">
      <div className="flex justify-between items-center w-full">
        <Link to={"/"}>
          <ArrowLeft size={16} />
        </Link>
        <img src={logoDark} alt="Rexee Logo" className="h-[32px] w-auto" />
      </div>

      <hr className="border-t-1 border-gray w-full" />

      <Link className="text-sml" to={"/profile"}>
        Profile
      </Link>
      <Link className="text-sml" to={"/surveys"}>
        Surveys
      </Link>
    </div>
  );
};

export default Navigation;
