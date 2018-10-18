const calculator = require('./calculator');
const calculatorErrorModel = require('../models/calculator.error.model');
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

describe("division(a, b)", () =>{
  test('should throw exception if b is 0', ()=>{
    expect(()=>{
      calculator.divide(1,0)
    }).toThrowError(calculatorErrorModel.DivideByZeroException)
  });
  test('should return 4/2 = 2', ()=>{
    expect(calculator.divide(4,2)).toBe(2)
  });
})