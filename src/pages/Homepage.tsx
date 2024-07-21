import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Hero from "../components/Hero";

import videoFile from "../../src/assets/video/logo-animation.mp4";
import flashYellow from "../../src/assets/svg/flash-yellow.svg";
import blingYellow from "../../src/assets/img/bling-yellow.png";
import celebrate from "../../src/assets/img/celebrate.png";
import gift from "../../src/assets/img/gift.png";
import wave from "../../src/assets/img/wave.png";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

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
                    <div className="w-full h-[324px] bg-light rounded-3xl"></div>
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
                    <div className="w-full h-[324px] bg-light rounded-3xl"></div>
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
                    <div className="w-full h-[324px] bg-light rounded-3xl"></div>
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
        className="flex mt-10"
        children={
          <div className="max-w-[1224px] flex flex-col gap-[52px] mx-auto">
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
              <div className="bg-primary-light rounded-3xl w-full h-[364px]"></div>
              <div className="bg-primary-light rounded-3xl w-full h-[364px]"></div>
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
                      Earn experience points and level up as you engage and gain
                      rewards along the way.
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
        }
      />

      {/* SECTION 3 - LIGHT */}
      <Card
        cardSize="lg"
        cardStyle="light"
        rounded="xxl"
        width="w-full"
        className="flex mt-4"
        children={
          <div className="w-full max-w-[1224px] flex gap-[52px] mx-auto items-center">
            <div className="bg-gray flex-1 w-full h-[532px] rounded-3xl"></div>
            <div className="flex flex-col gap-10 flex-1">
              <div className="flex flex-col gap-2 items-start">
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
                <div className="flex gap-4">
                  <p>Icon</p>
                  <p>Point 1</p>
                </div>

                <div className="flex gap-4">
                  <p>Icon</p>
                  <p>Point 2</p>
                </div>

                <div className="flex gap-4">
                  <p>Icon</p>
                  <p>Point 3</p>
                </div>
              </div>

              <Button
                text="Send us a message"
                style="primary"
                size="base"
                rounded="full"
                className="self-start"
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
        className="flex mt-4"
        children={
          <div className="w-full max-w-[1224px] flex gap-[52px] mx-auto items-center">
            <div className="flex flex-col gap-10 flex-1">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 items-start">
                  <img src={gift} alt="Gift Icon" className="h-[52px] w-auto" />
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
                <div className="flex gap-4">
                  <p>Icon</p>
                  <p>Point 1</p>
                </div>

                <div className="flex gap-4">
                  <p>Icon</p>
                  <p>Point 2</p>
                </div>

                <div className="flex gap-4">
                  <p>Icon</p>
                  <p>Point 3</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-darker flex-1 w-full h-[532px] rounded-3xl"></div>
          </div>
        }
      />

      {/* SECTION 5 - VIDEO */}
      <Card
        cardSize="lg"
        cardStyle="dark"
        rounded="xxl"
        width="w-full"
        className="flex mt-4"
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
            <div className="flex flex-col gap-2 items-start">
              <img src={wave} alt="Wave Icon" className="h-[52px] w-auto" />
              <h2 className="text-[46px] font-bold text-gray-900">
                Say <span className="text-primary">hello</span> to our team!
              </h2>
            </div>

            <div className="flex flex-col gap-8 w-full items-center">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Ennio Armato
                        </p>
                        <p>CEO</p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Riccardo Tumminello
                        </p>
                        <p className="text-sm">Head of Marketing</p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Alessandro Imborgia
                        </p>
                        <p className="text-sm">Head of Sales</p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">Mario Ramic</p>
                        <p className="text-sm">Head of R&D</p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Anna Trifirò
                        </p>
                        <p className="text-sm">
                          Product & Communication Manager
                        </p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Emily Saccaro
                        </p>
                        <p className="text-sm">Brand Manager</p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Marko Franjic
                        </p>
                        <p className="text-sm">Technology Manager</p>
                      </div>
                    </div>
                  }
                />
                <Card
                  cardSize="none"
                  cardStyle="ghost"
                  children={
                    <div className="flex flex-col gap-2 items-start w-full">
                      <div className="w-full h-[290px] rounded-3xl bg-gray-light"></div>
                      <div className="flex flex-col gap-2 p-4 bg-light rounded-2xl w-full">
                        <p className="text-[20px] font-semibold">
                          Manuel Matosevic
                        </p>
                        <p className="text-sm">Backend Developer</p>
                      </div>
                    </div>
                  }
                />
              </div>

              <Button
                text="Visit our website"
                style="secondary"
                size="base"
                rounded="full"
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
