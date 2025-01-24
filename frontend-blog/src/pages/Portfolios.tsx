import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import portfolioImg from "../assets/images/hero.jpg";
import pImg from "../assets/images/porfile.jpg";
import Container from "@/components/Container";
import Title from "@/components/Title";

type Image = {
  src: string; // URL or path to the image
  caption: string; // Caption for the image
};

type IType = {
  portraits: Image[];
  weddings: Image[];
  landscapes: Image[];
};

const Portfolios: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images: IType = {
    portraits: [
      { src: portfolioImg, caption: "Portrait " },
      { src: portfolioImg, caption: "Portrait " },
      { src: portfolioImg, caption: "Portrait " },
    ],
    weddings: [
      { src: pImg, caption: "Wedding" },
      { src: portfolioImg, caption: "Wedding" },
      { src: portfolioImg, caption: "Wedding" },
    ],
    landscapes: [
      { src: portfolioImg, caption: "Landscape" },
      { src: portfolioImg, caption: "Landscape" },
      { src: pImg, caption: "Landscape" },
    ],
  };

  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, amount: 0.2 });

  return (
    <div className="pt-20">
      <Container>
        <Title text={"Latest Works"} textColor="pb-8" titleBorder="heading_titleBorder"/>
        <p className=" mb-6 text-lg md:w-[60%]">
          Explore a collection of beautifully captured moments, showcasing the
          art of storytelling through photography. From intimate portraits to
          grand weddings and breathtaking landscapes, each image tells a unique
          story. With a passion for detail and composition, I strive to bring
          your memories to life, one frame at a time.
        </p>

        {images &&
          Object.entries(images)?.map(([, imgArray]) => (
            <div key={Math.random()} ref={galleryRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-3 ">
                {imgArray &&
                  imgArray?.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative group mb-2"
                      initial={{ opacity: 1, y: 50 }}
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
            </div>
          ))}

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
      </Container>
    </div>
  );
};

export default Portfolios;
