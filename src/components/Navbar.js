import React from "react";
// import { Link } from "react-router-dom";
import { NavHashLink as Link } from 'react-router-hash-link'
import "../App.css";

function Navbar() {
  return (
    <div id="Header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <h4>Gayathiri Ramamoorthy</h4>
        <ul className="navbar-nav ml-auto smooth-scroll">
          <li className="nav-item">
            <Link to="/React_Portfolio/#About" className="nav-link"activeClassName='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >
              About{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/React_Portfolio/Project/" className="nav-link"activeClassName='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              {" "}
              Project
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/React_Portfolio/#contact" className="nav-link"activeClassName='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
              {" "}
              Contact
            </Link>
           
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
