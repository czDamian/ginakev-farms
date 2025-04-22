"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image paths from cashew1.jpg to cashew8.jpg
  const images = Array.from({ length: 8 }, (_, i) => `/cashew${i + 1}.jpg`);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <section
      id="gallery"
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
            className="text-4xl md:text-5xl font-bold text-center text-gray-800"
          >
            Ginakev Farms In Action
            <span className="block w-24 h-1 bg-green-500 mx-auto mt-4"></span>
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 1 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={src || "/cashew1.jpg"}
                  alt={`Ginakev Farms Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images[selectedImage] || "/cashew1.jpg"}
                alt={`Ginakev Farms Gallery Image ${selectedImage + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <button
              className="absolute top-0 right-0 m-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
              onClick={closeLightbox}
            >
              ✕
            </button>

            {selectedImage > 0 && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 ml-4"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
              >
                ←
              </button>
            )}

            {selectedImage < images.length - 1 && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 mr-4"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
              >
                →
              </button>
            )}

            <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4 bg-black bg-opacity-50">
              Image {selectedImage + 1} of {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
