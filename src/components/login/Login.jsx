import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
    console.log("Login form submitted:", formData);
    // 🔑 Add your authentication logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            
            className="w-full bg-orange-700 text-white py-2 rounded-lg font-medium hover:bg-orange-800 transition"
          >
            Log in
          </button>
        </form>

        {/* Extra links */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
            <NavLink to={"/signup"} className="text-orange-700 hover:underline">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
