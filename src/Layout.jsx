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
    background: "radial-gradient(circle at top left, #1a0033, #0d001a)",
  }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
