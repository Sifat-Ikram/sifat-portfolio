"use client";

import { FaTools } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiVuedotjs,
  SiCodeclimate,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const skillData = [
  {
    icon: <TbBrandJavascript />,
    label: "JavaScript",
    movement: "zoom-out-down",
    duration: "1000",
  },
  {
    icon: <TbBrandNextjs />,
    label: "Next Js",
    movement: "zoom-out-down",
    duration: "1000",
  },
  {
    icon: <RiReactjsLine />,
    label: "React Js",
    movement: "zoom-out-down",
    duration: "1000",
  },
  {
    icon: <SiVuedotjs />,
    label: "Vue Js",
    movement: "zoom-out-down",
    duration: "1000",
  },
  {
    icon: <IoLogoNodejs />,
    label: "Node Js",
    movement: "zoom-out-down",
    duration: "1500",
  },
  {
    icon: <SiExpress />,
    label: "Express Js",
    movement: "zoom-out-down",
    duration: "1500",
  },
  {
    icon: <SiMongodb />,
    label: "MongoDb",
    movement: "zoom-out-down",
    duration: "1500",
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
    movement: "zoom-out-down",
    duration: "1500",
  },
  {
    icon: <RiTailwindCssFill />,
    label: "Tailwind CSS",
    movement: "zoom-out-down",
    duration: "3000",
  },
  {
    icon: <SiCodeclimate />,
    label: "Material Ui",
    movement: "zoom-out-down",
    duration: "3000",
  },
  {
    icon: <SiRedux />,
    label: "Redux",
    movement: "zoom-out-down",
    duration: "3000",
  },
  {
    icon: <SiTypescript />,
    label: "Typescript",
    movement: "zoom-out-down",
    duration: "3000",
  },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <section
      id="skills"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-4 sm:space-y-5"
    >
      {/* About Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <FaTools className="text-lg sm:text-xl md:text-base lg:text-base" />
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          My expertise
        </h1>
      </motion.button>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {skillData.map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div
              data-aos={skill.movement}
              data-aos-duration={skill.duration}
              data-aos-easing="ease-in-sine"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-base-300 dark:bg-[#161929] border-2 border-white shadow hover:bg-base-200 dark:hover:bg-white dark:hover:text-[#161929] transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold">
                  {skill.icon}
                </div>
              </div>
              <h1 className="mt-2 text-base sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white text-center">
                {skill.label}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
