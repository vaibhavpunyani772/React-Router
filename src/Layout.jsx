import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <div
     style={{
        background: "radial-gradient(circle at top left, #001a33, #000d1a)",
        color: "#3b82f6", // Tailwind blue-500
      }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
