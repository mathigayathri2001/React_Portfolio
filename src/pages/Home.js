import React from "react";
import "../App.css";
import About from "../components/About";
import Links from "../components/Links";
// import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="background">
        {/* <Navbar /> */}
        <Links />
        <About />
      </div>
    </div>
  );
}

export default Home;
