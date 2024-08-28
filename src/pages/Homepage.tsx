import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Point from "../components/Point";
import { ArrowRight, Check } from "react-feather";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ASSETS
import videoFile from "../../src/assets/video/logo-animation.mp4";
import flashYellow from "../../src/assets/svg/flash-yellow.svg";
import flashYellowLight from "../../src/assets/svg/flash-yellow-light.svg";
import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";

import Image from "../assets/img/images";

// ICONS
import blingYellow from "../../src/assets/img/bling-yellow.png";
import celebrate from "../../src/assets/img/celebrate.png";
import gift from "../../src/assets/img/gift.png";
import wave from "../../src/assets/img/wave.png";
import TeamAvatar from "../components/TeamAvatar";
import LazyVideo from "../components/LazyVideo";
import LazyImage from "../components/LazyImage";
import { useNavigate } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Homepage = () => {
  const navigate = useNavigate();
  const [cursorText, setCursorText] = useState("");

  const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true });
  const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true });
  const { ref: section3Ref, inView: section3InView } = useInView({ triggerOnce: true });
  const { ref: section4Ref, inView: section4InView } = useInView({ triggerOnce: true });
  const { ref: section5Ref, inView: section5InView } = useInView({ triggerOnce: true });
  const { ref: section6Ref, inView: section6InView } = useInView({ triggerOnce: true });

  const teamMembers = [
    { name: "Ennio Armato", role: "CEO", img: Image.Ennio, hoverImg: Image.EnnioHover },
    {
      name: "Riccardo Tumminello",
      role: "Head of Marketing",
      hoverImg: Image.RiccardoHover,
      img: Image.Riccardo,
    },
    {
      name: "Alessandro Imborgia",
      role: "Head of Sales",
      hoverImg: Image.AlessandroHover,
      img: Image.Alessandro,
    },
    { name: "Mario Ramic", role: "Head of R&D", hoverImg: Image.MarioHover,
      img: Image.Mario },
    {
      name: "Anna Trifirò",
      role: "Product & Communication Manager",
      hoverImg: Image.AnnaHover,
      img: Image.Anna,
    },
    { name: "Emily Saccaro", role: "Brand Manager", hoverImg: Image.EmilyHover,
      img: Image.Emily },
    { name: "Marko Franjic", role: "Technology Manager", hoverImg: Image.MarkoHover,
      img: Image.Marko },
    { name: "Manuel Matosevic", role: "Backend Developer", hoverImg: Image.ManuelHover,
      img: Image.Manuel },
  ];

  const handleOpenWebsite = () => {
    window.open("https://ffind.com", "_blank");
  };

  return (
    <div className="p-4 pb-0">
      <CustomCursor cursorText={cursorText} />

      {/* HERO */}
      <Hero />

      {/* SECTION 1 - TRANSPARENT */}
      <motion.div
        ref={section1Ref}
        initial="hidden"
        animate={section1InView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <Card
          cardSize="lg"
          cardStyle="ghost"
          rounded="xxl"
          width="w-full"
          className="flex sm:mt-10 xs:mt-3"
          children={
            <div className="max-w-[1224px] flex flex-col sm:gap-[52px] xs:gap-8 mx-auto">
              <div className="flex gap-4 items-center xs:flex-col-reverse xs:items-start sm:flex-row-reverse md:flex-row">
                <h2 className="xs:text-[32px] xs:leading-[38px] sm:text-[36px] sm:leading-[42px] md:text-[46px] font-bold text-gray-900">
                  Where surveys <span className="text-primary">transcend</span> the mundane!
                </h2>
                <img
                  src={flashYellow}
                  alt="Flash Icon Yellow"
                  className="xs:h-[60px] md:h-[56px] w-auto"
                />
              </div>

              <div className="flex gap-7 xs:flex-col med:flex-row">
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  className="flex flex-col gap-4 items-start"
                  children={
                    <>
                      <div className="flex justify-center items-center w-full h-[324px] bg-light rounded-3xl p-6">
                        <LazyImage
                          src={Image.SelectCountry}
                          alt="Select Language and Country showcase"
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>
                      <h4 className="text-[24px] font-semibold">
                        Swipe, Tap, Done
                      </h4>
                      <p>
                        Navigate and complete surveys using only hand gestures.
                        It’s like magic — no controllers, just your hands making
                        choices feel effortless and fun.
                      </p>
                    </>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  className="flex flex-col gap-4 items-start"
                  children={
                    <>
                      <div className="flex justify-center items-center p-6 w-full h-[324px] bg-light rounded-3xl">
                        <LazyImage
                          src={Image.VoiceQuestion}
                          alt="Voice Question showcase"
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>
                      <h4 className="text-[24px] font-semibold">
                        Chat Your Answers
                      </h4>
                      <p>
                        Answer questions by simply talking. Our voice recognition
                        takes your words and turns them into responses, making it
                        as easy as having a chat.
                      </p>
                    </>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  className="flex flex-col gap-4 items-start"
                  children={
                    <>
                      <div className="flex justify-center items-center p-6 w-full h-[324px] bg-light rounded-3xl">
                        <LazyImage
                          src={Image.Reward}
                          alt="Completed survey reward showcase"
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>
                      <h4 className="text-[24px] font-semibold">
                        Explore and Enjoy
                      </h4>
                      <p>
                        Jump into a 3D world where surveys come alive. Toggle
                        options, pick multiple choices, and interact in a playful,
                        vibrant space.
                      </p>
                    </>
                  }
                />
              </div>
            </div>
          }
        />
      </motion.div>

      {/* SECTION 2 - PURPLE */}
      <motion.div
        ref={section2Ref}
        initial="hidden"
        animate={section2InView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Card
          cardSize="lg"
          cardStyle="primary"
          rounded="xxxl"
          width="w-full"
          className="flex mt-10 relative overflow-hidden  max-w-[1400px] mx-auto"
          children={
            <>
              <img
                src={flashPrimaryDark}
                alt="Flashes Icon"
                className="h-[200%] w-auto absolute z-10"
                style={{
                  top: "-45%",
                  right: "-1%",
                }}
              />

              <div className="max-w-[1224px] flex flex-col xs:gap-8 sm:gap-[52px] mx-auto z-20">
                <div className="flex gap-4 xs:items-start sm:items-center xs:flex-col sm:flex-row">
                  <img
                    src={blingYellow}
                    alt="Flash Icon Yellow"
                    className="h-[52px] w-auto"
                  />
                  <h2 className="xs:text-[32px] xs:leading-[38px] sm:text-[36px] sm:leading-[42px] md:text-[46px] font-bold text-white">
                    Enjoy every survey moment
                  </h2>
                </div>

                <div className="flex gap-6 xs:flex-col md:flex-row">
                  <div className="flex justify-center items-center p-6 w-full h-[364px] bg-primary-light rounded-3xl">
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full h-full">
                      <div className="col-span-1 row-span-2 h-full">
                        <LazyImage
                          src={Image.Login}
                          alt="Login showcase"
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </div>

                      <div className="col-span-1 row-span-1 h-full">
                        <LazyImage
                          src={Image.Voucher}
                          alt="Voucher showcase"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>

                      <div className="col-span-1 row-span-1 h-full">
                        <LazyImage
                          src={Image.LoginInputs}
                          alt="Login elements showcase"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-6 w-full h-[364px] bg-primary-light rounded-3xl">
                    <LazyImage
                      src={Image.Dashboard}
                      alt="Login showcase"
                      className="flex flex-1 w-full h-full rounded-2xl "
                    />
                  </div>
                </div>

                <div className="flex gap-7 xs:flex-col md:flex-row">
                  <Card
                    cardSize="none"
                    cardStyle="ghost"
                    className="flex flex-col xs:gap-2 md:gap-4 items-start"
                    children={
                      <>
                        <h4 className="text-[24px] font-semibold">
                          See surveys come to life
                        </h4>
                        <p>
                          Interact with data spatially and gain deeper insights
                          through visual exploration.
                        </p>
                      </>
                    }
                  />
                  <Card
                    cardSize="none"
                    cardStyle="ghost"
                    className="flex flex-col xs:gap-2 md:gap-4 items-start"
                    children={
                      <>
                        <h4 className="text-[24px] font-semibold">
                          Level up and earn points
                        </h4>
                        <p>
                          Earn experience points and level up as you engage and
                          gain rewards along the way.
                        </p>
                      </>
                    }
                  />
                  <Card
                    cardSize="none"
                    cardStyle="ghost"
                    className="flex flex-col xs:gap-2 md:gap-4 items-start"
                    children={
                      <>
                        <h4 className="text-[24px] font-semibold">
                          Personalize your space
                        </h4>
                        <p>
                          Obtain a variety of 3D models to personalize and furnish
                          your virtual environment.
                        </p>
                      </>
                    }
                  />
                </div>
              </div>
            </>
          }
        />
      </motion.div>

      {/* SECTION 3 - LIGHT */}
      <motion.div
        ref={section3Ref}
        initial="hidden"
        animate={section3InView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
        <Card
          cardSize="lg"
          cardStyle="light"
          rounded="xxxl"
          width="w-full"
          className="flex mt-4 max-w-[1400px] mx-auto"
          children={
            <div className="w-full max-w-[1224px] flex xs:gap-10 md:gap-[100px] mx-auto items-center xs:flex-col md:flex-row">
              <div className="bg-gray flex-1 w-full h-[532px] rounded-3xl p-[44px]">
                <LazyImage
                  src={Image.Leaderboard}
                  alt="Leaderboard showcase"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-10 flex-1">
                <div className="flex flex-col gap-4 items-start">
                  <img
                    src={celebrate}
                    alt="Celebrate Icon"
                    className="h-[52px] w-auto"
                  />

                  <h2 className="xs:text-[32px] xs:leading-[38px] sm:text-[36px] sm:leading-[42px] md:text-[46px] md:leading-[52px] font-bold text-gray-900">
                    Turn research into a{" "}
                    <span className="text-primary">fun game!</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-2">
                  <Point
                    icon={<Check size={12} color="#fff" />}
                    text={"Unlock new features and rewards with each level"}
                    style="dark"
                    size="sm"
                  />
                  <Point
                    icon={<Check size={12} color="#fff" />}
                    text={
                      "Earn experience points and level up as you participate"
                    }
                    style="dark"
                    size="sm"
                  />
                  <Point
                    icon={<Check size={12} color="#fff" />}
                    text={"Enhance your virtual environment"}
                    style="dark"
                    size="sm"
                  />
                </div>

                <Button
                  text="Send us a message"
                  style="primary"
                  size="base"
                  rounded="full"
                  className="self-start"
                  icon={<ArrowRight size={20} color="#fff" />}
                  action={() => navigate("/contact")}
                />
              </div>
            </div>
          }
        />
      </motion.div>

      {/* SECTION 4 - YELLOW */}
      <motion.div
        ref={section4Ref}
        initial="hidden"
        animate={section4InView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <Card
          cardSize="lg"
          cardStyle="secondary"
          rounded="xxxl"
          width="w-full"
          className="flex mt-4 relative overflow-hidden max-w-[1400px] mx-auto"
          children={
            <>
              <img
                src={flashYellowLight}
                alt="Flashes Icon"
                className="h-[140%] w-auto absolute inset-x-0 z-10 opacity-50"
                style={{
                  top: "-20%",
                  left: "-3%",
                }}
              />
              <div className="w-full max-w-[1224px] flex xs:gap-10 md:gap-[130px] mx-auto items-center z-20 xs:flex-col-reverse md:flex-row">
                <div className="flex flex-col gap-10 flex-1">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4 items-start">
                      <img
                        src={gift}
                        alt="Gift Icon"
                        className="h-[52px] w-auto"
                      />
                      <h2 className="xs:text-[36px] xs:leading-[42px] md:text-[46px] leading-[52px] font-bold text-gray-900">
                        Unlock awesome items with Rexee
                      </h2>
                    </div>
                    <p className="text-gray-700">
                      Earn items and 3D models by participating in
                      surveys, turning your insights into valuable rewards.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Point
                      icon={<Check size={12} color="#fff" />}
                      text={"Collect your Rexee points"}
                      style="dark"
                      size="sm"
                    />
                    <Point
                      icon={<Check size={12} color="#fff" />}
                      text={"Get the most amazing items for in-game play"}
                      style="dark"
                      size="sm"
                    />
                    <Point
                      icon={<Check size={12} color="#fff" />}
                      text={"Unlock 3D models to enhance your virtual space"}
                      style="dark"
                      size="sm"
                    />
                  </div>
                </div>

                <div className="bg-secondary-darker flex-1 w-full h-[532px] rounded-3xl p-[44px]">
                  <LazyImage
                    src={Image.Voucher}
                    alt="Voucher showcase"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </>
          }
        />
      </motion.div>

      {/* SECTION 5 - VIDEO */}
      <motion.div
        ref={section5Ref}
        initial="hidden"
        animate={section5InView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.9 }}
      >
        <Card
          cardSize="lg"
          cardStyle="dark"
          rounded="xxxl"
          width="w-full"
          className="flex mt-4 max-w-[1400px] mx-auto"
          children={
            <div className="w-full max-w-[1224px] mx-auto">
              <LazyVideo src={videoFile} className="rounded-3xl" />
            </div>
          }
        />
      </motion.div>

      {/* SECTION 6 - TEAM */}
      <motion.div
        ref={section6Ref}
        initial="hidden"
        animate={section6InView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1.0 }}
      >
        <Card
          cardSize="lg"
          cardStyle="ghost"
          rounded="xxxl"
          width="w-full"
          className="flex mt-10"
          children={
            <div className="w-full max-w-[1224px] flex flex-col xs:gap-8 sm:gap-[52px] mx-auto">
              <div className="flex flex-col gap-4 items-start">
                <img src={wave} alt="Wave Icon" className="h-[52px] w-auto" />
                <h2 className="xs:text-[32px] xs:leading-[38px] sm:text-[36px] sm:leading-[42px] md:text-[46px] font-bold text-gray-900">
                  Say <span className="text-primary">hello</span> to our team!
                </h2>
              </div>

              <div className="flex flex-col gap-8 w-full items-center">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      onMouseEnter={() => setCursorText(member.name)}
                      onMouseLeave={() => setCursorText("")}
                      className="cursor-none" // Hide default cursor
                      style={{ cursor: "none" }} // Ensure the custom cursor is used
                    >
                      <TeamAvatar
                        key={member.name}
                        src={member.img}
                        hoverSrc={member.hoverImg}
                        alt={`${member.name} - ${member.role}`}
                        name={member.name}
                        role={member.role}
                      />
                    </div>
                  ))}
                </div>

                <Button
                  text="Visit our website"
                  style="secondary"
                  size="base"
                  rounded="full"
                  icon={<ArrowRight size={20} color="#111827" />}
                  action={() => handleOpenWebsite()}
                />
              </div>
            </div>
          }
        />
      </motion.div>

      {/* SECTION 7 - BANNER */}
      <Banner />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Homepage;
