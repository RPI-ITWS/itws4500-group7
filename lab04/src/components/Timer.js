import React, { useState } from "react";
import '../App.css';
import useGenerateRandomColor from "./useGenerateRandomColor";
import ColorBars from "./ColorBars";


const Timer = ({ sec }) => {
    const current = useState(sec);
    const [seconds, setSeconds] = useState(sec);
    const [active, setActive] = useState(false);
    const { color, generateColor } = useGenerateRandomColor();
    const [guessColor, generateGuess] = useState("#FFFFFF");
    const [score, setScore] = useState(0);

    const tick = () => {
        if (seconds > 0 && active) {
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
        const actual_red = parseInt(String(color).substr(0, 2), 16);
        const actual_green = parseInt(String(color).substr(2, 4), 16);
        const actual_blue = parseInt(String(color).substr(4, 6), 16);
        const guessed_red = parseInt(String(guessColor).substr(1, 3), 16);
        const guessed_green = parseInt(String(guessColor).substr(3, 5), 16);
        const guessed_blue = parseInt(String(guessColor).substr(5, 7), 16);
        if (active) {
            document.getElementById("score").innerHTML = "";
            const cur = setInterval(() => {
                const red = (Number(document.getElementById("red").value).toString(16).padStart(2, '0'));
                const green = (Number(document.getElementById("green").value).toString(16).padStart(2, '0'));
                const blue = (Number(document.getElementById("blue").value).toString(16).padStart(2, '0'));
                generateGuess("#" + red + green + blue);
            }, 1);
            return () => clearInterval(cur);
        } else {
            if (color) {
                setScore(((255 - Math.abs(actual_red - guessed_red)) + (255 - Math.abs(actual_green - guessed_green)) + (255 - Math.abs(actual_blue - guessed_blue))) * Math.floor(seconds) * (1000 * (101 - sec)));
                console.log(color);
                document.getElementById("score").innerHTML = "Score: " + score;
            }
        }
    });

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
                <button className="my-button" onClick={() => {
                    startTimer();
                    generateColor();
                }}>
                    Start
                </button>
                <div id="score">Score: 0</div>
            </div>
        );
    } else {

        return (
            <center>
                <div className="counter">
                    <p>{`${seconds} sec`}</p>

                    <div id="random_color"
                        style={{
                            backgroundColor: "#" + color
                        }}
                    >

                        <button className="my-button"
                            onClick={() => {
                                generateColor();
                                resetTimer();
                            }
                            }
                        >
                            Submit
                        </button>
                        <div id="score"></div>

                    </div>
                    <h4>Guess the color above, then hit submit!</h4>
                    <div
                        className="guess"
                        style={{
                            backgroundColor: guessColor
                        }}
                    >
                        <ColorBars />
                    </div>

                </div>
            </center>
        );
    }

}

export default Timer;