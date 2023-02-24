import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './form.css';

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

export default form;
