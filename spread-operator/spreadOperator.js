
const number = [10, 20, 30]
const newNumber = number;
number.push(100)
number.push(500)
console.log(newNumber)
console.log("\n")

// Spread Operator
const myNumber = [7, 10, 20, 30]
const myNewNumber = [...myNumber]
myNumber.push(300)
console.log(myNewNumber)
console.log("\n")

// Create new array from older array
const currentNumber = [...myNumber, 55]
console.log(currentNumber)
console.log("\n")