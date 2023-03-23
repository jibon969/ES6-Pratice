// function arguments pass by reference pass by value

// Primitive types are pass by value
let num1 = 5;
let num2 = 6;

function multiple(a, b){
    a = 9;
    const result = a * b
    return result
}
console.log(num1)

const output = multiple(num1, num2)
console.log(output)
console.log("\n")


// non primitive pass by reference pass
let student1 = {name:"Sakib", partner:"Atiya"}
let student2 = {name:"Jibon", partner:"Yesmin"}

function makeMovie(couple1, couple2){
    couple1.name= "Jibon"
    couple2.partner = "payel"
}
makeMovie(student1, student2)
console.log(student1, student2)


