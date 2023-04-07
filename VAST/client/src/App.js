import './App.css';
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./component/navbar";
import Index from "./component/index";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </div>


  );
}

export default App;
