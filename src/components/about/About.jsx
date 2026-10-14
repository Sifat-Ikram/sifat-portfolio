"use client";

import { IoPerson } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-5 sm:space-y-6"
    >
      {/* About Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <IoPerson className="text-lg sm:text-xl md:text-base" />
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          About Me
        </h1>
      </motion.button>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl space-y-3"
      >
        <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
          Frontend Developer focused on building scalable, user-focused web
          applications.
        </h1>

        <p className="text-base sm:text-lg md:text-base lg:text-xl text-gray-900 dark:text-white leading-relaxed">
          I’m a Frontend Developer with 1+ year of professional experience
          building scalable and user-friendly web applications using React and
          Next.js. I also have hands-on experience developing full-stack MERN
          applications, including REST API development, MongoDB database design,
          and JWT authentication.
        </p>

        <p className="text-base sm:text-lg md:text-base lg:text-xl text-gray-900 dark:text-white leading-relaxed">
          I’m especially interested in writing clean code, designing intuitive
          user experiences, and continuously improving application performance
          and reliability.
        </p>
      </motion.div>

      {/* Resume Button */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        href="https://drive.google.com/file/d/1yryCtl3Aae6k1bi9viARsm43IGrJhu6C/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-fit text-center text-sm sm:text-base font-semibold uppercase flex items-center justify-center gap-2 px-6 py-3 mt-2 border border-solid border-white rounded-2xl cursor-pointer bg-blue-800 text-white hover:bg-blue-900 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default About;
