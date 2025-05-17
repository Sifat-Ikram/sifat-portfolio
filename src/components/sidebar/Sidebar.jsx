"use client"; // Only needed if you plan to add client-side interactivity

import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="bg-blue-800 min-h-screen dark:bg-[#161929] dark:border-r-[1px] border-solid border-white lg:py-8 pt-6">
      <div className="flex flex-col items-center mb-10">
        <div className="flex flex-col items-center mb-7 space-y-3">
          <h1 className="block text-xl sm:text-3xl md:text-xl lg:text-3xl font-semibold text-center text-white uppercase lg:font-bold">
            MD. SIFAT IKRAM
          </h1>
          <h2 className="text-base sm:text-xl md:text-base lg:text-xl font-medium text-center text-white">
            Full Stack Developer
          </h2>
        </div>
        <Image
          src="https://i.ibb.co/6Jy8pcr1/for-cv.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          priority
          className="w-4/5 rounded-xl"
        />
      </div>
      <div className="flex flex-col text-left w-4/5 mx-auto text-white max-md:space-y-4 md:space-y-3">
        <h3 className="text-base sm:text-xl md:text-base lg:text-xl font-medium">
          Contact Info:
        </h3>
        <p className="text-sm sm:text-base md:text-sm lg:text-lg">
          Address:{" "}
          <span className="text-base md:text-base">Dhaka, Bangladesh</span>
        </p>
        <p className="text-sm sm:text-base md:text-sm lg:text-lg">
          Email:{" "}
          <span className="text-base md:text-base">sifatikram@gmail.com</span>
        </p>
        <p className="text-sm sm:text-base md:text-sm lg:text-lg">
          Phone: <span className="text-base md:text-base">+8801718837796</span>
        </p>
        <p className="text-sm sm:text-base md:text-sm lg:text-lg">
          Contact links:
        </p>
        <div className="flex items-center justify-between w-3/5 gap-3 pb-10 md:justify-evenly">
          <a
            className="text-xl sm:text-2xl md:text-base lg:text-2xl hover:text-gray-300"
            href="https://www.facebook.com/sifat.ikram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook2 />
          </a>
          <a
            className="text-xl sm:text-2xl md:text-lg lg:text-3xl hover:text-gray-300"
            href="https://www.linkedin.com/in/sifat-ikram-17011713a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-xl sm:text-2xl md:text-lg lg:text-3xl hover:text-gray-300"
            href="https://github.com/Sifat-Ikram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
