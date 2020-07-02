import React from "react";
import "../App.css";
import Links from "../components/Links";
import Container from "../components/Container";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

import mealprepbuddy from "../img/mealprepbuddy.jpg";



function Project() {
    return (
      <div className="background">
        <Navbar />
        <Links />
        <Container>      
          <div className="projects">
            <div className=" p-5 text-white">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-gallery">
              <div class="item">
                <div class="inner">
                 <p>MealPrep is a responsive app that suggest meal plans to users for a selected location based on a five-day weather forecast.</p>
                  <img src={mealprepbuddy} alt="mealprepbuddy" />
                  <div class="overlay">
                    <h4>MealPreapBuddy</h4>               
                    <p>
                      <a
                        href="https://github.com/mathigayathri2001/Project-1"
                        target="_blank"rel='noopener noreferrer'
                      >
                        {" "}
                        <FaGithub />
                        Github{" "}
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://petertyliu.github.io/Project-1/"
                        target="_blank"rel='noopener noreferrer'
                      >
                        ViewWebsite
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              </div>
        </div>
          <Contact />
  
        </Container>
        < Footer />
        
      </div>
    );
  }
  
  export default Project;