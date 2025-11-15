import React, { useState } from "react";
import FizzBuzzInput from "../../components/FizzBuzzInput/FizzBuzzInput";
import FizzBuzzOutput from "../../components/FizzBuzzOutput/FizzBuzzOutput";

const FizzBuzz = () => {
	const [output, setOutput] = useState();
	return (
		<>
			<h1>FizzBuzz Challenge</h1>
			<FizzBuzzInput setOutput={setOutput} />
			<FizzBuzzOutput output={output} />
		</>
	);
};

export default FizzBuzz;
