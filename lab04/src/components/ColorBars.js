import React, { useState } from "react";

const ColorBars = () => {
    const [value1, setValue1] = useState(128);
    const [value2, setValue2] = useState(128);
    const [value3, setValue3] = useState(128);
    const MAX = 255;

    const getBackgroundSize = (color) => {
        if(color === "red") {
            return {
                backgroundColor: `#${Number(value1).toString(16)}0000`,
                backgroundSize: `${(value1 * 100) / MAX}% 100%`,
            };
        } else if(color === "green") {
            return {
                backgroundColor: `#00${Number(value2).toString(16)}00`,
                backgroundSize: `${(value2 * 100) / MAX}% 100%`,
            };
        } else if(color === "blue") {
            return {
                backgroundColor: `#0000${Number(value3).toString(16)}`,
                backgroundSize: `${(value3 * 100) / MAX}% 100%`,
            };
        }
    };

    return (
        <div>
            <input
                type="range"
                min="0"
                max={MAX}
                onChange={(e) => setValue1(e.target.value)}
                style={getBackgroundSize("red")}
                value={value1}
                id="red"
            />
            <br></br>
            <input
                type="range"
                min="0"
                max={MAX}
                onChange={(e) => setValue2(e.target.value)}
                style={getBackgroundSize("green")}
                value={value2}
                id="green"
            />
            <br></br>
            <input
                type="range"
                min="0"
                max={MAX}
                onChange={(e) => setValue3(e.target.value)}
                style={getBackgroundSize("blue")}
                value={value3}
                id="blue"
            />
        </div>
    );
}

export default ColorBars;