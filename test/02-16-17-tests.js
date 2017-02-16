const assert = require('chai').assert
const { presidents, getPresident, rankedPresidents } = require('../02-16-17.js')

describe('Problems', () => {
  it('rankedPresidents should return a ranked list of presidents in order of recency based on party', () => {

    assert.strictEqual(rankedPresidents(presidents), 'Barack Obama, Democrat; George W. Bush, Republican; Bill Clinton, Democrat; George H.W. Bush, Republican; Ronald Reagan, Republican; Richard Nixon, Republican.');
  });
});
