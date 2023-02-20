import React from 'react';

class TimeForm extends React.Component {
    constructor() {
        super();
        this.state = { gameTime: 60 };
        this.setTime = this.setTime.bind(this);
    }

    setTime(event) {
        event.preventDefault();
        const temp = event.target.gameTime.value;
        console.log("test1");
        if (temp.trim().length() !== 0 && Number.isInteger(temp)) {
            console.log("test2");
            if (temp >= 1 && temp <= 100) {
                this.setState({ gameTime: temp });
                console.log(this.state.gameTime);
            }
        }
        console.log("test3");
    }

    render() {
        return (
            <div>
                <form onsubmit={this.setTime}>
                    <label>Enter a time between 1 and 100: </label><br />
                    <input type="text" name="gameTime" value={this.state.gameTime}/><br />
                    <button type="submit">Start</button>
                </form>
                <div>{this.gameTime}</div>
            </div>

        );
    }
}

export default TimeForm;