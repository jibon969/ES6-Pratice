
function doSomething(){
    console.log("third")
}

function takeBreak(){
    console.log("Hi, i need take break")
}

console.log("First")
console.log("Second")
setTimeout(doSomething)
console.log("fourth")


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json =>console.log(json))

console.log("fifth")

setTimeout(()=>{
    takeBreak()
}, 1000)