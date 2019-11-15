/* eslint-disable no-undef */

process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/server');

describe('dog enpoint', () => {
  describe('GET /api/dog', () => {
    it('Responds with 200 and the next dog', () => {
      supertest(app)
        .get('/api/dog')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.an('object');
        });
    });
  });

  describe('DELETE', () => {
    it('Responds with 200 and the dog adopted', () => {
      supertest(app)
        .delete('/api/dog')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.an('object');
        });
    });
  });
});

describe('cat enpoint', () => {
  describe('GET /api/cat', () => {
    it('Responds with 200 and the next cat', () => {
      supertest(app)
        .get('/api/cat')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.an('object');
        });
    });
  });

  describe('DELETE', () => {
    it('Responds with 200 and the cat adopted', () => {
      supertest(app)
        .delete('/api/cat')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.an('object');
        });
    });
  });
});

describe('person enpoint', () => {
  describe('GET /api/person/next', () => {
    it('Responds with 200 and the next person', () => {
      supertest(app)
        .get('/api/person')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.an('object');
        });
    });
  });

  describe('DELETE', () => {
    it('Responds with 200 and the perso who adopted a pet', () => {
      supertest(app)
        .delete('/api/person')
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.an('object');
        });
    });
  });
});
