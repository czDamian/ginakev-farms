"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const achievements = [
    {
      title: "Acquired 100 plots of land for tree planting",
      multipleImages: ["/land5.jpg", "/land4.jpg"],
    },
    {
      title:
        "Conserved existing Cashew Trees and planted more to maintain biodiversity and soil health",
      multipleImages: [ "/plant6.jpg", "/cashew6.jpg"],
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
          >
            What we've done
            <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-1 gap-10"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="p-6">
                  <motion.h1
                    variants={itemVariants}
                    className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center"
                  >
                    <span className="mr-2"> 🌳</span>
                    {achievement.title}
                  </motion.h1>
                </div>

                {achievement.multipleImages ? (
                  <div className="grid grid-cols-2 gap-1">
                    {achievement.multipleImages.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-48 sm:h-60 md:h-80 lg:h-120 overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`Achievement ${index + 1} Image ${imgIndex + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 hover:scale-110"
                        />
                        {/* Overlay to improve text readability */}
                        <div className="absolute inset-0 bg-[#599e73]/41" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative h-64 sm:h-80 md:h-120 w-full overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.2 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={achievement.image || "/cashew1.jpg"}
                        alt={`Achievement ${index + 1}`}
                        height={1000}
                        width={1000}
                        className="transition-transform duration-500 object-fill"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
