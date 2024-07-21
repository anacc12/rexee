import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Point from "../components/Point";
import { ArrowRight, Check } from "react-feather";

// ASSETS
import videoFile from "../../src/assets/video/logo-animation.mp4";
import flashYellow from "../../src/assets/svg/flash-yellow.svg";
import flashYellowLight from "../../src/assets/svg/flash-yellow-light.svg";
import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";

// IMAGES
import selectCountry from "../../src/assets/img/select-country.png";
import voiceQuestion from "../../src/assets/img/voice-question.png";
import reward from "../../src/assets/img/reward.png";
import login from "../../src/assets/img/login.png";
import voucher from "../../src/assets/img/voucher.png";
import loginInputs from "../../src/assets/img/login-inputs.png";
import dashboard from "../../src/assets/img/dashboard.png";
import leaderboard from "../../src/assets/img/leaderboard.png";

// TEAM
import mario from "../../src/assets/img/team/mario.png";
import anna from "../../src/assets/img/team/anna.png";
import riccardo from "../../src/assets/img/team/riccardo.png";
import ennio from "../../src/assets/img/team/ennio.png";
import alessandro from "../../src/assets/img/team/alessandro.png";
import emily from "../../src/assets/img/team/emily.png";
import marko from "../../src/assets/img/team/marko.png";
import manuel from "../../src/assets/img/team/manuel.png";

// ICONS
import blingYellow from "../../src/assets/img/bling-yellow.png";
import celebrate from "../../src/assets/img/celebrate.png";
import gift from "../../src/assets/img/gift.png";
import wave from "../../src/assets/img/wave.png";
import TeamAvatar from "../components/TeamAvatar";

