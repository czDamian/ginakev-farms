"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaLeaf, FaTree, FaSeedling, FaSun, FaWater } from "react-icons/fa";
import { GiFly } from "react-icons/gi";

const OurPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Plan items with icons
  const plans = [
    {
      title:
        "Tree planting initiative of 643 tenera palm trees scheduled for 2025",
      icon: <FaTree className="text-green-600 text-2xl" />,
      image: "/palm2.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      title:
        "Long-term goal to plant 5,000 palm trees as part of a large-scale regeneration initiative",
      icon: <FaSeedling className="text-green-600 text-2xl" />,
      image: "/palm1.jpg",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title:
        "Bee keeping and pollinator conservation: Construction of beehives and conservation of bee populations to support biodiversity",
      icon: <GiFly className="text-amber-500 text-2xl" />,
      image: "/beekeeping.jpg",
      color: "from-amber-500 to-amber-600",
      multipleImages: ["/cashew3.jpg", "/cashew4.jpg", "/cashew5.jpg"],
    },
    {
      title:
        "Regeneration of Plantains & Habanero peppers to further enhance carbon sequestration & some economic offsets",
      icon: <FaLeaf className="text-green-600 text-2xl" />,
      image: "/Plantain.jpg",
      color: "from-lime-500 to-lime-600",
    },
    {
      title:
        "Educating the local community via social impact campaigns on environmental and climate awareness",
      icon: <FaSun className="text-yellow-500 text-2xl" />,
      image: "/education.jpg",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title:
        "Empowering the local community with Energy awareness and solar lights for climate impact",
      icon: <FaSun className="text-yellow-500 text-2xl" />,
      image: "/solar.jpg",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title:
        "Implement social impact borehole water projects for schools in rural communities",
      icon: <FaWater className="text-blue-500 text-2xl" />,
      image: "/borehole.jpg",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section
      id="plans"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800"
          >
            What We Plan To Do
            <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1  gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
              >
                {/* Plan content */}
                <div className="p-6 flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    {plan.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {plan.title}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>

                {/* Plan images */}
                {plan.multipleImages ? (
                  <div className="grid grid-cols-3 gap-1 mt-auto">
                    {plan.multipleImages.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-80 lg:h-96 overflow-hidden"
                      >
                        <Image
                          src={img || "/cashew1.jpg"}
                          alt={`Plan ${index + 1} Image ${imgIndex + 1}`}
                          height={1000}
                          width={1000}
                          className="transition-transform duration-500 hover:scale-105 object-cover"
                        />{" "}
                        {/* Overlay to improve text readability */}
                        <div className="absolute inset-0 bg-[#599e73]/41" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative h-80 lg:96 mt-auto max-w-4xl">
                    <Image
                      src={plan.image || "/cashew1.jpg"}
                      alt={`Plan ${index + 1}`}
                      height={1000}
                      width={1000}
                      className="transition-transform duration-500 hover:scale-105 object-cover"
                    />{" "}
                    {/* Overlay to improve text readability */}
                    <div className="absolute inset-0 bg-[#599e73]/41" />
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${plan.color}`}
                    ></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-medium flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Support Our Plans</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPlans;
