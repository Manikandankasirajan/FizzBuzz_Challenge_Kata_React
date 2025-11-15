import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FizzBuzz from "./FizzBuzz";

describe("test cases for fizzbuzz page", () => {
	it("should render heading", () => {
		render(<FizzBuzz />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/fizzbuzz challenge/i);
	});
});
