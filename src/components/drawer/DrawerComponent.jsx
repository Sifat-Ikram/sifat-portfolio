"use client";
import { IoPerson, IoMailOpenSharp, IoBook } from "react-icons/io5";
import { FaLaptopCode, FaFolderOpen } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { Link } from "react-scroll";

const DrawerComponent = () => {
  const sections = [
    { id: "introduction", icon: <IoIosHome />, label: "Introduction" },
    { id: "about", icon: <IoPerson />, label: "About" },
    { id: "experience", icon: <FaLaptopCode />, label: "Experience" },
    { id: "skills", icon: <FaTools />, label: "Skills" },
    { id: "education", icon: <IoBook />, label: "Education" },
    { id: "services", icon: <MdMiscellaneousServices />, label: "Services" },
    { id: "projects", icon: <FaFolderOpen />, label: "Projects" },
    { id: "contact", icon: <IoMailOpenSharp />, label: "Contact" },
  ];

  return (
    <div className="drawer drawer-end">
      <input id="drawer-nav" type="checkbox" className="drawer-toggle" />

      {/* Hamburger Button */}
      <div className="drawer-content">
        <label
          htmlFor="drawer-nav"
          aria-label="Open navigation"
          className="btn h-14 w-14 rounded-full border border-gray-300 bg-white 
          flex items-center justify-center text-2xl
          hover:bg-blue-800 hover:text-white
          dark:bg-[#161929] dark:border-white dark:text-white
          dark:hover:bg-white dark:hover:text-[#161929]
          transition-all duration-300 shadow-lg"
        >
          <GiHamburgerMenu />
        </label>
      </div>

      {/* Drawer Menu */}
      <div className="drawer-side z-50">
        <label htmlFor="drawer-nav" className="drawer-overlay"></label>

        <ul
          className="menu min-h-full w-20 bg-white dark:bg-[#161929] 
        flex flex-col items-center justify-evenly py-6"
        >
          {sections.map((section) => (
            <li key={section.id} className="group relative">
              <label htmlFor="drawer-nav">
                <Link
                  to={section.id}
                  smooth
                  duration={500}
                  offset={-80}
                  className="h-12 w-12 rounded-full border border-blue-800
                  flex items-center justify-center text-xl cursor-pointer text-blue-800
                  hover:bg-blue-800 hover:text-white
                  dark:border-white dark:text-white
                  dark:hover:bg-white dark:hover:text-[#161929]
                  transition-all duration-200"
                >
                  {section.icon}
                </Link>
              </label>

              {/* Tooltip */}
              <span
                className="absolute right-0 bottom-full -translate-y-1/2 
              opacity-0 group-hover:opacity-100 pointer-events-none
              bg-gray-900 text-white text-xs py-1 rounded
              transition-all duration-200 whitespace-nowrap"
              >
                {section.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrawerComponent;
