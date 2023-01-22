// Let, const, array declared with const, object declared with const

const myName = "Jibon";
console.log(myName);

// Array Example
const numbers = [12, 45]
numbers[0] = 88
// numbers = ["Sakib", "Jibon"] // Assignment to constant variable
console.log(numbers);
numbers.push(100);
console.log(numbers);

// Object
const userName = {name:"Jibon Ahmed", phone:1234}
console.log(userName);


// Var & let
// let sum = 0;
// for(var i = 0; i<10; i++){
//     sum = sum + i
// }
// console.log(i)


// Example of let
let sum = 0;
for(let i = 0; i<10; i++){
    sum = sum + i
}
console.log(i)


