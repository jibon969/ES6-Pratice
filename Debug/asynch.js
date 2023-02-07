function doSomething(){
    console.log('third');
}
console.log('first');
console.log('second');
setTimeout(doSomething)
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      
console.log('fourth');
