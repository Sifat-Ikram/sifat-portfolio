"use client";

import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="bg-blue-800 min-h-screen dark:bg-[#161929] dark:border-r-[1px] border-white border-solid lg:py-10 py-6 px-4 flex flex-col items-center">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <Image
          src="https://i.ibb.co/6Jy8pcr1/for-cv.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          priority
          className="w-4/5 rounded-xl"
        />
        <div className="mt-6 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white uppercase tracking-wide">
            MD. SIFAT IKRAM
          </h1>
          <h2 className="text-xs sm:text-sm lg:text-base font-medium text-gray-200 mt-1">
            Frontend Developer | MERN Stack Developer
          </h2>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col w-full max-w-xs text-white space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold border-b border-gray-300 pb-1">
          Contact Info
        </h3>

        <div className="space-y-2 text-gray-100">
          <p className="text-sm sm:text-base">
            <span className="font-medium">Address:</span> Dhaka, Bangladesh
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-medium">Email:</span> sifatikram@gmail.com
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-medium">Phone:</span> +8801718837796
          </p>
          <p className="text-sm sm:text-base font-medium">Contact links:</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-start gap-4 mt-2">
          <a
            href="https://www.facebook.com/sifat.ikram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-2xl sm:text-3xl"
          >
            <ImFacebook2 />
          </a>
          <a
            href="https://www.linkedin.com/in/sifat-ikram-17011713a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-2xl sm:text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sifat-Ikram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-2xl sm:text-3xl"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
