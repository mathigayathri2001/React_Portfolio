import React from "react";
import "../App.css";


function Projects(props){
    console.log(props) 
    return(
        <div>        
       <img src={props.imageURL} alt={props.alternate} /> 
      
       
        </div>

    )
}

export default Projects