import React, {useState} from 'react';
//import * as ReactDOM from 'react-dom';
import './form.css';
import './App.css';
import CountDownTimer from './CountDownTimer';

function form() {
	const [hour , setHour] = useState('');
	const [minute , setMinute] = useState('');
	const [second , setSecond] = useState('');

	// function to update state of hour with
	// value enter by user in form
	const handleChange =(e)=>{
	setHour(e.target.value);
	}
	// function to update state of minute with value
	// enter by user in form
	const handleMinuteChange =(e)=>{
	setMinute(e.target.value);
	}
	// function to update state of second with value
	// enter by user in form
	const handleSecondChange =(e)=>{
	setSecond(e.target.value);
	}
    const handleSubmit=(e)=>{
        alert('A form was submitted with Hour:"' + hour +
        '" , Minute:"'+ minute +'" and Second:"' + second + '"');
    }
	e.preventDefault();

return (
	<div className="App-form">
	<header className="Appform-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}
	<h3> Enter countdown values </h3>
		<label >
		Hour:
		</label><br/>
		<input type="text" value={hour} required onChange={(e) => {handleChange(e)}} /><br/>
		{ /*when user write in name input box , handleChange()
			function will be called. */}
		<label >
		Minute:
		</label><br/>
		<input type="text" value={minute} required onChange={(e) => {handleMinuteChange(e)}} /><br/>
			{ /*when user write in age input box , handleAgeChange()
			function will be called. */}
		<label>
		Second:
		</label><br/>
		<input type="text" value={second} required onChange={(e) => {handleSecondChange(e)}} /><br/>
		{/* when user write in email input box , handleEmailChange()
			function will be called.*/}
		<input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}


function App() {

  const hoursMinSecs = {hours: 0, minutes: 0, seconds: 60}
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;

//OTHER ATTEMPT AT COUNTDOWN AND FORM

/*
import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client';

const App = () => {
  
  function MyForm() {
    const [time, setTime] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${time}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter the countdown time in hh:mm:ss format:
          <input 
            type="text" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);
 

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next	
		setTimer('00:00:60');

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 60);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
		<div className="App">
			<h2>{timer}</h2>
			<button onClick={onClickReset}>Reset</button>
		</div>
	)
}
export default App;
 */