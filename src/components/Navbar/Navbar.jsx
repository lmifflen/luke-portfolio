import React, { useState } from "react";
import Contact from "../Contact/Contact";
import ChatPopup from "../Contact/ContactPopup";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const [contact, setContact] = React.useState(false);
  return (
    <div className="navbar">
      <div className="holder">
      <div className="logo">
        <img src="./Logo.PNG" alt="Logo" />
      </div>
     
          </div>
      {/* <div className="navlist-container"> */}
     
          
          
        
      <ul className={click ? "nav-menu active" : "nav-list"}>
        <li>
          <a href="/#home" onClick={handleClick}>Home</a>
        </li>
        <li>
          <a href="/#about" onClick={handleClick}>About</a>
        </li>
        <li>
          <a href="/#projects" onClick={handleClick}>Projects</a>
        </li>
        <div>
        <NavLink
                   className="contact-button"
                    to="/contact"
                    onClick={handleClick}
                  >
                    Contact
                  </NavLink>
                  </div>
        {/* <button className="contact-button" href="/contact" onClick={handleClick}> 
        Contact
           </button> */}
        
      </ul>
      {/* </div> */}
      
       <div
              className="hamburger"
              onClick={handleClick}
              style={{
                marginBottom: "1rem",
              }}
            > 
            <img src="./hamburger.svg" alt="hamburger" />
             
            </div>
           
    </div>
  );
};

export default Navbar;
