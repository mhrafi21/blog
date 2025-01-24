import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Container from "./Container";
import Title from "./Title";
import axios from "axios";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import img from "../assets/images/hero.jpg"
import {motion} from "framer-motion"
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          ...data,
        }
      );
      console.log("Form Submitted Successfully:", response.data);
      reset();
    } catch (error) {
      console.error("Form Submission Error:", error);
    }
  };

  return (
    <section
      className="pt-20 bg-cover bg-center"
      style={{ backgroundImage:img }}
    >
      <Container>
        <Title text="Get in Touch" textColor="pb-8" titleBorder="heading_titleBorder"/>
        <p className="md:text-lg textGray600 dark:textGray200">
          Contact us for a great photography session & beautiful captured
          moments
        </p>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Details */}
          <div className="mt-12 lg:mt-4">
            <ul className="space-y-12">
              <li className="flex items-center  group space-x-4">
                <span className="p-4 group-hover:bg-white group-hover:border-indigo-600 border group-hover:text-indigo-600  duration-500 bg-indigo-600 text-white rounded-full">
                  <FaEnvelope />
                </span>
                <div className="flex flex-col">
                  <strong className="text-xl textGray700 dark:textGray200">Email</strong>
                <span className="text-gray-500 font-medium">
                  example@domain.com
                </span>
                </div>
              </li>
              <li className="flex items-center  group space-x-4">
                <span className="p-4 group-hover:bg-white group-hover:border-indigo-600 border group-hover:text-indigo-600  duration-500 bg-indigo-600 text-white rounded-full">
                  <FaMapMarkerAlt />
                </span>
                <div className="flex flex-col">
                  <strong className="text-xl textGray700 dark:textGray200">Phone Number</strong>
                <span className="text-gray-500 font-medium">
                  +880 1932112552
                </span>
                </div>
              </li>
              <li className="flex items-center  group space-x-4">
                <span className="p-4 group-hover:bg-white group-hover:border-indigo-600 border group-hover:text-indigo-600 duration-500  bg-indigo-600 text-white rounded-full">
                  <FaPhone />
                </span>
                <div className="flex flex-col group">
                  <strong className="text-xl textGray700 dark:textGray200">Location</strong>
                <span className="text-gray-500 font-medium">
                  Malibaugh, Dhaka
                </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className=" border rounded-lg  p-6 mt-6  lg:mt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block textGray600 dark:text-gray-200 md:text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required." })}
                    className="mt-2 px-4 py-3 w-full border dark:bgDark border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 md:text-lg mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block md:text-lg dark:text-gray-200">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address.",
                      },
                    })}
                    className="mt-2 px-4 py-3 w-full border border-gray-300 dark:bgDark rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 md:text-lg mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block dark:text-gray-200 md:text-lg ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required." })}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 dark:bgDark rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                {errors.subject && (
                  <p className="text-red-500 md:text-lg mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block dark:text-gray-200 md:text-lg ">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required." })}
                  rows={4}
                  className="mt-2 px-4 py-3 w-full border border-gray-300 dark:bgDark dark:bgDark rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 md:text-lg mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="mt-6">
                <motion.button
                  type="submit"
                  className="w-full py-3 block rounded-lg hover:bg-indigo-600 hover:text-white font-medium border border-indigo-600 text-indigo-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </Container>

      {/* Google Map */}
      <div className="mt-16">
        <Container>
        <Title text="Find Studio"  textColor="pb-8" titleBorder="heading_titleBorder"/>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.743405723562!2d90.39945261543168!3d23.750854984589155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89402e8f4d1%3A0x17a5636e95b7af21!2sDhaka!5e0!3m2!1sen!2sbd!4v1690029388004!5m2!1sen!2sbd"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              title="Dhaka Location"
            ></iframe>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactPage;
