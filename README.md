# BudgetApp


# ES-6 destructuring

const person={
 
    name:"Amit",
    age:21,
    location:{
        city:"Delhi",
        temp:35
    }
}

const {name="ASDF",age}=person;
console.log(`${name} is ${age}`);

default name to object elemnts can also be given

const address=['Model Town','Delhi',110009];
const[city, state, pincode]=address;

console.log(`Amit lives in ${city} that is in ${state} and has pincode of ${pincode}`);# BudgetApp
