import React from "react";

const FizzBuzzInput = () => {
	return (
		<>
			<label htmlFor="inputBox"></label>
			<input
				type="number"
				name="input"
				id="inputBox"
				placeholder="Enter your number"
			/>
			<button>Check</button>
		</>
	);
};

export default FizzBuzzInput;
