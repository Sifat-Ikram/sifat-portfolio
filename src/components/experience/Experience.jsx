"use client";

import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-4 sm:space-y-5"
    >
      {/* Header Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <FaLaptopCode className="text-lg sm:text-xl md:text-base lg:text-base" />
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          Experience
        </h1>
      </motion.button>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <div className="px-4 py-4 sm:px-5 sm:py-5 shadow space-y-2 sm:space-y-3 rounded-lg bg-base-300 hover:shadow dark:border-[2px] border dark:bg-[#161929] border-solid border-white transition-colors duration-300">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Iinteca
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Junior Frontend Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white">
            5th October, 2025 - Present
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <div className="px-4 py-4 sm:px-5 sm:py-5 shadow space-y-2 sm:space-y-3 rounded-lg bg-base-300 hover:shadow dark:border-[2px] border dark:bg-[#161929] border-solid border-white transition-colors duration-300">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Lofistack
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Frontend Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white">
            1st November, 2024 - 1st October, 2025
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
