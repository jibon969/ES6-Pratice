
console.log("First !")
console.log("Second !")

const second = 0;
const intervalId = setInterval(()=>{
    console.log(second++)
    if (second == 10){
        clearInterval(intervalId)
    } 

}, 1500)