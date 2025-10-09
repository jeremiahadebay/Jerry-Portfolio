'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-5 py-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I’m <span className="text-purple-800">Jeremiah</span><br />
          <span className="text-gray-800">UI/UX Designer</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Jeremiah is a highly accomplished designer with more than 7 years of experience...
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-800 transition-all"
        >
          View My Work
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="relative mt-10 md:mt-0"
      >
        <Image 
          src={"/jerryherosection.png"}
          alt="Jeremiah photo" 
          width={200}
          height={200}
          className="rounded-full object-cover border-8 border-purple-700 shadow-xl w-[280px] h-[280px]" 
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute inset-0 border-4 border-dashed border-purple-500 rounded-full"
        />
      </motion.div>
    </section>
  )
}