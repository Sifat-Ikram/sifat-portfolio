"use client";

import { IoMailOpenSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

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
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thanks for reaching out. I’ll get back to you soon.",
      timer: 2000,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
    reset();
  };

  return (
    <section
      id="contact"
      className="w-11/12 mx-auto py-14 md:py-20 bg-white dark:bg-[#161929] transition-colors duration-300"
    >
      {/* Section Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex mb-6"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-300 text-gray-800 dark:bg-[#161929] dark:text-white border border-white">
          <IoMailOpenSharp className="text-base" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
            Contact
          </span>
        </div>
      </motion.div>

      {/* Heading */}
      <h2 className="mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
        Let’s work together
      </h2>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
        className="w-full sm:w-11/12 lg:w-4/5 mx-auto grid gap-6"
      >
        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div data-aos="fade-up">
            <label className="block mb-1 text-sm font-medium dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              name="Full_Name"
              placeholder="John Doe"
              {...register("name", { required: "Full name is required" })}
              className="w-full px-4 py-3 rounded-lg input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div data-aos="fade-up">
            <label className="block mb-1 text-sm font-medium dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 rounded-lg input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div data-aos="fade-up">
          <label className="block mb-1 text-sm font-medium dark:text-white">
            Message
          </label>
          <textarea
            name="Message"
            placeholder="Tell me about your project…"
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-3 min-h-[140px] rounded-lg textarea input-bordered focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold bg-[#233bb1] text-white dark:bg-[#161929] dark:border-2 border-white dark:hover:bg-white dark:hover:text-[#161929] transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
