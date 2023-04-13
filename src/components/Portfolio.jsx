import React from "react";
import { FaReact } from "react-icons/fa";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";

const Portfolio = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-700 dark:text-white">
          The section that follows highlights a few of my recently completed
          projects.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 hover:scale-105 shadow-2xl hover-shadow-3xl ease-in-out transition-all duration-300">
          <a
            href="https://heart-care-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={web1}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </a>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-105 shadow-2xl hover-shadow-3xl ease-in-out transition-all duration-300">
          <a
            href="https://mern-ehya-blog-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={web2}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </a>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-105 shadow-2xl hover-shadow-3xl ease-in-out transition-all duration-300">
          <a
            href="https://solomon-ameh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={web3}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </a>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-105 shadow-2xl hover-shadow-3xl ease-in-out transition-all duration-300">
          <a
            href="https://react-data-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={web4}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </a>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-105 shadow-2xl hover-shadow-3xl ease-in-out transition-all duration-300">
          <a
            href="https://mern-ai-project.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={web5}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </a>
        </div>
        <div className="basis-1/3 flex-1 hover:scale-105 shadow-2xl hover-shadow-3xl ease-in-out transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Portfolio;
