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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/ourMission" element={<OurMission />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/windVel" element={<WindVel />} />
        <Route path="/surfaceTemp" element={<SurfaceTemp />} />
        <Route path="/educationalResources" element={<OurMission />} />
      </Routes>
      <Footer />
    </div>


  );
}

export default App;
