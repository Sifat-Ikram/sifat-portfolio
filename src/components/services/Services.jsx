"use client";

import { MdMiscellaneousServices } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <section
      id="services"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-4 sm:space-y-5"
    >
      <button className="flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200">
        {" "}
        <MdMiscellaneousServices className="text-lg sm:text-xl md:text-base lg:text-base" />{" "}
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          Services{" "}
        </h1>
      </button>
      <div className="flex flex-row justify-between flex-wrap gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-4">
          <div
            data-aos="fade-up"
            className="w-full"
            data-aos-anchor-placement="center-center"
          >
            <div className="shadow w-full h-[150px] bg-base-300 rounded-xl p-4 sm:p-4 md:p-3 dark:bg-[#161929] dark:border-[2px] border-solid border-white hover:border-blue-800 hover:dark:border-white transition-colors duration-300">
              <h1 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-base lg:text-xl font-semibold text-gray-900 dark:text-white">
                Front-end Development
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                Developing responsive, high-performance user interfaces using
                modern frameworks like Next.js, React, Redux, Tailwind CSS, and
                Material UI to deliver interactive and intuitive web
                applications.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-full"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="shadow w-full h-[150px] bg-base-300 rounded-xl p-4 sm:p-4 md:p-3 dark:bg-[#161929] dark:border-[2px] border-solid border-white hover:border-blue-800 hover:dark:border-white transition-colors duration-300">
              <h1 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-base lg:text-xl font-semibold text-gray-900 dark:text-white">
                Back-end Development
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                Engineering scalable and secure server-side solutions with
                technologies like Node.js, Express.js, MongoDB, MySQL, and JWT,
                ensuring robust data handling and smooth integration across
                services.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="w-full"
          data-aos-anchor-placement="top-center"
        >
          <div className="shadow w-full h-[150px] bg-base-300 rounded-xl p-4 sm:p-4 md:p-3 dark:bg-[#161929] dark:border-[2px] border-solid border-white hover:border-blue-800 hover:dark:border-white transition-colors duration-300">
            <h1 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-base lg:text-xl font-semibold text-gray-900 dark:text-white">
              Full Stack Development
            </h1>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              Delivering complete web application solutions by integrating
              front-end and back-end development. I build responsive interfaces
              with React and Next.js, manage secure APIs using Express.js and
              Node.js, and handle databases like MongoDB and MySQL. Whether it's
              authentication, deployment, or real-time features, I ensure a
              scalable, efficient, and cohesive product that covers the entire
              tech stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
