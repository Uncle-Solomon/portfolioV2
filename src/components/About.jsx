import React from "react";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import AI from "../assets/AI2.jpg";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

const About = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 ">About Me</h3>
        <p className="text-md py-2 leading-8 text-gray-700 ">
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
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
          <img src={frontend} className="mx-auto" width={150} height={150} />
          <h3 className="text-lg font-medium pt-8 pb-2">FrontEnd</h3>
          <p className="py-2">
            Bringing expert user interface and experience designs to life with
            the use of recent frontend frameworks and packages.
          </p>
          <h4 className="py-4 text-teal-600">Tools and Frameworks I use</h4>
          <p className="text-gray-700 py-1 grid-cols-2">
            ReactJS <FaReact className="inline-block items-center ml-1" />
          </p>
          <p className="text-gray-700 py-1">
            JavaScript{" "}
            <DiJavascript className="inline-block items-center ml-1" />
          </p>
          <p className="text-gray-700 py-1">HTML</p>
          <p className="text-gray-700 py-1">TailWind Css</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
          <img src={backend} className="mx-auto" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Backend</h3>
          <p className="py-2">
            Developing architecture that would support your application;
            Integrating APIs, Databases and Authentication.
          </p>
          <h4 className="py-4 text-teal-600">Tools and Frameworks I use</h4>
          <p className="text-gray-700 py-1">NodeJs</p>
          <p className="text-gray-700 py-1">Python Flask</p>
          <p className="text-gray-700 py-1">MongoDB | PostgreSQL</p>
          <p className="text-gray-700 py-1">PostMan</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
          <img src={AI} className="mx-auto" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">
            AI / Machine Learning
          </h3>
          <p className="py-2">
            Creating models and exploring solutions that can be deployed through
            the use fo machine learning techniques.
          </p>
          <h4 className="py-4 text-teal-600">Tools and Frameworks I use</h4>
          <p className="text-gray-700 py-1">Jupyter Notebook</p>
          <p className="text-gray-700 py-1">Python</p>
          <p className="text-gray-700 py-1">Scikit Learn</p>
        </div>
      </div>
    </div>
  );
};

export default About;
