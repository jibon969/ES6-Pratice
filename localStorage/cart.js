

const getInputValueById = (id) =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueById("product-name-field");
    const quantity = getInputValueById("product-quantity-field");
    localStorage.setItem(product, quantity)
    // console.log(product, quantity)

    // Display data show UI
    displayProducts(product, quantity)
}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li)

}
