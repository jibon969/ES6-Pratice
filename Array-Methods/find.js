// Find
const products = [
    {name:"Mobile", price:200, brand:"Huawei"},
    {name:"Watch", price:580, brand:"Gt"},
]

const special = products.filter(p=>p.name.includes('W'))
console.log(special)