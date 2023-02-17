
// Example 1 : Pass different vale
function example (name){
    console.log(name)
}

const result1 = "Jibon Ahmed";
console.log(result1)

const result2 = [10, 20, 30, 40]
console.log(result2)

const result3 = {id:1, name:"Payel", dept:"SWE"}
console.log(result3)

const result4 = true
console.log(result4)

const result5 = false
console.log(result5)
console.log("\n")

// Example 2

function greeting (greetingHandler, name){
    greetingHandler(name)
}

function greetingHandler(name){
    console.log("Good Morning", name)
}

function greetEvening(name){
    console.log("Good Evening", name)
}

greeting(greetingHandler, "Jibon Ahmed")
greeting(greetEvening, "Mr. Ahmed")