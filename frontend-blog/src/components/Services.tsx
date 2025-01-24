









import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import sImg from "../assets/images/porfile.jpg";
import Title from "./Title";
import Container from "./Container";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capturing unforgettable moments of your special day.",
    image: sImg,
  },
  {
    id: 2,
    title: "Event Photography",
    description: "Professional coverage for your events and celebrations.",
    image: sImg,
  },
  {
    id: 3,
    title: "Portrait Photography",
    description: "Beautiful portraits that tell your story.",
    image: sImg,
  },
  {
    id: 4,
    title: "Product Photography",
    description: "High-quality photos to showcase your products.",
    image: sImg,
  },
  {
    id: 5,
    title: "Travel Photography",
    description: "Scenic captures of your adventures and travels.",
    image: sImg,
  },
  {
    id: 6,
    title: "Food Photography",
    description: "Mouth-watering shots of your culinary creations.",
    image: sImg,
  },
  {
    id: 7,
    title: "Fashion Photography",
    description: "Stylish shoots for brands and models.",
    image: sImg,
  },
  {
    id: 8,
    title: "Lifestyle Photography",
    description: "Candid and relaxed lifestyle moments.",
    image: sImg,
  },
  {
    id: 9,
    title: "Architectural Photography",
    description: "Stunning photos of interiors and exteriors.",
    image: sImg,
  },
  {
    id: 10,
    title: "Sports Photography",
    description: "Action-packed shots of athletic performances.",
    image: sImg,
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div ref={sectionRef} className=" pt-20">
      <Container>
        <Title text="Services" textColor="pb-8" titleBorder="heading_titleBorder" />
        <p className="pb-8 text-gray-600 dark:textGray400 md:text-lg md:w-[60%]">
          Explore a collection of expertly captured moments. Whether it’s
          intimate portraits, unforgettable weddings, or stunning landscapes,
          each image tells a unique story with passion and precision.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white dark:bgDark rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-76 mx-auto object-center object-cover"
                />
                <div className="p-6">
                  <motion.h3
                    className="text-lg md:text-2xl text-gray-600 font-semibold tracking-tighter dark:text-gray-300 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:textGray400 md:text-lg">{service.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Services;
