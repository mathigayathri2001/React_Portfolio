import React from "react";
import { FaGithub } from "react-icons/fa";
import "../App.css";


function Projects(props){
    console.log(props) 
    return(
        <div>        
       <img src={props.imageURL} alt={props.alternate} /> 
       <div className="overlay">
         <h4>{props.title}</h4>
         <p>
         <button
        className="btn btn-outline-dark btn-lg btn-block "
          onClick={() => window.open(props.linkGithub)}>
               <FaGithub/> GitHub
          </button>
         <button
        className="btn btn-outline-dark btn-lg btn-block"
          onClick={() => window.open(props.linkDeployed)}>
                LiveApp

          </button>
          </p>
       </div>
       
        </div>

    )
}

export default Projects