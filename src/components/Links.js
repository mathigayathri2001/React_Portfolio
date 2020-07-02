import React from "react";
import "../App.css";
import { FaLinkedin, FaGithub, FaHome, FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../img/Gayathiri_Ramamoorthy.pdf";

function Links() {
  return (
    <div>
      <div className="icon-bar">
        <h5 id="link">Links</h5>
        <Link className="active" to="/React_Portfolio">
          <FaHome />
        </Link>
        <a
          href="https://github.com/mathigayathri2001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gayathiri-ramamoorthy-72885359/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedin />
        </a>
        <a id="resume" href={resume} target="_blank" rel="noopener noreferrer">
          <FaFilePdf />
        </a>
      </div>
    </div>
  );
}

export default Links;
