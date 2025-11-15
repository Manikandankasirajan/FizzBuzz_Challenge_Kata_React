import { render, screen } from "@testing-library/react";
import FizzBuzzOutput from "./FizzBuzzOutput";
import { expect } from "vitest";

describe("test cases for fizzbuzz output component", () => {
	it("should not render result component when there is no output", () => {
		render(<FizzBuzzOutput />);
		expect(screen.queryByText(/result/i)).not.toBeInTheDocument();
	});
	it("should render result for output", () => {
		const output = 2;
		render(<FizzBuzzOutput output={output} />);
		expect(screen.queryByText(/result/i)).toBeInTheDocument();
	});
});
