
// localStorage.setItem("name", "Jibon Ahmed")
// const name = localStorage.getItem("name");

const addToLocalStorage = () =>{
    const inputId = document.getElementById("storage-id")
    const id = inputId.value;

    const inputValue = document.getElementById("storage-value")
    const value = inputValue.value;

    // LocalStorage setValue
    localStorage.setItem(id, value);

    // Clear input value
    inputId.value = '';
    inputValue.value = '';
}