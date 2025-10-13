"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const portfolio = [
  {
    title: "Product Design for Mobile App",
    image: "/cardTwo.jpg",
  },
  {
    title: "UI/UX Design for Fintech App",
    image: "/cardTwo.jpg",
  },
  {
    title: "The Designership",
    image: "/cardTwo.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section className="flex justify-center py-20 bg-transparent">
      {portfolio.map((item, i) => (
        <div
          key={i}
          className="
            relative w-[416px] h-[307px]
            rounded-[35px] overflow-hidden
            backdrop-blur-md bg-white/10
            border border-white/30 shadow-lg
            flex flex-col justify-between gap-4
            transition-transform duration-500 hover:-translate-y-2
          "
        >
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            width={416}
            height={307}
            className="w-full h-full object-cover opacity-95"
            priority
          />

          {/* Glass Gradient Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-transparent via-white/10 to-black/40
            "
          />

          {/* Title */}
          <div className="absolute bottom-10 left-12 z-10">
            <h3 className="text-white text-lg font-semibold tracking-[-0.015em] drop-shadow-md">
              {item.title}
            </h3>
          </div>

          {/* Arrow Button */}
          <button
            className="
              absolute top-5 right-5
              text-white text-xl
              w-[50px] h-[50px]
              text-2xl
              rounded-full
              flex items-center justify-center
              bg-gradient-to-br from-[#5E5E5E]/60 to-[#1A1A1A]/80
              backdrop-blur-lg
              hover:scale-105 transition-transform duration-300
              shadow-lg
            "
          >
          <FiArrowRight />
          </button>
        </div>
      ))}
    </section>
  );
}