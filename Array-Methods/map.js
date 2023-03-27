// Array Methods

const product = [
    {name:"Mobile", price:200, brand:"Huawei"},
    {name:"Watch", price:200, brand:"Gt"},
    {name:"Book", price:200, brand:"Python"},
]
const brands = product.map(product=>product.brand)
console.log(brands)