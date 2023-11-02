const Person = require('./07-person');

describe('Test for Person', () => {
  let person;
  // Arrange
  beforeAll(() => {
    person = new Person('Jesus', -64.3, 1.69);
  });

  describe('calcIMC method', () => {
    test('should return not found if no case is meeted', () => {
      // Arrange
      person.weight = -64.3;
      // Act
      const imc = person.calcIMC();
      // Assert
      expect(imc).toBe('no found');
    });
    test('should return down IMC', () => {
      person.weight = 44.3;
      const imc = person.calcIMC();
      expect(imc).toBe('down');
    });
    test('should return normal IMC', () => {
      person.weight = 64.3;
      const imc = person.calcIMC();
      expect(imc).toBe('normal');
    });
    test('should return overweight IMC', () => {
      person.weight = 74.3;
      const imc = person.calcIMC();
      expect(imc).toBe('overweight');
    });
  });
});
