import React from 'react';
import Timer from './Timer';

class TimeForm extends React.Component {
    constructor() {
        super();
        this.state = { gameTime: 60, start: false, reset: 0 };
        this.setTime = this.setTime.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleStart = () => {
        this.setState({ start: (true) });
    };

    handleStop = () => {
        this.setState({ start: (false) });
    };

    handleReset = () => {
        this.setState({ start: (false) });
        this.setState({ reset: 1 });
    };

    setTime(event) {
        document.getElementById("displayName").innerHTML="<h2>Welcome " + event.target.gameName.value + "</h2>"
        event.preventDefault();
        const temp = event.target.gameTime.value;
        if (temp >= 1 && temp <= 100) {
            this.setState({ gameTime: temp });
            this.setHoursMinSecs = [0, 0, this.state.gameTime];
        } else {
            this.setState({ gameTime: 60 });
        }
    }

    render() {
        return (
            <div>
                <div id='displayName'></div>
                <form onSubmit={this.setTime}>
                    <label>Enter your name: </label><br />
                    <input type="text" name="gameName" /><br />
                    <label>Enter a time between 1 and 100: </label><br />
                    <input type="text" name="gameTime" /><br />
                    <button type="submit">Set</button>
                </form>
                <Timer sec={this.state.gameTime} />
            </div>

        );
    }
}

export default TimeForm;