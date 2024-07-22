import React, { useEffect, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Header from "../components/Header";
import { Mail } from "react-feather";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";
import flashYellow from "../../src/assets/svg/flash-yellow.svg";

const FORMSPARK_FORM_ID = "EstwSp1jK";

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  };

  useEffect(() => {
    setSuccess(false);
  }, []);

  return (
    <>
      <div className="w-screen h-[60vh] bg-primary text-white flex flex-col gap-10 justify-center items-center relative overflow-hidden">
        <Header />
        <img
          src={flashPrimaryDark}
          alt="Flash Purple"
          className="h-[200%] w-auto absolute z-10"
          style={{
            top: "-45%",
            left: "8%",
          }}
        />
        <h1 className="text-[4.5rem] font-bold leading-[5rem] z-20">
          Contact us
        </h1>
        <p className="text-[20px] text-white z-20 w-[40%] text-center">
          Turn market research into a fun game and win amazing rewards along the
          way!
        </p>
      </div>

      <div className="flex gap-4 py-12 max-w-[1224px] mx-auto h-full">
        {/* FORM */}
        <div className="p-6 bg-light rounded-3xl flex-1">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            Send us a message
          </h3>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-light rounded-lg bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-light rounded-lg bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-gray-light rounded-lg bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
              Send
            </button>
          </form>
          {success && <p className="mt-4 text-green-500">Message sent!</p>}
        </div>

        <div className="p-6 bg-light rounded-3xl flex-1 flex flex-col gap-4 items-start">
          <img
            src={flashYellow}
            alt="Flash Icon Yellow"
            className="h-[56px] w-auto"
          />
          <h4 className="text-[24px] font-bold">
            Let us know what's on your mind!
          </h4>

          <div className="flex gap-1 items-center">
            <Mail color="#8A8AA1" size="18" />
            <p>info@rexee.com</p>
          </div>
        </div>
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default Contact;
