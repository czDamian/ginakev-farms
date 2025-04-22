"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Our Impact", href: "/#impact" },
    { name: "Our Achievements", href: "/#achievements" },
    { name: "About Us", href: "/#about" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Gallery", href: "/#gallery" },
  ];

  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 py-3 md:py-4 flex justify-between items-center bg-[#EDFDDC]">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/">
            <Image
              src="/mainLogo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="mr-2  w-24"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <motion.button
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <IoMdClose className="h-6 w-6 text-gray-700 cursor-pointer" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-700 cursor-pointer" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white shadow-sm px-4 py-4 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)} // close on click
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;
