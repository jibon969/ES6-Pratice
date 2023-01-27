/*
class Parent{
    constructor(){
        this.fatherName = "Sakib";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }
}

const boby = new Child("Alayna")
console.log(boby)

*/

// you can use also function
class Parent{
    constructor(){
        this.fatherName = "Sakib";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name
    }

    getFullName (){
        return this.name + " " + this.fatherName
    }
}

const boby = new Child("Alayna")
console.log(boby)
console.log(boby.getFullName())
