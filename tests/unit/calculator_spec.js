var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add 1 to 4', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const expected = 5;
    assert.equal(calculator.runningTotal, expected);
  })

  it('should be able to subtract 4 from 7', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const expected = 3;
    assert.equal(calculator.runningTotal, expected);
  })

  it('should be able to multiply 3 by 5', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const expected = 15;
    assert.equal(calculator.runningTotal, expected);
  })

  it('should be able to divide 21 by 7', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const expected = 3;
    assert.equal(calculator.runningTotal, expected);
  })

  it('should be able to concatenate multiple number button clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(2);
    const expected = '42';
    assert.equal(calculator.runningTotal, expected);
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const expected = 8;
    assert.equal(calculator.runningTotal, expected);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const expected = 4;
    assert.equal(calculator.runningTotal, expected);
  })
});
