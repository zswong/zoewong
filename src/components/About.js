import React from "react";
import "../styles/About.css"
import { Typewriter } from 'react-simple-typewriter';
import Me from "../assets/me.jpg";

const About = () =>{
    return(
        <div id= "about">
            <div className="section-header ">
                <span className="section-title"> / about me</span>
            </div>
            <div className = "about-description">
                <p>
                I am currently a fourth year Computer Science student at Simon Fraser University, minoring in Statistics, with a passion for finance and developing projects that deliver meaningful impact. I also enjoy learning new things and exploring emerging technologies.
                </p>
                {"A few technologies I work with include:"}
                <ul className="tech-stack">
                    <li> ❖ Python</li>
                    <li> ❖ C/C++</li>
                    <li> ❖ React.js</li>
                    <li> ❖ Javascript</li>
                    <li> ❖ HTML/CSS</li>
                    <li> ❖ Typescript</li>
                </ul>
                <p>
                    Outside of school, I love spending time at the gym, traveling to new places, capturing life through photography, exploring new hobbies, and sharing good food or a cup of matcha with friends and family.
                </p>
                <div className="about-image">
                    <img src= {Me} alt="Zoe Wong" />
                </div>
            </div>
        </div>
    )
}
export default About;