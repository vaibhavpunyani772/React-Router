import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "radial-gradient(circle at top left, #7300ba, #8c11f0)",
        color: "#210234",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Top Section */}
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <h1
               className="h-10 flex items-center justify-center rounded-xl whitespace-nowrap font-bold text-2xl sm:text-4xl text-[#3a006c]"
  style={{
    textShadow: `
      0 0 3px #9e22ce,
      0 0 6px #6b21a8,
      0 0 10px #5b1893
    `
  }}
              >
                React Router
              </h1>
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2
                className="mb-6 text-sm font-semibold uppercase"
                style={{ textShadow: "0 0 15px #9333ea" }}
              >
                Resources
              </h2>
              <ul className="font-medium space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2
                className="mb-6 text-sm font-semibold uppercase"
                style={{ textShadow: "0 0 15px #9333ea" }}
              >
                Follow us
              </h2>
              <ul className="font-medium space-y-2">
                <li>
                  <a
                    href="https://github.com/vaibhavpunyani772"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2
                className="mb-6 text-sm font-semibold uppercase"
                style={{ textShadow: "0 0 15px #9333ea" }}
              >
                Legal
              </h2>
              <ul className="font-medium space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-500 opacity-30 sm:mx-auto lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2025{" "}
            <a
              href="https://github.com/vaibhavpunyani772"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vaibhav Punyani
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
