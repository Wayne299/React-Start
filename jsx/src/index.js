// Import React and ReactDOM libraries
// webpack
import React from "react";
import ReactDOM from "react-dom";

// Create a React component (function or class)
const App = () => {
	const buttonText = "Click Me!";

	return (
		<div>
			<label className="label" htmlFor="name">
				Enter Name
			</label>
			<input id="name" type="text" />
			<button style={{ backgroudColor: "blue", color: "red" }}>
				{buttonText}
			</button>
		</div>
	);
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
