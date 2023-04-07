import React from "react";
import './mission.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function OurMission() {
    return (
        <div>
            <h1 id="mainHeader">Our Mission</h1>
            <p id="mainContent">VAST will look at a small subset of data which includes surface
                temperature and wind velocity data. Our goal is to present this data for the state of New York in
                a presentable and easy to understand fashion so that educators who do not have experience
                with data analysis can create discussions with students. Data should be presented in such a
                way that users can draw their conclusions from the set of data such as where the best location
                to place renewable energy sources would be or what type of renewable energy should be used
                in a given area.</p>
        </div>
    );
}