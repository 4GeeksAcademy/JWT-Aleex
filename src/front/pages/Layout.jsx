import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

export const Layout = () => (
  <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <div className="container my-4">
      <Outlet /> 
    </div>
    <Footer />
  </div>
);