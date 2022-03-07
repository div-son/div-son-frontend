import React, { useState } from "react";
import "../../styles/Main.css";

export const Navbar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "navlinks";

    if (navLinkOpen) {
      classes += " active";
    }

    return classes;
  };

  return (
    <nav>
      {/* <div className="logo">
        <h4>Zip</h4>
      </div> */}

      {/* <ul className={renderClasses()}>
        <li className="link">Blog and News</li>

        <li className="link">Contact us</li>

        <li className="link">Videos</li>
      </ul>

      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div> */}
    </nav>
  );
};

export default Navbar;
