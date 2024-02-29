const assert = require('assert');
const  calculateNumber = require('./1-calcul');
const { it, describe } = require("mocha");
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', async function() {
  describe('# Calculate Sum', function() {
    it('should return the  correct sum when add two positive numbers', function() {
      const val = calculateNumber('SUM', 2, 5.5);
      expect(val).to.equal(8);
    });

    it('should return the the correct sum when adding two negative decimal numbers', function() {
      const val = calculateNumber('SUM', -3.5, -2.1);
      expect(val).to.equal(-5);
    });
        
    it('should return the correct sum when adding two decimal numbers', function() {
      const val = calculateNumber('SUM', 1.2, 3.5);
      expect(val).to.equal(5);
    });
  
    it('should return the correct sum when adding two integer numbers', function() {
      const val = calculateNumber('SUM', 2, 3);
      expect(val).to.equal(5);
    });
        
    it('should return the correct sum when adding two integer numbers', function() {
      const val = calculateNumber('SUM', 0, 0);
      expect(val).to.equal(0);
    });
        
        
    it('should return the correct sum when adding two large decimal numbers', function() {
      const val = calculateNumber('SUM', 12345.54, 5423.21);
      expect(val).to.equal(17769);
    });
  });

  describe('# Calculate Subtraction', function() {
    it('should return the  correct SUBTRACT when subtracting two positive numbers', function() {
      const val = calculateNumber('SUBTRACT', 2, 5.5);
      expect(val).to.equal(-4);
    });

    it('should return the the correct SUBTRACT when subtracting two negative decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', -3.5, -2.1);
      expect(val).to.equal(-1);
    });
        
    it('should return the correct SUBTRACT when subtracting a positive and a negative decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', 5.1, -2.1);
      expect(val).to.equal(7);
    });
        
    it('should return the correct SUBTRACT when subtracting two decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', 1.2, 3.5);
      expect(val).to.equal(-3);
    });
 
    it('should return the correct SUBTRACT when subtracting two integer numbers', function() {
      const val = calculateNumber('SUBTRACT', 2, 3);
      expect(val).to.equal(-1);
    });

    it('should return the correct SUBTRACT when subtracting two integer numbers', function() {
      const val = calculateNumber('SUBTRACT', 0, 0);
      expect(val).to.equal(0);
    });
        
    it('should return the correct SUBTRACT when subtracting two large decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', 12345.54, 5423.21);
      expect(val).to.equal(6923);
    });
  });

  describe('# Calculate division', function() {
    it('should return the  correct DIVISION when DIVIDE two positive numbers', function() {
      const val = calculateNumber('DIVIDE', 2, 5.5);
      expect(val).to.equal(2/6);
    });

    it('should return the the correct DIVISION when dividing two negative decimal numbers', function() {
      const val = calculateNumber('DIVIDE', -3.5, -2.1);
      expect(val).to.equal(3/2);
    });
        
    it('should return the correct DIVISION when dividing a positive and a negative decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 5.1, -2.1);
      expect(val).to.equal(8);
    });
        
    it('should return the correct DIVISION when dividing two decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 1.2, 3.5);
      expect(val).to.equal(1/4);
    });
        
    it('should return the correct DIVISION when dividing two integer numbers', function() {
      const val = calculateNumber('DIVIDE', 2, 3);
      expect(val).to.equal(2/3);
    });

    it('should return the correct DIVISION when dividing two integer numbers', function() {
      const val = calculateNumber('DIVIDE', -2, -3);
      expect(val).to.equal(2/3);
    });
        
    it('should return the correct DIVISION when dividing two integer numbers', function() {
      const val = calculateNumber('DIVIDE', 7, 0);
      expect(val).to.equal('Error');
    });

    it('should return the correct DIVISION when dividing two integer numbers', function() {
        const val = calculateNumber('DIVIDE', 1.7, 0);
        expect(val).to.equal('Error');
    });

    it('should return the correct DIVISION when dividing two integer numbers', function() {
        const val = calculateNumber('DIVIDE', 0, 0.2);
        expect(val).to.equal('Error');
    });

    it('should return the correct DIVISION when dividing two integer numbers with zero has numerator', function() {
        const val = calculateNumber('DIVIDE', 0, 45);
        expect(val).to.equal(0);
    });
    
    it('should return the correct DIVISION when dividing two infinit numbers', function() {
      const val = calculateNumber('DIVIDE', Infinity, Infinity);
      expect(val).to.equal(NaN);
    });
    
    it('should return the correct DIVISION when dividing two infinit numbers', function() {
        const val = calculateNumber('DIVIDE', Infinity, -Infinity);
        expect(val).to.equal(NaN);
    });

    it('should return the correct DIVISION when dividing two large decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 12345.54, 5423.21);
      expect(val).to.equal(12346/5423);
    });

    it('should return the correct DIVISION when dividing two large decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 12345.54, -5423.21);
      expect(val).to.equal(-12346/5423);
    });

    it('should return the correct DIVISION when dividing very small numbers', function() {
      const val = calculateNumber('DIVIDE', 1e-20, 1e-20);
      expect(val).to.equal('Error');
    });

   it('should return the correct DIVISION when dividing numbers close to the limits of floating-point precision', function() {
     const val = calculateNumber('DIVIDE', 1e-15, 1e-15);
     expect(val).to.equal('Error');
   });
  });

  describe("Put a wrong type", function() {
    it('is not SUM or SUBTRACT or DIVIDE', function (){
      assert.equal(calculateNumber(5, 5, 2), undefined);
    });
    it('is not SUM or SUBTRACT or DIVIDE', function (){
      assert.equal(calculateNumber('tryme', 5, 2), undefined);
    });
  });
});
  