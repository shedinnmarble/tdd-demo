const errorModel = require('../models/calculator.error.model');
function sum(a, b) {
    return a + b;
  }

function divide(a, b){
  if(b === 0){
    throw new Error(errorModel.DivideByZeroException);
  }
  return a/b;
}
module.exports = {
  sum,
  divide
};