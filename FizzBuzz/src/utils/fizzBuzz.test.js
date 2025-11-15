import { expect } from "vitest";
import fizzBuzz from "./fizzBuzz";

describe("test cases for fizzbuzz function", () => {
	it("should return number when the input is not multiple of 3 & 5", () => {
		const input = 2;
		expect(fizzBuzz(input)).toBe(2);
	});
	it("should return fizz when the input is multiple of 3", () => {
		const input = 3;
		expect(fizzBuzz(input)).toBe("Fizz");
	});
	it("should return buzz when the input is multiple of 5", () => {
		const input = 5;
		expect(fizzBuzz(input)).toBe("Buzz");
	});
	it("should return fizzbuzz when the input is multiple of both 3 and 5", () => {
		const input = 15;
		expect(fizzBuzz(input)).toBe("FizzBuzz");
	});
});
