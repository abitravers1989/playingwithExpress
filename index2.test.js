const request = require('supertest');
const { expect } = require('chai');
const app = require('index2.js');

describe('GET /posts', () => {
    it('returns 200 status code', (done) => {
        request(app)
            .get('/posts')
            .expect(200, done)
        console.log(result)
    })

    it('responds with JSON', (done) => {
        request(app)
            .get('/posts')
            .expect('Content-Type', /json/, done)
    })
})