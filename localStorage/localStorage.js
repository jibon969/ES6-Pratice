document.getElementById("btn-add-name").addEventListener('click', function(){
    const nameField = document.getElementById("name-field")
    const nameValue = nameField.value;
    console.log(nameValue);
    localStorage.setItem("name", nameValue);
})

document.getElementById("btn-remove-name").addEventListener("click", function(){
    // Remove localStorage
    localStorage.removeItem("name");
})

document.getElementById("btn-clear-ls").addEventListener("click", function(){
    // Clear localStorage
    localStorage.clear()
})

