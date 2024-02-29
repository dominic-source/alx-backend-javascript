const assert = require('assert');
const  calculateNumber = require('./0-calcul.js');

describe('calculateSum', function() {
  it('should return the  correct sum when add two positive numbers', function() {
    const val = calculateNumber(2, 5.5);
    assert.strictEqual(val, 8);
  });

  it('should return the the correct sum when adding two negative decimal numbers', function() {
    const val = calculateNumber(-3.5, -2.1);
    assert.strictEqual(val, -5);
  });

  it('should return the correct sum when adding a positive and a negative decimal numbers', function() {
    const val = calculateNumber(5.1, -2.1);
    assert.strictEqual(val, 3);
  });

  it('should return the correct sum when adding two decimal numbers', function() {
    const val = calculateNumber(1.2, 3.5);
    assert.strictEqual(val, 5);
  });

  it('should return the correct sum when adding two integer numbers', function() {
    const val = calculateNumber(2, 3);
    assert.strictEqual(val, 5);
  });

  it('should return the correct sum when adding two integer numbers', function() {
    const val = calculateNumber(0, 0);
    assert.strictEqual(val, 0);
  });

  it('should return the correct sum when adding two infinit numbers', function() {
    const val = calculateNumber(Infinity, Infinity);
    assert.strictEqual(val, Infinity);
  });

  it('should return the correct sum when adding two large decimal numbers', function() {
    const val = calculateNumber(12345.54, 5423.21);
    assert.strictEqual(val, 17769);
  });

});
