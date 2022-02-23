import React from "react";
import "../../styles/Showcase.css";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

export const Showcase = () => {
  return (
    <div className="showcase">
      <h2>Discover an Adventure</h2>
      <h1>Get your projects done!!</h1>

      <p>We are software Engineers</p>

      <div className="showcase__buttons">
        <Link to="/register">
          <button className="showcase__btn-signup">
            Get Started
            <b className="icon">
              <AiOutlineArrowRight />
            </b>
          </button>
        </Link>

        <Link to="/login">
          <button className="showcase__btn-login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
