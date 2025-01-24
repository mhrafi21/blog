import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import portfolioImg from "../assets/images/hero.jpg";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router";

type Image = {
  src: string; // URL or path to the image
  caption: string; // Caption for the image
};

type IType = {
  portraits: Image[];
  weddings: Image[];
  landscapes: Image[];
};

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "portraits" | "weddings" | "landscapes"
  >("portraits");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images: IType = {
    portraits: [
      { src: portfolioImg, caption: "Portrait 1" },
      { src: portfolioImg, caption: "Portrait 2" },
      { src: portfolioImg, caption: "Portrait 3" },
    ],
    weddings: [
      { src: portfolioImg, caption: "Wedding 1" },
      { src: portfolioImg, caption: "Wedding 2" },
      { src: portfolioImg, caption: "Wedding 3" },
    ],
    landscapes: [
      { src: portfolioImg, caption: "Landscape 1" },
      { src: portfolioImg, caption: "Landscape 2" },
      { src: portfolioImg, caption: "Landscape 3" },
    ],
  };

  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, amount: 0.1 });

  return (
    <div className="pt-20">
      <Container>
        <Title
          text={"Latest Works"}
          textColor="pb-8"
          titleBorder="heading_titleBorder"
        />
        <p className="textGray600 dark:textGray400 mb-6 md:text-lg md:w-[60%]">
          Explore a collection of beautifully captured moments, showcasing the
          art of storytelling through photography. From intimate portraits to
          grand weddings and breathtaking landscapes, each image tells a unique
          story. With a passion for detail and composition, I strive to bring
          your memories to life, one frame at a time.
        </p>

        <div className="flex space-x-4 border-b-2 pb-4">
          <button
            className={`md:text-lg font-medium ${
              activeTab === "portraits"
                ? "text-indigo-600 font-extrabold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("portraits")}
          >
            Portraits
          </button>
          <button
            className={`md:text-lg font-medium ${
              activeTab === "weddings"
                ? "text-indigo-600 font-extrabold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("weddings")}
          >
            Weddings
          </button>
          <button
            className={`md:text-lg font-medium ${
              activeTab === "landscapes"
                ? "text-indigo-600 font-extrabold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("landscapes")}
          >
            Landscapes
          </button>
        </div>

        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
        >
          {images[activeTab] &&
            images[activeTab].map((image: Image, index: number) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transform group-hover:scale-105 transition-all duration-300"
                  onClick={() => openLightbox(image.src)}
                />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg bg-black bg-opacity-50 p-2 rounded-lg">
                  {image.caption}
                </div>
              </motion.div>
            ))}
        </div>

        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt="Lightbox"
                  className="w-full h-auto object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl font-bold"
                  onClick={closeLightbox}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Link to={"/portfolio"}>
          <div className="mt-8">
            <motion.button
              className="px-10 py-3  rounded-lg hover:bg-indigo-600 hover:text-white font-medium border border-indigo-600 text-indigo-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              See More
            </motion.button>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Portfolio;
