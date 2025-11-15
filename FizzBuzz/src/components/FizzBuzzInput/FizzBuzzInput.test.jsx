import { render, screen } from "@testing-library/react";
import FizzBuzzInput from "./FizzBuzzInput";
import { expect } from "vitest";

describe("test cases for fizzbuzz input component", () => {
	it("should render input box and button", () => {
		render(<FizzBuzzInput />);
		const textBox = screen.getByRole("spinbutton");
		const button = screen.getByRole("button");
		expect(textBox).toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/check/i);
	});
});
