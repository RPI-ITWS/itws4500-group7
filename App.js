import { useState } from 'react';
import './App.css';
import './components/TimeForm'
import TimeForm from './components/TimeForm';

function App() {
  const [gameTime, setGameTime] = useState(60);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="App">
      <TimeForm/>
      <div className='App' id='sample'></div>
    </div>
  );
}

export default App;
