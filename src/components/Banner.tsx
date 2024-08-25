import clsx from "clsx";
import Card from "./Card";
import Button from "./Button";

import flashes from "../../src/assets/svg/flashes-yellow.svg";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";

export interface BannerProps {}

export function Banner(props: BannerProps) {
  const {} = props;
  const navigate = useNavigate()

  return (
    <div className="relative">
      {/* Background Divs */}
      <div className="absolute inset-0 bg-white h-[200px] w-screen -mx-4"></div>
      <div className="absolute inset-0 top-[200px] bg-light h-[300px] w-screen -mx-4"></div>

      {/* Centered Card */}
      <div className="relative z-10 mx-4">
        <Card
          cardSize="lg"
          cardStyle="primary"
          rounded="xxxl"
          width="w-full"
          className="max-w-[1224px] mx-auto overflow-hidden"
          children={
            <div className="w-full relative">
              <div className="flex flex-col gap-10 max-w-[45%]">
                <h2 className="xs:text-[32px] xs:leading-[38px] sm:text-[36px] sm:leading-[40px] text-[46px] leading-[52px] font-easyGrotesk font-bold">
                  Ready to turn market research into a fun adventure?
                </h2>
                <Button
                  text="Get in touch"
                  style="secondary"
                  size="base"
                  rounded="full"
                  className="self-start"
                  icon={<ArrowRight size={20} color="#111827" />}
                  action={() => navigate("/contact")}
                />
              </div>
              <img
                src={flashes}
                alt="Flashes Icon"
                className="h-[260%] w-auto absolute inset-x-0"
                style={{
                  bottom: "-60%",
                  left: "60%",
                }}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Banner;
