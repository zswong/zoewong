import React from "react";
import "../styles/About.css"
import { Typewriter } from 'react-simple-typewriter';


const About = () =>{
    return(
        <div id= "about">
            <div className="section-header ">
                <span className="section-title"> / about me</span>
            </div>
            <div className = "about-description">
                <p>
                    I am currently a forth year Computer Science at
                    Simon Fraser University. 
                </p>
                {"Technologies I work with include:"}
                <ul className="tech-stack">
                    <li> ❖ Python</li>
                    <li> ❖ C/C++</li>
                    <li> ❖ React.js</li>
                    <li> ❖ Javascript</li>
                </ul>
                <p>
                    When I'm not in school, I enjoy going to the gym, finding a new hobby to dive into, or spending time with friends and family over good food or a cup of matcha.
                </p>
                <div className="about-image">
                    <img alt="Zoe Wong" src={"/assets/me.jpg"} />
                </div>
            </div>
        </div>
    )
}
export default About;