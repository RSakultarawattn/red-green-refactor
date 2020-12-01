
const { spot, getName } = require('./name.js');

describe('util functions', () => {
    it('returns the name property of an object', () => {

        const actualResult = getName(spot)
        expect(actualResult).toEqual('spot')

    });
});

