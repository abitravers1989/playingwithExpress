const { expect } = require('chai');
const { v1 } = require('uuid');
const { postValidation } = require('./postValidation');

describe('PostValidation', () => {
    describe('when it recieves a post with an invalid title', () => {
        const author = 'Abi';
        const content = 'First Post';
        const invalidPost = { title: null, content: content, date: Date.now(), id: v1(), author: author }
        const expectedErrorMessage = 'A valid post title must be provided.'
        it('throws an Error', () => {
            expect(postValidation(invalidPost)).to.throw(TypeError, expectedErrorMessage);
        })
    })
})

//ReferenceError

