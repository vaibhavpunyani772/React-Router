import React from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <div
      className="flex justify-center items-center min-h-screen px-4"
      style={{
        background: "radial-gradient(circle at top left, #001a33, #000d1a)",
        color: "#3b82f6",
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-blue-500/30">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ textShadow: "0 0 15px #2563eb" }}
        >
          Sign Up
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none border border-blue-500/30"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none border border-blue-500/30"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:outline-none border border-blue-500/30"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-400 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
