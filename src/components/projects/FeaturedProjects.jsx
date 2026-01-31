"use client";

import { FaFolderOpen } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import spark from "@/assets/spark-gear.png"

const FeaturedProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const projects = [
    {
      title: "Spark Gear",
      image: spark,
      description:
        "This is a full-stack e-commerce website where users can sign up, browse products, add items to the cart, and place orders. Authentication is handled using JWT and cookies. Users can manage their cart and view orders. An admin can add, edit, and delete products, manage users, and control user roles.",
      link: "https://spark-gear-six.vercel.app/",
      github: "https://github.com/Sifat-Ikram/spark-gear-ecommerce",
    },
    {
      title: "Shop Sphere",
      image: "https://i.ibb.co/VY01th3b/shop.png",
      description:
        "This is a ecommerce website. Any user can sign up and buy products from product page, can see the cart page, can use discount and make payment through Bkash. An admin can see, edit and delete any product or user. Admin can also make a user admin.",
      link: "https://shop-sphere-client-zeta.vercel.app",
      githubClient: "https://github.com/Sifat-Ikram/shop-sphere-client",
      githubServer: "https://github.com/Sifat-Ikram/shop-sphere-server",
    },
    {
      title: "Taste Trail",
      image: "https://i.ibb.co/zWKWzrnf/taste.png",
      description:
        "This is a restaurant website. Here a user can order a food item. Users can place an order for the ordered food item or can delete a food item from the cart in the shop page. An admin can add, update, and delete a food item and user.",
      link: "https://taste-trail-web.web.app/",
      githubClient: "https://github.com/Sifat-Ikram/taste-trail-client",
      githubServer: "https://github.com/Sifat-Ikram/taste-trail-server",
    },
    {
      title: "Career Hub",
      image: "https://i.ibb.co/fGd4GzrG/career.png",
      description:
        "This is a job hunting website. Anyone can sign in and apply for a job or internship. There are three routes: Admin routes, Employer routes, Employee routes.",
      link: "https://career-hub-web.web.app/",
      githubClient: "https://github.com/Sifat-Ikram/career-hub-client",
      githubServer: "https://github.com/Sifat-Ikram/career-hub-server",
    },
  ];

  return (
    <section
      id="projects"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-4 sm:space-y-5"
    >
      {/* About Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-fit flex items-center gap-2 px-4 py-2 border border-solid border-white rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all duration-200"
      >
        <FaFolderOpen className="text-lg sm:text-xl md:text-base lg:text-base" />
        <h1 className="text-xs sm:text-sm md:text-[10px] lg:text-sm font-semibold uppercase">
          Projects
        </h1>
      </motion.button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            data-aos="zoom-out-down"
            data-aos-duration="3000"
            data-aos-easing="ease-in-sine"
            key={index}
            className="relative overflow-hidden rounded-xl bg-base-200 dark:bg-[#161929] shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-black/60 to-black text-white opacity-0 hover:opacity-100 transition-opacity duration-300 px-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-16 sm:mt-20 text-center">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm mt-2 text-center">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 cursor-pointer text-sm font-semibold bg-white text-black rounded hover:bg-slate-200 transition"
                >
                  Visit
                </a>
                <a
                  href={
                    project.githubServer ? project.githubClient : project.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 cursor-pointer text-sm font-semibold bg-white text-black rounded hover:bg-slate-200 transition"
                >
                  {project.githubServer ? "Client Code" : "Code"}
                </a>
                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 cursor-pointer text-sm font-semibold bg-white text-black rounded hover:bg-slate-200 transition"
                  >
                    Server Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
