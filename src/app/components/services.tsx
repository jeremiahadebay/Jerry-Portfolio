"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "UI/UX Design",
    image: "/service1.png",
  },
  {
    title: "UI/UX Design",
    image: "/service2.png",
  },
  {
    title: "Web Design",
    image: "/service3.png",
  },
  {
    title: "Landing Page",
    image: "/service4.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#1A004A] to-[#2A0066] text-white overflow-hidden rounded-[40px]">
      {/* Decorative wave background */}
      <div className="absolute inset-0 bg-[url('/backgroundtwo.jpg')] bg-cover bg-center opacity-30"></div>

      {/* HEADER */}
      <div className="relative text-left mx-12 mb-12 z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
        <span className="text-[#FCFCFD] font-light">My</span> Services
        </h2>
      </div>

      {/* SERVICES SLIDER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex overflow-x-auto space-x-6 px-6 scrollbar-hide md:justify-center"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="min-w-[250px] md:min-w-[280px] bg-white/10 border border-white/20 rounded-[20px] p-5 flex flex-col justify-between shadow-lg backdrop-blur-md"
          >
            <div className="overflow-hidden rounded-[15px] mb-5 bg-white/5">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="rounded-[15px] object-cover"
              />
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium tracking-[-0.015em]">
                {service.title}
              </h3>
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 border border-white/30 rounded-full flex justify-center items-center"
              >
                <span className="text-lg font-light">↗</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* DOT INDICATORS */}
      <div className="relative flex justify-center mt-8 space-x-2 z-10">
        <span className="w-2 h-2 bg-white/60 rounded-full"></span>
        <span className="w-2 h-2 bg-white/30 rounded-full"></span>
        <span className="w-2 h-2 bg-white/30 rounded-full"></span>
        <span className="w-2 h-2 bg-white/30 rounded-full"></span>
      </div>
    </section>
  );
}
