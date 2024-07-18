import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <div className="p-4">
      {/* HERO */}
      <Hero />

      {/* SECTION 1 */}
      <Card
        cardSize="lg"
        cardStyle="ghost"
        rounded="xxl"
        width="w-full"
        className="flex"
        children={
          <div className="mt-10 max-w-[1440px] flex flex-col gap-8">
            <h2 className="text-[46px] font-bold text-gray-900">
              Where surveys transcend the mundane!
            </h2>

            <div className="flex gap-4">
              <Card
                cardSize="sm"
                cardStyle="ghost"
                className="flex flex-col gap-4 items-start"
                children={
                  <>
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
                cardSize="sm"
                cardStyle="ghost"
                className="flex flex-col gap-4 items-start"
                children={
                  <>
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
                cardSize="sm"
                cardStyle="ghost"
                className="flex flex-col gap-4 items-start"
                children={
                  <>
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

      {/* SECTION 2 */}
      <Card
        cardSize="lg"
        cardStyle="primary"
        rounded="xxl"
        width="w-full"
        className="flex"
        children={
          <div className="mt-10 max-w-[1440px] flex flex-col gap-8">
            <h2 className="text-[46px] font-bold text-white">
              Enjoy every survey moment
            </h2>

            <div className="flex gap-6">
              <p>Image 1</p>
              <p>Image 2</p>
            </div>

            <div className="flex gap-4">
              <Card
                cardSize="sm"
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
                cardSize="sm"
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
                cardSize="sm"
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
    </div>
  );
};

export default Homepage;
