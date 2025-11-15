export default function fizzBuzz(input) {
	const rules = [defaultRule, fizzRule, buzzRule, FizzBuzzRule];
	for (const rule of rules) {
		const result = rule(input);
		if (result) {
			return result;
		}
	}
}

function defaultRule(input) {
	return input % 3 !== 0 && input % 5 !== 0 && input;
}
function fizzRule(input) {
	return input % 3 === 0 && input % 5 !== 0 && "Fizz";
}
function buzzRule(input) {
	return input % 3 !== 0 && input % 5 === 0 && "Buzz";
}
function FizzBuzzRule(input) {
	return input % 3 === 0 && input % 5 === 0 && "FizzBuzz";
}
