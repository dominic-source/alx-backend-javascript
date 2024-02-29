const assert = require('assert');
const  calculateNumber = require('./1-calcul.js');


describe('calculateNumber', function() {
  describe('# Calculate Sum', function() {
    it('should return the  correct sum when add two positive numbers', function() {
      const val = calculateNumber('SUM', 2, 5.5);
      assert.strictEqual(val, 8);
    });

    it('should return the the correct sum when adding two negative decimal numbers', function() {
      const val = calculateNumber('SUM', -3.5, -2.1);
      assert.strictEqual(val, -5);
    });
        
    it('should return the correct sum when adding a positive and a negative decimal numbers', function() {
      const val = calculateNumber('SUM', 5.1, -2.1);
      assert.strictEqual(val, 3);
    });
        
    it('should return the correct sum when adding two decimal numbers', function() {
      const val = calculateNumber('SUM', 1.2, 3.5);
      assert.strictEqual(val, 5);
    });
        
    it('should return the correct sum when adding two integer numbers', function() {
      const val = calculateNumber('SUM', 2, 3);
      assert.strictEqual(val, 5);
    });
        
    it('should return the correct sum when adding two integer numbers', function() {
      const val = calculateNumber('SUM', 0, 0);
      assert.strictEqual(val, 0);
    });
        
    it('should return the correct sum when adding two infinit numbers', function() {
      const val = calculateNumber('SUM', Infinity, Infinity);
      assert.strictEqual(val, Infinity);
    });
        
    it('should return the correct sum when adding two large decimal numbers', function() {
      const val = calculateNumber('SUM', 12345.54, 5423.21);
      assert.strictEqual(val, 17769);
    });
  });

  describe('# Calculate Subtraction', function() {
    it('should return the  correct SUBTRACT when subtracting two positive numbers', function() {
      const val = calculateNumber('SUBTRACT', 2, 5.5);
      assert.strictEqual(val, 4);
    });

    it('should return the the correct SUBTRACT when subtracting two negative decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', -3.5, -2.1);
      assert.strictEqual(val, 1);
    });
        
    it('should return the correct SUBTRACT when subtracting a positive and a negative decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', 5.1, -2.1);
      assert.strictEqual(val, -7);
    });
        
    it('should return the correct SUBTRACT when subtracting two decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', 1.2, 3.5);
      assert.strictEqual(val, 3);
    });
        
    it('should return the correct SUBTRACT when subtracting two integer numbers', function() {
      const val = calculateNumber('SUBTRACT', 2, 3);
      assert.strictEqual(val, 1);
    });
        
    it('should return the correct SUBTRACT when subtracting two integer numbers', function() {
      const val = calculateNumber('SUBTRACT', 0, 0);
      assert.strictEqual(val, 0);
    });
        
    it('should return the correct SUBTRACT when subtracting two infinit numbers', function() {
      const val = calculateNumber('SUBTRACT', Infinity, Infinity);
      assert.strictEqual(val, NaN);
    });
        
    it('should return the correct SUBTRACT when subtracting two large decimal numbers', function() {
      const val = calculateNumber('SUBTRACT', 12345.54, 5423.21);
      assert.strictEqual(val, -6923);
    });
  });

  describe('# Calculate division', function() {
    it('should return the  correct DIVISION when DIVIDE two positive numbers', function() {
      const val = calculateNumber('DIVIDE', 2, 5.5);
      assert.strictEqual(val, 2/6);
    });

    it('should return the the correct DIVISION when dividing two negative decimal numbers', function() {
      const val = calculateNumber('DIVIDE', -3.5, -2.1);
      assert.strictEqual(val, 3/2);
    });
        
    it('should return the correct DIVISION when dividing a positive and a negative decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 5.1, -2.1);
      assert.strictEqual(val, -5/2);
    });
        
    it('should return the correct DIVISION when dividing two decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 1.2, 3.5);
      assert.strictEqual(val, 1/4);
    });
        
    it('should return the correct DIVISION when dividing two integer numbers', function() {
      const val = calculateNumber('DIVIDE', 2, 3);
      assert.strictEqual(val, 2/3);
    });
        
    it('should return the correct DIVISION when dividing two integer numbers', function() {
      const val = calculateNumber('DIVIDE', 0, 0);
      assert.strictEqual(val, 'Error');
    });

    it('should return the correct DIVISION when dividing two integer numbers', function() {
        const val = calculateNumber('DIVIDE', 0, 0.2);
        assert.strictEqual(val, 'Error');
    });

    it('should return the correct DIVISION when dividing two integer numbers with zero has numerator', function() {
        const val = calculateNumber('DIVIDE', 0, 45);
        assert.strictEqual(val, 0);
    });
    
    it('should return the correct DIVISION when dividing two infinit numbers', function() {
      const val = calculateNumber('DIVIDE', Infinity, Infinity);
      assert.strictEqual(val, NaN);
    });
        
    it('should return the correct DIVISION when dividing two large decimal numbers', function() {
      const val = calculateNumber('DIVIDE', 12345.54, 5423.21);
      assert.strictEqual(val, 12346/5423);
    });
  });
});
  