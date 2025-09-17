import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Right section: Login + Get Started (desktop) */}
        <div className="flex items-center lg:order-2">
          <Link
            to="/login"
            className="text-gray-700 hover:text-orange-700 px-3 py-2"
          >
            Log in
          </Link>
          <Link
            to="/get-started"
            className="ml-2 px-4 py-2 text-white bg-orange-700 rounded-lg hover:opacity-80"
          >
            Get started
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-700 hover:text-orange-700"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-700 hover:text-orange-700"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-gray-700 hover:text-orange-700"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className="block py-2 px-3 text-gray-700 hover:text-orange-700"
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
