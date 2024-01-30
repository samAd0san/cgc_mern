// 1. Print hello world in javascript

console.log('hello world');

// 2. Write a function to add two numbers

function sumOfIntegers(a,b){
    console.log('Sum of Two Integers: ');
    return a+b;
}
console.log(sumOfIntegers(10,20));

// 3. Write a function to swap two numbers: ex: a= 10, b = 20; Output: a=20

function swap(c,d) {
    console.log('Before swap',c,d);
    var temp = c;
    c = d;
    d = temp;
    console.log('After swap',c,d);
}

swap(10,20);

// 4. Print all the digits of a number ex: x = 123 output 1 2 3
var num;
function parse(str){
    num = parseInt(str);
    console.log(num);
}
parse('123')
console.log(typeof(num));