// filter 
const products = [
    {name:"Mobile", price:200, brand:"Huawei"},
    {name:"Watch", price:580, brand:"Gt"},
    {name:"Book", price:300, brand:"Python"},
]
const cheap = products.filter(
    product=>product.price <=300
)

console.log(cheap)
