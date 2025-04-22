"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const stats = [
    { number: "60+", text: "trees conserved" },
    { number: "85+", text: "trees planted" },
    { number: "100+", text: "plots acquired " },
    { number: "2", text: "partners" },
    { number: "50+", text: "youths empowered" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* About Us */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-green-500 pb-2 inline-block"
            >
              About Us
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className=" rounded-lg p-6 shadow-md"
            >
              <motion.p
                variants={itemVariants}
                className="text-gray-700 text-lg leading-relaxed pb-8"
              >
                Ginakev Farms is dedicated to increasing tree cover and support
                sustainable livelihood. Since inception we have been focused on
                conservation and regenerative agriculture - integrating
                agroforestry practices that benefit both the environment and
                local community, ensuring that trees remain a long lasting
                environmental and economic asset. We also foster social impact
                through water/energy access, and climate awareness through
                community education and engagement.
              </motion.p>
              <div className="relative h-64 sm:h-80 md:h-120 overflow-hidden rounded-xl">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={"/cashew7.jpg"}
                    alt={`About Us`}
                    height={1000}
                    width={1000}
                    className="transition-transform rounded-4xl duration-500 object-contain"
                  />
                  {/* Overlay to improve text readability */}
                  <div className="absolute inset-0 bg-[#599e73]/36" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* The Challenge */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-green-500 pb-2 inline-block mt-8"
            >
              The Challenge We're Tackling
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="rounded-lg p-6 shadow-md"
            >
              <motion.p
                variants={itemVariants}
                className="text-gray-700 text-lg leading-relaxed"
              >
                Across many communities, tree cover is rapidly declining due to
                unstructured farming practices and the removal of high-value
                tree species. This leads to hotter climates, reduced soil
                fertility, and biodiversity loss, while also driving food
                scarcity and making essential resources increasingly expensive.
                Many of these issues are worsened by low awareness about climate
                and tree conservation/regeneration, which we are addressing
                through education and social impact outreach. In Amalla
                community, Udenu LGA, Enugu State, we are reversing this trend.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center"
          >
            {/* First Line: 2 Stats */}
            <div className="flex w-full justify-center gap-4 md:gap-8 lg:gap-10">
              {stats.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 sm:p-6 lg:px-12 shadow-md border border-green-200 flex flex-col items-center justify-center text-center lg:mb-6 sm:gap-4"
                >
                  <p className="text-green-800 font-extrabold sm:text-4xl lg:text-5xl text-2xl">
                    {stat.number}
                  </p>
                  <p className="text-green-700 font-medium text-sm sm:text-lg capitalize lg:min-w-40 ">
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Second Line: 3 Stats */}
            <div className="flex w-full justify-center gap-4 md:gap-8 lg:gap-10">
              {stats.slice(2).map((stat, index) => (
                <motion.div
                  key={index + 2}
                  custom={index + 2}
                  variants={statVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 sm:p-6 lg:px-12 shadow-md border border-green-200 flex flex-col items-center justify-center text-center sm:gap-4"
                >
                  <p className="text-green-800 font-extrabold sm:text-4xl lg:text-5xl text-2xl">
                    {stat.number}
                  </p>
                  <p className="text-green-700 font-medium text-sm sm:text-lg capitalize lg:min-w-40">
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
