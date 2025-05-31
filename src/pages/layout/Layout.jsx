import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="layoutContainer">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
