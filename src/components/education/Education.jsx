"use client";

import { IoBook } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="education"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-5 sm:space-y-6"
    >
      {/* Section Badge */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <IoBook className="text-base" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
          Education
        </span>
      </motion.button>

      {/* Education Cards */}
      <div className="space-y-4">
        {/* University */}
        <div data-aos="fade-up">
          <div className="px-4 sm:px-6 py-5 shadow rounded-xl bg-base-300 dark:bg-[#161929] dark:border-2 border-white transition-all duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Shahjalal University of Science and Technology
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
              B.Sc. in Physics
            </p>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              2015 – 2023
            </span>
          </div>
        </div>

        {/* Course */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="px-4 sm:px-6 py-5 shadow rounded-xl bg-base-300 dark:bg-[#161929] dark:border-2 border-white transition-all duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Programming Hero
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
              MERN Stack Development
            </p>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
