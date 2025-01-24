import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaStar } from "react-icons/fa6";
import Title from "./Title";
import Container from "./Container";
import img from "../assets/images/porfile.jpg"
import { FaQuoteLeft } from "react-icons/fa";
type TReviews = {
  name: string;
  profileImg: string;
  rating: number;
  review: string;
};

const Testimonial: React.FC = () => {
  const reviews: TReviews[] = [
    {
      name: "John Doe",
      profileImg: img,
      rating: 5,
      review:
        "The service was excellent! I’m really satisfied with the quality and support provided. Highly recommend!",
    },
    {
      name: "Jane Smith",
      profileImg: img,
      rating: 4,
      review:
        "Great experience overall! The team was helpful, and the product exceeded my expectations.",
    },
    {
      name: "Michael Brown",
      profileImg: img,
      rating: 5,
      review:
        "Absolutely amazing! The attention to detail and care for customer satisfaction were top-notch.",
    },
    {
      name: "Michael Brown",
      profileImg:img,
      rating: 5,
      review:
        "Absolutely amazing! The attention to detail and care for customer satisfaction were top-notch.",
    },
    {
      name: "Michael Brown",
      profileImg: img,
      rating: 5,
      review:
        "Absolutely amazing! The attention to detail and care for customer satisfaction were top-notch.",
    },
    {
      name: "Michael Brown",
      profileImg: img,
      rating: 5,
      review:
        "Absolutely amazing! The attention to detail and care for customer satisfaction were top-notch.",
    },
    {
      name: "Michael Brown",
      profileImg: img,
      rating: 5,
      review:
        "Absolutely amazing! The attention to detail and care for customer satisfaction were top-notch.",
    },
    {
      name: "Michael Brown",
      profileImg: img,
      rating: 5,
      review:
        "Absolutely amazing! The attention to detail and care for customer satisfaction were top-notch.",
    },
  ];

  return (
    <section className=" pt-20">
      <Container>
        <Title text="Clients Reviews" textColor="pb-8" titleBorder="heading_titleBorder"/>
        <p className=" md:text-lg pb-8 textGray600 dark:textGray400 md:w-[60%]">We value our clients' feedback and are proud to share their experiences. Here's what they have to say about our services </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
        
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,

            },
            640: {
              slidesPerView: 1,
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
          {reviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className=" rounded-lg border p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between">
              <div className="flex items-start flex-col space-y-4">
                  <img
                    src={review.profileImg}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className=" text-lg md:text-xl font-semibold textGray800 dark:textGray300">
                      {review.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                  <div><FaQuoteLeft className="text-xl text-gray-600"/></div>
              </div>
                <p className="mt-6 md:text-lg text-indigo-400 italic">"{review.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
