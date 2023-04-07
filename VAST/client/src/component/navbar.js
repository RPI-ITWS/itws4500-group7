import React from "react";
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from "react-bootstrap/Dropdown";
import logo from './resources/logo.png';

// Here, we display our Navbar
export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="index.html">
                <img src={logo} width={"32"} height={"32"} className="d-inline-block align-top" alt="Logo" />
                VAST
            </a>
            <span>
                <Dropdown>
                    <Dropdown.Toggle type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        MENU
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu" id="dropdown">
                        <Dropdown.Item href="">Home</Dropdown.Item>
                        <Dropdown.Item href="">Our Mission</Dropdown.Item>
                        <Dropdown.Item href="">Surface Tempature Data</Dropdown.Item>
                        <Dropdown.Item href="">Wind Velocity Data</Dropdown.Item>
                        <Dropdown.Item href="">Educational Resources</Dropdown.Item>
                        <Dropdown.Item href="">About Us</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </span>
        </nav>
    );
}