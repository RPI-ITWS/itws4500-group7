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
      <h2> 1: Set your time <br/>2: Press Start to begin the matching game! </h2>
      <TimeForm />
    </div>
  );
}

export default App;
