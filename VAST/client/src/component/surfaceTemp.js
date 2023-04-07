import React, { useState } from "react";
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const startRequire = "./resources/windVelPics/";
const windImage = require(startRequire + "1.JPG");

export default function SurfaceTemp() {
    //var [value,setValue] = useState(1);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="card-title">Surface Temperature Data</h1>
                </div>
                <div className="row">
                    <div className="card w-90">
                        <div id="windDisplay">
                            <img src={windImage} width={1000} height={500} className="d-inline-block align-top" alt="" />
                        </div>
                        <h5 className="card-title" id="windDate">1/2022</h5>
                    </div>

                </div>
                <div clas="row">
                    <input
                        type="range"
                        min="1"
                        max="12"
                        value="0"
                        id="windSlider"
                        //onChange={(e) => setWindImage(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}