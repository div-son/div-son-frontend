import React from "react";
import Navbar from "./Navbar";
import "../../styles/Main.css";
import Showcase from "./Showcase";

export const LandingPage = () => {
  return (
    <div className="main">
      <Navbar />
      <Showcase />
    </div>
  );
};

export default LandingPage;
