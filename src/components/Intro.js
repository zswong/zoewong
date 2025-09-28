import React, {useState} from "react";
import "../styles/Intro.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Intro = () => {

    const [text] = useTypewriter({
        words:[ "hi there, I'm Zoe Wong"],
        loop: 1,
        })


    return (
        <div id = "intro">
            <div className = "intro-title"> 
            <span>
                {text.includes("Zoe Wong") ? (
                    <>
                    hi there, I'm{" "}
                    <span style={{ color: "#00ccff", fontWeight: "bold" }}>
                        Zoe Wong
                    </span>
                    </>
                ) : (
                    text
                )}
                </span>
                
                
                {<Cursor cursorColor={'white'} />}
            </div>
            <div className = "intro-subtitle">I build things.</div>
            <div className = "intro-description"> I'm a Computer Science student based in Vancouver, BC. Welcome to my personal website.</div>
        </div>
    )

}
export default Intro;