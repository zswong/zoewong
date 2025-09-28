import React from "react";
import "../styles/Projects.css";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const spotlightProjects = {
    "Probloom": {
      title: "Probloom",
      desc: "An AI-powered web application using OpenAI API to generate relevant practice problems and solutions tailored to the user’s inputs",
      techStack: "Javascript, React.js",
      link: "https://github.com/Awesomedonut/Practice-Problem-Generator",
      open: "https://github.com/Awesomedonut/Practice-Problem-Generator",
      image: `${process.env.PUBLIC_URL}/assets/probloom.jpg`
    },
    "ReplaceMe": {
        title: "ReplaceMe",
        desc: "Okay",
        techStack: "Javascript, React.js",
        link: "",
        open: "",
        image: `${process.env.PUBLIC_URL}/assets/replaceme.png`
      },
};

const Projects = () => {
    return (
        <div id="projects">
            <div className="carousel-wrapper">
                <div className= "title">
                    / projects
                </div>
                <Carousel fade interval={5000} pause="hover">
                    {Object.keys(spotlightProjects).map((key, index) => {
                    const project = spotlightProjects[key];
                    return (
                        <Carousel.Item key={index}>
                        <img
                            src={project.image}
                            className="d-block w-100"
                            alt={project.title}
                        />
                        <Carousel.Caption className="carousel-caption-bg">
            
                            <p className="carousel-desc">{project.desc}</p>
                            <p className="carousel-tech">{project.techStack}</p>
                            <div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="carousel-link"
                            >
                                GitHub
                            </a>
                            </div>
                        </Carousel.Caption>
                        </Carousel.Item>
                        
                    );
                    })}
                </Carousel>
            </div>
        </div>
      );
    };
  
  export default Projects;