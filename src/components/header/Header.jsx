import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
  { to: "/github", label: "Github" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="shadow-md fixed w-full top-0 left-0 z-50"
      style={{
        background: "radial-gradient(circle at top left, #003366, #001a33)",
        color: "#dbeafe",
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1
            className="h-10 flex items-center justify-center rounded-xl whitespace-nowrap font-bold text-xl sm:text-3xl text-[#bfdbfe]"
            style={{
              textShadow: `
                0 0 5px #3b82f6,
                0 0 10px #2563eb,
                0 0 20px #1e40af
              `,
            }}
          >
            React Router
          </h1>
        </Link>

        {/* Right section */}
        <div className="flex items-center lg:order-2">
          <Link
            to="/login"
            className="flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm sm:text-base hover:underline"
          >
            Log in
          </Link>
          <Link
            to="/get-started"
            className="ml-2 px-4 py-2 whitespace-nowrap bg-blue-800 rounded-lg hover:opacity-80 text-sm sm:text-base text-white"
          >
            Get started
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-2 text-sm rounded-lg lg:hidden"
          >
            {isOpen ? (
              <CgClose className="text-lg" />
            ) : (
              <IoMenu className="text-lg" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            background: "radial-gradient(circle at top left, #0d1b2a, #000814)",
            color: "#60a5fa",
          }}
        >
          <ul className="flex flex-col font-medium p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="block py-2 px-3 hover:underline"
                  onClick={handleClick}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:order-1">
          <ul className="flex flex-row font-medium lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="block py-2 px-3 hover:underline"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
