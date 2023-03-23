// scope js
function add (a, b){
    const total = a + b
    console.log("total : ", total)
    if(b > 5){
        const sum =  25 + a + b;
        console.log("sum : ", sum);
        // var current = sum;
    }
    // console.log("current :", current)
    return total;
}

add(5, 7)

// Hoisting js
for (var i=0; i<=5; i++){
    console.log(i)
}
console.log("Outside : ", i)

// More Example
helloWorld()

function helloWorld(){
    console.log("Hello World ! ")
}


/* More example
print10()
var print10 = function(){
    console.log("Inside print 10", 10)
}
*/