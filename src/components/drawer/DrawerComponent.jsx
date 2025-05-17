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
    <div className="dark:bg-[#161929]">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn border bg-base-300 border-solid h-14 w-14 flex justify-center items-center font-medium text-2xl rounded-full cursor-pointer hover:bg-blue-800 text-gray-900 hover:text-white dark:bg-[#161929] dark:text-white dark:border-white dark:hover:text-[#161929] dark:hover:bg-white transition-all duration-200"
          >
            <GiHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-20 p-4 flex flex-col justify-between items-center">
            {sections.map((section) => (
              <li
                key={section.id}
                className="border-[1px] border-solid h-12 w-12 flex justify-center items-center font-medium text-xl text-gray-900 dark:text-white border-gray-300 rounded-full transition-all duration-200 
             hover:bg-blue-800 hover:text-white 
             dark:hover:bg-white dark:hover:text-[#161929]"
              >
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="flex items-center cursor-pointer transition-all"
                >
                  {section.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
