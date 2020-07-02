import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Gayathiri from "../img/about_1.jpg";
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import "../App.css";

const introImage = {
  width: 250,
  height: 250,
};

function About() {
  return (
    <div>
    < Navbar />
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
                        My name is Gayathiri Ramamoorthy and I am an Ottawa based Full Stack Developer.
                        I completed Bachelor degree in Commerce. Working as
                        a self employed accounting clerk. I am currently pursing
                        Bootcamp Full Stack Web Developer Certificate course in
                        Carleton University. I am learning valuable programming
                        skills in full stack Web development technology, aquired
                        skills to plan, track, manage projects in agile
                        development environment and deploy applications.{" "}
                      </p>
                      <p className="skills"> Technical Skills:</p>
                      <ul>
                        <li>
                          <strong>Client:</strong> HTML5, CSS3, Bootstrap, Skeleton, Bulma, JavaScript(ES6+), Jquery,ReactJS
                        </li>
                        <li>
                          <strong>Server:</strong> Node, Express,  Handlebars, Sequelize, Mongoose, ORM, RESTful APIs and Passport
                        </li>
                        <li>
                          <strong>Technologies:</strong> GitHub, Gitbash, HeroKU
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
      <Footer />
    </div>
  );
}

export default About;
