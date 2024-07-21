import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

// ASSETS

import flashWhite from "../../src/assets/svg/flash-white.svg";
import rexee from "../../src/assets/svg/rexee-face.svg";
import { ArrowRight } from "react-feather";

const Hero = () => {
  return (
      <Card
        cardSize="lg"
        cardStyle="primary"
        rounded="xxxl"
        width="w-full"
        height="h-[95vh]"
        align="text-center"
        className="flex justify-center relative overflow-hidden max-w-[1400px] mx-auto"
        children={
          <>
          <img
              src={flashWhite}
              alt="Flashes Icon"
              className="h-[190%] w-auto absolute opacity-[0.08] z-10"
              style={{
                top: "-40%",
                right: "5%",
              }}
            />
            <img
              src={rexee}
              alt="Rexee face"
              className="h-[70%] w-auto absolute z-10"
              style={{
                bottom: "-14%",
                left: "-7%",
              }}
            />
          <div className="flex items-center justify-center align-center flex-col gap-12 max-w-[79%] z-20">
            <h1 className="text-[4.5rem] font-bold font-EasyGrotesk leading-[5rem]">
              Discover, share and win with <span className="text-secondary-light">Rexee's</span> fun surveys
            </h1>
            <p className="text-[20px] text-white">
              Step into the world of immersive VR and get rewarded for your
              opinions!
            </p>
            <Button
              text="Get in touch with us"
              style="secondary"
              size="base"
              rounded="full"
              action={() => alert("Button clicked!")}
              icon={<ArrowRight size={20} color="#111827" />}
            />
          </div>
          </>
          
        }
      />
    );
};

export default Hero;
