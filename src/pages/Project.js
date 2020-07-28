import React from 'react'
import '../App.css'
import Links from '../components/Links'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
// images for all projects
import mealprepbuddy from '../img/mealprepbuddy.jpg'
import spamcalltracker from '../img/spamcalltracker.jpg'
import handyman from '../img/handyman.png'
import googleBooks from '../img/img.png'
import employee from '../img/employee.jpg'
import burger from '../img/burger.jpg'

function Project () {
  return (
    <div className='background'>
      <Navbar />
      <Links />
      <Container>
        <div id='projects'>
          <div className=' p-5 text-white'>
            <h1>Projects</h1>
          </div>
        </div>
        <div className='row'>
          <div className='portfolio-gallery'>
            <div className='item'>
              <div className='inner'>
                <p>
                The application has been designed and implemented as a fullstack web development project which utilizes MongoDB, Express, React, and Node.js (MERN)
                </p>
                <Projects
                  imageURL={handyman}
                  alternate='handyman'
                  title='U-Break-We-Fix'
                  linkGithub='https://github.com/mathigayathri2001/U-break-WE-fix'
                  linkDeployed='https://still-depths-30514.herokuapp.com/'
                ></Projects>
              </div>
            </div>
            <div className='item'>
              <div className='inner'>
                <p>
                  An application that hosts a database service for users to
                  report spam calls received on their phones.The database would
                  serve as a central repository to hold list of spam numbers.
                </p>
                <Projects
                  imageURL={spamcalltracker}
                  alternate='spamcalltracker'
                  title='spamcalltracker'
                  linkGithub='https://github.com/mathigayathri2001/Group-Project2'
                  linkDeployed='https://spamnumbertracker.herokuapp.com/'
                ></Projects>
              </div>
            </div>

            <div className='item'>
              <div className='inner'>
                <p>
                  MealPrep is a responsive app that suggest meal plans to users
                  for a selected location based on a five-day weather forecast.
                  This app use external API to get the live weather data from
                  OpenWeatherMap and Spoonacular API to get receipe and
                  ingridents.
                </p>
                <Projects
                  imageURL={mealprepbuddy}
                  alternate='mealprepbuddy'
                  title='MealPreapBuddy'
                  linkGithub='https://github.com/mathigayathri2001/Project-1'
                  linkDeployed='https://petertyliu.github.io/Project-1/'
                ></Projects>
              </div>
            </div>

            <div className='item'>
              <div className='inner'>
                <p>
                  This is full MERN stack application retrieving books from the
                  google book api based on user search, also results can be
                  saved and used to later to buy it.
                </p>
                <Projects
                  imageURL={googleBooks}
                  alternate='googleBooks'
                  title='Google book search'
                  linkGithub='https://github.com/mathigayathri2001/Google_books'
                  linkDeployed='https://protected-bayou-45309.herokuapp.com/'
                ></Projects>
              </div>
            </div>
            <div className='item'>
              <div className='inner'>
                <p>
                  This is a command line application that acts as a Content
                  Management System for an employee database. It allows users to
                  view, add, update and delete employees, roles and departments.
                </p>
                <Projects
                  imageURL={employee}
                  alternate='employee'
                  title='Google book search'
                  linkGithub='https://github.com/mathigayathri2001/Employee_tracker'
                  linkDeployed='https://drive.google.com/file/d/1ObEFFfQO9BYEKuOXRZV-Lo2fbmQaQfYA/view'
                ></Projects>
              </div>
            </div>
            <div className='item'>
              <div className='inner'>
                <p>
                  This full stack MVC Burger application use to make a burger to
                  eat in a queue and remove it once it is eaten. This
                  application uses Express, Express-Handlebars, MySQL2,
                  HTML,Javascript, Node.js and deployed in Heroku.
                </p>
                <Projects
                  imageURL={burger}
                  alternate='burger'
                  title='Eat-da-burger'
                  linkGithub='https://github.com/mathigayathri2001/burger_app'
                  linkDeployed='https://whispering-beyond-14560.herokuapp.com/'
                ></Projects>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}

export default Project
