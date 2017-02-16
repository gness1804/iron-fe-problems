const assert = require('chai').assert
const { sorter, athletes, Animal, TuringStudent } = require('../01-26-17')

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

    assert.strictEqual(killerBunny.kingdom, 'animal');

     assert.strictEqual(killerBunny.eat(), 'The rabbit eats buffalos.');

  });

  it('the TuringStudent constructor should properly inherit from Animal', () => {

    const hilary = new TuringStudent({
      name: 'Hilary',
      languages: ['English'],
      nationality: 'United States',
      mod: 4,
      program: 'Front End',
    })

    assert.strictEqual(hilary.nationality, 'United States');

    assert.strictEqual(hilary.name, 'Hilary');

    assert.strictEqual(hilary.program, 'Front End');
  });

});
