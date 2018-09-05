const request = require('supertest');
const { expect } = require('chai');
const app = require('../index.js');
const { v1 } = require('uuid');

describe('GET /posts', () => {
    it('returns 200 status code', (done) => {
        request(app)
            .get('/posts')
            .expect(200, done)
    })

    it('responds with JSON', (done) => {
        request(app)
            .get('/posts')
            .expect('Content-Type', /json/, done)
    })
})

//get1byID

describe('POST /post', () => {
    const validPost = { title: 'first post title', content: 'first post', date: Date.now(), id: v1(), author: 'Abi' };
    const invalidPost = { title: null, content: 'first post', date: Date.now(), id: v1(), author: 'Abi' }

    it('returns 200 when a valid post is POSTED to the endPoint.', (done) => {
        request(app)
            .post('/post')
            .send(JSON.stringify(validPost))
            //.set('Accept', 'application/json')
            .expect(200, done)
    })

    it('calls save when a valid post is POSTED')


    it.only('returns 400 when the post is not valid. It does not call save functionality', (done) => {
        request(app)
            .post('/post')
            .send(JSON.stringify(invalidPost))
            .expect(400, done)
    })
})

//https://hackernoon.com/api-testing-using-supertest-1f830ce838f1

//https://expressjs.com/en/4x/api.html#res.json

//https://www.npmjs.com/package/supertest

