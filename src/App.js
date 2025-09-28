
import './App.css';
import React from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">

        <Intro></Intro>
        <About></About>
        <Projects></Projects>

      </div>
    </div>
  );
}

export default App;
