import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import second from "../assets/second.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-5xl">
          Ameh Solomon Onyeke
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          <TypeAnimation
            sequence={[
              "Fullstack Web Developer",
              1000,
              "Computer Engineering Graduate",
              1000,
              "AI Enthusiast",
              1000,
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-70 md:text-lg max-w-lg mx-auto dark:text-gray-200">
          A computer engineering graduate with a wide range of skills and
          services to offer. You can reach me through any of the provided
          platforms.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/uncle_solomon"
        >
          <AiFillTwitterCircle className="animate-bounce" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Uncle-Solomon"
        >
          <AiFillGithub className="animate-bounce" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ameh-solomon-onyeke-a69874162/"
        >
          <AiFillLinkedin className="animate-bounce" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/uncle_soyo/"
        >
          <AiFillInstagram className="animate-bounce" />
        </a>
      </div>
      <div className="mx-auto mt-10 w-60 h-60 md:w-96 md:h-96 mb-10">
        <img
          src={second}
          alt="My face"
          className="w-[100%] h-[100%] rounded-full "
        />
      </div>
    </div>
  );
};

export default Hero;
