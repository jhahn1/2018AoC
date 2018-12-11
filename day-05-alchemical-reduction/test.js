const assert = require('assert');

const alchemicalReduction = require('./alchemical-reduction');
const alchemicalReduction2 = require('./alchemical-reduction2');

describe('Day 5: Alchemical Reduction', () => {
    
    it('should properly find remaining units #1', () => {
        const polymer =
        `aA`

        assert.equal(alchemicalReduction(polymer), 0);
    });

    it('should properly find remaining units #1', () => {
        const polymer =
        `abBA`

        assert.equal(alchemicalReduction(polymer), 0);
    });
    
    it('should properly find remaining units #1', () => {
        const polymer =
        `abAB`

        assert.equal(alchemicalReduction(polymer), 4);
    });
    
    it('should properly find remaining units #1', () => {
        const polymer =
        `aabAAB`

        assert.equal(alchemicalReduction(polymer), 6);
    });

    it('should properly find remaining units ##', () => {
        const polymer =
        `dabAcCaCBAcCcaDA`

        assert.equal(alchemicalReduction(polymer), 10);
    });
})