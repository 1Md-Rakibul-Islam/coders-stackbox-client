import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Buttons/Button";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitContact = (data) => {
    console.log(data);
  };

  return (
    <div className="ring-2 border-gradient-to-r from-accent to-secondary my-6">
      <section className="py-6 bg--400 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold text-white">Get in touch</h1>
            <p className="pt-2 pb-4 text-white">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-white">Dahka, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-white"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="text-white">+880 1777 888 999</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-white"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-white">contact@codersstackbox.com</span>
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleSubmitContact)}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1 text-white">Full name</span>
              <input
                {...register("fullName", { required: true })}
                type="text"
                placeholder="Full Name"
                className="block w-full rounded-md shadow-sm p-2"
              />
              {errors.fullName && (
                <span className="text-red-600">Full Name is required</span>
              )}
            </label>
            <label className="block">
              <span className="mb-1 text-white">Email address</span>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="block w-full rounded-md shadow-sm p-2"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-white">Message</span>
              <textarea
                {...register("message")}
                rows="3"
                className="block w-full rounded-md p-2"
                placeholder="Type Here"
              ></textarea>
            </label>
            <Button>submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
