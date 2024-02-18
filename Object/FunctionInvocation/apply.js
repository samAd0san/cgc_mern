/* apply - is a method in JavaScript that invokes a function with a specified context 
(this value) and arguments provided as an array. */

const person = {
    name: 'Alice',
    age: 20,

    greet: function(greeting) {
        console.log(`${greeting}! ${this.name}.`);
    }
}

const persone = {
    name: 'Border',
    age: 34,
}

person.greet.apply(persone, ['hello','hi,hey']);
person.greet.apply(persone, ['hey']);