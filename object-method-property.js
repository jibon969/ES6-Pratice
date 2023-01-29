
// object-method-property

const normalPerson = {
    firstName :"Jibon",
    lastName : "Ahmed",
    salary: 50000,
    getFullName: function(){
        const name = this.firstName + " " + this.lastName
        return name
    },
    chargeSalary: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

console.log(normalPerson.getFullName())

normalPerson.chargeSalary(10000)
console.log(normalPerson.salary)