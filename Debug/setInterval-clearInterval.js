
// setInterval and clearInterval with x++ and ++x

console.log("first");
console.log("second");
console.log("third");
let seconds = 0;
const intervalId = setInterval(()=>{
    console.log(seconds++);
    if(seconds === 10){
        clearInterval(intervalId)
    }
}, 1500)
console.log("four")