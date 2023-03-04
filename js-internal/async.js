
function doSomething(){
    console.log("third")
}

console.log("First")
console.log("Second")
setTimeout(doSomething)
console.log("fourth")


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(json =>console.log(json))

console.log("fifth")