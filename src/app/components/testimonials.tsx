"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules"; // for momentum drag
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";

const services = [
  { title: "UI/UX Design", image: "/cardTwo.jpg" },
  { title: "UI/UX Design", image: "/cardOne.jpg" },
  { title: "Web Design", image: "/cardTwo.jpg" },
  { title: "Landing Page", image: "/cardOne.jpg" },
  { title: "Brand Identity", image: "/cardTwo.jpg" },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-20 px-10 bg-gradient-to-b from-[#1A004A] to-[#2A0066] text-white overflow-hidden rounded-[40px]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/backgroundtwo.jpg')] bg-cover bg-center opacity-20" />

      {/* Header */}
      <div className="relative z-10 text-left md:text-left mb-10 px-7">
        <h1 className="text-center text-[28px] md:text-[48px] font-bold leading-tight tracking-[-0.02em]">
            Testimonials That <br />
        Speak to <span className="text-[#FD853A]"> My Results </span> 
        </h1>
      </div>

      {/* Swiper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 px-6"
      >
        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={false}
          className="!overflow-visible"
          breakpoints={{
            320:  { slidesPerView: 1.15, spaceBetween: 18 },
            480:  { slidesPerView: 1.5,  spaceBetween: 20 },
            640:  { slidesPerView: 2.2,  spaceBetween: 24 },
            1024: { slidesPerView: 3.2,  spaceBetween: 28 },
            1440: { slidesPerView: 4,    spaceBetween: 32 },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i} className="!w-[260px] md:!w-[280px]">
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="bg-white/10 border border-white/20 rounded-[20px] p-5 flex flex-col justify-between shadow-lg backdrop-blur-md"
              >
                {/* Card top image */}
                <div className="overflow-hidden rounded-[15px] mb-5 bg-white/5">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={480}
                    height={360}
                    className="rounded-[15px] object-cover w-full h-auto"
                    priority={i < 2}
                  />
                </div>

                {/* Card footer */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium tracking-[-0.015em]">{s.title}</h3>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 border border-white/30 rounded-full flex justify-center items-center"
                  >
                    <span className="text-lg font-light">↗</span>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Dots (static, optional) */}
      <div className="relative z-10 flex justify-center mt-8 gap-2">
        <span className="w-2 h-2 bg-white/70 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
        <span className="w-2 h-2 bg-white/30 rounded-full" />
      </div>
    </section>
  );
}