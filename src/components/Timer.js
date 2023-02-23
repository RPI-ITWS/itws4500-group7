import React, { useState } from "react";
import '../App.css';
import useGenerateRandomColor from "./useGenerateRandomColor";
import getValues from "./ColorBars";
import ColorBars from "./ColorBars";

const Timer = ({ sec }) => {
    const resetSec = useState(sec);
    const [current, setCurrent] = useState(sec);
    const [seconds, setSeconds] = useState(sec);
    const [active, setActive] = useState(false);
    const { color, generateColor } = useGenerateRandomColor();
    const { guessColor, generateGuess } = getValues();

    const tick = () => {
        if (seconds > 0) {
            setSeconds(seconds => seconds - 1);
        }
        else {
            clearInterval(current);
            setSeconds(sec);
            setActive(false);
        }
    }

    const startTimer = () => {
        setActive(true);
    }

    const resetTimer = () => {
        setActive(false);
        return () => clearInterval(current);
    }

    React.useEffect(() => {
        if (active) {
            generateGuess();
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
                <button className="startBtn" onClick={() => {
                    startTimer();
                    generateColor();
                }}>
                    Start
                </button>
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
                <div
                    id="guess"
                    style={{
                        backgroundColor: guessColor
                    }}
                >
                    <ColorBars />
                </div>

            </div>
        );
    }

}

export default Timer;