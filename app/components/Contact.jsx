"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
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

  const contactOptions = [
    {
      title: "Send Us a DM on X",
      icon: <FaXTwitter className="text-2xl" />,
      link: "https://x.com/GinakevFarms/",
      color: "bg-black text-white",
      hoverColor: "hover:bg-gray-800",
    },
    {
      title: "Send Us an Email",
      icon: <IoMail className="text-2xl" />,
      link: "mailto:contact@ginakevfarms.com",
      color: "bg-blue-600 text-white",
      hoverColor: "hover:bg-blue-700",
    },
    {
      title: "Donate To Us on Gitcoin",
      icon: <FaDonate className="text-2xl" />,
      link: "https://explorer.gitcoin.co/#/projects/0x5b51aef0bba17870d95c3194f5a3b662961dfe8d647a054fd027c331b7000d49",
      color: "bg-sky-300 text-black",
      hoverColor: "hover:bg-sky-400",
    },
    {
      title: "Donate To Us on Giveth",
      icon: <FaDonate className="text-2xl" />,
      link: "https://giveth.io/project/ginakev-farms",
      color: "bg-indigo-600 text-white",
      hoverColor: "hover:bg-indigo-700",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-green-50"
    >
      <div ref={ref} className="container mx-auto px-4 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-full">
              <Image
                src="/contact.jpg"
                alt="Contact Us"
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-green-900/30"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              >
                Join Us In Making A Difference
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                We're always open to partnerships and donors who's goals aligns
                with us. By supporting Ginakev Farms, you're investing in a
                reforestation initiative that improves soil regeneration,
                biodiversity conservation, carbon sequestration and ecological
                resilience.
              </motion.p>

              <motion.div variants={containerVariants} className="space-y-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Link
                      href={option.link}
                      className={`flex items-center p-4 rounded-lg ${option.color} ${option.hoverColor} transition-all duration-300 shadow-md`}
                    >
                      <div className="mr-4 bg-white/20 p-3 rounded-full">
                        {option.icon}
                      </div>
                      <h3 className="font-medium">{option.title}</h3>
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                      >
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                          }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
