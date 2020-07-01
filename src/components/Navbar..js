import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div id="Header">
      <nav className="navbar navbar-expand-lg fixed-top">
        <h4>Gayathiri Ramamoorthy</h4>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Project" className="nav-link">
              {" "}
              Project
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
