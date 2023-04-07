import React from "react";
import './about.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const yousif = require("./resources/yousif.jfif");
const dani = require("./resources/dani.jpg");
const daniel = require("./resources/daniel.jpg");
const eric = require("./resources/eric.png");
const jordan = require("./resources/jordan.jpg");

export default function AboutUs() {
    return (
        <div>
            <h1 id="mainHeader">About Us</h1>
    
            <div id="topRow">
                <div className="aboutCards">
                    <img className="personImage" src={yousif} alt={"yousif"}/>
                        <p className="person">Yousif Moftah</p>
                        <p className="personDesc">ITWS Sophomore</p>
                        <p className="personCity">New York, NY</p>
                </div>
    
                <div className="aboutCards">
                    <img className="personImage" src={dani} alt={"dani"}/>
                        <p className="person">Dani DiTomasso</p>
                        <p className="personDesc">ITWS Junior</p>
                        <p className="personCity">Long Island, NY</p>
                </div>
    
                <div className="aboutCards">
                    <img className="personImage" src={daniel} alt={"daniel"}/>
                        <p className="person">Daniel Dorticos-Rossi</p>
                        <p className="personDesc">CS/ITWS Senior</p>
                        <p className="personCity">Brooklyn, NY</p>
                </div>
            </div>
    
            <div id="bottomRow">
                <div className="aboutCards">
                    <img className="personImage" src={eric} alt={"eric"}/>
                        <p className="person">Eric Carson</p>
                        <p className="personDesc">ITWS Junior</p>
                        <p className="personCity">Placentia, CA</p>
                </div>
    
                <div className="aboutCards">
                    <img className="personImage" src={jordan} alt={"jordan"}/>
                        <p className="person">Jordan Oberstein</p>
                        <p className="personDesc">CS/ITWS Senior</p>
                        <p className="personCity">West Hartford, CT</p>
                </div>
            </div>
        </div>
    );
}