"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import GainforestMap from "./GMap";
import Link from "next/link";

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              We Track Our Impact With{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                Blockchain
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600">
              We collect data and track our impact for verifiable social
              coordination and evaluation
            </motion.p>
          </div>

          {/* Blockchain visualization */}
          <motion.div
            variants={itemVariants}
            className="relative h-24 md:h-32 mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-4 w-4 rounded-full bg-green-500 shadow-lg shadow-green-200"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{
                    x: [i * 100 - 800, i * 200],
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* GainForest Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-center text-gray-800"
            >
              See our Proof of
              <span className="text-green-600"> Impact</span>
              <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* First EcoForest Image */}
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    View our Hypercert
                  </h3>
                  <div className="flex items-center text-sm text-green-600 mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Verified on blockchain
                  </div>
                </div>
                <div className="relative h-96 overflow-hidden">
                  <Link
                    href="https://app.hypercerts.org/hypercerts/42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959-52743766872745461836823064151924072775680"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/logo5.png"
                      alt="image"
                      height={1000}
                      width={1000}
                      className="transition-transform duration-500 hover:scale-110 object-cover h-full"
                    />
                  </Link>
                </div>
              </motion.div>

              {/* Second EcoForest Image */}
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Map of Ginakev Farms on GainForest
                  </h3>
                  <div className="flex items-center text-sm text-green-600 mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Verified on blockchain
                  </div>
                </div>
                <div className="relative h-96 overflow-hidden">
                  <GainforestMap />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
