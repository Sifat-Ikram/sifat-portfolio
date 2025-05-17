"use client";

import { IoPerson } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-4 sm:space-y-5"
    >
      {/* About Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <IoPerson className="text-lg sm:text-xl md:text-base lg:text-base" />
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          About Me
        </h1>
      </motion.button>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
          Every great design begins with an even better story
        </h1>
        <h2 className="text-base sm:text-lg md:text-base lg:text-2xl text-gray-900 dark:text-white w-full sm:w-11/12 leading-relaxed">
          I am a passionate and motivated web developer with a keen interest in
          creating dynamic and user-friendly websites. My journey into the world
          of web development started with a fascination for turning ideas into
          interactive and visually appealing digital experiences.
        </h2>
      </motion.div>

      {/* Resume Button */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        href="https://drive.google.com/file/d/1asvzZ-YuaYv1BvA4LD_uz1aqC7PydqDB/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-48 lg:w-56 text-center text-sm sm:text-lg md:text-sm lg:text-lg font-medium uppercase flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6 border border-solid border-white rounded-2xl cursor-pointer bg-blue-800 text-white hover:text-white hover:bg-blue-900 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default About;
