"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const items = ["SwiftAid", "AI Relocator"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 90000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section id="about" className="pt-14 sm:pt-20 lg:pt-[10px] flex justify-center ">
      <div className="px-4 xl:container">
        <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 font-extrabold select-none w-full text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,108,247,.4), rgba(74,108,247,0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.6,
              position: "absolute",
              left: "100%",
              top: "30px",
              transform: "translate(-50%, 0)",
              fontSize: "80px",
              fontWeight: 800,
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              lineHeight: "1",
            }}
            aria-hidden="true"
          >
            About Us
          </span>
          <h2 className="mb-5 mt-5 text-3xl font-extrabold sm:text-4xl md:text-[50px] md:leading-[60px]">
            Know Details About<p>{" "} </p>
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500"
            >
              {items[index]}
            </motion.span>
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {items[index]} is an AI-driven relocation and city exploration platform, offering personalized assistance to individuals moving to or exploring new cities.
            We integrate AI to enhance user experiences and streamline service recommendations.
          </p>
        </div>

        <div className="w-full">
      <div className="tabButtons flex w-full items-center justify-around">
        <button className="w-full border-b px-8 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 border-primary text-primary dark:border-primary">
          About Us
        </button>
        <button className="w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary">
          Our Mission
        </button>
        <button className="w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary">
          Our Vision
        </button>
      </div>
    </div>
      </div>
    </section>
  );
};

export default AboutUs;
