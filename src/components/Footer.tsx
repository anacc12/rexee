import clsx from "clsx";
import Card from "./Card";
import Button from "./Button";

import flashes from "../../src/assets/svg/flashes-yellow.svg";
import { Link } from "react-router-dom";

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const {} = props;

  return (
    <div className="w-screen flex flex-col relative gap-10 -mx-4 bg-light pt-10 pb-20 ">
      <div className="w-full flex flex-1 justify-between max-w-[1224px] mx-auto">
        <div className="flex flex-col gap-4">
          <div>Logo</div>
          <p className="text-[22px] font-medium">Enjoy every survey moment!</p>
          <p>info@rexee.com</p>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div>Home</div>
          <div>Contact</div>
          <div>Ig</div>
        </div>
      </div>

      <hr className="border-t-2 border-gray w-full max-w-[1224px] mx-auto" />

      <div className="w-full flex flex-1 justify-between items-start max-w-[1224px] mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-[22px] font-medium">Visit us at FFIND</p>
          <p>
            FFIND srl – Via Ercole Bernabei, 51 90145 – Palermo (Italy) P.IVA
            02372540811
          </p>
        </div>
        <Button
          text="Go to website"
          style="dark"
          size="sm"
          rounded="full"
          action={() => alert("Button clicked!")}
        />
      </div>

      <hr className="border-t-2 border-gray w-full max-w-[1224px] mx-auto" />

      <div className="flex gap-2 items-center justify-center w-full flex flex-1 max-w-[1224px] mx-auto">
        <Link to={`/terms-and-conditions`} className="text-[12px] text-grey-500">Terms & Conditions</Link>
        <p className="text-[12px] text-grey-500">&#8226;</p>
        <Link to={`/privacy-policy`} className="text-[12px] text-grey-500">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
