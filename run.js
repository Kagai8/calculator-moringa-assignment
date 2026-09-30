const calc = require('./calculator.js');

console.log('--- Testing Calculator Operations ---');

console.log('Add 10 + 5:', calc.add(10, 5));          // 15
console.log('Subtract 20 - 8:', calc.subtract(20, 8)); // 12
console.log('Multiply 4 * 6:', calc.multiply(4, 6));   // 24
console.log('Divide 15 / 3:', calc.divide(15, 3));     // 5
console.log('Divide 10 / 0:', calc.divide(10, 0));     // Error handling

console.log('\n--- Testing History Output ---');
calc.displayHistory();