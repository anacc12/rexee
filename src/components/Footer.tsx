import Button from "./Button";

import logo from "../../src/assets/svg/logo-black-ffind.svg";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "react-feather";

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const {} = props;

  const handleClick = () => {
    window.open("https://ffind.com", "_blank");
  };

  return (
    <div className="w-screen flex flex-col relative gap-10 -mx-4 bg-light pt-10 pb-20 px-8">
      <div className="w-full flex flex-1 justify-between max-w-[1224px] mx-auto xs:flex-col xs:items-start xs:gap-6 sm:gap-0">
        <div className="flex flex-col gap-4 ">
          <img src={logo} alt="Logo" className="w-[192px] h-auto" />
          <p className="text-[22px] font-semibold">Enjoy every survey moment!</p>

          <div className="flex gap-1 items-center">
            <Mail color="#8A8AA1" size="18" />
            <p>info@rexee.com</p>
          </div>
        </div>


        <div className="flex flex-col gap-4 items-end xs:items-start sm:items-end">
          <Link to={`/`} className="text-[16px] text-grey-900 font-semibold">
            Home
          </Link>
          <Link
            to={`/contact`}
            className="text-[16px] text-grey-900 font-semibold"
          >
            Contact
          </Link>
          <Link to={`/`} className="text-[16px] text-grey-900 font-semibold">
            <Instagram size={20} color="#111827" />
          </Link>
        </div>
      </div>

      <hr className="border-t-2 border-gray w-full max-w-[1224px] mx-auto" />

      <div className="w-full flex flex-1 justify-between items-start max-w-[1224px] mx-auto sm:flex-row xs:flex-col xs:gap-6 sm:gap-0">
        <div className="flex flex-col gap-4">
          <p className="text-[22px] font-semibold">Visit us at FFIND</p>
          <div className="flex gap-1 xs:items-start sm:items-center xs:flex-col sm:flex-row">
            <MapPin size="18" color="#8A8AA1" />
            <p>
              FFIND srl – Via Ercole Bernabei, 51 90145 – Palermo (Italy) P.IVA
              02372540811
            </p>
          </div>
        </div>
        <Button
          text="Go to website"
          style="dark"
          size="sm"
          rounded="full"
          action={() => handleClick()}
        />
      </div>

      <hr className="border-t-2 border-gray w-full max-w-[1224px] mx-auto" />

      <div className="flex gap-2 items-center justify-center w-full flex flex-1 max-w-[1224px] mx-auto">
        <Link
          to={`/terms-and-conditions`}
          className="text-[12px] text-grey-500"
        >
          Terms & Conditions
        </Link>
        <p className="text-[12px] text-grey-500">&#8226;</p>
        <Link to={`/privacy-policy`} className="text-[12px] text-grey-500">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default Footer;
