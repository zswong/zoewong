import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>

      </div>
    </div>
  );
}

export default App;
