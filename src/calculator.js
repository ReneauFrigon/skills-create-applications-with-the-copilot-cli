#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator App
 *
 * Supports the following basic arithmetic operations:
 *   - Addition       (+)  : Adds two numbers together
 *   - Subtraction    (-)  : Subtracts the second number from the first
 *   - Multiplication (*)  : Multiplies two numbers together
 *   - Division       (/)  : Divides the first number by the second
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Examples:
 *   node calculator.js 5 + 3     => 8
 *   node calculator.js 9 - 4     => 5
 *   node calculator.js 6 * 7     => 42
 *   node calculator.js 10 / 2    => 5
 */

/**
 * Adds two numbers.
 * @param {number} a - The first operand
 * @param {number} b - The second operand
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The first operand
 * @param {number} b - The second operand
 * @returns {number} The difference of a minus b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first operand
 * @param {number} b - The second operand
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend
 * @param {number} b - The divisor (must not be zero)
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If b is zero (division by zero)
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * Performs a calculation given two numbers and an operator.
 * Supported operators: +, -, *, /
 * @param {number} a - The first operand
 * @param {string} operator - The arithmetic operator
 * @param {number} b - The second operand
 * @returns {number} The result of the calculation
 * @throws {Error} If the operator is not supported
 */
function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error(
        `Unsupported operator: "${operator}". Use one of: +, -, *, /`
      );
  }
}

// --- CLI entry point ---
// Reads arguments from the command line: node calculator.js <num1> <op> <num2>
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Usage: node calculator.js <number1> <operator> <number2>");
  console.error("Supported operators: +, -, *, /");
  console.error("Example: node calculator.js 10 / 2");
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Error: Both operands must be valid numbers.");
  process.exit(1);
}

try {
  const result = calculate(num1, operator, num2);
  console.log(`${num1} ${operator} ${num2} = ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}

module.exports = { add, subtract, multiply, divide, calculate };
