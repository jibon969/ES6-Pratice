// asynchronous-vs-synchronous-promise

// Javascript single-thread language -- works like asynchronous

// Asynchronous Example
console.log("Asynchronous Example  ===============")
console.log("I")
console.log("Love")
console.log("Js")

// Synchronous Example 
console.log("Synchronous Example  =============== \n")

console.log("I")
setTimeout(()=>{
    console.log("Love")
}, 1000)

console.log("Js")

// Promise
/*
    The promise object represent the eventual complete (or failer) of 
    asynchronous operation and its resulting value

    -- A promise is an one of these states
    1. pending :
        initial state, neither fulfilled nor rejected

    2. resolved :
        Meaning that the operative was completed successfully

    3. rejected :
        Meaning that the operation failed
*/