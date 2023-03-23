// Array Function
function doubleIt(num){
    return num * 2
}
const result1 = doubleIt(10)
console.log(result1)

// Example 2
const doubleNumber = function(num){
    return num * 2
}
const result2 = doubleNumber(5)
console.log(result2)


// Example 3
const double = num => num * 2;
const result3 = double(5)
console.log(result3)


//  Example 4
const add = (x, y) => x + y;
const result4 = add(7, 5)
console.log(result4)


// Example 5
const give5 = () => 5;
const result5 = give5()
console.log(result5)


// Example 6
const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result6 = doMath(7, 5)
console.log(result6)

