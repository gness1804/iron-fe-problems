const assert = require('chai').assert
const { sorter, athletes } = require('../01-26-17')

describe('Problems', () => {
  it('should return a string stating who the winningest athlete was', () => {

    assert.strictEqual(sorter(athletes), 'Tom Brady has won the most titles with 4.');
  });
});
