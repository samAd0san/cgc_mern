// Value Type and Reference Type in js

// 1. Value Type
// In value type both the variables point at different memory location when assigned to the same variable

var x = 10;
var y = x;

++x;

// console.log(x,y);
// console.log(x === y); // It'll show false because both are pointing at the differnt storage

// 2. Reference Type
// In Reference Type the objects point at the same storage on assigning to the same variable

var m1 = {
    width: 5,
    height: 10,
    color: 'Black'
};

// Giving the refernece of object m1 to object m2
var m2 = m1;

m2.color = 'white'
// console.log(m1.color);

// while both the object point at the same memory location changing any one of the object value
// will reflect to the other object which is pointing the same memory location

var m1 = { width: 5 };
var m2 = { width: 5 };
var m3 = m1;

console.log(m1 === m2); // now since both the object may contain the same value but since 
// they are explictily initialized they point at differnt memory it'll give 'false'

var x = 10;
var y = 10;

console.log(x === y); // true, Since the value is same it'll give true in value type