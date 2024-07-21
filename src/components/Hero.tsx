import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Hero = () => {
  return (
      <Card
        cardSize="lg"
        cardStyle="primary"
        rounded="xxxl"
        width="w-full"
        height="h-[95vh]"
        align="text-center"
        className="flex justify-center "
        children={
          <div className="flex items-center justify-center align-center flex-col gap-12 max-w-[68%]">
            <h1 className="text-[72px] font-bold font-EasyGrotesk leading-[72px]">
              Discover, share and win with Rexee's fun surveys
            </h1>
            <p className="text-[20px] text-white">
              Step into the world of immersive VR and get rewarded for your
              opinions!
            </p>
            <Button
              text="Get in touch with us"
              style="secondary"
              size="sm"
              rounded="full"
              action={() => alert("Button clicked!")}
            />
          </div>
        }
      />
    );
};

export default Hero;
