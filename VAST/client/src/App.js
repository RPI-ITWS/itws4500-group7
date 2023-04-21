import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from './component/footer';
import Index from "./component/index";
import OurMission from "./component/our_mission";
import AboutUs from "./component/about_us";
import WindVel from './component/windVel';
import SurfaceTemp from './component/surfaceTemp';
import SelectState from './component/selectState';

// For WindVel
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ourMission" element={<OurMission />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/windVel/:stateID" element={<WindVel />} />
        <Route path="/surfaceTemp" element={<SurfaceTemp />} />
        <Route path="/educationalResources" element={<SelectState />} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;
