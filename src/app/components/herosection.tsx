"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-20 pb-0 pt-24 bg-white text-[#1A004A] relative overflow-hidden">
      {/* === TOP HEADING SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 z-10"
      >
        <p className="inline-block text-center text-[20px] font-medium border-2 border-[#1A004A] bg-[#fffff] text-[#1A004A] px-5 py-1 rounded-full text-sm mt-10 mb-2">
          Hello!
        </p>

        <h1 className="text-4xl font-600 font-semibold md:text-6xl leading-tight mb-4">
          I’m <span className="text-[#235181]">Jeremiah,</span> <br /> UI/UX Designer
        </h1>
      </motion.div>

      {/* === MAIN GRID SECTION === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center w-full max-w-7xl">
        {/* LEFT COLUMN - DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0 space-y-6"
        >
          <p className="text-[#344054] font-400 text-base md:text-lg max-w-md relative leading-relaxed">
            <span className="text-6xl text-[#344054] font-serif absolute -left-6 top-0">“</span> <br />
            Jeremiah is a highly accomplished designer with more than{" "}
            <span className="font-semibold">7 years of experience</span> in this
            creative field, including strong design systems and branding experience
            that help clients achieve their vision while maintaining consistency
            and enhancing their brand storytelling.
          </p>
        </motion.div>

        {/* CENTER COLUMN - IMAGE WITH BACKGROUND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center items-center relative z-10"
        >
          {/* Background Circle */}
          <div className="relative w-[330px] h-[636px] md:w-[420px] md:h-[420px] bg-[#1A004A] rounded-full"></div>

          {/* Portrait */}
          <div className="md:w-80 md:h-80 z-10 md:-mt-16 shadow-xl absolute">
            <Image
              src="/jerryherosection.png"
              alt="Jeremiah portrait"
              width={800}
              height={800}
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN - EXPERIENCE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center md:items-end justify-center text-center md:text-right px-4 md:px-0 space-y-2"
        >
          <div className="flex space-x-1 text-3xl text-[#1A004A] mb-1">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <h3 className="text-[#1A004A] font-extrabold text-3xl md:text-4xl">
            7 Years
          </h3>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            Experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}