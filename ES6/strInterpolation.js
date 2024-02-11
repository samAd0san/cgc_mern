// String Interpolation - embedding variables/expressions inside a string
// We use `` quotes to implement string interpolation

// var name = function() {
//     let name = 'Sam';
//     return name;
// }

let name = 'Sam'
var age = 20;

// To ease this method we use string interpolation
// var op = name + " is working for " + dept +
//     "and his " +
//     "salary is " + salary;

console.log(`My name is ${name} and i am ${age} years old `);