
// Primitive Data type

const a = 5;
const b = true;
const c = "Hello World !";
console.log(typeof a, typeof b, typeof c)


// Non Primitive Data type
const d = [10, 14, 15, 20]
const e = {id:1, class:9}
console.log(typeof d, typeof e)

// More Example
let p = {job:"Software Engineer"}
let q = p;
q = {job:"Backend Engineer"}
console.log(p, q)


// More Example
let x = {job:"Software Engineer"}
let y = x;
q.job = "Backend Developer"
console.log(x, y)