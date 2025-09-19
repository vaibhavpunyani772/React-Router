import React from "react";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-[#002e5f]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
