import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-10">
        <div className="z-10 max-w-screen-xl px-4 pb-10 sm:pb-20 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between gap-8">
            {/* Text Content */}
            <div className="space-y-6 text-center sm:text-left sm:max-w-lg">
              <h2 className="text-3xl sm:text-5xl font-bold">
                Download Now
                <span className="block text-2xl sm:text-4xl text-gray-700">
                  Lorem Ipsum
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
          className="w-60 sm:w-96 rounded-3xl shadow-lg object-cover"
          src="https://i0.wp.com/www.qandle.com/img/inner_page/hrmsads2.jpg?w=900&ssl=1"
          alt="image2"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
