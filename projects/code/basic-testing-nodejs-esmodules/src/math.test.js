// with jest you don't need to import it
// or you can add globals flag but importing it will give better autocompletition
import { it, test, expect } from "vitest"; // you can use it as replacement of test
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];
  // Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  ); // we can move this to arrange part
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];
  const result = add(numbers);
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => +prevValue + +currentValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

// test an error
it("should through an error if no value is passed into the function", () => {
  //   try {
  //     const result = add();
  //   } catch (err) {
  //     expect(result).toBeDefined();
  //   }
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it("should through an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow(/is not iterable/);
});
