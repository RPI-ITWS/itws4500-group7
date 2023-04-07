import React from "react";
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './footer'
const vastImage = require("./resources/vast_image.png");
const mission = require("./resources/our_mission.jpg");
const sTemp = require("./resources/surface_temp.jpg");
const wVel = require("./resources/wind_velocity.png");
const rpi = require("./resources/rpi.jpg");
const gio = require("./resources/giovanni_logo.png");

export default function Index() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className=".col-xl-4">
                        <img id="vast" src={vastImage} />
                    </div>
                </div>
                <div className="row">
                    <div className="card w-90">
                        <div className="row">
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">OUR MISSION</h5>
                                    <p className="card-text">VAST's goal is to create an easy-to-naviagte application for
                                        accessing satellite data and educational resources about renewable energy
                                        within the state of New York.
                                    </p>
                                    <a href={"our_mission.html"} className="btn btn-primary">FIND OUT MORE</a>
                                </div>
                            </div>
                            <div className="col">
                                <img className="image" src={mission} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div clas="row">
                    <div className="card w-90">
                        <div className="row">
                            <div className="col">
                                <img className="image" src={sTemp} />
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">SURFACE TEMPATURE DATA</h5>
                                    <p className="card-text">See the changes of the surface tempature within the state
                                        of New York, pulled directly from NASA's own satellites.
                                    </p>
                                    <a href={"surface_tempature.html"} className="btn btn-primary">FIND OUT MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div clas="row">
                    <div className="card w-90">
                        <div className="row">
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">WIND VELOCITY DATA</h5>
                                    <p className="card-text">See the changes of the wind velocity within the state
                                        of New York, pulled directly from NASA's own satellites.
                                    </p>
                                    <a href={"wind_velocity.html"} className="btn btn-primary">FIND OUT MORE</a>
                                </div>
                            </div>
                            <div className="col">
                                <img className="image" src={wVel} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div clas="row">
                    <div className="card w-90">
                        <div className="row">
                            <div className="col">
                                <img className="image" src={gio} />
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">EDUCATIONAL RESOURCES</h5>
                                    <p className="card-text"> We provide educational animations and materials for all
                                        ages! Check out our interactive learning experience on why we should care
                                        about renewable energy.
                                    </p>
                                    <a href={"educational_resources.html"} className="btn btn-primary">FIND OUT MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div clas="row">
                    <div className="card w-90">
                        <div className="row">
                            <div className="col">
                                <div className="card-body">
                                    <h5 className="card-title">ABOUT US</h5>
                                    <p className="card-text"> Meet the team behind VAST! Information Technology
                                        and Web Science students at Rensselaer Polytechnic
                                        Institute.
                                    </p>
                                    <a href={"about_us.html"} className="btn btn-primary">FIND OUT MORE</a>
                                </div>
                            </div>
                            <div className="col">
                                <img className="image" src={rpi} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}