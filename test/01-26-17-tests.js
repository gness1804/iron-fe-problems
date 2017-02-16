const assert = require('chai').assert
const { sorter, athletes, Animal } = require('../01-26-17')

console.log(sorter)

describe('Problems', () => {
  it.skip('should return a string stating who the winningest athlete was', () => {

    assert.strictEqual(sorter(athletes), 'Tom Brady has won the most titles with 4.');
  });

  it('the Animal constructor should return the correct information with any given new Animal', () => {

    const killerBunny = new Animal({
      species: 'rabbit',
      extinct: false,
      favoredFood: 'buffalos',
    })

    assert.strictEqual(killerBunny.species, 'rabbit');
  });

});
