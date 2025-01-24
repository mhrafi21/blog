import React from "react";
import heroImg from "../assets/images/hero.jpg";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh] md:h-screen"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20">
        <div>
          <div>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="pb-4">
                  <Title
                    subtitle="Photography"
                    textColor="text-indigo-500 text-center text-2xl md:text-3xl"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-poppins text-white leading-tight">
                  Capturing Moments, <br />
                  <span className="text-white">One Shot at a Time</span>
                </h2>
                <p className="mt-6 md:text-lg  text-gray-300 max-w-2xl">
                  I specialize in creating timeless memories through portraits,
                  weddings, and nature photography. Let’s make your moments
                  unforgettable.
                </p>

                {/* Call to Action */}

                <div className="mt-8 flex space-x-4 items-center justify-center">
                  <Link to={"../portfolio"}>
                    <motion.button
                      className="px-10 py-3  rounded-lg bg-indigo-600 text-white font-medium border border-indigo-600 hover:bg-transparent
                                  hover:text-indigo-600 transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Portfolio
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
