import React from "react";
import "../App.css";
import Links from "../components/Links";
import Container from "../components/Container";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

import mealprepbuddy from "../img/mealprepbuddy.jpg";
import spamcalltracker from "../img/spamcalltracker.jpg";
import weatherdashboard from "../img/HW1.jpg";
import sechedularevent from "../img/HW2.jpg";



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
              <div class="item">
              <div class="inner">
                <p>An application that hosts a database service for users to report spam calls received on their phones.The database would serve as a central repository to hold list of spam numbers.</p>
                <img src={spamcalltracker} alt="spamcalltracker" />
                <div class="overlay">
                  <h4>spamcalltracker</h4>
                  <p>
                    <a
                      href="https://github.com/mathigayathri2001/Group-Project2"
                      target="_blank" rel='noopener noreferrer'
                    >
                      {" "}
                      <FaGithub />
                      Github{" "}
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://spamnumbertracker.herokuapp.com/"
                      target="_blank" rel='noopener noreferrer'
                    >
                      ViewWebsite
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="inner">
                <p>This website will be used to search the current weather and five day forecast weather for the given city by the user.</p>
                <img src={weatherdashboard} alt="weatherdashboard" />
                <div class="overlay">
                  <h4>weatherdashboard</h4>
                  <p>
                    <a
                      href="https://github.com/mathigayathri2001/Weatherdashboard"
                      target="_blank"  rel='noopener noreferrer'
                    >
                      {" "}
                      <FaGithub />
                      Github{" "}
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://mathigayathri2001.github.io/Weatherdashboard/"
                      target="_blank" rel='noopener noreferrer'
                    >
                      ViewWebsite
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="inner">
                <p>This website will be used to schedule the daily events between 8 am to 5pm.</p>
                <img src={sechedularevent} alt="sechedularevent" />
                <div class="overlay">
                  <h4>schedular event</h4>
                  <p>
                    <a
                      href="https://github.com/mathigayathri2001/scheduler-event"
                      target="_blank" rel='noopener noreferrer'
                    >
                      {" "}
                      <FaGithub />
                      Github{" "}
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://mathigayathri2001.github.io/scheduler-event/"
                      target="_blank" rel='noopener noreferrer'
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