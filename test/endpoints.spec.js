/* eslint-disable no-undef */
const app = require('../src/server');

describe('dog enpoint', () => {
  describe('GET /api/dog', () => {
    it('Responds with the next dog', () => supertest(app)
      .get('/api/dog')
      .expect(200));
  });
});
