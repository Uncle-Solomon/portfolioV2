import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2>Ameh Solomon Onyeke</h2>
        <h3>Fullstack Web Developer and AI Enthusiast</h3>
        <p>
          A tech bro with a wide range of skills and services to offer. You can
          reach me through any of the provided platforms.
        </p>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/uncle_solomon"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Uncle-Solomon"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ameh-solomon-onyeke-a69874162/"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/uncle_soyo/"
        >
          <AiFillInstagram />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
