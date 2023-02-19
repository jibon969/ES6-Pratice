
const number = (num) =>{
    return num * 5
}
const output = number(5)
console.log(output)


const addNumber = () =>{
    number()
}

const addProduct = () =>{
    const product = document.getElementById("click-me");
    console.log(product)
}

console.time();
for (let i = 0; i<10; i++){
    console.log(i)
}
console.timeEnd()