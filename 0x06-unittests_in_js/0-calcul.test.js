const chai = require('chai');
// const  expect = chai.expect;
// const sinon = require('sinon');
const assert = require('assert');
const calc = require('./0-calcul.js');


describe('calculateSum', function() {
  it('should return the  correct sum when add two positive numbers', function() {
    const val = calc.calculateNumber(2, 5.5);
    assert(val, 8);
  });

  it('should return the sum of two numbers', function() {
    const val = calc.calculateNumber(3.5, 2.1);
    assert(val, 6);
  });

  it('should return the sum of two numbers', function() {
    const val = calc.calculateNumber(5.1, 2.1);
    assert(val, 7);
  });

  it('should return the sum of two numbers', function() {
    const val = calc.calculateNumber(1.2, 3.5);
    assert(val, 5);
  });

  it('should return the sum of two numbers', function() {
    const val = calc.calculateNumber(2, 3);
    assert(val, 5);
  });
});
