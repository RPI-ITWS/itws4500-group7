import React, { useState } from "react";
import '../App.css';
import useGenerateRandomColor from "./useGenerateRandomColor";
import ColorBars from "./ColorBars";

const Timer = ({ sec }) => {
    const resetSec = useState(sec);
    const [current, setCurrent] = useState(sec);
    const [seconds, setSeconds] = useState(sec);
    const [active, setActive] = useState(false);
    const { color, generateColor } = useGenerateRandomColor();

    const tick = () => {
        if (seconds > 0) {
            setSeconds(seconds => seconds - 1);
            console.log(seconds);
        }
        else {
            clearInterval(current);
            setSeconds(sec);
            setActive(false);
        }
    }

    const startTimer = () => {
        setActive(true);
        // const current = setInterval(() => {
        //     if (current > 0) {
        //         tick();
        //     } else {
        //         return () => clearInterval(current);
        //     }
        // }, 1000);
    }

    const resetTimer = () => {
        setActive(false);
        return () => clearInterval(current);
    }

    React.useEffect(() => {
        if (active) {
            const current = setInterval(() => tick(), 1000);
            return () => clearInterval(current);
        } else {
            setSeconds(sec);
        }
    });

    if (!active) {
        return (
            <div className="counter">
                <p>{`${seconds} sec`}</p>
                <button className="startBtn" onClick={startTimer}>Start</button>
            </div>
        );
    } else {

        return (
            <div className="counter">
                <p>{`${seconds} sec`}</p>

                <div id="random_color"
                    style={{
                        backgroundColor: "#" + color
                    }}
                >

                    <button id="button_style"
                        onClick={() => {
                            generateColor();
                            resetTimer();
                        }
                        }
                    >
                        Reset
                    </button>

                </div>
                
            </div>
        );
    }

}

export default Timer;