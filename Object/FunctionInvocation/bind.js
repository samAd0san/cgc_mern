/* The bind method in JavaScript is used to create a new function with a specified context 
(this value) and, optionally, initial arguments. It allows you to fix the context of a function, 
ensuring that it always executes with the same context, regardless of how it's called. */

const person1 = {
    name: 'Alice',
    age: 32,

    greet: function(greetme) {
        console.log(`${greetme} I am ${this.name} and I am ${this.age} years old.`);
    }
}

const person2 = {
    name: 'Imposter',
    age: 'xyz',
}

// Now once the value is assigned it is fixed it even thought this same function is reassigned
// then it'll give an exception
const callBind = person1.greet.bind(person1, 'helo');

callBind();
// Not possible to reassign the same function using 'bind'
// callBind = person1.greet.bind(person2, 'hehe!');
// callBind();

// We can create a variable and assign a different property but we can not modify the existing
// variable as it is done above
const callImposter = person1.greet.bind(person2, 'hehe!');
callImposter();


/* NOTE - callBlind is a variable that holds a reference to a function. It's not the function 
itself, but rather a variable that points to the function created by the bind method. When you 
call callBlind(), you're actually invoking the function that callBlind references. So, 
callBlind acts as a function in this context. */