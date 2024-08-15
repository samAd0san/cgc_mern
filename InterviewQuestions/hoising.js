// var vs let vs const
// 1. Scope - It is a certain region in the program where the defined variable exists

/**
 * var - global scope - can be accessed anywhere
 * var - blocked scope - can be accessed withing the block only 
 * const - blocked scope - can be accessed withing the block only and also cannot be reassigned
 */

{
    var Var = 1;
    let Let = 2;
    const Const = 3;
}

// console.log(Var); // 1
// console.log(Let);
// console.log(Const);

/* 2. Shadowing - Shadowing occurs when a variable declared in a local scope hides or overshadows a variable 
with the same name in an outer scope. */
function test() {
    var a = 10
    let b = 10
    const c = 10

    if (true) {
        var a = 20
        let b = 20
        const c = 20

        /* Illegal Shadowing */
        // let a = 20 // allowed
        // var b = 20 // Cannot redeclare block-scoped variable 'b'
        // var c = 20 // Cannot redeclare block-scoped variable 'c'.

        console.log("a,b,c: ",a,b,c);
    }
    console.log("a,b,c: ",a,b,c);
}

test();

// 3. Re-Declaration is not allowed in let and const

// var a;
// var a; // allowed

// let a;

let b; 
// var b; this also not allowed
// let b; // re declaration not allowed

// const c; // also initializing the variable is compulasary
// const c; // re declaration not allowed


// 4. Hoisting - variable and function declarations are moved to the top of their scope before code execution.
console.log(h1) // undefined
var h1 = 1

// console.log(h2) // Cannot access 'h2' before initialization
let h2 = 1

// console.log(h3) // Cannot access 'h3' before initialization
const h3 = 1

// For funciton
greet(); // Hello
function greet() {
    console.log("Hello");
}

// farewell() // undefined (hoisting)
const farewell = function() {
    console.log("Goodbye!")
}

farewell() // Goodbye!