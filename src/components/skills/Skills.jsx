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
import { SiShadcnui } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const skillData = [
  { icon: <TbBrandJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <TbBrandNextjs />, label: "Next.js" },
  { icon: <RiReactjsLine />, label: "React.js" },
  { icon: <SiVuedotjs />, label: "Vue.js" },
  { icon: <RiTailwindCssFill />, label: "Tailwind CSS" },
  { icon: <SiCodeclimate />, label: "Material UI" },
  { icon: <SiShadcnui />, label: "Shadcn UI" },
  { icon: <SiFramer />, label: "Framer Motion" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <IoLogoNodejs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
  { icon: <SiFirebase />, label: "Firebase" },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-5 sm:space-y-6"
    >
      {/* Section Badge */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <FaTools className="text-base" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
          My Expertise
        </span>
      </motion.button>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
        {skillData.map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            data-aos="fade-up"
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-base-300 dark:bg-[#161929] border border-white shadow-sm transition-all duration-300 group-hover:scale-105 dark:hover:bg-white dark:hover:text-[#161929]">
              <span className="text-2xl sm:text-3xl">{skill.icon}</span>
            </div>

            <p className="mt-3 text-sm sm:text-base font-medium text-gray-900 dark:text-white tracking-wide">
              {skill.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
