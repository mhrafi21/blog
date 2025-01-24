import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import Title from "./Title";
import { FaAngleRight, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="pt-20">
      <div className="bgDark text-white py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Title
              subtitle="About Me"
              textColor="mb-4 text-lg md:text-xl text-gray-100 "
            />
            <p className="textGray400 ">
              I’m a passionate photographer capturing moments that last forever.
              From intimate portraits to breathtaking landscapes, I bring
              stories to life through my lens.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <Title
              subtitle="Quick Links"
              textColor="mb-4 text-lg md:text-xl text-gray-100"
            />
            <ul className="textGray400 space-y-2">
              <li className="hover:text-[#3730a3] flex items-center transition">
                <span>
                  {" "}
                  <FaAngleRight />
                </span>
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#3730a3] flex items-center transition">
                <span>
                  {" "}
                  <FaAngleRight />
                </span>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="hover:text-[#3730a3] flex items-center transition">
                <span>
                  {" "}
                  <FaAngleRight />
                </span>
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:text-[#3730a3] flex items-center transition">
                <span>
                  {" "}
                  <FaAngleRight />
                </span>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <Title
              subtitle="Follow Me"
              textColor="mb-4 text-lg md:text-xl text-gray-100"
            />
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3730a3] transition"
                  aria-label="Facebook"
                >
                 <FaFacebook className="text-xl" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3730a3] transition"
                  aria-label="Instagram"
                >
                  <FaWhatsapp className="text-xl" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3730a3] transition"
                  aria-label="Twitter"
                >
                 <FaTwitter  className="text-xl"/>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <Title
              subtitle="Contact"
              textColor="mb-4 text-lg md:text-xl text-gray-100"
            />
            <ul className="text-gray-400 space-y-2">
              <li>
                Email:{" "}
                <Link
                  to="mailto:example@domain.com"
                  className="hover:text-[#3730a3] transition"
                >
                  example@domain.com
                </Link>
              </li>
              <li>
                Phone:{" "}
                <Link
                  to="tel:+1234567890"
                  className="hover:text-[#3730a3] transition"
                >
                  +1 234 567 890
                </Link>
              </li>
              <li>Location: Malibaugh, Dhaka.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Ashiqur Rahman Riyan. All rights
          reserved.
          <i className="ml-1">
            Developed by{" "}
            <Link
              className="underline"
              to={"https://www.facebook.com/mdmahdihasan.rafi"}
              target="_blank"
            >
              Rafi
            </Link>
          </i>
        </div>
      </Container>
      </div>
    </footer>
  );
};

export default Footer;
