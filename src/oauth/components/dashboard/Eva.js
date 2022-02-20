import React,{useState} from 'react'
import "./Main.css";


export const Eva = () => {

  const [navLinkOpen, navLinkToggle] = useState(false)

  const handleNavLinksToggle = () =>{
    navLinkToggle(!navLinkOpen)
  }

  const renderClasses = () =>{
    let classes = "navlinks"

    if(navLinkOpen){
      classes += " active"
    }

    return classes
  }

  return (
    <nav>
      <div className="logo">
        <h4>Div-son</h4>
      </div>

      <ul className={renderClasses()}>
        <li className="link">
          <a href="#">Home</a>
        </li>

        <li className="link">
          <a href="#">About</a>
        </li>

        <li className="link">
          <a href="#">Contact us</a>
        </li>

        <li className="link">
          <a href="#">Services</a>
        </li>
      </ul>

      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      
    </nav>
    
  );
}

export default Eva