import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-screen sm:pt-0 px-4 ">
      <div className="max-w-6xl mx-auto w-full sm:px-6 lg:px-8 py-10">
        <div className="mt-20 text-center overflow-hidden bg-white shadow-md rounded-xl max-sm:mt-25 ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Left Section */}
            <div className="p-6 md:p-15">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-6 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-3 md:ml-4 text-sm sm:text-md md:text-lg font-semibold">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
                <div className="ml-3 md:ml-4 text-sm sm:text-md md:text-lg font-semibold">
                  +44 1234567890
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-3 md:ml-4 text-sm sm:text-md md:text-lg font-semibold">
                  info@acme.org
                </div>
              </div>
            </div>

            {/* Right Section (Form) */}
            <form className="p-6 md:p-10 flex flex-col justify-center">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="mt-2 py-3 px-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col mt-3">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mt-2 py-3 px-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col mt-3">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="mt-2 py-3 px-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-40 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-5 hover:bg-orange-600 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
