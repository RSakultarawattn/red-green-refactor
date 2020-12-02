const { fetchQuotes } = require('./fetchQuotes.js');
const request = require('superagent');

describe('return a single quote', () => {
    it('does it', async () => {
        expect(await fetchQuotes()).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String)
        });
    });
});
