import React from 'react';
import "./App.css";
import useGenerateRandomColor from "./useGenerateRandomColor";

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const [disable, setDisable] = React.useState(false);

return (

  <div id="container">
    <h1> Click the Start button to generate a random color </h1>
	<div id="random_color"
	style={{
		backgroundColor: "#" + color
	}}
	>

	<button id="button_style"
    disabled={disable} onClick={() => {
        setDisable(true);
        generateColor();
      }
    }
	>
		Start
	</button>

	</div>
  </div>
);
}

export default App;

