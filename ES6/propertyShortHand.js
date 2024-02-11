/* Property Shorthand - When creating a new object it assign variable as the properties of 
the new object (which is being created) */

const name = 'sam';
const age = 20;

// const person = {name,age};

const person = {
    name,
    age,
    color: 'Yello',
}

console.log(person);