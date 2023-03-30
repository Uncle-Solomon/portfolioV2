import React from "react";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import AI from "../assets/AI2.jpg";
import { FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import {
  SiFlask,
  SiJupyter,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

const About = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
        <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-200">
          I focus majorly on{" "}
          <span className="text-teal-500"> backend technology </span> but I
          still know a little about{" "}
          <span className="text-teal-500"> frontend </span> :|. I also dabble in
          a bit of <span className="text-teal-500">AI, Machine Learning</span>{" "}
          and <span className="text-teal-500">Embedded Systems </span>. I am
          currently learning more frameworks and developing my skillset - I
          regularly document my learning progress on Github.
        </p>
      </div>
      <div className="lg:flex gap-10 group">
        <div className="text-center shadow-xl hover-shadow-2xl p-10 rounded-2xl my-10 lg:hover:scale-110 ease-in-out transition-all duration-300 dark:bg-white">
          <img
            src={frontend}
            className="mx-auto hover:scale-110 ease-in-out duration-300"
            width={150}
            height={150}
          />
          <h3 className="text-lg font-medium pt-8 pb-2  text-teal-600">
            FrontEnd
          </h3>
          <p className="py-2 animate-[fade-in_1s_ease-in-out]">
            Bringing expert user interface and experience designs to life with
            the use of recent frontend frameworks and packages.
          </p>
          <h4 className="py-4 text-teal-600">Tools and Frameworks I use</h4>
          <p className="text-gray-700 py-1 grid-cols-2">
            ReactJS{" "}
            <FaReact className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            JavaScript{" "}
            <DiJavascript1 className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            HTML{" "}
            <FaHtml5 className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            TailWind CSS{" "}
            <SiTailwindcss className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
        </div>
        <div className="text-center shadow-xl hover-shadow-2xl p-10 rounded-2xl my-10 lg:hover:scale-110 ease-in-out transition-all duration-300 dark:bg-white">
          <img
            src={backend}
            className="mx-auto hover:scale-110 ease-in-out duration-300 "
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2  text-teal-600">
            Backend
          </h3>
          <p className="py-2">
            Developing architecture that would support your application;
            Integrating APIs, Databases and Authentication.
          </p>
          <h4 className="py-4 text-teal-600">Tools and Frameworks I use</h4>
          <p className="text-gray-700 py-1">
            NodeJs{" "}
            <DiNodejs className="inline-block  text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            Python Flask{" "}
            <SiFlask className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            MongoDB{" "}
            <SiMongodb className="inline-block text-teal-600 items-center ml-1 animate-bounce" />{" "}
            | PostgreSQL{" "}
            <SiPostgresql className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            PostMan{" "}
            <SiPostman className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
        </div>
        <div className="text-center shadow-xl hover-shadow-2xl p-10 rounded-2xl my-10 lg:hover:scale-110 ease-in-out transition-all duration-300 dark:bg-white">
          <img
            src={AI}
            className="mx-auto hover:scale-110 ease-in-out duration-300"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2  text-teal-600">
            AI / Machine Learning
          </h3>
          <p className="py-2">
            Creating models and exploring solutions that can be deployed through
            the use of machine learning techniques.
          </p>
          <h4 className="py-4 text-teal-600">Tools and Frameworks I use</h4>
          <p className="text-gray-700 py-1">
            Jupyter Notebook{" "}
            <SiJupyter className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            Python{" "}
            <SiPython className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            Scikit Learn{" "}
            <SiScikitlearn className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
          <p className="text-gray-700 py-1">
            TensorFLow{" "}
            <SiTensorflow className="inline-block text-teal-600 items-center ml-1 animate-bounce" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
