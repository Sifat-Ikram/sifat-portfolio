"use client";

import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Iinteca",
      role: "Junior Frontend Developer",
      duration: "5 October, 2025 – Present",
      points: [
        "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with backend developers to integrate REST APIs and authentication flows.",
        "Improved UI performance and ensured cross-browser compatibility.",
      ],
    },
    {
      company: "Lofistack",
      role: "Frontend Developer",
      duration: "1 November, 2024 – 1 October, 2025",
      points: [
        "Built reusable and scalable UI components using modern React patterns.",
        "Implemented responsive layouts and improved overall user experience.",
        "Worked closely with designers to translate UI/UX designs into production-ready code.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-5 sm:space-y-6"
    >
      {/* Header Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <FaLaptopCode className="text-lg sm:text-xl md:text-base" />
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          Experience
        </h1>
      </motion.button>

      {/* Experience Cards */}
      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-full"
          >
            <div className="px-5 py-5 sm:px-6 sm:py-6 shadow space-y-3 rounded-lg bg-base-300 hover:shadow dark:border-[2px] border dark:bg-[#161929] border-solid border-white transition-colors duration-300">
              <div className="space-y-1">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.company}
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h2>
                <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                  {exp.duration}
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-900 dark:text-white">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
