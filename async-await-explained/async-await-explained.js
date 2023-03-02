// async await explained

 function learnCoding() {
    x
    console.log("I learn Js today !")
    
}

function toDo(){
    const task = "How async await Work !";
    return task
}

const result = toDo()
console.log(result)

async function coding(){
    try{
        await learnCoding();
        await toDo();
    }
    catch(err){
        console.log("Hi Error :", err)
    }

}
coding()