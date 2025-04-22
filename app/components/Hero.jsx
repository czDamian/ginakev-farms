"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden sm:mt-12"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/palm1.jpg"
          className="object-cover w-full min-h-[100vh]"
          alt="background-image"
          height={1000}
          width={1000}
        />
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-white font-extrabold text-4xl sm:text-6xl md:text-6xl lg:text-7xl max-w-5xl text-center leading-10 sm:leading-20 lg:leading-24 capitalize py-20 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>increasing tree cover and restoring ecosystems </p>
          <p className="text-xl md:text-2xl font-normal pt-12 max-w-md md:max-w-xl mx-auto">
            creating environmental, social impact and economic opportunities through
            sustainable & regenerative agroforestry
          </p>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
