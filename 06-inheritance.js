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