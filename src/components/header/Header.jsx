import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { FaHamburger } from "react-icons/fa";
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
    <header className=" bg-[#017acd] shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex   items-center  justify-between p-4 text-white ">
        {/* Logo */}
        <Link to="/" className="flex items-center ">
          <h1 className="h-10 flex items-center justify-center rounded-xl whitespace-nowrap font-bold text-xl sm:text-2xl ">
           React Router
          </h1>
        </Link>

        {/* Right section: Login + Get Started (desktop) */}
        <div className="flex items-center lg:order-2">
          <Link to="/login" className="flex items-center justify-center hover:text-[#002e5f] whitespace-nowrap px-3 py-2 text-sm sm:text-base">
            Log in
          </Link>
          <Link
            to="/get-started"
            className="ml-2 px-4 py-2 text-white whitespace-nowrap  bg-[#002e5f] rounded-lg hover:opacity-80 text-sm sm:text-base"
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
              <CgClose  className="text-lg text-white"/>
            ) : (
              // Hamburger icon
             <IoMenu  className="text-lg text-white"/>
            )}
          </button>
        </div>

        {/* Nav links */}
        {/* Nav links (Mobile slide-down) */}
<div
  className={`absolute top-full left-0 w-full bg-[#017acd] transition-all duration-300 ease-in-out lg:hidden ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  <ul className="flex flex-col font-medium p-4 space-y-2">
    {navLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          className="block py-2 px-3 hover:text-[#002e5f]"
          onClick={handleClick}
        >
          {link.label}
        </NavLink>
      </li>
    ))}
  </ul>
</div>

{/* Desktop menu (always visible) */}
<div className="hidden lg:flex lg:order-1">
  <ul className="flex flex-row font-medium lg:space-x-8">
    {navLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          className="block py-2 px-3 hover:text-[#002e5f]"
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
