// AKA Matchers

test('object assignment', () => {
  const data = { name: 'Jesus' };
  data.lastName = 'Monge';
  data.age = 30;
  expect(data).toEqual({ lastName: 'Monge', name: 'Jesus', age: 30 });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('falsy values', () => {
  const s = '';
  expect(s).not.toBeNull();
  expect(s).toBeDefined();
  expect(s).not.toBeUndefined();
  expect(s).not.toBeTruthy();
  expect(s).toBeFalsy();
});

test('thruthy values', () => {
  const s = 'a';
  expect(s).not.toBeNull();
  expect(s).toBeDefined();
  expect(s).not.toBeUndefined();
  expect(s).toBeTruthy();
  expect(s).not.toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // this wont't work because of rounding error
  expect(value).toBeCloseTo(0.3);
});

test('lists arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
