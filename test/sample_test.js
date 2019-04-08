const assert = require('assert');
const Sample = require('../Cake/sample');

describe('It should test something', () => {
  it('should work!', () => {
    const test = Sample('Hello World!');
    assert(test === 'Hello World!')
  })
})