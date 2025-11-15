import React from "react";
import FizzBuzzInput from "../../components/FizzBuzzInput/FizzBuzzInput";
import FizzBuzzOutput from "../../components/FizzBuzzOutput/FizzBuzzOutput";

const FizzBuzz = () => {
	return (
		<>
			<h1>FizzBuzz Challenge</h1>
			<FizzBuzzInput />
			<FizzBuzzOutput />
		</>
	);
};

export default FizzBuzz;
