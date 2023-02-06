function doSomething(){
    console.log('third');
}
console.log('first');
console.log('second');
setTimeout(doSomething)
console.log('fourth');
