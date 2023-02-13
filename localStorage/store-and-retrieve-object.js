
const getInputValueById = (id) =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueById("product-name-field");
    const quantity = getInputValueById("product-quantity-field");
    // Display data show UI
    addProductToDisplay(product, quantity)

    // set to local storage
    // simple way
    localStorage.setItem(product, quantity)
}

const getShoppingCartFromLocalStorage = () =>{
    let savedCart = localStorage.getItem("cart");
    let cart = {}
    if (savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCartFromLocalStorage();
    
    // add product to the object as property
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);

    // save to local storage
    localStorage.setItem('cart', cartStringify)
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
}


const displayStoredProduct = () =>{
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart){
        const quantity = cart[product]
        addProductToDisplay(product, quantity)
    }
}

displayStoredProduct()