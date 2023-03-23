// Destructure object, array, complex object

const person = {name:"Jibon", age:20, gfName:"Atiya"}
console.log(person)

const gfName = person.gfName
console.log(gfName)

// Access property
const {name, age} = person
console.log(name, age)


// Learn Destructure Documentation
const friends = ["Shampa", "Payel", "Jibon", "Atiya"]
const [chotoFriend, nextFriend, ...restFriend] = friends;
console.log(chotoFriend, nextFriend)
console.log(restFriend)
// Complex Object

const complexObject = {
    name:"Jibon Ahmed",
    info:{
        address:"kolabagan",
        leader:"Tiger"
    }
}

const {leader} = complexObject.info;
console.log(leader)