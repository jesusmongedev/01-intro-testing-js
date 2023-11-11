/**
 * @description Get the dates of a period
 * @param {String} period
 * @returns {Object} Object of dates
 * @example
 * getPeriodDates('1-September-2023-to-30-September-2023')
 * ['2023-09-01T05:00:00.000+00:00', '2023-10-01T04:59:59.000+00:00']
 */
const PERIOD_SEPARATOR = '-to-';

const validatePeriodString = (period) => {
  const pattern = /^\d{1,2}-[A-Za-z]+-\d{4}-to-\d{1,2}-[A-Za-z]+-\d{4}$/;
  return pattern.test(period);
};

const getFormatedPeriodDates = (period) => {
  if (!period) throw new Error('period must be a string');

  if (!validatePeriodString(period)) {
    return null; // Return null if the period string doesn't match the expected format
  }
  const [startDate, endDate] = period.split(PERIOD_SEPARATOR);
  const formatedStartDate = new Date(startDate);
  const formatedEndDate = new Date(endDate);
  formatedEndDate.setHours(23, 59, 59, 999);
  return {
    formatedStartDate, formatedEndDate,
  };
};

module.exports = { getFormatedPeriodDates };
