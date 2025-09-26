import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log("Login form submitted:", formData);
    // 🔑 Add your authentication logic here
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4"
      style={{
        background: "radial-gradient(circle at top left, #1a0033, #0d001a)",
        color: "#a855f7",
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-purple-500/30">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ textShadow: "0 0 15px #9333ea" }}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-800 transition"
          >
            Log in
          </button>
        </form>

        {/* Extra links */}
        <p className="mt-6 text-sm text-center text-gray-300">
          Don’t have an account?{" "}
          <NavLink to={"/signup"} className="text-purple-400 hover:underline">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
