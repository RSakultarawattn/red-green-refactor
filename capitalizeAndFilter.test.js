const { nameArr, allCapsNoF } = require('./capitalizeAndFilter.js');



describe('allCapsNoF', () => {
    it('returns array items in all caps, and filters out strings starting with f', () => {
        const newArray = allCapsNoF(nameArr);

        expect(newArray)
            .toEqual(['SPOT', 'ROVER', 'BINGO'])
    });
})


