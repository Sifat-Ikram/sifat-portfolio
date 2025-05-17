"use client";

import { IoMailOpenSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const sendEmail = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-11/12 mx-auto px-2 sm:px-4 py-10 sm:py-14 md:py-16 lg:py-20 bg-white dark:bg-[#161929] transition-colors duration-300"
    >
      {/* Section Header */}
      <motion.button
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 mb-10 shadow rounded-full cursor-pointer bg-base-300 text-gray-800 hover:text-white hover:bg-[#041C93] dark:bg-[#161929] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-[#161929] border border-white transition-all duration-300"
      >
        <IoMailOpenSharp className="text-lg sm:text-xl" />
        <h1 className="text-xs sm:text-sm md:text-base font-semibold uppercase">
          Contact
        </h1>
      </motion.button>

      {/* Title */}
      <h1 className="mb-10 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Contact Me
      </h1>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
        className="w-full sm:w-11/12 lg:w-4/5 mx-auto flex flex-col gap-5 sm:gap-5 md:gap-4 lg:gap-6"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5 md:gap-4 lg:gap-6">
          <div data-aos="fade-up">
            <div className="form-control space-y-1 flex flex-col">
              <label className="label">
                <span className="label-text text-sm sm:text-base dark:text-white">
                  Your Full Name
                </span>
              </label>
              <input
                type="text"
                name="Full_Name"
                placeholder="Full Name"
                {...register("name", { required: "Full Name is required" })}
                className="input input-bordered text-sm sm:text-base w-full"
              />
              {errors.name && (
                <span className="text-red-500 dark:text-red-300 text-xs sm:text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>

          <div data-aos="fade-up">
            <div className="form-control space-y-1 flex flex-col">
              <label className="label">
                <span className="label-text text-sm sm:text-base dark:text-white">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered text-sm sm:text-base w-full"
              />
              {errors.email && (
                <span className="text-red-500 dark:text-red-300 text-xs sm:text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Message */}
        <div data-aos="fade-up">
          <div className="form-control space-y-1 flex flex-col">
            <label className="label">
              <span className="label-text text-sm sm:text-base dark:text-white">
                Message
              </span>
            </label>
            <textarea
              name="Message"
              placeholder="Type your message here..."
              {...register("message", { required: "Message is required" })}
              className="textarea input-bordered text-sm sm:text-base min-h-[120px] w-full"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 dark:text-red-300 text-xs sm:text-sm">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control">
          <button
            type="submit"
            className="btn w-full bg-[#233bb1] hover:cursor-pointer text-white dark:bg-[#161929] dark:border-2 border-white font-semibold dark:hover:bg-white dark:hover:text-[#161929] hover:scale-105 transition-transform"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
