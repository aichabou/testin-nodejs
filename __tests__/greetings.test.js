const { greet, bye } = require('../service/greetings');

describe('Greeting functions', () => {
  test('greet should return a greeting message', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('bye should return a goodbye message', () => {
    expect(bye('Bob')).toBe('Goodbye, Bob!');
  });
});
