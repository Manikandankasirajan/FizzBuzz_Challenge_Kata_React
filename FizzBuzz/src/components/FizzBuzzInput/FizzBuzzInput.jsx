import React from "react";
import { useState } from "react";
import fizzBuzz from "../../utils/fizzBuzz";

const FizzBuzzInput = ({ setOutput }) => {
	const [input, setInput] = useState();
	return (
		<>
			<label htmlFor="inputBox"></label>
			<input
				type="number"
				name="input"
				id="inputBox"
				placeholder="Enter your number"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => setOutput(fizzBuzz(input))}>Check</button>
		</>
	);
};

export default FizzBuzzInput;
