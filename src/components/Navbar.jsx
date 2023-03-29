import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import FileSaver from "file-saver";

const fileUrl = "/AmehSolomonOnyekeResume.pdf";
const fileName = "Ameh Solomon Onyeke";

const Navbar = () => {
  const handleClick = () => {
    FileSaver.saveAs(fileUrl, fileName);
  };
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-2xl">A.S.O</h1>
      <ul className="flex items-center ">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        <li>
          <button
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            onClick={handleClick}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
