function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero ❌');
  return a / b;
}

function average(array = []) {
  const { length } = array;
  if (!length) return null;
  if (array.some((item) => typeof item !== 'number')) throw new Error('Items must be numbers');

  const total = array.reduce((acc, val) => acc + val, 0);
  const result = total / length;
  return result;
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
};
