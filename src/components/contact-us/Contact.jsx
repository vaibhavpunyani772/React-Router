import React from "react";

export default function Contact() {
  return (
    <div
      className="relative flex items-top justify-center min-h-screen sm:pt-0 px-4 "
      style={{
        background: "radial-gradient(circle at top left, #001a33, #000d1a)",
      }}
    >
      <div
        className="mt-30 text-center overflow-hidden shadow-md rounded-xl max-sm:mt-25 mb-20"
        style={{
          background: "radial-gradient(circle at top left, #0a3d91,#002e5f)",
        }}
      >
        <h1
          className="text-3xl sm:text-5xl font-bold text-blue-400 p-6"
          style={{ textShadow: "0 0 15px #2563eb" }}
        >
          Contact Us
        </h1>
        <div className="p-8 text-white">
          <p className="mb-4">
            Have questions? We’d love to hear from you. Fill out the form below
            to get in touch.
          </p>
          <form className="space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none border border-blue-500/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none border border-blue-500/30"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none border border-blue-500/30"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-lg"
            >
              <a href="/">Send Message</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
