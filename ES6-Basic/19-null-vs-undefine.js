/*
    8 Ways to get undefine !

    1. variable that is not initialized will give undefine.
    2. function with no return.
    3. parameter that is not passed will be undefine.
    4. if return has nothing on the right side will return undefine.
    5. property that doesn't exists on an object will you undefine.
    6. accessing array elements outside of the index range will give you undefine.
    7. deleting an element inside an array.
    8. set a value directly to undefine.
*/

// 1. Example
let first;
console.log(first);

// 2. Example

function second (a, b){
    const total = a + b;
}
const result = second()
console.log(result)

// 3. Example

function third (a, b, c, d){
    const total = a + b + c + d
    console.log(a, b, c, d)
}

third(1, 3)

// Example 4
function noNegative (a, b){
    if(a<0 || b<0){
        return
    }
    return a + b
}

const total = noNegative(2, -6)
console.log(total)

// Example 5
const fifth = {id:1, name:"jibon", age:28}
console.log(fifth.name, fifth.salary)

// Example 6
const x = [4, 10, 56, 67]
console.log(x[0], x[10])

// Example 7
const obj = [30, 40, 50]
// you should not do it. instead use splice
delete obj[0]
console.log(obj)

// Example 8
const eight = undefined;
console.log(eight);

// Example 9
const ninth = null;
console.log(ninth)

// More Example
const data = {result:[], update:null}
console.log(typeof undefined)
console.log(typeof null)