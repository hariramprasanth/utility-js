const map = require('./map');
const cube = require('./cube');
const identity = require('./identity');

describe('Map', () => {

    it('Cube of list [] is []', () => {
        expect(map([], cube)).toEqual([]);
    });
    it('Identity of list [1,2,3] is [1,2,3]', () => {
        expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
    });

    it('Cube of list [1,2,3] is [1,8,27]', () => {
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('map of list [{x : 10}] over a function is [11]', () => {
        expect(map([{ x: 10 }], someObject => someObject.x + 1)).toEqual([11]);
    });

})