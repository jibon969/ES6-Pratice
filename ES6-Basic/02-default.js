
// Example 1
// function add(num1, num2){
//     return num1 + num2
// }

// const total = add(10, 14)
// console.log(total)


// Example 2
// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0
//     }
//     return num1 + num2
// }

// const total = add(10)
// console.log(total)

// Example 3
// function add(num1, num2){
//     num2 = num2 || 0
//     return num1 + num2
// }

// const total = add(10)
// console.log(total)


// Example of default value
function add(num1, num2 = 10) {
    return num1 + num2
}

const total = add(10)
console.log(total)