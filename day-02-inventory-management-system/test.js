const assert = require('assert');

const inventoryManagementSystem = require('./inventory-management-system.js');
const inventoryManagementSystem2 = require('./inventory-management-system2.js');

describe('Day 2: Inventory Management System', () => {
   it('should properly calculate checksum', () => {
        const items = 
        `abcdef
         bababc
         abbcde
         abcccd
         aabcdd
         abcdee
         ababab`

         assert.equal(inventoryManagementSystem(items), 12);
   }); 
});