// eslint-disable-next-line no-unused-vars
import React from "react";

// import link
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black py-8 text-center text-white">
      <div className="container">
        <div className="mb-4">
          <h1>
            Copyright &copy;{" "}
            <a
              href="https://ponkoj644.github.io/my-portfolio/"
              className="text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Ponoj Mondol
            </a>{" "}
            2023. All right reserved.
          </h1>
        </div>

        {/* social link */}

        <div className="flex items-center justify-center gap-x-4 mb-4">
          <div className="text-orange-600 text-lg  border-b  p-[5px] rounded-full border-white hover:text-white hover:border-orange-600 hover:border-t transition duration-300">
            <a
              href="https://www.facebook.com/ponkoj.kumar.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="text-orange-600 text-lg  border-b  p-[5px] rounded-full border-white hover:text-white hover:border-orange-600 hover:border-t transition duration-300">
            <a
              href="https://twitter.com/PonkojMondol1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-orange-600 text-lg  border-b  p-[5px] rounded-full border-white hover:text-white hover:border-orange-600 hover:border-t transition duration-300">
            <a
              href="https://www.linkedin.com/in/ponkoj-mondol-97a28418b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="text-orange-600 text-lg  border-b  p-[5px] rounded-full border-white hover:text-white hover:border-orange-600 hover:border-t transition duration-300">
            <a
              href="https://wa.me/+8801833044436"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="text-orange-700">
          <marquee>
            Thank you for visit this site. The name images, address & price are
            used for the demo. please do not take it seriously.
          </marquee>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
