const person = {
    firstName: 'helal',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    getBill: function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}


const highPerson = {
    firstName: 'rahim',
    lastName: 'uddin',
    salary: 30000,
}

const heroPerson = {
    firstName: 'hero',
    lastName: 'alam',
    salary: 30000,
}

//person.getBill();
// const result = person.getBill.bind(heroPerson);
// result(2000);
// result(5000);
// console.log(heroPerson.salary);
// const result2 = person.getBill.bind(highPerson);
// result2(3000);
// console.log(highPerson.salary);

// person.getBill.call(highPerson, 1000,200,100);
// console.log(highPerson.salary);

person.getBill.apply(highPerson, [2000,100,50]);
console.log(highPerson.salary);

