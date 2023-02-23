import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function App() {
  const [color1, setColor1] = useState("#d22525");
  const [color2, setColor2] = useState("#2184cb");
  const [color3, setColor3] = useState("#1dbd45");

  return (
    <center>
      <div className="App">
        <HexColorPicker color={color1} onChange={setColor1} />
        <div className="value" style={{ borderLeftColor: color1 }}>
          Current RED hex value is {color1}
        </div>
        <br></br>
        <HexColorPicker color={color2} onChange={setColor2} />
        <div className="value" style={{ borderLeftColor: color2 }}>
          Current BLUE hex value is {color2}
        </div>
        <br></br>
        <HexColorPicker color={color3} onChange={setColor3} />
        <div className="value" style={{ borderLeftColor: color3 }}>
          Current GREEN hex value is {color3}
        </div>
      </div>
    </center>
  );
}
