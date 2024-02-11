/* Arrow function - It is an anonymous function which does not have its own name rather
it is assigned to a name , It is a concise and syntactically compact way of writing a function
, utilizing the '=>'symbol */

// Normal way 

function sum(a,b) {
    return a + b;
}

// 1st way
const add = (a,b) => a + b;
console.log(add(10,20));

// 2nd way 
const f1 = a => a + 1;
console.log(f1(1));

// 3rd way
const f2 = () => console.log('arrow fun');
f2();

// 4th way 
const f3 = (a,b) => {
    console.log(`Sum of ${a} and ${b}`);
    return a + b;
}
console.log(f3(10,20));

// example
const f4 = (a,b) => console.log(`Sum of ${a} and ${b}:`,a+b);
f4(2,3);