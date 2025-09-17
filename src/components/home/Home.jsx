import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl ">
      {/* Hero Section */}
     <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-10">
  <div className="z-10 max-w-screen-xl px-4 pb-10 sm:pb-20 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-8">
      {/* Text Content */}
      <div className="space-y-6 text-center sm:text-left sm:max-w-lg sm:mt-0 mt-20">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Download Now
          <span className="block text-2xl sm:text-4xl text-gray-700">
            Productivity with a View
          </span>
        </h2>

        <Link
          className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-80 transition"
          to="/"
        >
          <svg
            fill="white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
          </svg>
          &nbsp; Download now
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          className="w-72 sm:w-full rounded-3xl object-cover shadow-lg"
          src="https://gofloaters.com/work-from-anywhere-toolkit/assets/images/remote2.png"
          alt="image1"
        />
      </div>
    </div>
  </div>
</aside>

      {/* Secondary Image */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="w-50 sm:w-126 rounded-3xl shadow-lg object-cover"
          src="https://img.freepik.com/premium-vector/man-work-from-home-freelancer-remote-worker-sitting-with-laptop-developer-programmer_1002658-4622.jpg?semt=ais_hybrid&w=740&q=80"
          alt="image2"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Creative Workspace Inspiration
      </h1>

      {/* Extra Content Section */}
      <section className="sm:mx-16 mx-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Work Smarter, Not Harder
            </h3>
            <p className="text-gray-600 text-lg">
              Discover the tools and resources designed to help you focus, 
              collaborate, and achieve your goals. Whether you’re a freelancer, 
              a student, or part of a remote team, we’ve got you covered.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/remote-team-concept-illustration_114360-4760.jpg"
            alt="Remote collaboration"
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Second Extra Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16 shadow-orange-600 ">
          <img
            src="https://img.freepik.com/free-vector/digital-nomad-working-beach_23-2148819921.jpg"
            alt="Work from beach"
            className="rounded-3xl shadow-lg object-cover"
          />
          <div className="space-y-4 ">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Freedom to Work Anywhere
            </h3>
            <p className="text-gray-600 text-lg">
              Embrace the digital nomad lifestyle. Work while you travel, 
              enjoy flexibility, and turn any spot into your productive corner.  
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
