import React from "react";
import Eva from "./Eva";
import "../../styles/Main.css"

import Showcase from "./Showcase";


export const LandingPage = () => {
  return (
    <div className="main">
      <Eva />
      <Showcase />
    </div>
  );
};

export default LandingPage;
