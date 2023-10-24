const { generatePass } = require('./06-generatePass');

describe('Generate Pass tests', () => {
  test('It should math the require regex', () => {
    const pass = generatePass();
    expect(pass).toMatch(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/);
  });
});
