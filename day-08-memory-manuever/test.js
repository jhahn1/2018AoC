var assert = require("assert");

var memoryManuever = require("./memory-manuever");
var memoryManuever2 = require("./memory-manuever2");

describe("Day 8: Memory Manuever", () => {
  it("should calculate sum of all metadata entries", () => {
    const tree = "2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2";

    assert.equal(memoryManuever(tree), 138);
  });
});
