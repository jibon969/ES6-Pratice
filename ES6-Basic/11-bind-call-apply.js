
// object-method-property

const normalPerson = {
    firstName :"Jibon",
    lastName : "Ahmed",
    salary: 5000,
    getFullName: function(){
        const name = this.firstName + " " + this.lastName
        return name
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}


const heroPerson = {
    firstName:"Jibon",
    lastName:"Ahmed",
    salary:5000
}

// Bind ~~~~~~~~~~~~
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson)
// heroBillCharge(600)
// console.log(heroPerson.salary)



// Call ~~~~~~~~~~
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10)
// console.log(heroPerson.salary)


// apply ~~~~~~~~~~
normalPerson.chargeBill.apply(heroPerson, [200, 100, 10])
console.log(heroPerson.salary)