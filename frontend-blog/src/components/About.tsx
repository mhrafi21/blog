import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/images/porfile.jpg";
import Title from "./Title";
import Container from "./Container";
import { Link } from "react-router";

const AboutMe: React.FC = () => {
  return (
    <section className="pt-20 overflow-hidden">
      {/* Background Pattern */}
      <Container>
       
          <Title text="About me" textColor="pb-10" titleBorder="heading_titleBorder"/>
        
      </Container>
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none"></div>
        {/* Container */}
        <Container>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={profile} // Replace with photographer's image
                  alt="Photographer"
                  className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
              <div >
              <Title subtitle={"Ashiqur Rahman Riyan"} />
              <span className="relative inline-block">
              <Title subHeading={"Photographer & Videographer"} textColor="inline-block"/>
              <small className="heading_border">
              </small>
              </span>
             
              </div>
                <p className="mt-4 md:text-lg textGray600 dark:textGray400">
                  Capturing moments that tell stories is not just my passion—it’s
                  my way of life. With a keen eye for detail and a love for the
                  creative process, I specialize in portraits, weddings, and
                  nature photography.
                </p>
                <p className="mt-4 md:text-lg textGray600 dark:textGray400">
                  Whether it’s the smile of a loved one, the beauty of a landscape,
                  or the fleeting moments of a wedding day, I believe every picture
                  holds a unique narrative waiting to be shared.
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-3 textGray600 dark:textGray400">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="inline-block w-4 h-4 bg-indigo-600 rounded-full mr-3"></span>
                    <span className=" font-medium">10+ Years of Experience</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="inline-block w-4 h-4 bg-indigo-600 rounded-full mr-3"></span>
                    <span className=" font-medium">Featured in National Geographic</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="inline-block w-4 h-4 bg-indigo-600 rounded-full mr-3"></span>
                    <span className=" font-medium">Specialized in Portraits & Weddings</span>
                  </motion.li>
                </ul>

                {/* Call to Action */}
                <div className="mt-8">
                 <Link to={"/contact"}>
                 <motion.button
                    
                    className="px-10 py-3  rounded-lg hover:bg-indigo-600 hover:text-white font-medium border border-indigo-600 text-indigo-600 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let’s Work Together
                  </motion.button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutMe;
