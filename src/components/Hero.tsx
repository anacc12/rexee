import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

// ASSETS

import flashWhite from "../../src/assets/svg/flash-white.svg";
import rexee from "../../src/assets/svg/rexee-face.svg";
import { ArrowRight } from "react-feather";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
      <Card
        cardSize="lg"
        cardStyle="primary"
        rounded="xxxl"
        width="w-full"
        height="h-[92vh]"
        align="text-center"
        className="flex justify-center relative overflow-hidden max-w-[1400px] mx-auto p-4"
        children={
          <>
          <Header type="light"/>
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
              className="xs:h-[35%] sm:h-[50%] md:h-[70%] w-auto absolute z-10"
              style={{
                bottom: "-12%",
                left: "-6%",
              }}
            />
          <div className="flex items-center justify-center align-center flex-col gap-12 xs:max-w-[90%] sm:max-w-[70%]  z-20">
            <h1 className="xs:text-[2.5rem] xs:leading-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] sm:leading-[4rem] lg:leading-[5rem] font-bold font-EasyGrotesk ">
              Discover, share and win with <span className="text-secondary">Rexee's</span> fun surveys
            </h1>
            <p className="text-[20px] xs:text-[16px] text-white">
              Step into the world of immersive VR and get rewarded for your
              opinions!
            </p>
            <Button
              text="Get in touch with us"
              style="secondary"
              size="base"
              rounded="full"
              action={() => navigate("/contact")}
              icon={<ArrowRight size={20} color="#111827" />}
            />
          </div>
          </>
          
        }
      />
    );
};

export default Hero;
