
// localStorage.setItem("name", "Jibon Ahmed")
// const name = localStorage.getItem("name");

const addToLocalStorage = () =>{
    const inputId = document.getElementById("storage-id")
    const id = inputId.value;

    const inputValue = document.getElementById("storage-value")
    const value = inputValue.value;

    // LocalStorage setValue
    if (id && value){
        localStorage.setItem(id, value);
    }

    // Clear input value
    inputId.value = '';
    inputValue.value = '';
}

// Object set from localStorage
const pen = {price:20, color:"red"}
const penObj = JSON.stringify(pen)
localStorage.setItem(pen, penObj)

// Object get from localStorage
const getPen = localStorage.getItem(pen)
console.log(getPen)


// Array set from localStorage
const friends = [12, 34, 20, 40]
const friendsObj = JSON.stringify(friends)
localStorage.setItem('friends', friendsObj)