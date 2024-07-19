import clsx from "clsx";
import Card from "./Card";
import Button from "./Button";

import flashes from "../../src/assets/svg/flashes-yellow.svg";

export interface BannerProps {}

export function Banner(props: BannerProps) {
  const {} = props;

  return (
    <div className="w-screen flex flex-col gap-0 relative -mx-4 ">
      <div className="w-full bg-white h-[200px]"></div>
      <div className="w-full bg-light h-[300px]"></div>
      <Card
        cardSize="lg"
        cardStyle="primary"
        rounded="xxxl"
        width="w-full"
        className="absolute max-w-[1224px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        children={
          <div className="w-full relative">
            <div className="flex flex-col gap-10 max-w-[45%]">
              <h2 className="text-[46px] leading-[52px] font-bold">
                Ready to turn market research into a fun adventure?
              </h2>
              <Button
                text="Get in touch"
                style="secondary"
                size="sm"
                rounded="full"
                className="self-start"
                action={() => alert("Button clicked!")}
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
  );
}

export default Banner;
