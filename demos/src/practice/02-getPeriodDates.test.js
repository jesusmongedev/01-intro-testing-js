/* eslint-disable no-console */
const { getFormatedPeriodDates } = require('./02-getFormatedPeriodDates');

const PERIOD = '1-September-2023-to-30-September-2023';
const BAD_PERIOD = 'asdasdsadsadsadsa';

describe('Tests for getFormatedPeriodDates', () => {
  test('should return an object', () => {
    const result = getFormatedPeriodDates(PERIOD);
    expect(typeof result === 'object').toBe(true);
  });
  test('should throw if no period is provided', () => {
    expect(() => getFormatedPeriodDates()).toThrow();
  });
  test('should throw period must be a string Error if period is not provided', () => {
    expect(() => getFormatedPeriodDates()).toThrow(/period must be a string/);
  });
  test('should return valid dates according the period', () => {
    const { formatedStartDate, formatedEndDate } = getFormatedPeriodDates(PERIOD);
    console.log('dates', { formatedStartDate, formatedEndDate });
    expect(formatedStartDate).toStrictEqual(new Date('2023-09-01T05:00:00.000Z'));
    expect(formatedEndDate).toStrictEqual(new Date('2023-10-01T04:59:59.999Z'));
  });
  test('should throw if period does not match the required pattern', () => {
    const result = getFormatedPeriodDates(BAD_PERIOD);
    console.log('result', result);
    expect(result).toBe(null);
  });
});
