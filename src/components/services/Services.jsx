"use client";

import { MdMiscellaneousServices } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="services"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-5 sm:space-y-6"
    >
      {/* Section Badge */}
      <button className="flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200">
        <MdMiscellaneousServices className="text-base" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
          Services
        </span>
      </button>

      {/* Services Grid */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Frontend */}
        <div data-aos="fade-up" className="w-full">
          <div className="shadow w-full min-h-[150px] bg-base-300 rounded-xl p-4 dark:bg-[#161929] dark:border-[2px] border-solid border-white hover:border-blue-800 hover:dark:border-white transition-colors duration-300">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Frontend Development
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Building responsive, high-performance web interfaces using React,
              Next.js, and modern UI technologies. Focused on clean component
              architecture, reusable design systems, performance optimization,
              and seamless API integration to deliver production-ready
              applications.
            </p>
          </div>
        </div>

        {/* Backend */}
        <div data-aos="fade-up" data-aos-delay="100" className="w-full">
          <div className="shadow w-full min-h-[150px] bg-base-300 rounded-xl p-4 dark:bg-[#161929] dark:border-[2px] border-solid border-white hover:border-blue-800 hover:dark:border-white transition-colors duration-300">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Backend Development
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Developing RESTful APIs using Node.js and Express, implementing
              authentication with JWT, and managing data with MongoDB. Focused
              on secure, structured, and scalable server-side logic with proper
              error handling and validation.
            </p>
          </div>
        </div>

        {/* Full Stack */}
        <div data-aos="fade-up" data-aos-delay="200" className="w-full">
          <div className="shadow w-full min-h-[150px] bg-base-300 rounded-xl p-4 dark:bg-[#161929] dark:border-[2px] border-solid border-white hover:border-blue-800 hover:dark:border-white transition-colors duration-300">
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Full Stack Development
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Delivering complete MERN stack applications from frontend to
              backend, including UI development, API design, database
              integration, authentication systems, and deployment-ready
              architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