const Homepage = () => {
  return (
    <div className="p-4 pb-0">
      {/* HERO */}
      <Hero />

      {/* SECTION 1 - TRANSPARENT */}
      <Card
        cardSize="lg"
        cardStyle="ghost"
        rounded="xxl"
        width="w-full"
        className="flex mt-10"
        children={
          <div className="max-w-[1224px] flex flex-col gap-[52px] mx-auto">
            <div className="flex gap-4 items-center">
              <h2 className="text-[46px] font-bold text-gray-900">
                Where surveys <span className="text-primary">transcend</span>{" "}
                the mundane!
              </h2>
              <img
                src={flashYellow}
                alt="Flash Icon Yellow"
                className="h-[56px] w-auto"
              />
            </div>

            <div className="flex gap-7">
              <Card
                cardSize="none"
                cardStyle="ghost"
                className="flex flex-col gap-4 items-start"
                children={
                  <>
                    <div className="flex justify-center items-center w-full h-[324px] bg-light rounded-3xl p-6">
                      <img
                        src={selectCountry}
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
                      <img
                        src={voiceQuestion}
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
                      <img
                        src={reward}
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

      {/* SECTION 2 - PURPLE */}
      <Card
        cardSize="lg"
        cardStyle="primary"
        rounded="xxl"
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

            <div className="max-w-[1224px] flex flex-col gap-[52px] mx-auto z-20">
              <div className="flex gap-4 items-center">
                <img
                  src={blingYellow}
                  alt="Flash Icon Yellow"
                  className="h-[52px] w-auto"
                />
                <h2 className="text-[46px] font-bold text-white">
                  Enjoy every survey moment
                </h2>
              </div>

              <div className="flex gap-6">
                <div className="flex justify-center items-center p-6 w-full h-[364px] bg-primary-light rounded-3xl">
                  <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full h-full">
                    <div className="col-span-1 row-span-2 h-full">
                      <img
                        src={login}
                        alt="Login showcase"
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div>

                    <div className="col-span-1 row-span-1 h-full">
                      <img
                        src={voucher}
                        alt="Voucher showcase"
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>

                    <div className="col-span-1 row-span-1 h-full">
                      <img
                        src={loginInputs}
                        alt="Login elements showcase"
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center p-6 w-full h-[364px] bg-primary-light rounded-3xl">
                  <img
                    src={dashboard}
                    alt="Login showcase"
                    className="flex flex-1 w-full h-full rounded-2xl "
                  />
                </div>
              </div>

              <div className="flex gap-7">
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  className="flex flex-col gap-4 items-start"
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
                  className="flex flex-col gap-4 items-start"
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
                  className="flex flex-col gap-4 items-start"
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

      {/* SECTION 3 - LIGHT */}
      <Card
        cardSize="lg"
        cardStyle="light"
        rounded="xxl"
        width="w-full"
        className="flex mt-4 max-w-[1400px] mx-auto"
        children={
          <div className="w-full max-w-[1224px] flex gap-[100px] mx-auto items-center">
            <div className="bg-gray flex-1 w-full h-[532px] rounded-3xl p-[44px]">
              <img
                src={leaderboard}
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

                <h2 className="text-[46px] leading-[52px] font-bold text-gray-900">
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
                action={() => alert("Button clicked!")}
              />
            </div>
          </div>
        }
      />

      {/* SECTION 4 - YELLOW */}
      <Card
        cardSize="lg"
        cardStyle="secondary"
        rounded="xxl"
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
            <div className="w-full max-w-[1224px] flex gap-[130px] mx-auto items-center z-20">
              <div className="flex flex-col gap-10 flex-1">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 items-start">
                    <img
                      src={gift}
                      alt="Gift Icon"
                      className="h-[52px] w-auto"
                    />
                    <h2 className="text-[46px] leading-[52px] font-bold text-gray-900">
                      Score awesome rewards with Rexee
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    Earn Amazon vouchers and 3D models by participating in
                    surveys, turning your insights into valuable rewards.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Point
                    icon={<Check size={12} color="#fff" />}
                    text={"Get paid for answering surveys"}
                    style="dark"
                    size="sm"
                  />
                  <Point
                    icon={<Check size={12} color="#fff" />}
                    text={"Cash out your Rexee points"}
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
                <img
                  src={voucher}
                  alt="Voucher showcase"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </>
        }
      />

      {/* SECTION 5 - VIDEO */}
      <Card
        cardSize="lg"
        cardStyle="dark"
        rounded="xxl"
        width="w-full"
        className="flex mt-4 max-w-[1400px] mx-auto"
        children={
          <div className="w-full max-w-[1224px] mx-auto">
            <video autoPlay loop muted className="rounded-3xl">
              <source src={videoFile} type="video/mp4" />
            </video>
          </div>
        }
      />

      {/* SECTION 6 - TEAM */}
      <Card
        cardSize="lg"
        cardStyle="ghost"
        rounded="xxl"
        width="w-full"
        className="flex mt-10"
        children={
          <div className="w-full max-w-[1224px] flex flex-col gap-[52px] mx-auto">
            <div className="flex flex-col gap-4 items-start">
              <img src={wave} alt="Wave Icon" className="h-[52px] w-auto" />
              <h2 className="text-[46px] font-bold text-gray-900">
                Say <span className="text-primary">hello</span> to our team!
              </h2>
            </div>

            <div className="flex flex-col gap-8 w-full items-center">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
                <TeamAvatar
                  src={ennio}
                  alt="Ennio Armato - CEO"
                  name="Ennio Armato"
                  role="CEO"
                />
                <TeamAvatar
                  src={riccardo}
                  alt="Riccardo Tumminello - Head of Marketing"
                  name="Riccardo Tumminello"
                  role="Head of Marketing"
                />
                <TeamAvatar
                  src={alessandro}
                  alt="Alessandro Imborgia - Head of Sales"
                  name="Alessandro Imborgia"
                  role="Head of Sales"
                />
                <TeamAvatar
                  src={mario}
                  alt="Mario Ramic - Head of R&D"
                  name="Mario Ramic"
                  role="Head of R&D"
                />
                <TeamAvatar
                  src={anna}
                  alt="Anna Trifirò - Product & Communication Manager"
                  name="Anna Trifirò"
                  role="Product & Communication Manager"
                />
                <TeamAvatar
                  src={emily}
                  alt="Emily Saccaro - Brand Manager"
                  name="Emily Saccaro"
                  role="Brand Manager"
                />
                <TeamAvatar
                  src={marko}
                  alt="Marko Franjic - Technology Manager"
                  name="Marko Franjic"
                  role="Technology Manager"
                />
                <TeamAvatar
                  src={manuel}
                  alt="Manuel Matosevic - Backend Developer"
                  name="Manuel Matosevic"
                  role="Backend Developer"
                />
              </div>

              <Button
                text="Visit our website"
                style="secondary"
                size="base"
                rounded="full"
                icon={<ArrowRight size={20} color="#111827" />}
                action={() => alert("Button clicked!")}
              />
            </div>
          </div>
        }
      />

      {/* SECTION 7 - BANNER */}
      <Card cardSize="none" cardStyle="ghost" children={<Banner />} />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Homepage;
