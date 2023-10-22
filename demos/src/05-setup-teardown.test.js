describe('Group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // initializeDb
  });
  afterAll(() => {
    console.log('afterAll');
    // initializeDb
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  test('Case 1', () => {
    console.log('Case 1');
    expect(16 / 4).toBe(4);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect((100 / 50) * 10).toBe(20);
  });
  describe('Nested Group 2', () => {
    beforeAll(() => {
      console.log('Group 2 beforeAll');
      // initializeDb
    });
    afterAll(() => {
      console.log('Group 2 afterAll');
      // initializeDb
    });
    test('Case 3', () => {
      console.log('Case 3');
      expect(16 / 4).toBe(4);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect((100 / 50) * 10).toBe(20);
    });
  });
});
