// Import React and ReactDOM libraries
// webpack
import React from "react";
import ReactDOM from "react-dom";

// Create a React component (function or class)
const App = () => {
	return (
		<div>
			<label class="label" for="name">
				Enter Name
			</label>
			<input id="name" type="text" />
			<button>Submit</button>
		</div>
	);
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
