import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
      <nav id="navbar">
        <div className="navbar-left">
          <a href="#" className="name">Zoe Wong</a>
          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar-right">
          <a href="mailto:zoelevelup@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 21 }} />
          </a>
          <a href="https://github.com/zswong" target="_blank">
            <GitHubIcon style={{ fontSize: 21 }} />
          </a>
          <a href="https://www.linkedin.com/in/zoe-wong-567674236/" target="_blank">
            <LinkedInIcon style={{ fontSize: 22 }} />
          </a>
        </div>
      </nav>
    );
  };
export default NavBar;