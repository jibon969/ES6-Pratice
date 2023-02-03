
function doSomeThing(name){
    return name
}

const result = doSomeThing("Jibon");
console.log(result)

// run just one time
setTimeout(()=>{
    console.log("See you later !")
}, 10000)


// repeat 1000 later 
setInterval(()=>{
    console.log("Do it")
}, 1000)