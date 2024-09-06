const request = require('supertest');
const app = require('../src/hello');

describe('Express routes', () => {
  test('GET /hello/:name should return a greeting message', async () => {
    const response = await request(app).get('/hello/Alice');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, Alice!');
  });

  test('GET /goodbye/:name should return a goodbye message', async () => {
    const response = await request(app).get('/goodbye/Bob');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Goodbye, Bob!');
  });
});
