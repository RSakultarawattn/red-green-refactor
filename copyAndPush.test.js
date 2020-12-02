const { numbers, copyAndPush } = require('./copyAndPush.js');

describe('copyAndPush', () => {
    it('returns a new array and adds 4 to the end', () => {
        let response = copyAndPush(numbers, 4);

        expect(response).toEqual([1, 2, 3, 4])
    });
})

describe('copyAndPush', () => {

    it('returns array and adds 4 to the end', () => {
        let response = copyAndPush(numbers, 4);

        expect(response)
            .toEqual([1, 2, 3, 4])
    });
    it('array returned is same as original', () => {
        expect(numbers)
            .toEqual([1, 2, 3])
    });
})
