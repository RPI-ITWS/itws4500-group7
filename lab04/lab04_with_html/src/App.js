import './App.css';
import React from 'react';
import './components/TimeForm'
import TimeForm from './components/TimeForm';
import useGenerateRandomColor from "./components/useGenerateRandomColor";
import Timer from './components/Timer';
import ColorBars from './components/ColorBars';

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const [disable, setDisable] = React.useState(false);
  
  return (
    <div className="App">
      <h1>Hexed!</h1>
      <h4> A game where your goal is to guess the correct randomly generated color as quickly as possible.</h4>
      <h4><h3>How it works:</h3>1: Set your name and countdown time. <br/>2: Press Start to begin the matching game! </h4>
      <div class="card">
        <div class="container">
        <h2>Start Playing Here!</h2>
          <TimeForm />
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default App;
