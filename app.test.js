const request = require('supertest');
const app = require('./app');

describe('Teste do servidor Express', () => {
  it('Deve responder na porta raiz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
