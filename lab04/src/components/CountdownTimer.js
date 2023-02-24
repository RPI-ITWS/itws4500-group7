import React from 'react';

const CountDownTimer = ({ seconds, isPlaying, key }) => {

    const [[hrs, mins, secs], setTime] = React.useState([0, 0, seconds]);

    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0)
            resetTimer()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const resetTimer = () => setTime([0, 0, parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
        <div>
            <p>{`${secs.toString().padStart(2, '0')} sec`}</p>
        </div>
    );
}

export default CountDownTimer;