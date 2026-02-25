const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator');

describe('Calculator', () => {
  describe('addition', () => {
    test('adds two positive numbers', () => {
      expect(addition(5, 3)).toBe(8);
    });
    test('adds negative numbers', () => {
      expect(addition(-2, -3)).toBe(-5);
    });
  });

  describe('subtraction', () => {
    test('subtracts two numbers', () => {
      expect(subtraction(9, 4)).toBe(5);
    });
  });

  describe('multiplication', () => {
    test('multiplies two numbers', () => {
      expect(multiplication(6, 7)).toBe(42);
    });
  });

  describe('division', () => {
    test('divides two numbers', () => {
      expect(division(10, 2)).toBe(5);
    });
    test('returns error on division by zero', () => {
      expect(division(10, 0)).toBe('Error: Division by zero');
    });
  });

  describe('modulo', () => {
    test('returns remainder of division', () => {
      expect(modulo(10, 3)).toBe(1);
    });
    test('returns error on modulo by zero', () => {
      expect(modulo(10, 0)).toBe('Error: Division by zero');
    });
  });

  describe('power', () => {
    test('raises base to exponent', () => {
      expect(power(2, 10)).toBe(1024);
    });
    test('handles zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });
  });

  describe('squareRoot', () => {
    test('returns square root of a positive number', () => {
      expect(squareRoot(25)).toBe(5);
    });
    test('returns error for negative numbers', () => {
      expect(squareRoot(-4)).toBe('Error: Cannot take square root of a negative number');
    });
    test('returns 0 for square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });
  });
});
