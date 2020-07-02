import React from "react";
import Container from "../components/Container";
// import Footer from "../components/Footer";
import Gayathiri from "../img/about_1.jpg";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import "../App.css";

const introImage = {
  width: 250,
  height: 250,
};

function About() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="About">
          <div className="row ">
            <div className="col">
              <h3>About Me</h3>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="img ">
                      <img
                        className="img-fluid rounded-circle center "
                        src={Gayathiri}
                        style={introImage}
                        alt="Gayathiri"
                      />
                      <p className=" intro ">
                        I have completed Bachelor degree in Commerce. Working as
                        a self employed accounting clerk. Currently pursing
                        Bootcamp Full Stack Web Developer Certificate course in
                        Carleton University. I am learning valuable programming
                        skills in full stack Web development technology, aquired
                        skills to plan, track, manage projects in agile
                        development environment and deploy applications in the
                        landscapes.{" "}
                      </p>
                      <p className="skills"> Technical Skills:</p>
                      <ul>
                        <li>
                          <strong>Languages:</strong> JavaScript, JQuery,
                          Node.js, HTML5, CSS, MYSQL
                        </li>
                        <li>
                          <strong>Technologies:</strong> GitHub, Gitbash, Boot
                          Strap CSS Framework, Skeleton CSS Framework, Bulma CSS
                          Framework. Sequelize, Passport authentication, HeroKU
                        </li>
                        <li>
                          <strong>Database:</strong> MySQL, Mongo DB
                        </li>
                        <li>
                          <strong>OS:</strong> Linux, Windows 10
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
