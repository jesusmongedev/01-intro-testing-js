const { sum, multiply, divide, average } = require('./02-math')

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
});

test("multiply 9 * 9 to equal 81", () => {
  expect(multiply(9, 9)).toBe(81)
});

test("should divide", () => {
  expect(divide(81, 9)).toBe(9)
  expect(divide(16, 4)).toBe(4)
});

test("should return an Error: Division by zero is undefined", () => {
  expect(() => divide(9, 0)).toThrow()
  expect(() => divide(9, 0)).toThrow(Error)
  // You can alse use a string that must be contained in the error message or a regex
  expect(() => divide(9, 0)).toThrow('Cannot divide by zero')
  expect(() => divide(9, 0)).toThrow(/divide by zero/)
  // Or you can match an exact error message using a regex like below
  // expect(() => divide(9, 0)).toThrow(/^Cannot divide by zero$/) // test fails
  expect(() => divide(9, 0)).toThrow(/^Cannot divide by zero ❌$/) // test pass
});

// You can also use .not to test the opposite of a matcher
test("should not return an Error: Division by zero is undefined", () => {
  expect(() => divide(9, 3)).not.toThrow()
  expect(() => divide(9, 3)).not.toThrow(Error)
  expect(() => divide(9, 3)).not.toThrow('Cannot divide by zero')
  expect(() => divide(9, 3)).not.toThrow(/divide by zero/)
  expect(() => divide(9, 3)).not.toThrow(/^Cannot divide by zero$/)
});

test("Average of an array of numbers", () => {
  expect(average([10,10,10])).toBe(10)
})

test("Should return null if array is empty", () => {
  expect(average([])).toBeNull()
  expect(average()).toBeNull()
})

test("Should return an Error if items are not numbers", () => {
  expect(() => average(['a', 10, false])).toThrow()
})
