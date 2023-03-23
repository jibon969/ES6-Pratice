const showAlert = () =>{
    alert('Hello i am Alert !')
}


const  askSomething = () =>{
    const decision = confirm("Are you coming ?")
    if (decision===true){
        alert("Dosto 500 taka bkash kor !")
    }
    else{
        console.log('DOM,  Door e giya mor')
    }
}

const getUserInfo = () =>{
    const name = prompt("Tell us your name !");
    console.log(name);
    if(!!name){
        console.log("Welcome here ", name)
    }
} 