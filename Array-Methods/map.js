// Array Methods

const products = [
    {name:"Mobile", price:200, brand:"Huawei"},
    {name:"Watch", price:200, brand:"Gt"},
    {name:"Book", price:200, brand:"Python"},
]
const brands = products.map(product=>product.brand)
console.log(brands)