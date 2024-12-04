import React, { useEffect, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Header from "../components/Header";
import { Mail } from "react-feather";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";
import flashYellow from "../../src/assets/svg/flash-yellow.svg";

const FORMSPARK_FORM_ID = "sRWjIEB8z";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

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

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true });

  return (
    <>
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="w-screen h-[60vh] bg-primary text-white flex flex-col gap-10 justify-center items-center relative overflow-hidden"
      >
        <Header type="light" />
        <img
          src={flashPrimaryDark}
          alt="Flash Purple"
          className="h-[200%] w-auto absolute z-10"
          style={{
            top: "-45%",
            left: "8%",
          }}
        />
        <h1 className="xs:text-[2.5rem] xs:leading-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] sm:leading-[4rem] lg:leading-[5rem] font-bold leading-[5rem] z-20">
          Contact us
        </h1>
        <p className="text-[20px] xs:text-[16px] sm:text-[16px] text-white z-20 w-[40%] text-center">
          Turn market research into a fun game and win amazing rewards along the
          way!
        </p>
      </motion.div>

      <div className="flex gap-4 py-12 max-w-[1224px] mx-auto h-full xs:flex-col sm:flex-row xs:px-6 sm:px-6 lg:px-0">
        {/* FORM */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="p-6 bg-light rounded-3xl flex-1"
        >
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold mb-6">
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
                className="w-full p-3 border border-gray-light rounded-xl bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-light rounded-xl bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-gray-light rounded-xl bg-[#E7E6F2] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        </motion.div>

        <motion.div
          ref={infoRef}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="p-6 bg-light rounded-3xl flex-1 flex flex-col gap-4 items-start"
        >
          <img
            src={flashYellow}
            alt="Flash Icon Yellow"
            className="h-[56px] w-auto"
          />
          <h4 className="xs:text-[20px] sm:text-[24px] font-bold">
            Let us know what's on your mind!
          </h4>

          <div className="flex gap-1 items-center">
            <Mail color="#8A8AA1" size="18" />
            <p>info@rexee.com</p>
          </div>
        </motion.div>
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default Contact;
