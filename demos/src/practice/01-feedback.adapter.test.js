/* eslint-disable no-console */
const { feedbackAdapter } = require('./01-feedback.adapter');
const mockedFeedback = require('./data/mockedFeedback.json');

describe('feedbackAdapter', () => {
  test('should return an empty array if no data is provided', () => {
    const result = feedbackAdapter();
    console.log(result);
    expect(result).toEqual([]);
  });
  test('should an adapted array', () => {
    const result = feedbackAdapter(mockedFeedback);
    console.log(result);
    expect(result.length).toBeGreaterThan(0);
  });
  test('Items should be like { number, string }', () => {
    const result = feedbackAdapter(mockedFeedback)[0];
    console.log(result);
    expect(typeof result.value).toBe('number');
    expect(typeof result.name).toBe('string');
  });
});
