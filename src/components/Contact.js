import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact (){
    return(
        <div>
            <div id="contact">
                <div className="-card-footer ">
                  <h3>Contact</h3>
                  <div className="details">
                  <FaPhone />
                  <span className= "number">613-863-4831</span>
                  <FaEnvelope />
                  <span className ="email">rgayathiri2001@yahoo.com</span>
                </div>
                </div>
              </div>

        </div>
    )
}

export default Contact