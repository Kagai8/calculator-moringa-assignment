// Global array to store calculation history
const history = [];


function recordCalculation(num1, num2, operator, result) {
  const logEntry = {
    operands: [num1, num2],
    operator: operator,
    result: result
  };
  history.push(logEntry);
}

//Performs addition of two numbers and records the operation.

function add(num1, num2) {
  const result = num1 + num2;
  recordCalculation(num1, num2, '+', result);
  return result;
}

// Performs subtraction of two numbers and records the operation.
 
function subtract(num1, num2) {
  const result = num1 - num2;
  recordCalculation(num1, num2, '-', result);
  return result;
}

// Performs multiplication of two numbers and records the operation.
function multiply(num1, num2) {
  const result = num1 * num2;
  recordCalculation(num1, num2, '*', result);
  return result;
}

// Performs division of two numbers and records the operation.
// Prevents division by zero.
function divide(num1, num2) {
  if (num2 === 0) {
    const errorMsg = 'Error: Division by zero';
    recordCalculation(num1, num2, '/', errorMsg);
    return errorMsg;
  }
  const result = num1 / num2;
  recordCalculation(num1, num2, '/', result);
  return result;
}

//Displays the calculation history or informs the user if history is empty.
 
function displayHistory() {
  if (history.length === 0) {
    console.log('No calculations stored in history.');
    return;
  }

  console.log('=== Calculation History ===');
  history.forEach((entry, index) => {
    const [a, b] = entry.operands;
    console.log(`${index + 1}. ${a} ${entry.operator} ${b} = ${entry.result}`);
  });
}

// Export functions for testing and modular usage
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  displayHistory,
  history
};