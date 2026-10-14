"use client";

import { FaFolderOpen } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import spark from "@/assets/spark-gear.png";
import service from "@/assets/service.png";

const FeaturedProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 2500, once: true });
  }, []);

  const projects = [
    {
      title: "Iinteca Service Management",
      image: service,
      description: `
    Developing a large-scale, enterprise-style SaaS frontend with dashboard-driven workflows and data-heavy UI (e.g., Sympro-style).
    Building reusable, scalable components for forms, tables, and multi-step workflows.
    Implementing role-based UI, complex layouts, and responsive design across devices.
    Using mock data and API-ready architecture to prepare for future backend integration.
    Focusing on performance, maintainability, and clean component structure for long-term growth.
  `,
      status: "Ongoing | Backend integration planned",
      link: "https://service-management-rho.vercel.app/",
      github: "#",
    },
    {
      title: "Spark Gear",
      image: spark,
      description:
        "Full-stack e-commerce platform with JWT authentication, cart management, order handling, and admin-controlled product & user management.",
      link: "https://spark-gear-six.vercel.app/",
      github: "https://github.com/Sifat-Ikram/spark-gear-ecommerce",
    },
    {
      title: "Shop Sphere",
      image: "https://i.ibb.co/VY01th3b/shop.png",
      description:
        "E-commerce site with user authentication, cart, discount system, bKash payments, and full admin dashboard.",
      link: "https://shop-sphere-client-zeta.vercel.app",
      githubClient: "https://github.com/Sifat-Ikram/shop-sphere-client",
      githubServer: "https://github.com/Sifat-Ikram/shop-sphere-server",
    },
    {
      title: "Taste Trail",
      image: "https://i.ibb.co/zWKWzrnf/taste.png",
      description:
        "Restaurant ordering system where users manage carts and admins control food items and users.",
      link: "https://taste-trail-web.web.app/",
      githubClient: "https://github.com/Sifat-Ikram/taste-trail-client",
      githubServer: "https://github.com/Sifat-Ikram/taste-trail-server",
    },
  ];

  return (
    <section
      id="projects"
      className="w-11/12 mx-auto dark:bg-[#161929] bg-white transition-colors duration-300 space-y-6"
    >
      {/* Section Badge */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-fit flex items-center gap-2 px-5 py-2 border rounded-full bg-base-300 text-gray-800 hover:text-white hover:bg-blue-800 dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] transition-all"
      >
        <FaFolderOpen className="text-base" />
        <span className="text-sm font-semibold uppercase tracking-wide">
          Projects
        </span>
      </motion.button>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-out"
            className="group relative overflow-hidden rounded-2xl bg-base-200 dark:bg-[#161929] shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-60 sm:h-64 md:h-72">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>

              <p className="mt-2 text-sm text-gray-200 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div
                className={`flex ${
                  project?.status ? "flex-col-reverse" : ""
                } flex-wrap gap-3 mt-4`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 w-fit text-sm font-semibold bg-white text-black rounded-md hover:scale-105 transition"
                >
                  Live
                </a>

                {project.status ? (
                  <>
                    <p className="mt-1 text-sm text-white">{project.status}</p>
                  </>
                ) : (
                  <>
                    <a
                      href={
                        project.githubServer
                          ? project.githubClient
                          : project.github
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-md hover:scale-105 transition"
                    >
                      {project.githubServer ? "Client" : "Code"}
                    </a>

                    {project.githubServer && (
                      <a
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-md hover:scale-105 transition"
                      >
                        Server
                      </a>
                    )}
                  </>
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
