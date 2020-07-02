import React from "react";
import "../App.css";
import About from "../components/About";
import Links from "../components/Links";


function Home() {
  return (
    <div>
      <div className="background">
        <Links />
        <About />
      </div>
    </div>
  );
}

export default Home;
