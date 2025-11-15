import React from "react";

const FizzBuzzOutput = ({ output }) => {
	if (!output) return null;
	return (
		<>
			<p>result : {output}</p>
		</>
	);
};

export default FizzBuzzOutput;
