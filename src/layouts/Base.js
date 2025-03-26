import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Base = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;