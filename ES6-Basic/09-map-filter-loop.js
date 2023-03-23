// Map filter, loop

const numbers = [1, 2, 3, 4, 5, 6, 7]
const output = []
for(let i = 0; i<numbers.length; i++){
    const elements = numbers[i]
    const result = elements * elements;
    output.push(result)
}
console.log(output);