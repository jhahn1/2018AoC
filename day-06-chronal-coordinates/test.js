const assert = require('assert');

const chronalCoordinates = require('./chronal-coordinates');
const chronalCoordinates2 = require('./chronal-coordinates2');

describe('Day 6: Chronal Coordinates', () => {
    it('should properly calculate largest area that is not infinite', () => {
        const coordinates =
        `1, 1
         1, 6
         8, 3
         3, 4
         5, 5
         8, 9`

        assert.equal(chronalCoordinates(coordinates), 17);
    });
});